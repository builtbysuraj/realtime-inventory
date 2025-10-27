type Props = {
  brands: string[]
  selected: string
  onSelect: (b: string) => void
}

export function BrandSelector({ brands, selected, onSelect }: Props) {
  return (
    <div style={{ marginBottom: 10 }}>
      <label>Brand: </label>
      <select value={selected} onChange={(e) => onSelect(e.target.value)}>
        <option value=''>Select brand</option>
        {brands.map((b) => (
          <option key={b} value={b}>
            {b}
          </option>
        ))}
      </select>
    </div>
  )
}
