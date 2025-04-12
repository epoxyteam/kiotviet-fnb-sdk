import { AuthConfig, TokenManager, TokenStorage } from './types';
import { KiotVietTokenManager } from './token-manager';
import { FileTokenStorage } from './storage/file';
import { MemoryTokenStorage } from './storage/memory';

export type StorageType = 'file' | 'memory';

export function createTokenStorage(type: StorageType): TokenStorage {
  switch (type) {
    case 'file':
      return new FileTokenStorage();
    case 'memory':
      return new MemoryTokenStorage();
    default:
      throw new Error(`Unsupported storage type: ${type}`);
  }
}

export function createTokenManager(config: AuthConfig, storageType: StorageType): TokenManager {
  const storage = createTokenStorage(storageType);
  return new KiotVietTokenManager(config, storage);
}

export * from './types';
export { KiotVietTokenManager } from './token-manager';
export { FileTokenStorage } from './storage/file';
export { MemoryTokenStorage } from './storage/memory';