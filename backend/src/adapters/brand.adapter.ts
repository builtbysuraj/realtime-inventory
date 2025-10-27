import { InventoryItem } from '../models/inventory-item.model'

export type BrandAdapter = {
  fetchInventory(storeId: string): Promise<InventoryItem[]>
}
