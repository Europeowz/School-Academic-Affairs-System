'use client'

import { useState } from 'react'
import Link from 'next/link'
import SysNavbar from '@/components/SysNavbar/SysNavbar'
import styles from './dashboard.module.css'

/* ====== Data ====== */

const GRADES = [
  { name: '大学英语IV', code: '6090049', credits: 2, hours: 32, score: 86, category: '-', teacher: '张明华' },
  { name: '数据结构与算法', code: '6090102', credits: 4, hours: 64, score: 92, category: '专业核心', teacher: '李建国' },
  { name: '计算机网络', code: '6090156', credits: 3, hours: 48, score: 78, category: '专业核心', teacher: '王丽娟' },
  { name: '数据库原理', code: '6090088', credits: 3, hours: 48, score: 85, category: '专业核心', teacher: '赵志强' },
  { name: '马克思主义基本原理', code: '2010012', credits: 3, hours: 48, score: 81, category: '通识必修', teacher: '陈思远' },
  { name: '体育IV', code: '3010008', credits: 1, hours: 32, score: 90, category: '通识必修', teacher: '刘海涛' },
]

const APP_ITEMS = [
  { name: '我的课表', href: '/courses', icon: 'schedule' },
  { name: '自修免修办理', href: '/dashboard', icon: 'skip' },
  { name: '学生社会考试', href: '/dashboard', icon: 'exam' },
  { name: '学生方案查询', href: '/dashboard', icon: 'plan' },
  { name: '学业预警', href: '/dashboard', icon: 'warning' },
  { name: '全校课表查询', href: '/courses', icon: 'search' },
]

const ANNOUNCEMENTS = [
  { title: '大创项目-大学生创新创业训练计划项目报销须知及材料提交说明', pinned: true, time: '2025-07-09 15:03:15' },
  { title: '关于2025-2026学年第二学期补考安排的通知', pinned: false, time: '2025-07-05 09:30:22' },
  { title: '关于2025-2026学年第二学期期末考试安排的通知', pinned: false, time: '2025-06-28 14:15:00' },
]

const SCHEDULES = [
  { time: '08:00', desc: '数据结构与算法', tag: '主楼A区302', tagType: 'blue' },
  { time: '10:10', desc: '计算机网络', tag: '实验楼B区205', tagType: 'green' },
  { time: '14:00', desc: '数据库原理实验', tag: '实验楼A区108', tagType: 'yellow' },
  { time: '16:00', desc: '大学英语IV', tag: '外语楼C区401', tagType: 'blue' },
]

function getLevel(score: number) {
  if (score >= 90) return { text: '优秀', cls: styles.levelA }
  if (score >= 80) return { text: '良好', cls: styles.levelB }
  if (score >= 60) return { text: '及格', cls: styles.levelC }
  return { text: '不及格', cls: styles.levelC }
}

function AppIcon({ type }: { type: string }) {
  const iconMap: Record<string, string> = {
    schedule: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
    skip: 'M13 10V3L4 14h7v7l9-11h-7z',
    exam: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
    plan: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2',
    warning: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z',
    search: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
  }
  return (
    <svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d={iconMap[type] || iconMap.schedule} />
    </svg>
  )
}

export default function DashboardPage() {
  const [academicTab, setAcademicTab] = useState('grades')
  const [annTab, setAnnTab] = useState('announcement')
  const [showVersion, setShowVersion] = useState(true)

  return (
    <div className={styles.dashboard}>
      <SysNavbar />

      {/* Breadcrumb */}
      <div className={styles.breadcrumb}>
        <div className={styles.breadcrumbInner}>
          <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          <span className={styles.breadcrumbItem}>首页</span>
        </div>
      </div>

      {/* Main Content */}
      <div className={styles.mainContent}>
        {/* ====== 我的申请 ====== */}
        <div className={`${styles.card} ${styles.applicationCard}`}>
          <div className={styles.appSidebar}>
            <div className={styles.appSidebarTitle}>我的申请</div>
            <div className={styles.appFilterList}>
              <span className={styles.appFilterActive}>全部</span>
            </div>
            <div className={styles.appCountWrap}>
              <div className={styles.appCount}>0</div>
              <div className={styles.appCountLabel}>条申请</div>
            </div>
          </div>
          <div className={styles.appContent}>
            <div className={styles.appEmptyIllustration}>
              <svg viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Document shape */}
                <rect x="30" y="8" width="60" height="80" rx="6" fill="#e5e7eb" />
                <rect x="35" y="8" width="55" height="75" rx="4" fill="#f3f4f6" />
                {/* Document fold corner */}
                <path d="M78 8 L90 20 L78 20 Z" fill="#d1d5db" />
                {/* Lines on document */}
                <rect x="45" y="32" width="35" height="3" rx="1.5" fill="#d1d5db" />
                <rect x="45" y="40" width="28" height="3" rx="1.5" fill="#d1d5db" />
                <rect x="45" y="48" width="32" height="3" rx="1.5" fill="#d1d5db" />
                <rect x="45" y="56" width="24" height="3" rx="1.5" fill="#d1d5db" />
                {/* Decorative dots */}
                <circle cx="18" cy="25" r="3" fill="#d1d5db" opacity="0.5" />
                <circle cx="102" cy="20" r="2.5" fill="#d1d5db" opacity="0.4" />
                <circle cx="105" cy="75" r="3.5" fill="#d1d5db" opacity="0.35" />
                <circle cx="14" cy="68" r="2" fill="#d1d5db" opacity="0.45" />
                <circle cx="22" cy="85" r="2.5" fill="#d1d5db" opacity="0.3" />
                <circle cx="98" cy="48" r="2" fill="#d1d5db" opacity="0.4" />
              </svg>
            </div>
            <div className={styles.appEmptyText}>暂无申请</div>
          </div>
        </div>

        {/* ====== 学业信息 ====== */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
              {(['grades', 'exams', 'courses', 'timetable'] as const).map((tab) => {
                const labels: Record<string, string> = {
                  grades: '我的成绩',
                  exams: '我的考试安排',
                  courses: '我的课程',
                  timetable: '我的课表',
                }
                return (
                  <button
                    key={tab}
                    className={`${styles.academicTab} ${academicTab === tab ? styles.academicTabActive : ''}`}
                    onClick={() => setAcademicTab(tab)}
                  >
                    {labels[tab]}
                  </button>
                )
              })}
            </div>
            <div className={styles.semesterSelector}>
              2025-2026学年第二学期
              <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          <div className={styles.cardBody}>
            <div className={styles.gradeList}>
              {GRADES.map((grade) => {
                const level = getLevel(grade.score)
                return (
                  <div key={grade.code} className={styles.gradeItem}>
                    <div className={styles.gradeLeft}>
                      <div className={styles.gradeIcon}>{grade.name.charAt(0)}</div>
                      <div className={styles.gradeInfo}>
                        <div className={styles.gradeName}>{grade.name}</div>
                        <div className={styles.gradeMeta}>{grade.code} · {grade.credits}学分 · {grade.hours}学时</div>
                      </div>
                    </div>
                    <div className={styles.gradeRight}>
                      <span className={styles.gradeScore}>{grade.score}</span>
                      <span className={`${styles.gradeLevel} ${level.cls}`}>{level.text}</span>
                    </div>
                    {/* Hover Tooltip */}
                    <div className={styles.gradeTooltip}>
                      <div className={styles.tooltipTitle}>{grade.name}</div>
                      <div className={styles.tooltipRow}>
                        <span className={styles.tooltipLabel}>课程代码</span>
                        <span className={styles.tooltipValue}>{grade.code}</span>
                      </div>
                      <div className={styles.tooltipRow}>
                        <span className={styles.tooltipLabel}>学分</span>
                        <span className={styles.tooltipValue}>
                          <span className={styles.tooltipTag}>{grade.credits} 学分</span>
                        </span>
                      </div>
                      <div className={styles.tooltipRow}>
                        <span className={styles.tooltipLabel}>学时</span>
                        <span className={styles.tooltipValue}>
                          <span className={styles.tooltipTag}>{grade.hours} 学时</span>
                        </span>
                      </div>
                      <div className={styles.tooltipRow}>
                        <span className={styles.tooltipLabel}>成绩</span>
                        <span className={styles.tooltipValue}>{grade.score}</span>
                      </div>
                      <div className={styles.tooltipRow}>
                        <span className={styles.tooltipLabel}>课程类别</span>
                        <span className={styles.tooltipValue}>{grade.category}</span>
                      </div>
                      <div className={styles.tooltipRow}>
                        <span className={styles.tooltipLabel}>授课教师</span>
                        <span className={styles.tooltipValue}>{grade.teacher}</span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* ====== 我的应用 ====== */}
        <div className={`${styles.card}`} style={{ position: 'relative' }}>
          <div className={styles.cardHeader}>
            <div className={styles.cardTitle}>我的应用</div>
          </div>
          <div className={styles.appGrid}>
            {APP_ITEMS.map((app) => (
              <Link key={app.name} href={app.href} className={styles.appGridItem}>
                <div className={styles.appGridIcon}>
                  <AppIcon type={app.icon} />
                </div>
                <div className={styles.appGridLabel}>{app.name}</div>
              </Link>
            ))}
          </div>
          {showVersion && (
            <div className={styles.versionTooltip}>
              木金-4.9.45
              <span className={styles.versionClose} onClick={() => setShowVersion(false)}>×</span>
            </div>
          )}
        </div>

        {/* ====== 公告消息 ====== */}
        <div className={styles.card}>
          <div className={styles.announcementHeader}>
            <button
              className={`${styles.announcementTab} ${annTab === 'announcement' ? styles.announcementTabActive : ''}`}
              onClick={() => setAnnTab('announcement')}
            >
              公告
              <span className={`${styles.badge} ${styles.badgeRed}`}>1</span>
            </button>
            <button
              className={`${styles.announcementTab} ${annTab === 'message' ? styles.announcementTabActive : ''}`}
              onClick={() => setAnnTab('message')}
            >
              消息
              <span className={`${styles.badge} ${styles.badgeRed}`}>10</span>
            </button>
          </div>
          <div className={styles.announcementList}>
            {annTab === 'announcement' ? (
              ANNOUNCEMENTS.map((ann, i) => (
                <div key={i} className={styles.announcementItem}>
                  <div className={styles.annIcon}>
                    <svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                    </svg>
                  </div>
                  <div className={styles.annContent}>
                    <div className={styles.annTitle}>{ann.title}</div>
                    <div className={styles.annMeta}>
                      {ann.pinned && <span className={styles.annPin}>置顶</span>}
                      <span className={styles.annTime}>{ann.time}</span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className={styles.cardBody} style={{ textAlign: 'center', color: '#9ca3af', padding: '40px 20px' }}>
                暂无消息
              </div>
            )}
          </div>
          <div className={styles.annFooter}>
            <button className={styles.annMore}>更多</button>
            <button className={styles.annCollapse}>
              收起
              <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* ====== 学习日程 ====== */}
        <div className={`${styles.card} ${styles.scheduleCard} ${styles.fullWidth}`}>
          <div className={styles.scheduleHeader}>
            <div className={styles.scheduleTitle}>学习日程</div>
          </div>
          <div className={styles.scheduleBody}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
              {SCHEDULES.map((s, i) => (
                <div key={i} className={styles.scheduleItem} style={{ border: '1px solid #f3f4f6', borderRadius: '10px', padding: '14px 16px' }}>
                  <div className={styles.scheduleTime}>{s.time}</div>
                  <div>
                    <div className={styles.scheduleDesc}>
                      {s.desc}
                      <span className={`${styles.scheduleTag} ${s.tagType === 'blue' ? styles.tagBlue : s.tagType === 'green' ? styles.tagGreen : styles.tagYellow}`}>
                        {s.tag}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ====== Accessibility Button ====== */}
      <button className={styles.accessibilityBtn} title="无障碍辅助">
        A+
      </button>
    </div>
  )
}
