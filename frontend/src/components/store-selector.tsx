import type { Store } from '../types'

type Props = {
  stores: Store[]
  selected: string
  disabled?: boolean
  onSelect: (id: string) => void
}

export function StoreSelector({ stores, selected, onSelect, disabled }: Props) {
  return (
    <div style={{ marginBottom: 10 }}>
      <label>Store: </label>
      <select
        value={selected}
        onChange={(e) => onSelect(e.target.value)}
        disabled={disabled}
      >
        <option value=''>Select store</option>
        {stores.map((s) => (
          <option key={s.id} value={s.id}>
            {s.name}
          </option>
        ))}
      </select>
    </div>
  )
}
