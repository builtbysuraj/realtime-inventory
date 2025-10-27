import { InventoryItem } from '../models/inventory-item.model'
import { brandRegistry } from './brand-registry.service'

type CacheEntry = {
  items: InventoryItem[]
  lastFetchedAt: number
}

// In-memory cache for simplicity
const cache = new Map<string, CacheEntry>()

// Utility to create a cache key
function cacheKey(brand: string, storeId: string) {
  return `${brand}:${storeId}`
}

// Fetch from adapter and store in cache
export async function fetchAndStore(brand: string, storeId: string) {
  const adapter = brandRegistry[brand.toLowerCase()]
  if (!adapter) throw new Error(`Unknown brand: ${brand}`)

  const items = await adapter.fetchInventory(storeId)
  const entry: CacheEntry = { items, lastFetchedAt: Date.now() }
  cache.set(cacheKey(brand, storeId), entry)

  return entry
}

// Get the latest snapshot from cache
export function getSnapshot(brand: string, storeId: string) {
  const entry = cache.get(cacheKey(brand, storeId))
  return entry ?? null
}
