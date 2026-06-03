'use client'

import { useState } from 'react'
import Link from 'next/link'
import styles from './SysNavbar.module.css'

const NAV_ITEMS = [
  { key: 'home', label: '首页', href: '/dashboard', active: true },
  { key: 'train', label: '培养', href: '/dashboard', active: false },
  { key: 'run', label: '运行', href: '/dashboard', active: false },
  { key: 'status', label: '学籍', href: '/dashboard', active: false },
  { key: 'practice', label: '实践', href: '/dashboard', active: false },
  { key: 'extend', label: '拓展', href: '/dashboard', active: false },
]

export default function SysNavbar() {
  const [activeNav, setActiveNav] = useState('home')
  const [showUserMenu, setShowUserMenu] = useState(false)

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        {/* Left: Logo + Nav items */}
        <div className={styles.left}>
          <Link href="/" className={styles.brand}>
            <img src="/images/tjut-logo.png" alt="天津理工大学" className={styles.logoImg} />
          </Link>
          <div className={styles.navLinks}>
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={`${styles.navItem} ${activeNav === item.key ? styles.navItemActive : ''}`}
                onClick={() => setActiveNav(item.key)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Right: Search + Theme + Group + User */}
        <div className={styles.right}>
          <div className={styles.searchBox}>
            <svg className={styles.searchIcon} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input type="text" className={styles.searchInput} placeholder="" />
          </div>

          <button className={styles.themeBtn} title="切换主题">
            <svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
            </svg>
          </button>

          <div className={styles.groupSelector}>
            <span>学生组</span>
            <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          <div className={styles.userPanel} onClick={() => setShowUserMenu(!showUserMenu)}>
            <div className={styles.avatar}>李</div>
            <div className={styles.userInfo}>
              <span className={styles.userName}>李同学</span>
              <span className={styles.userId}>2024000002</span>
            </div>
            <svg className={styles.chevron} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
    </nav>
  )
}
