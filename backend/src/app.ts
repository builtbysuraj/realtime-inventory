import cors from 'cors'
import express from 'express'
import inventoryRoutes from './routes/inventory.route'
import metaRoutes from './routes/meta.route'

export const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (_, res) =>
  res.json({ ok: true, message: 'Inventory backend running' })
)

app.use('/inventory', inventoryRoutes)
app.use('/meta', metaRoutes)
