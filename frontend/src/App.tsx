import { BrandSelector } from './components/brand-selector'
import { InventoryTable } from './components/inventory-table'
import { StoreSelector } from './components/store-selector'
import { useInventory } from './hooks/useInventory'

export default function App() {
  const inv = useInventory()

  return (
    <div style={{ padding: 20, fontFamily: 'sans-serif' }}>
      <h2>Real-Time Store Inventory</h2>

      <BrandSelector
        brands={inv.brands}
        selected={inv.selectedBrand}
        onSelect={inv.setSelectedBrand}
      />

      <StoreSelector
        stores={inv.stores}
        selected={inv.selectedStore}
        disabled={!inv.selectedBrand}
        onSelect={inv.setSelectedStore}
      />

      <button
        onClick={inv.fetchInventory}
        disabled={inv.loading || !inv.selectedStore}
      >
        {inv.loading ? 'Fetching...' : 'Fetch Now'}
      </button>

      <hr />
      <InventoryTable items={inv.items} />
    </div>
  )
}
