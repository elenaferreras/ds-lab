import { Avatar } from '../../components/ui/avatar'
import { Badge } from '../../components/ui/badge'
import { Button } from '../../components/ui/button'
import { Card } from '../../components/ui/card'
import { Input } from '../../components/ui/input'
import { Modal } from '../../components/ui/modal'
import { ToastProvider } from '../../components/ui/toast'

/** @type {Record<string, React.ComponentType<any>>} */
export const COMPONENT_REGISTRY = {
  Avatar,
  Badge,
  Button,
  Card,
  Input,
  Modal,
  Toast: ToastProvider,
}

/**
 * @param {string} key
 */
export function resolveDemoComponent(key) {
  const Comp = COMPONENT_REGISTRY[key]
  if (!Comp) {
    console.warn(`[documentation] Unknown demoComponent: ${key}`)
    return Button
  }
  return Comp
}
