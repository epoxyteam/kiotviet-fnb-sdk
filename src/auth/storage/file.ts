import fs from 'fs/promises';
import path from 'path';
import os from 'os';
import { TokenStorage, StoredToken } from '../types';

export class FileTokenStorage implements TokenStorage {
  private filePath: string;

  constructor(filename = '.kiotviet-token.json') {
    // Store in user's home directory
    this.filePath = path.join(os.homedir(), filename);
  }

  async saveToken(token: StoredToken): Promise<void> {
    try {
      await fs.writeFile(
        this.filePath,
        JSON.stringify(token, null, 2),
        { encoding: 'utf-8', mode: 0o600 } // Read/write for owner only
      );
    } catch (error) {
      throw new Error('Failed to save token to file system');
    }
  }

  async getToken(): Promise<StoredToken | null> {
    try {
      const data = await fs.readFile(this.filePath, { encoding: 'utf-8' });
      return JSON.parse(data) as StoredToken;
    } catch (error) {
      if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
        return null; // File doesn't exist yet
      }
      throw new Error('Failed to read token from file system');
    }
  }

  async removeToken(): Promise<void> {
    try {
      await fs.unlink(this.filePath);
    } catch (error) {
      if ((error as NodeJS.ErrnoException).code !== 'ENOENT') {
        throw new Error('Failed to remove token file');
      }
    }
  }
}