import {
  CopyIcon,
  PencilSimpleIcon,
  PlusIcon,
  TrashIcon,
} from '@phosphor-icons/react'

/** @type {Record<string, React.ComponentType<{ size?: number }>>} */
export const ICON_REGISTRY = {
  copy: CopyIcon,
  'pencil-simple': PencilSimpleIcon,
  plus: PlusIcon,
  trash: TrashIcon,
}

/**
 * @param {string} [key]
 */
export function resolveIcon(key) {
  if (!key) return null
  return ICON_REGISTRY[key] ?? null
}
