'use client'

import { useState, useCallback } from 'react'
import styles from './Toast.module.css'

let showToastFn: ((msg: string) => void) | null = null

export function showToast(msg: string) {
  showToastFn?.(msg)
}

export default function Toast() {
  const [visible, setVisible] = useState(false)
  const [message, setMessage] = useState('')

  showToastFn = useCallback((msg: string) => {
    setMessage(msg)
    setVisible(true)
    setTimeout(() => setVisible(false), 2000)
  }, [])

  return (
    <div
      className={`${styles.toast} ${visible ? styles.visible : ''}`}
      aria-live="polite"
    >
      {message}
    </div>
  )
}
