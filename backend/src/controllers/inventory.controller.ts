import { Request, Response } from 'express'
import { fetchAndStore, getSnapshot } from '../services/inventory.service'

// POST /inventory/fetch
export async function fetchInventoryController(req: Request, res: Response) {
  const { brand, storeId } = req.body || {}
  if (!brand || !storeId) {
    return res
      .status(400)
      .json({ error: 'Missing required fields: brand, storeId' })
  }

  try {
    const snapshot = await fetchAndStore(brand, storeId)
    return res.json({
      success: true,
      lastFetchedAt: snapshot.lastFetchedAt,
      items: snapshot.items,
    })
  } catch (err: any) {
    return res
      .status(400)
      .json({ error: err.message || 'Failed to fetch inventory' })
  }
}

// GET /inventory?brand=&storeId=
export function getInventoryController(req: Request, res: Response) {
  const brand = String(req.query.brand || '')
  const storeId = String(req.query.storeId || '')

  if (!brand || !storeId) {
    return res
      .status(400)
      .json({ error: 'Query params required: brand, storeId' })
  }

  const snapshot = getSnapshot(brand, storeId)

  if (!snapshot) {
    return res.status(404).json({
      error: 'No data found. Call POST /inventory/fetch first.',
    })
  }

  return res.json({
    brand,
    storeId,
    lastFetchedAt: snapshot.lastFetchedAt,
    items: snapshot.items,
  })
}
