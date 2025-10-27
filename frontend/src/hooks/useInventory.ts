import { useEffect, useState } from 'react'
import { API_BASE_URL } from '../config'
import type { InventoryItem, Store } from '../types'

export function useInventory() {
  const [brands, setBrands] = useState<string[]>([])
  const [stores, setStores] = useState<Store[]>([])
  const [items, setItems] = useState<InventoryItem[]>([])
  const [loading, setLoading] = useState(false)

  const [selectedBrand, setSelectedBrand] = useState('')
  const [selectedStore, setSelectedStore] = useState('')

  useEffect(() => {
    fetch(`${API_BASE_URL}/meta/brands`)
      .then((res) => res.json())
      .then((data) => setBrands(data.brands || []))
  }, [])

  useEffect(() => {
    if (!selectedBrand) {
      setStores([])
      setSelectedStore('') // reset when brand is cleared
      return
    }

    setSelectedStore('') // reset store selection when brand changes
    fetch(`${API_BASE_URL}/meta/stores?brand=${selectedBrand}`)
      .then((res) => res.json())
      .then((data) => setStores(data.stores || []))
  }, [selectedBrand])

  async function fetchInventory() {
    if (!selectedBrand || !selectedStore) return
    setLoading(true)
    await fetch(`${API_BASE_URL}/inventory/fetch`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ brand: selectedBrand, storeId: selectedStore }),
    })
    const res = await fetch(
      `${API_BASE_URL}/inventory?brand=${selectedBrand}&storeId=${selectedStore}`
    )
    const data = await res.json()
    setItems(data.items || [])
    setLoading(false)
  }

  return {
    brands,
    stores,
    items,
    loading,
    selectedBrand,
    selectedStore,
    setSelectedBrand,
    setSelectedStore,
    fetchInventory,
  }
}
