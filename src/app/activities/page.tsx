import PageHeader from '@/components/PageHeader/PageHeader'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import styles from '../subpage.module.css'

const UPCOMING_ACTIVITIES = [
  { title: '第十届大学生创新创业大赛', date: '2026-05-10', time: '09:00-17:00', location: '大学生活动中心', organizer: '创新创业学院', type: '竞赛', points: 2, status: '报名中', deadline: '2026-04-30' },
  { title: '明理讲坛：AI大模型技术前沿', date: '2026-04-25', time: '14:00-16:00', location: '学术报告厅', organizer: '计算机科学与工程学院', type: '讲座', points: 0.5, status: '报名中', deadline: '2026-04-24' },
  { title: '"代码之美"程序设计竞赛', date: '2026-05-15', time: '09:00-12:00', location: '实验楼A区', organizer: '计算机科学与工程学院', type: '竞赛', points: 2, status: '即将开始', deadline: '2026-05-08' },
  { title: '心理健康月系列讲座', date: '2026-05-20', time: '15:00-17:00', location: '学生发展中心', organizer: '学生处', type: '讲座', points: 0.5, status: '即将开始', deadline: '2026-05-18' },
  { title: '明理湖校园马拉松', date: '2026-05-25', time: '07:30-10:00', location: '明理湖环湖路', organizer: '体育教学部', type: '体育', points: 1, status: '即将开始', deadline: '2026-05-20' },
]

const MY_ACTIVITIES = [
  { title: 'ACM程序设计竞赛校内选拔', date: '2026-04-12', points: 2, status: '已参加', result: '二等奖' },
  { title: '明理讲坛：区块链技术与应用', date: '2026-04-05', points: 0.5, status: '已参加', result: '-' },
  { title: '校运会4×100接力赛', date: '2026-03-28', points: 1, status: '已参加', result: '第四名' },
  { title: '学雷锋志愿服务月', date: '2026-03-05', points: 1.5, status: '已参加', result: '-' },
]

const CLUBS = [
  { name: '计算机协会', members: 156, type: '学术科技', activity: '每周三晚 ACM 训练', president: '李想（2023级）' },
  { name: '明理辩论社', members: 82, type: '文化体育', activity: '每月一次校际辩论赛', president: '周文静（2023级）' },
  { name: '创客空间', members: 120, type: '学术科技', activity: '周末创客工坊', president: '张浩然（2022级）' },
  { name: '摄影协会', members: 95, type: '文化体育', activity: '不定期采风活动', president: '刘思涵（2023级）' },
  { name: '志愿者协会', members: 280, type: '志愿公益', activity: '社区服务/义教', president: '赵雅琪（2022级）' },
]

const SECOND_CLASSROOM = [
  { category: '创新创业', required: 2, earned: 1.5, courses: ['大学生创新创业大赛 2分', '创业基础课 0.5分（进行中）'] },
  { category: '社会实践', required: 2, earned: 1.5, courses: ['暑期社会实践 1分', '学雷锋志愿 0.5分'] },
  { category: '文化体育', required: 2, earned: 1.0, courses: ['校运会 1分'] },
  { category: '劳动教育', required: 1, earned: 0.5, courses: ['劳动实践周 0.5分'] },
]

export default function ActivitiesPage() {
  const totalPoints = SECOND_CLASSROOM.reduce((s, c) => s + c.earned, 0)
  const totalRequired = SECOND_CLASSROOM.reduce((s, c) => s + c.required, 0)

  return (
    <>
      <Navbar />
      <PageHeader
        tag="活动"
        title="校园活动"
        desc="第二课堂、社团活动、讲座论坛，丰富校园生活触手可及"
      />

      <div className={styles.pageContent}>
        <div className="container">
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statLabel}>第二课堂学分</div>
              <div className={styles.statValue}>{totalPoints}/{totalRequired}</div>
              <div className={styles.statSub}>已完成55.6%</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statLabel}>参与活动</div>
              <div className={styles.statValue}>4</div>
              <div className={styles.statSub}>本学期已参加</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statLabel}>可报名活动</div>
              <div className={styles.statValue}>5</div>
              <div className={styles.statSub}>2个即将截止</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statLabel}>加入社团</div>
              <div className={styles.statValue}>2</div>
              <div className={styles.statSub}>计算机协会 / 创客空间</div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardTitle}>
              <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              近期活动
            </div>
            <div className={styles.tableWrapper}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>活动名称</th>
                    <th>日期</th>
                    <th>时间</th>
                    <th>地点</th>
                    <th>主办方</th>
                    <th>类型</th>
                    <th>学分</th>
                    <th>状态</th>
                    <th>报名截止</th>
                  </tr>
                </thead>
                <tbody>
                  {UPCOMING_ACTIVITIES.map((a, i) => (
                    <tr key={i}>
                      <td style={{ fontWeight: 500, maxWidth: 200 }}>{a.title}</td>
                      <td>{a.date}</td>
                      <td style={{ fontSize: 13 }}>{a.time}</td>
                      <td style={{ fontSize: 13 }}>{a.location}</td>
                      <td style={{ fontSize: 13 }}>{a.organizer}</td>
                      <td><span className={`${styles.badge} ${a.type === '竞赛' ? styles.badgeRed : a.type === '讲座' ? styles.badgeBlue : styles.badgeGreen}`}>{a.type}</span></td>
                      <td style={{ fontWeight: 600, color: 'var(--color-primary)' }}>{a.points}</td>
                      <td>
                        <span className={`${styles.badge} ${a.status === '报名中' ? styles.badgeGreen : styles.badgeYellow}`}>
                          {a.status}
                        </span>
                      </td>
                      <td style={{ fontSize: 13, color: 'var(--color-text-tertiary)' }}>{a.deadline}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardTitle}>
              <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
              我的参与记录
            </div>
            <div className={styles.tableWrapper}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>活动名称</th>
                    <th>日期</th>
                    <th>学分</th>
                    <th>状态</th>
                    <th>获奖/结果</th>
                  </tr>
                </thead>
                <tbody>
                  {MY_ACTIVITIES.map((a, i) => (
                    <tr key={i}>
                      <td style={{ fontWeight: 500 }}>{a.title}</td>
                      <td>{a.date}</td>
                      <td style={{ fontWeight: 600, color: 'var(--color-primary)' }}>{a.points}</td>
                      <td><span className={`${styles.badge} ${styles.badgeGreen}`}>{a.status}</span></td>
                      <td>{a.result}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardTitle}>
              <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
              第二课堂学分进度
            </div>
            {SECOND_CLASSROOM.map((c, i) => (
              <div key={i} style={{ padding: 'var(--space-4) 0', borderBottom: i < SECOND_CLASSROOM.length - 1 ? '1px solid var(--color-border)' : 'none' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                  <span style={{ fontWeight: 600, fontSize: 15 }}>{c.category}</span>
                  <span style={{ fontWeight: 600, color: c.earned >= c.required ? 'var(--color-success)' : 'var(--color-primary)' }}>
                    {c.earned}/{c.required} 分
                  </span>
                </div>
                <div style={{ background: 'var(--color-surface-warm)', borderRadius: 'var(--radius-full)', height: 8, marginBottom: 8, overflow: 'hidden' }}>
                  <div style={{ background: c.earned >= c.required ? 'var(--color-success)' : 'var(--color-primary)', height: '100%', width: `${Math.min(100, (c.earned / c.required) * 100)}%`, borderRadius: 'var(--radius-full)', transition: 'width 0.3s' }} />
                </div>
                <div style={{ fontSize: 13, color: 'var(--color-text-tertiary)' }}>
                  {c.courses.map((course, j) => (
                    <span key={j}>{j > 0 && ' · '}{course}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className={styles.card}>
            <div className={styles.cardTitle}>
              <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              校园社团
            </div>
            <div className={styles.tableWrapper}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>社团名称</th>
                    <th>类型</th>
                    <th>成员数</th>
                    <th>主要活动</th>
                    <th>社长</th>
                  </tr>
                </thead>
                <tbody>
                  {CLUBS.map((c, i) => (
                    <tr key={i}>
                      <td style={{ fontWeight: 500 }}>{c.name}</td>
                      <td><span className={`${styles.badge} ${styles.badgeBlue}`}>{c.type}</span></td>
                      <td>{c.members}人</td>
                      <td style={{ fontSize: 13 }}>{c.activity}</td>
                      <td style={{ fontSize: 13 }}>{c.president}</td>
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
