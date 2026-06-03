import ScrollReveal from '@/components/ScrollReveal/ScrollReveal'
import Calendar from '@/components/Calendar/Calendar'
import styles from './Announcements.module.css'

interface Announcement {
  type: string
  typeClass: 'urgent' | 'normal' | 'info'
  date: string
  title: string
}

const ANNOUNCEMENTS: Announcement[] = [
  { type: '紧急', typeClass: 'urgent', date: '2026-04-21', title: '关于2025-2026学年第二学期期末考试安排的通知' },
  { type: '选课', typeClass: 'normal', date: '2026-04-18', title: '2026-2027学年第一学期通识选修课选课通知' },
  { type: '学籍', typeClass: 'info', date: '2026-04-15', title: '关于2026届本科毕业生毕业资格审查的通知' },
  { type: '教务', typeClass: 'normal', date: '2026-04-12', title: '关于开展2026年校级教学成果奖评选工作的通知' },
  { type: '活动', typeClass: 'info', date: '2026-04-10', title: '关于举办第十届大学生创新创业大赛的通知' },
  { type: '教务', typeClass: 'normal', date: '2026-04-08', title: '关于2025-2026学年第二学期补考安排的通知' },
]

export default function Announcements() {
  return (
    <section className={styles.section} id="announcements">
      <div className="container">
        <ScrollReveal>
          <div className={styles.header}>
            <div className={styles.label}>通知公告</div>
            <h2 className={styles.title}>最新教务通知</h2>
          </div>
        </ScrollReveal>

        <div className={styles.grid}>
          <ScrollReveal>
            <div className={styles.list}>
              {ANNOUNCEMENTS.map((item, i) => (
                <div key={i} className={styles.item}>
                  <div className={styles.meta}>
                    <span className={`${styles.type} ${styles[item.typeClass]}`}>{item.type}</span>
                    <span className={styles.date}>{item.date}</span>
                  </div>
                  <div className={styles.itemTitle}>{item.title}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <Calendar />
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
