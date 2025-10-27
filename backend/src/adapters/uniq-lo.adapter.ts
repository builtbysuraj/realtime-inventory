import { InventoryItem } from '../models/inventory-item.model'
import { BrandAdapter } from './brand.adapter'

export const uniqloAdapter: BrandAdapter = {
  async fetchInventory(storeId: string): Promise<InventoryItem[]> {
    const now = new Date().toISOString()
    return [
      {
        sku: 'UQ-SW-100',
        name: 'Uniqlo Sweater',
        size: 'S',
        qty: 8,
        lastRefreshedAt: now,
      },
      {
        sku: 'UQ-PN-101',
        name: 'Uniqlo Pants',
        size: 'M',
        qty: 3,
        lastRefreshedAt: now,
      },
    ]
  },
}
