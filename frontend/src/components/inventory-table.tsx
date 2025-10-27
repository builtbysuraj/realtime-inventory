import type { InventoryItem } from '../types'

type Props = {
  items: InventoryItem[]
}

export function InventoryTable({ items }: Props) {
  if (items.length === 0) return null

  return (
    <table border={1} cellPadding={6}>
      <thead>
        <tr>
          <th>SKU</th>
          <th>Name</th>
          <th>Size</th>
          <th>Qty</th>
          <th>Last Refreshed</th>
        </tr>
      </thead>
      <tbody>
        {items.map((i) => (
          <tr key={i.sku}>
            <td>{i.sku}</td>
            <td>{i.name}</td>
            <td>{i.size}</td>
            <td>{i.qty}</td>
            <td>{new Date(i.lastRefreshedAt).toLocaleTimeString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
