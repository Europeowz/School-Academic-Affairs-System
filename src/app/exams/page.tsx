import PageHeader from '@/components/PageHeader/PageHeader'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import styles from '../subpage.module.css'

const EXAMS = [
  { course: '高等数学A', code: 'MATH2001', date: '2026-06-23', time: '09:00-11:00', location: '主楼B区201', seat: '15', type: '闭卷', status: 'upcoming' },
  { course: '数据结构与算法', code: 'CS2003', date: '2026-06-25', time: '14:00-16:00', location: '实验楼A区302', seat: '22', type: '闭卷', status: 'upcoming' },
  { course: '大学英语(四)', code: 'ENG2004', date: '2026-06-27', time: '09:00-11:00', location: '外语楼C区105', seat: '08', type: '闭卷', status: 'upcoming' },
  { course: '计算机组成原理', code: 'CS2005', date: '2026-06-30', time: '14:00-16:00', location: '实验楼A区501', seat: '19', type: '闭卷', status: 'upcoming' },
  { course: '离散数学', code: 'MATH2002', date: '2026-07-02', time: '09:00-11:00', location: '主楼A区301', seat: '11', type: '闭卷', status: 'upcoming' },
  { course: 'Python程序设计', code: 'CS2008', date: '2026-07-04', time: '14:00-16:00', location: '实验楼B区203', seat: '05', type: '开卷', status: 'upcoming' },
]

const PAST_EXAMS = [
  { course: '线性代数', code: 'MATH1002', date: '2026-01-08', time: '09:00-11:00', location: '主楼B区201', seat: '15', score: 82, status: 'passed' },
  { course: 'C语言程序设计', code: 'CS1001', date: '2026-01-10', time: '14:00-16:00', location: '实验楼A区302', seat: '22', score: 88, status: 'passed' },
  { course: '大学物理(上)', code: 'PHYS1001', date: '2026-01-12', time: '09:00-11:00', location: '理学楼D区101', seat: '30', score: 75, status: 'passed' },
  { course: '概率论与数理统计', code: 'MATH1003', date: '2026-01-14', time: '14:00-16:00', location: '主楼A区301', seat: '11', score: 79, status: 'passed' },
]

const NOTICES = [
  { title: '关于2025-2026学年第二学期期末考试安排的通知', date: '2026-04-21', type: '紧急' },
  { title: '期末考试考场纪律及违规处理办法', date: '2026-04-15', type: '重要' },
  { title: '关于申请缓考的通知及办理流程', date: '2026-04-10', type: '通知' },
  { title: '补考安排：2025-2026学年第一学期补考时间表', date: '2026-03-01', type: '通知' },
]

export default function ExamsPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        tag="考试"
        title="考试安排"
        desc="期末考试时间、地点、座位号一键查看，支持历史考试记录查询"
      />

      <div className={styles.pageContent}>
        <div className="container">
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statLabel}>待考科目</div>
              <div className={styles.statValue}>6</div>
              <div className={styles.statSub}>最近：6月23日 高等数学A</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statLabel}>考试周期</div>
              <div className={styles.statValue}>12天</div>
              <div className={styles.statSub}>6月23日 - 7月4日</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statLabel}>闭卷考试</div>
              <div className={styles.statValue}>5</div>
              <div className={styles.statSub}>开卷考试1门</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statLabel}>已通过</div>
              <div className={styles.statValue}>4</div>
              <div className={styles.statSub}>上学期期末考试</div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardTitle}>
              <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              本学期期末考试安排
            </div>
            <div className={styles.tableWrapper}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>课程名称</th>
                    <th>课程号</th>
                    <th>考试日期</th>
                    <th>考试时间</th>
                    <th>考场</th>
                    <th>座位号</th>
                    <th>考试形式</th>
                    <th>状态</th>
                  </tr>
                </thead>
                <tbody>
                  {EXAMS.map((e, i) => (
                    <tr key={i}>
                      <td style={{ fontWeight: 500 }}>{e.course}</td>
                      <td>{e.code}</td>
                      <td>{e.date}</td>
                      <td>{e.time}</td>
                      <td>{e.location}</td>
                      <td style={{ fontWeight: 600 }}>{e.seat}</td>
                      <td><span className={`${styles.badge} ${e.type === '闭卷' ? styles.badgeBlue : styles.badgeGray}`}>{e.type}</span></td>
                      <td><span className={`${styles.badge} ${styles.badgeYellow}`}>待考</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardTitle}>
              <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
              上学期考试记录
            </div>
            <div className={styles.tableWrapper}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>课程名称</th>
                    <th>课程号</th>
                    <th>考试日期</th>
                    <th>考场</th>
                    <th>座位号</th>
                    <th>成绩</th>
                    <th>状态</th>
                  </tr>
                </thead>
                <tbody>
                  {PAST_EXAMS.map((e, i) => (
                    <tr key={i}>
                      <td style={{ fontWeight: 500 }}>{e.course}</td>
                      <td>{e.code}</td>
                      <td>{e.date}</td>
                      <td>{e.location}</td>
                      <td>{e.seat}</td>
                      <td style={{ fontWeight: 600, color: e.score >= 60 ? 'var(--color-primary)' : 'var(--color-error)' }}>{e.score}</td>
                      <td><span className={`${styles.badge} ${styles.badgeGreen}`}>已通过</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardTitle}>
              <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.001 3.001 0 01-1.564-.317z" /></svg>
              考试通知
            </div>
            {NOTICES.map((n, i) => (
              <div key={i} style={{ padding: 'var(--space-3) 0', borderBottom: i < NOTICES.length - 1 ? '1px solid var(--color-border)' : 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <span className={`${styles.badge} ${n.type === '紧急' ? styles.badgeRed : n.type === '重要' ? styles.badgeYellow : styles.badgeBlue}`} style={{ marginRight: 8 }}>{n.type}</span>
                  <span style={{ fontSize: 14, fontWeight: 500 }}>{n.title}</span>
                </div>
                <span style={{ fontSize: 13, color: 'var(--color-text-tertiary)', whiteSpace: 'nowrap', marginLeft: 16 }}>{n.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
