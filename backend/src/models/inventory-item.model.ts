// Canonical schema for a store item snapshot
export type InventoryItem = {
  sku: string
  name: string
  size: string
  qty: number
  lastRefreshedAt: string // ISO timestamp
}
