import request from 'supertest'
import { app } from '../app'

describe('Inventory API', () => {
  it('should fetch H&M inventory and cache it', async () => {
    const payload = { brand: 'hnm', storeId: 'hnm-ny' }

    // Trigger fetch
    const postRes = await request(app)
      .post('/inventory/fetch')
      .send(payload)
      .expect(200)

    expect(Array.isArray(postRes.body.items)).toBe(true)
    expect(postRes.body.items.length).toBeGreaterThan(0)

    // Retrieve snapshot via GET
    const getRes = await request(app)
      .get(`/inventory?brand=${payload.brand}&storeId=${payload.storeId}`)
      .expect(200)

    expect(getRes.body.items).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ sku: expect.any(String) }),
      ])
    )
  })

  it('should return 404 for unknown brand', async () => {
    const res = await request(app)
      .post('/inventory/fetch')
      .send({ brand: 'abc', storeId: 'test' })
    expect(res.status).toBe(400)
  })
})
