import PageHeader from '@/components/PageHeader/PageHeader'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import styles from '../subpage.module.css'

const THESIS_INFO = [
  { label: '课题名称', value: '基于深度学习的校园交通流量预测系统' },
  { label: '课题编号', value: 'BY2026-CS-042' },
  { label: '课题来源', value: '教师科研课题' },
  { label: '课题类型', value: '应用研究' },
  { label: '指导教师', value: '李明辉 副教授' },
  { label: '所属学院', value: '计算机科学与工程学院' },
  { label: '选题日期', value: '2025-12-15' },
  { label: '当前阶段', value: '开题阶段' },
]

const MILESTONES = [
  { phase: '选题', date: '2025-12-01 ~ 2025-12-20', status: 'completed', desc: '完成师生互选，确定课题方向' },
  { phase: '开题', date: '2026-01-05 ~ 2026-03-15', status: 'in_progress', desc: '撰写开题报告，进行开题答辩' },
  { phase: '中期检查', date: '2026-04-01 ~ 2026-04-30', status: 'pending', desc: '提交中期报告，汇报研究进展' },
  { phase: '论文撰写', date: '2026-05-01 ~ 2026-05-31', status: 'pending', desc: '完成毕业论文初稿及修改' },
  { phase: '论文查重', date: '2026-06-01 ~ 2026-06-05', status: 'pending', desc: '提交论文至查重系统，查重率≤30%' },
  { phase: '答辩', date: '2026-06-10 ~ 2026-06-20', status: 'pending', desc: '参加毕业答辩，评委评审打分' },
]

const SUBMISSIONS = [
  { name: '选题申请表', date: '2025-12-15', status: '已通过', feedback: '同意选题' },
  { name: '开题报告', date: '2026-02-28', status: '待审核', feedback: '导师审核中' },
  { name: '外文翻译', date: '2026-03-01', status: '待提交', feedback: '-' },
  { name: '中期报告', date: '-', status: '未开始', feedback: '-' },
  { name: '毕业论文', date: '-', status: '未开始', feedback: '-' },
]

const RECENT_TOPICS = [
  { title: '基于Transformer的文本摘要生成方法研究', teacher: '王海涛 教授', type: '应用研究', selected: true },
  { title: '智能校园安防监控系统的设计与实现', teacher: '马超 副教授', type: '工程设计', selected: false },
  { title: '基于知识图谱的课程推荐系统', teacher: '陈晓峰 教授', type: '应用研究', selected: false },
  { title: '联邦学习隐私保护机制研究', teacher: '张伟 教授', type: '理论研究', selected: false },
  { title: '基于YOLOv8的校园车辆检测与计数系统', teacher: '刘志强 副教授', type: '工程设计', selected: false },
]

export default function GraduationPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        tag="毕业"
        title="毕业设计"
        desc="选题、开题、中期、答辩全流程线上管理，进度一目了然"
      />

      <div className={styles.pageContent}>
        <div className="container">
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statLabel}>当前阶段</div>
              <div className={styles.statValue} style={{ fontSize: 22 }}>开题阶段</div>
              <div className={styles.statSub}>2/6 已完成</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statLabel}>指导教师</div>
              <div className={styles.statValue} style={{ fontSize: 22 }}>李明辉</div>
              <div className={styles.statSub}>计算机科学与工程学院</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statLabel}>距中期检查</div>
              <div className={styles.statValue}>10天</div>
              <div className={styles.statSub}>截止4月30日</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statLabel}>论文查重要求</div>
              <div className={styles.statValue}>≤30%</div>
              <div className={styles.statSub}>知网查重系统</div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardTitle}>
              <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
              课题信息
            </div>
            <div className={styles.infoList}>
              {THESIS_INFO.map((item, i) => (
                <div key={i} className={styles.infoItem}>
                  <span className={styles.infoLabel}>{item.label}</span>
                  <span className={styles.infoValue}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardTitle}>
              <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
              流程进度
            </div>
            {MILESTONES.map((m, i) => (
              <div key={i} style={{ display: 'flex', gap: 16, padding: 'var(--space-4) 0', borderBottom: i < MILESTONES.length - 1 ? '1px solid var(--color-border)' : 'none' }}>
                <div style={{ flexShrink: 0, width: 8, height: 8, borderRadius: '50%', marginTop: 6, background: m.status === 'completed' ? 'var(--color-success)' : m.status === 'in_progress' ? 'var(--color-primary)' : 'var(--color-border-strong)' }} />
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                    <span style={{ fontWeight: 600, fontSize: 15 }}>{m.phase}</span>
                    <span className={`${styles.badge} ${m.status === 'completed' ? styles.badgeGreen : m.status === 'in_progress' ? styles.badgeBlue : styles.badgeGray}`}>
                      {m.status === 'completed' ? '已完成' : m.status === 'in_progress' ? '进行中' : '未开始'}
                    </span>
                  </div>
                  <div style={{ fontSize: 13, color: 'var(--color-text-tertiary)', marginBottom: 2 }}>{m.date}</div>
                  <div style={{ fontSize: 14, color: 'var(--color-text-secondary)' }}>{m.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.card}>
            <div className={styles.cardTitle}>
              <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
              提交记录
            </div>
            <div className={styles.tableWrapper}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>文档名称</th>
                    <th>提交日期</th>
                    <th>状态</th>
                    <th>反馈</th>
                  </tr>
                </thead>
                <tbody>
                  {SUBMISSIONS.map((s, i) => (
                    <tr key={i}>
                      <td style={{ fontWeight: 500 }}>{s.name}</td>
                      <td>{s.date}</td>
                      <td>
                        <span className={`${styles.badge} ${s.status === '已通过' ? styles.badgeGreen : s.status === '待审核' ? styles.badgeYellow : styles.badgeGray}`}>
                          {s.status}
                        </span>
                      </td>
                      <td>{s.feedback}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardTitle}>
              <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
              本专业可选课题
            </div>
            <div className={styles.tableWrapper}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>课题名称</th>
                    <th>指导教师</th>
                    <th>课题类型</th>
                    <th>状态</th>
                  </tr>
                </thead>
                <tbody>
                  {RECENT_TOPICS.map((t, i) => (
                    <tr key={i}>
                      <td style={{ fontWeight: 500 }}>{t.title}</td>
                      <td>{t.teacher}</td>
                      <td><span className={`${styles.badge} ${styles.badgeBlue}`}>{t.type}</span></td>
                      <td>
                        {t.selected ? <span className={`${styles.badge} ${styles.badgeGreen}`}>已选</span> : <span className={`${styles.badge} ${styles.badgeGray}`}>可选</span>}
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
