import { Store } from '../models/store.model'

export const brandStores: Record<string, Store[]> = {
  hnm: [
    { id: 'hnm-ny', name: 'H&M New York', location: 'New York, NY' },
    { id: 'hnm-la', name: 'H&M Los Angeles', location: 'Los Angeles, CA' },
  ],
  uniqlo: [
    { id: 'uniqlo-tokyo', name: 'Uniqlo Tokyo', location: 'Tokyo, Japan' },
    {
      id: 'uniqlo-sf',
      name: 'Uniqlo San Francisco',
      location: 'San Francisco, CA',
    },
  ],
}
