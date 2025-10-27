export type Store = {
  id: string
  name: string
  location: string
}

export type InventoryItem = {
  sku: string
  name: string
  size: string
  qty: number
  lastRefreshedAt: string
}
