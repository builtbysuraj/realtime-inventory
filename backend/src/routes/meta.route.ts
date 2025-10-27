import { Router } from 'express'
import { brandStores } from '../data/store'

const router = Router()

// GET /meta/brands → list of all brands
router.get('/brands', (_req, res) => {
  res.json({ brands: Object.keys(brandStores) })
})

// GET /meta/stores?brand=hnm → list of stores for that brand
router.get('/stores', (req, res) => {
  const brand = String(req.query.brand || '').toLowerCase()
  const stores = brandStores[brand]
  if (!stores) return res.status(404).json({ error: 'Unknown brand' })
  res.json({ brand, stores })
})

export default router
