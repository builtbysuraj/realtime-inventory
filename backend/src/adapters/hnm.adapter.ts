import { InventoryItem } from '../models/inventory-item.model'
import { BrandAdapter } from './brand.adapter'

export const hnmAdapter: BrandAdapter = {
  async fetchInventory(storeId: string): Promise<InventoryItem[]> {
    const now = new Date().toISOString()
    return [
      {
        sku: 'HM-TS-001',
        name: 'H&M Tee',
        size: 'M',
        qty: 12,
        lastRefreshedAt: now,
      },
      {
        sku: 'HM-JN-002',
        name: 'H&M Jeans',
        size: 'L',
        qty: 5,
        lastRefreshedAt: now,
      },
    ]
  },
}
