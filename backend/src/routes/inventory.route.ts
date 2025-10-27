import { Router } from 'express'
import {
  fetchInventoryController,
  getInventoryController,
} from '../controllers/inventory.controller'

const router = Router()

// POST /inventory/fetch -> trigger fresh fetch for a store
router.post('/fetch', fetchInventoryController)

// GET /inventory?brand=&storeId= -> return latest snapshot
router.get('/', getInventoryController)

export default router
