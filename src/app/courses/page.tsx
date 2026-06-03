import PageHeader from '@/components/PageHeader/PageHeader'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import styles from '../subpage.module.css'

const SCHEDULE = [
  { time: '第1-2节 08:00-09:40', mon: '高等数学A\n主楼B区201\n王建国', tue: '', wed: '高等数学A\n主楼B区201\n王建国', thu: '', fri: '高等数学A习题课\n主楼B区201\n王建国' },
  { time: '第3-4节 10:00-11:40', mon: '', tue: '数据结构与算法\n实验楼A区302\n李明辉', wed: '', thu: '数据结构与算法\n实验楼A区302\n李明辉', fri: '' },
  { time: '第5-6节 13:30-15:10', mon: '大学英语(四)\n外语楼C区105\n张晓燕', tue: '', wed: '大学英语(四)\n外语楼C区105\n张晓燕', thu: '', fri: '' },
  { time: '第7-8节 15:30-17:10', mon: '', tue: '计算机组成原理\n实验楼A区501\n刘志强', wed: '', thu: '计算机组成原理实验\n实验楼B区102\n刘志强', fri: '离散数学\n主楼A区301\n陈思远' },
  { time: '第9-10节 18:30-20:10', mon: '', tue: '', wed: 'Python程序设计\n实验楼B区203\n赵文博', thu: '', fri: '' },
]

function CellContent({ text }: { text: string }) {
  if (!text) return <span style={{ color: 'var(--color-text-tertiary)' }}>—</span>
  const lines = text.split('\n')
  return (
    <div style={{ lineHeight: 1.5 }}>
      <div style={{ fontWeight: 600, color: 'var(--color-primary)', fontSize: 13 }}>{lines[0]}</div>
      <div style={{ fontSize: 12, color: 'var(--color-text-tertiary)' }}>{lines[1]}</div>
      <div style={{ fontSize: 12, color: 'var(--color-text-secondary)' }}>{lines[2]}</div>
    </div>
  )
}

export default function CoursesPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        tag="核心功能"
        title="课程表查询"
        desc="实时查看本学期课表安排，支持按周次、教室、教师多维度筛选查询"
      />

      <div className={styles.pageContent}>
        <div className="container">
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statLabel}>本学期课程</div>
              <div className={styles.statValue}>6</div>
              <div className={styles.statSub}>必修4 / 选修2</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statLabel}>周学时</div>
              <div className={styles.statValue}>24</div>
              <div className={styles.statSub}>理论16 / 实验8</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statLabel}>当前周次</div>
              <div className={styles.statValue}>第8周</div>
              <div className={styles.statSub}>2025-2026学年第二学期</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statLabel}>总学分</div>
              <div className={styles.statValue}>21</div>
              <div className={styles.statSub}>已修68 / 毕业要求160</div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardTitle}>
              <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              2025-2026学年第二学期课表
            </div>
            <div className={styles.tableWrapper}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th style={{ minWidth: 140 }}>时间</th>
                    <th>周一</th>
                    <th>周二</th>
                    <th>周三</th>
                    <th>周四</th>
                    <th>周五</th>
                  </tr>
                </thead>
                <tbody>
                  {SCHEDULE.map((row, i) => (
                    <tr key={i}>
                      <td style={{ whiteSpace: 'pre-line', fontSize: 12, fontWeight: 500, color: 'var(--color-text-secondary)' }}>{row.time}</td>
                      <td><CellContent text={row.mon} /></td>
                      <td><CellContent text={row.tue} /></td>
                      <td><CellContent text={row.wed} /></td>
                      <td><CellContent text={row.thu} /></td>
                      <td><CellContent text={row.fri} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardTitle}>
              <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              课程详细信息
            </div>
            <div className={styles.tableWrapper}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>课程名称</th>
                    <th>课程号</th>
                    <th>教师</th>
                    <th>学分</th>
                    <th>学时</th>
                    <th>课程类型</th>
                    <th>教室</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ fontWeight: 500 }}>高等数学A</td>
                    <td>MATH2001</td>
                    <td>王建国</td>
                    <td>5.0</td>
                    <td>80</td>
                    <td><span className={`${styles.badge} ${styles.badgeBlue}`}>必修</span></td>
                    <td>主楼B区201</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: 500 }}>数据结构与算法</td>
                    <td>CS2003</td>
                    <td>李明辉</td>
                    <td>4.0</td>
                    <td>64</td>
                    <td><span className={`${styles.badge} ${styles.badgeBlue}`}>必修</span></td>
                    <td>实验楼A区302</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: 500 }}>大学英语(四)</td>
                    <td>ENG2004</td>
                    <td>张晓燕</td>
                    <td>3.0</td>
                    <td>48</td>
                    <td><span className={`${styles.badge} ${styles.badgeBlue}`}>必修</span></td>
                    <td>外语楼C区105</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: 500 }}>计算机组成原理</td>
                    <td>CS2005</td>
                    <td>刘志强</td>
                    <td>4.0</td>
                    <td>64</td>
                    <td><span className={`${styles.badge} ${styles.badgeBlue}`}>必修</span></td>
                    <td>实验楼A区501</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: 500 }}>离散数学</td>
                    <td>MATH2002</td>
                    <td>陈思远</td>
                    <td>3.0</td>
                    <td>48</td>
                    <td><span className={`${styles.badge} ${styles.badgeBlue}`}>必修</span></td>
                    <td>主楼A区301</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: 500 }}>Python程序设计</td>
                    <td>CS2008</td>
                    <td>赵文博</td>
                    <td>2.0</td>
                    <td>32</td>
                    <td><span className={`${styles.badge} ${styles.badgeGreen}`}>选修</span></td>
                    <td>实验楼B区203</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
