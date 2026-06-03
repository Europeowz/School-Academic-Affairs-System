import PageHeader from '@/components/PageHeader/PageHeader'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import styles from '../subpage.module.css'

const STUDENT_INFO = [
  { label: '姓名', value: '李同学' },
  { label: '学号', value: '2024000001' },
  { label: '性别', value: '男' },
  { label: '出生日期', value: '2005-03-15' },
  { label: '民族', value: '汉族' },
  { label: '政治面貌', value: '共青团员' },
  { label: '学院', value: '计算机科学与工程学院' },
  { label: '专业', value: '计算机科学与技术' },
  { label: '班级', value: '2024级1班' },
  { label: '学制', value: '四年' },
  { label: '入学日期', value: '2024-09-01' },
  { label: '预计毕业', value: '2028-06-30' },
  { label: '培养层次', value: '本科' },
  { label: '学籍状态', value: '在籍（注册）' },
]

const REGISTRATION_RECORDS = [
  { semester: '2024-2025 第一学期', date: '2024-09-01', status: '已注册', method: '线上注册' },
  { semester: '2024-2025 第二学期', date: '2025-02-24', status: '已注册', method: '线上注册' },
  { semester: '2025-2026 第一学期', date: '2025-09-01', status: '已注册', method: '线上注册' },
  { semester: '2025-2026 第二学期', date: '2026-02-23', status: '已注册', method: '线上注册' },
]

const STATUS_CHANGES = [
  { date: '2024-09-01', type: '入学', desc: '入学注册，学籍状态为在籍', handler: '教务处' },
]

const CERTIFICATES = [
  { type: '在读证明', applyDate: '2026-03-15', status: '已出具', download: true },
  { type: '学籍证明', applyDate: '2026-01-10', status: '已出具', download: true },
]

export default function StudentStatusPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        tag="学籍"
        title="学籍管理"
        desc="学籍信息、注册状态、异动申请在线办理，证明开具一键申请"
      />

      <div className={styles.pageContent}>
        <div className="container">
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statLabel}>学籍状态</div>
              <div className={styles.statValue} style={{ fontSize: 22 }}>在籍（注册）</div>
              <div className={styles.statSub}>2025-2026第二学期已注册</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statLabel}>年级</div>
              <div className={styles.statValue}>大二</div>
              <div className={styles.statSub}>2024级本科生</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statLabel}>在校时间</div>
              <div className={styles.statValue}>1年7月</div>
              <div className={styles.statSub}>2024.09入学</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statLabel}>已注册学期</div>
              <div className={styles.statValue}>4</div>
              <div className={styles.statSub}>连续注册无中断</div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardTitle}>
              <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
              基本信息
            </div>
            <div className={styles.infoList}>
              {STUDENT_INFO.map((item, i) => (
                <div key={i} className={styles.infoItem}>
                  <span className={styles.infoLabel}>{item.label}</span>
                  <span className={styles.infoValue}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardTitle}>
              <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              注册记录
            </div>
            <div className={styles.tableWrapper}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>学期</th>
                    <th>注册日期</th>
                    <th>注册方式</th>
                    <th>状态</th>
                  </tr>
                </thead>
                <tbody>
                  {REGISTRATION_RECORDS.map((r, i) => (
                    <tr key={i}>
                      <td style={{ fontWeight: 500 }}>{r.semester}</td>
                      <td>{r.date}</td>
                      <td>{r.method}</td>
                      <td><span className={`${styles.badge} ${styles.badgeGreen}`}>{r.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardTitle}>
              <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
              学籍异动记录
            </div>
            <div className={styles.tableWrapper}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>日期</th>
                    <th>类型</th>
                    <th>描述</th>
                    <th>处理部门</th>
                  </tr>
                </thead>
                <tbody>
                  {STATUS_CHANGES.map((c, i) => (
                    <tr key={i}>
                      <td>{c.date}</td>
                      <td><span className={`${styles.badge} ${styles.badgeBlue}`}>{c.type}</span></td>
                      <td>{c.desc}</td>
                      <td>{c.handler}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardTitle}>
              <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              证明开具
            </div>
            <div className={styles.tableWrapper}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>证明类型</th>
                    <th>申请日期</th>
                    <th>状态</th>
                    <th>操作</th>
                  </tr>
                </thead>
                <tbody>
                  {CERTIFICATES.map((c, i) => (
                    <tr key={i}>
                      <td style={{ fontWeight: 500 }}>{c.type}</td>
                      <td>{c.applyDate}</td>
                      <td><span className={`${styles.badge} ${styles.badgeGreen}`}>{c.status}</span></td>
                      <td><button className={styles.btnOutline} style={{ padding: '4px 12px', fontSize: 12 }}>下载</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div style={{ marginTop: 16 }}>
              <button className={styles.btnPrimary}>
                <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" style={{ width: 16, height: 16 }}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
                申请证明
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
