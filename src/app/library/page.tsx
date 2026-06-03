import PageHeader from '@/components/PageHeader/PageHeader'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import styles from '../subpage.module.css'

const LIBRARY_INFO = [
  { label: '读者类型', value: '本科生' },
  { label: '借阅权限', value: '最多借10册' },
  { label: '借阅期限', value: '30天/册' },
  { label: '续借次数', value: '最多2次' },
  { label: '当前借阅', value: '3册' },
  { label: '欠费金额', value: '¥0.00' },
]

const BORROWED_BOOKS = [
  { title: '算法导论（第3版）', author: 'Thomas H. Cormen 等', barcode: 'TP301/C822', borrowDate: '2026-03-20', dueDate: '2026-04-19', renewCount: 0, status: '即将到期' },
  { title: '深度学习', author: 'Ian Goodfellow 等', barcode: 'TP181/G526', borrowDate: '2026-03-25', dueDate: '2026-04-24', renewCount: 0, status: '正常' },
  { title: 'Python编程：从入门到实践（第3版）', author: 'Eric Matthes', barcode: 'TP311/M437', borrowDate: '2026-04-01', dueDate: '2026-05-01', renewCount: 0, status: '正常' },
]

const SEARCH_HISTORY = [
  { keyword: '机器学习', time: '2026-04-20', results: 156 },
  { keyword: '数据结构', time: '2026-04-18', results: 89 },
  { keyword: '操作系统概念', time: '2026-04-15', results: 23 },
  { keyword: '计算机网络', time: '2026-04-10', results: 67 },
]

const NEW_BOOKS = [
  { title: '大模型时代：ChatGPT和生成式AI时代的必修课', author: '龙志勇', publisher: '电子工业出版社', year: 2024, location: '图书馆3层A区' },
  { title: '大规模语言模型：从理论到实践', author: '张奇 等', publisher: '电子工业出版社', year: 2024, location: '图书馆3层A区' },
  { title: '计算机视觉：算法与应用（第2版）', author: 'Richard Szeliski', publisher: '清华大学出版社', year: 2024, location: '图书馆3层B区' },
  { title: 'Go语言程序设计', author: 'Alan A. A. Donovan', publisher: '机械工业出版社', year: 2024, location: '图书馆2层C区' },
  { title: '现代操作系统（第4版）', author: 'Andrew S. Tanenbaum', publisher: '清华大学出版社', year: 2024, location: '图书馆3层B区' },
]

const SEAT_RESERVATION = [
  { area: '3层A区', floor: '3层', total: 120, available: 18, type: '安静自习区' },
  { area: '3层B区', floor: '3层', total: 80, available: 5, type: '电子阅览区' },
  { area: '2层A区', floor: '2层', total: 150, available: 32, type: '普通自习区' },
  { area: '2层B区', floor: '2层', total: 60, available: 0, type: '小组讨论区' },
  { area: '1层C区', floor: '1层', total: 40, available: 12, type: '休闲阅读区' },
]

export default function LibraryPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        tag="资源"
        title="图书馆服务"
        desc="馆藏检索、借阅续借、座位预约一站搞定，畅享学术资源"
      />

      <div className={styles.pageContent}>
        <div className="container">
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statLabel}>当前借阅</div>
              <div className={styles.statValue}>3</div>
              <div className={styles.statSub}>剩余可借7册</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statLabel}>馆藏总量</div>
              <div className={styles.statValue}>280万+</div>
              <div className={styles.statSub}>纸质图书+电子资源</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statLabel}>今日可用座位</div>
              <div className={styles.statValue}>67</div>
              <div className={styles.statSub}>总座位450个</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statLabel}>电子数据库</div>
              <div className={styles.statValue}>45</div>
              <div className={styles.statSub}>知网/万方/维普等</div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardTitle}>
              <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
              当前借阅
            </div>
            <div className={styles.tableWrapper}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>书名</th>
                    <th>作者</th>
                    <th>索书号</th>
                    <th>借阅日期</th>
                    <th>应还日期</th>
                    <th>续借次数</th>
                    <th>状态</th>
                  </tr>
                </thead>
                <tbody>
                  {BORROWED_BOOKS.map((b, i) => (
                    <tr key={i}>
                      <td style={{ fontWeight: 500 }}>{b.title}</td>
                      <td style={{ fontSize: 13 }}>{b.author}</td>
                      <td style={{ fontSize: 13 }}>{b.barcode}</td>
                      <td>{b.borrowDate}</td>
                      <td>{b.dueDate}</td>
                      <td>{b.renewCount}/2</td>
                      <td>
                        <span className={`${styles.badge} ${b.status === '即将到期' ? styles.badgeYellow : styles.badgeGreen}`}>
                          {b.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div style={{ marginTop: 16, display: 'flex', gap: 12 }}>
              <button className={styles.btnPrimary}>续借选中</button>
              <button className={styles.btnOutline}>全部续借</button>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardTitle}>
              <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              座位预约
            </div>
            <div className={styles.tableWrapper}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>区域</th>
                    <th>楼层</th>
                    <th>类型</th>
                    <th>总座位</th>
                    <th>可用座位</th>
                    <th>操作</th>
                  </tr>
                </thead>
                <tbody>
                  {SEAT_RESERVATION.map((s, i) => (
                    <tr key={i}>
                      <td style={{ fontWeight: 500 }}>{s.area}</td>
                      <td>{s.floor}</td>
                      <td><span className={`${styles.badge} ${styles.badgeBlue}`}>{s.type}</span></td>
                      <td>{s.total}</td>
                      <td style={{ fontWeight: 600, color: s.available > 0 ? 'var(--color-success)' : 'var(--color-error)' }}>{s.available}</td>
                      <td>
                        <button className={styles.btnOutline} style={{ padding: '4px 12px', fontSize: 12 }} disabled={s.available === 0}>
                          {s.available > 0 ? '预约' : '已满'}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardTitle}>
              <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
              新书推荐
            </div>
            <div className={styles.tableWrapper}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>书名</th>
                    <th>作者</th>
                    <th>出版社</th>
                    <th>年份</th>
                    <th>馆藏位置</th>
                  </tr>
                </thead>
                <tbody>
                  {NEW_BOOKS.map((b, i) => (
                    <tr key={i}>
                      <td style={{ fontWeight: 500 }}>{b.title}</td>
                      <td>{b.author}</td>
                      <td style={{ fontSize: 13 }}>{b.publisher}</td>
                      <td>{b.year}</td>
                      <td>{b.location}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardTitle}>
              <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              检索历史
            </div>
            <div className={styles.tableWrapper}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>检索关键词</th>
                    <th>检索时间</th>
                    <th>结果数量</th>
                  </tr>
                </thead>
                <tbody>
                  {SEARCH_HISTORY.map((h, i) => (
                    <tr key={i}>
                      <td style={{ fontWeight: 500, color: 'var(--color-primary)' }}>{h.keyword}</td>
                      <td>{h.time}</td>
                      <td>{h.results} 条</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardTitle}>
              <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              借阅信息
            </div>
            <div className={styles.infoList}>
              {LIBRARY_INFO.map((item, i) => (
                <div key={i} className={styles.infoItem}>
                  <span className={styles.infoLabel}>{item.label}</span>
                  <span className={styles.infoValue}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
