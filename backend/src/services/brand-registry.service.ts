// src/services/brandRegistry.ts
import { BrandAdapter } from '../adapters/brand.adapter'
import { hnmAdapter } from '../adapters/hnm.adapter'
import { uniqloAdapter } from '../adapters/uniq-lo.adapter'

export const brandRegistry: Record<string, BrandAdapter> = {
  hnm: hnmAdapter,
  uniqlo: uniqloAdapter,
}
