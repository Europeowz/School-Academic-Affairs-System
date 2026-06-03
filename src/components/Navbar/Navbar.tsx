'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'

const NAV_LINKS = [
  { href: '#quick-access', label: '快捷服务' },
  { href: '#announcements', label: '通知公告' },
  { href: '#features', label: '系统功能' },
  { href: '#help', label: '帮助中心' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('quick-access')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.pageYOffset > 100)

      const sections = document.querySelectorAll('section[id]')
      const scrollY = window.pageYOffset + 100
      sections.forEach((section) => {
        const el = section as HTMLElement
        const top = el.offsetTop
        const height = el.offsetHeight
        const id = el.id
        if (scrollY >= top && scrollY < top + height) {
          setActiveSection(id)
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav className={styles.nav} style={{ background: scrolled ? 'rgba(15, 23, 42, 0.95)' : undefined }}>
        <div className={styles.inner}>
          <Link href="/" className={styles.brand}>
            <img
              src="/images/tjut-logo.png"
              alt="天津理工大学"
              className={styles.logoImg}
            />
            <span className={styles.divider}></span>
            <div className={styles.title}>
              教务管理系统
            </div>
          </Link>

          <div className={styles.links}>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={activeSection === link.href.slice(1) ? styles.active : ''}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className={styles.actions}>
            <Link href="/dashboard" className={styles.btnLogin}>登录</Link>
            <Link href="/dashboard" className={styles.btnPrimary}>进入系统</Link>
            <button
              className={styles.mobileMenuBtn}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="菜单"
            >
              <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <div className={`${styles.mobileNav} ${mobileOpen ? styles.mobileNavOpen : ''}`}>
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)}>
            {link.label}
          </a>
        ))}
      </div>
    </>
  )
}
