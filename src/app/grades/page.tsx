import PageHeader from '@/components/PageHeader/PageHeader'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import styles from '../subpage.module.css'

const GRADES = [
  { course: '高等数学A', code: 'MATH2001', credit: 5.0, type: '必修', regular: 88, midterm: 82, final: 85, total: 85, gpa: 3.7, status: 'passed' },
  { course: '数据结构与算法', code: 'CS2003', credit: 4.0, type: '必修', regular: 92, midterm: 90, final: 91, total: 91, gpa: 4.0, status: 'passed' },
  { course: '大学英语(四)', code: 'ENG2004', credit: 3.0, type: '必修', regular: 78, midterm: 75, final: 76, total: 76, gpa: 2.7, status: 'passed' },
  { course: '计算机组成原理', code: 'CS2005', credit: 4.0, type: '必修', regular: 85, midterm: 80, final: 82, total: 82, gpa: 3.3, status: 'passed' },
  { course: '离散数学', code: 'MATH2002', credit: 3.0, type: '必修', regular: 90, midterm: 88, final: 89, total: 89, gpa: 3.9, status: 'passed' },
  { course: 'Python程序设计', code: 'CS2008', credit: 2.0, type: '选修', regular: 95, midterm: 93, final: 94, total: 94, gpa: 4.0, status: 'passed' },
]

const GPA_HISTORY = [
  { semester: '2024-2025 第一学期', gpa: 3.42, credits: 22, avg: 81.5 },
  { semester: '2024-2025 第二学期', gpa: 3.55, credits: 24, avg: 83.2 },
  { semester: '2025-2026 第一学期', gpa: 3.61, credits: 23, avg: 84.8 },
  { semester: '2025-2026 第二学期', gpa: 3.58, credits: 21, avg: 84.1 },
]

export default function GradesPage() {
  const totalCredits = GRADES.reduce((s, g) => s + g.credit, 0)
  const weightedSum = GRADES.reduce((s, g) => s + g.total * g.credit, 0)
  const avg = (weightedSum / totalCredits).toFixed(1)
  const currentGpa = (GRADES.reduce((s, g) => s + g.gpa * g.credit, 0) / totalCredits).toFixed(2)

  return (
    <>
      <Navbar />
      <PageHeader
        tag="查询"
        title="成绩查询"
        desc="历年成绩、GPA 统计与学分完成进度，全面掌握学业状况"
      />

      <div className={styles.pageContent}>
        <div className="container">
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statLabel}>本学期GPA</div>
              <div className={styles.statValue}>{currentGpa}</div>
              <div className={styles.statSub}>较上学期 -0.03</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statLabel}>加权平均分</div>
              <div className={styles.statValue}>{avg}</div>
              <div className={styles.statSub}>本学期6门课程</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statLabel}>累计学分</div>
              <div className={styles.statValue}>89</div>
              <div className={styles.statSub}>毕业要求160 / 进度55.6%</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statLabel}>累计GPA</div>
              <div className={styles.statValue}>3.54</div>
              <div className={styles.statSub}>4个学期平均</div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardTitle}>
              <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
              2025-2026学年第二学期成绩
            </div>
            <div className={styles.tableWrapper}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>课程名称</th>
                    <th>课程号</th>
                    <th>学分</th>
                    <th>类型</th>
                    <th>平时</th>
                    <th>期中</th>
                    <th>期末</th>
                    <th>总评</th>
                    <th>绩点</th>
                  </tr>
                </thead>
                <tbody>
                  {GRADES.map((g, i) => (
                    <tr key={i}>
                      <td style={{ fontWeight: 500 }}>{g.course}</td>
                      <td>{g.code}</td>
                      <td>{g.credit}</td>
                      <td><span className={`${styles.badge} ${g.type === '必修' ? styles.badgeBlue : styles.badgeGreen}`}>{g.type}</span></td>
                      <td>{g.regular}</td>
                      <td>{g.midterm}</td>
                      <td>{g.final}</td>
                      <td style={{ fontWeight: 600, color: g.total >= 90 ? 'var(--color-primary)' : g.total >= 60 ? 'var(--color-text-primary)' : 'var(--color-error)' }}>{g.total}</td>
                      <td>{g.gpa}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardTitle}>
              <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              GPA 趋势
            </div>
            <div className={styles.tableWrapper}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>学期</th>
                    <th>GPA</th>
                    <th>修读学分</th>
                    <th>加权平均分</th>
                  </tr>
                </thead>
                <tbody>
                  {GPA_HISTORY.map((h, i) => (
                    <tr key={i}>
                      <td style={{ fontWeight: 500 }}>{h.semester}</td>
                      <td style={{ fontWeight: 600, color: 'var(--color-primary)' }}>{h.gpa.toFixed(2)}</td>
                      <td>{h.credits}</td>
                      <td>{h.avg}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardTitle}>
              <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              学分完成进度
            </div>
            <div className={styles.infoList}>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>必修课学分</span>
                <span className={styles.infoValue}>52 / 100</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>选修课学分</span>
                <span className={styles.infoValue}>18 / 30</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>通识课学分</span>
                <span className={styles.infoValue}>12 / 20</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>实践环节学分</span>
                <span className={styles.infoValue}>7 / 10</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
