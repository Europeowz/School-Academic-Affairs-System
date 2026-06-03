'use client'

import { useState } from 'react'
import styles from './Calendar.module.css'

const WEEKDAYS = ['日', '一', '二', '三', '四', '五', '六']
const EVENT_DAYS = [7, 14, 21, 28]

interface DayInfo {
  day: number
  otherMonth: boolean
  today: boolean
  hasEvent: boolean
}

function generateCalendarDays(year: number, month: number): DayInfo[] {
  const firstDay = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const daysInPrevMonth = new Date(year, month, 0).getDate()
  const today = new Date()
  const isCurrentMonth = today.getFullYear() === year && today.getMonth() === month

  const days: DayInfo[] = []

  // Previous month days
  for (let i = firstDay - 1; i >= 0; i--) {
    days.push({ day: daysInPrevMonth - i, otherMonth: true, today: false, hasEvent: false })
  }

  // Current month days
  for (let d = 1; d <= daysInMonth; d++) {
    days.push({
      day: d,
      otherMonth: false,
      today: isCurrentMonth && d === today.getDate(),
      hasEvent: EVENT_DAYS.includes(d),
    })
  }

  // Next month days
  const remaining = 42 - days.length
  for (let d = 1; d <= remaining; d++) {
    days.push({ day: d, otherMonth: true, today: false, hasEvent: false })
  }

  return days
}

export default function Calendar() {
  const [date, setDate] = useState({ year: 2026, month: 3 }) // April = month 3 (0-indexed)
  const days = generateCalendarDays(date.year, date.month)
  const monthName = `${date.year} 年 ${date.month + 1} 月`

  const handlePrev = () => {
    setDate((prev) => {
      const m = prev.month - 1
      if (m < 0) return { year: prev.year - 1, month: 11 }
      return { ...prev, month: m }
    })
  }

  const handleNext = () => {
    setDate((prev) => {
      const m = prev.month + 1
      if (m > 11) return { year: prev.year + 1, month: 0 }
      return { ...prev, month: m }
    })
  }

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.title}>{monthName}</div>
        <div className={styles.nav}>
          <button onClick={handlePrev} aria-label="上月">
            <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button onClick={handleNext} aria-label="下月">
            <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <div className={styles.grid}>
        {WEEKDAYS.map((d) => (
          <div key={d} className={styles.dayHeader}>{d}</div>
        ))}
        {days.map((info, i) => (
          <div
            key={i}
            className={[
              styles.day,
              info.otherMonth ? styles.otherMonth : '',
              info.today ? styles.today : '',
              info.hasEvent ? styles.hasEvent : '',
            ].join(' ')}
          >
            {info.day}
          </div>
        ))}
      </div>
    </div>
  )
}
