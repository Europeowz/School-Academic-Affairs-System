import PageHeader from '@/components/PageHeader/PageHeader'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import styles from '../subpage.module.css'

const COURSES_AVAILABLE = [
  { name: '人工智能导论', code: 'CS3001', teacher: '赵文博', dept: '计算机科学与工程学院', credit: 2.0, time: '周二 7-8节', capacity: 120, enrolled: 98, remaining: 22, type: '通识选修' },
  { name: '创业基础', code: 'BM2001', teacher: '孙丽萍', dept: '管理学院', credit: 2.0, time: '周三 9-10节', capacity: 150, enrolled: 150, remaining: 0, type: '通识选修' },
  { name: '数字图像处理', code: 'CS3005', teacher: '张伟', dept: '计算机科学与工程学院', credit: 3.0, time: '周四 3-4节', capacity: 80, enrolled: 65, remaining: 15, type: '专业选修' },
  { name: '日语(二)', code: 'FL2003', teacher: '田中美咲', dept: '语言文化学院', credit: 2.0, time: '周一 5-6节', capacity: 40, enrolled: 38, remaining: 2, type: '通识选修' },
  { name: '网络安全技术', code: 'CS3010', teacher: '马超', dept: '计算机科学与工程学院', credit: 3.0, time: '周五 3-4节', capacity: 60, enrolled: 45, remaining: 15, type: '专业选修' },
  { name: '中国近现代史纲要', code: 'POL1002', teacher: '刘红梅', dept: '马克思主义学院', credit: 2.0, time: '周二 5-6节', capacity: 200, enrolled: 156, remaining: 44, type: '通识必修' },
  { name: '数据库原理', code: 'CS2006', teacher: '周明', dept: '计算机科学与工程学院', credit: 3.0, time: '周一 3-4节', capacity: 90, enrolled: 90, remaining: 0, type: '专业必修' },
  { name: '大数据技术基础', code: 'CS3012', teacher: '陈晓峰', dept: '计算机科学与工程学院', credit: 2.0, time: '周三 7-8节', capacity: 70, enrolled: 52, remaining: 18, type: '专业选修' },
  { name: '心理健康教育', code: 'PSY1001', teacher: '林雨薇', dept: '学生处', credit: 1.0, time: '周四 9-10节', capacity: 200, enrolled: 120, remaining: 80, type: '通识选修' },
  { name: '操作系统', code: 'CS2007', teacher: '王海涛', dept: '计算机科学与工程学院', credit: 4.0, time: '周二/周四 1-2节', capacity: 100, enrolled: 100, remaining: 0, type: '专业必修' },
]

const MY_SELECTIONS = [
  { name: '人工智能导论', code: 'CS3001', teacher: '赵文博', credit: 2.0, time: '周二 7-8节', status: '已选中', canDrop: true },
  { name: 'Python程序设计', code: 'CS2008', teacher: '赵文博', credit: 2.0, time: '周三 9-10节', status: '已选中', canDrop: true },
]

const SELECTION_PHASES = [
  { phase: '第一轮（必修课）', start: '2026-04-07 09:00', end: '2026-04-11 17:00', status: '已结束' },
  { phase: '第二轮（专业选修课）', start: '2026-04-14 09:00', end: '2026-04-18 17:00', status: '已结束' },
  { phase: '第三轮（通识选修课）', start: '2026-04-21 09:00', end: '2026-04-25 17:00', status: '进行中' },
  { phase: '补退选', start: '2026-04-28 09:00', end: '2026-05-02 17:00', status: '未开始' },
]

export default function CourseSelectionPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        tag="选课"
        title="选课中心"
        desc="通识课、专业课在线选退，实时余量查询，多轮选课流程清晰可控"
      />

      <div className={styles.pageContent}>
        <div className="container">
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statLabel}>已选课程</div>
              <div className={styles.statValue}>2</div>
              <div className={styles.statSub}>本学期选修课</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statLabel}>已选学分</div>
              <div className={styles.statValue}>4.0</div>
              <div className={styles.statSub}>选修课学分</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statLabel}>当前阶段</div>
              <div className={styles.statValue}>第三轮</div>
              <div className={styles.statSub}>通识选修课选课中</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statLabel}>截止时间</div>
              <div className={styles.statValue}>4月25日</div>
              <div className={styles.statSub}>剩余4天</div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardTitle}>
              <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
              选课进度
            </div>
            <div className={styles.tableWrapper}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>轮次</th>
                    <th>开始时间</th>
                    <th>结束时间</th>
                    <th>状态</th>
                  </tr>
                </thead>
                <tbody>
                  {SELECTION_PHASES.map((p, i) => (
                    <tr key={i}>
                      <td style={{ fontWeight: 500 }}>{p.phase}</td>
                      <td>{p.start}</td>
                      <td>{p.end}</td>
                      <td>
                        <span className={`${styles.badge} ${p.status === '进行中' ? styles.badgeGreen : p.status === '已结束' ? styles.badgeGray : styles.badgeYellow}`}>
                          {p.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardTitle}>
              <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              我的已选课程
            </div>
            <div className={styles.tableWrapper}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>课程名称</th>
                    <th>课程号</th>
                    <th>教师</th>
                    <th>学分</th>
                    <th>上课时间</th>
                    <th>状态</th>
                  </tr>
                </thead>
                <tbody>
                  {MY_SELECTIONS.map((c, i) => (
                    <tr key={i}>
                      <td style={{ fontWeight: 500 }}>{c.name}</td>
                      <td>{c.code}</td>
                      <td>{c.teacher}</td>
                      <td>{c.credit}</td>
                      <td>{c.time}</td>
                      <td><span className={`${styles.badge} ${styles.badgeGreen}`}>{c.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardTitle}>
              <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              可选课程列表
            </div>
            <div className={styles.tableWrapper}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>课程名称</th>
                    <th>课程号</th>
                    <th>教师</th>
                    <th>开课学院</th>
                    <th>学分</th>
                    <th>上课时间</th>
                    <th>类型</th>
                    <th>余量</th>
                  </tr>
                </thead>
                <tbody>
                  {COURSES_AVAILABLE.map((c, i) => (
                    <tr key={i}>
                      <td style={{ fontWeight: 500 }}>{c.name}</td>
                      <td>{c.code}</td>
                      <td>{c.teacher}</td>
                      <td style={{ fontSize: 13 }}>{c.dept}</td>
                      <td>{c.credit}</td>
                      <td style={{ fontSize: 13 }}>{c.time}</td>
                      <td><span className={`${styles.badge} ${c.type.includes('必修') ? styles.badgeBlue : c.type.includes('专业') ? styles.badgeYellow : styles.badgeGreen}`}>{c.type}</span></td>
                      <td style={{ fontWeight: 600, color: c.remaining > 0 ? 'var(--color-success)' : 'var(--color-error)' }}>
                        {c.remaining > 0 ? `${c.remaining}/${c.capacity}` : '已满'}
                      </td>
                    </tr>
                  ))}
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
