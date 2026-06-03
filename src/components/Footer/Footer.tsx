import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <div className={styles.brandRow}>
              <img src="/images/tjut-logo.png" alt="天津理工大学" style={{ height: 32, width: 'auto' }} />
              <div className={styles.brandTitle}>天津理工大学</div>
            </div>
            <p>
              天津理工大学教务处负责全校本科教学管理的组织、协调与实施，致力于为师生提供优质的教务服务。
            </p>
          </div>
          <div>
            <div className={styles.colTitle}>教务服务</div>
            <div className={styles.links}>
              <Link href="/courses">课程表查询</Link>
              <Link href="/grades">成绩查询</Link>
              <Link href="/course-selection">选课中心</Link>
              <Link href="/exams">考试安排</Link>
            </div>
          </div>
          <div>
            <div className={styles.colTitle}>学生服务</div>
            <div className={styles.links}>
              <Link href="/student-status">学籍管理</Link>
              <Link href="/graduation">毕业设计</Link>
              <Link href="/student-status">证明开具</Link>
              <Link href="/activities">校园活动</Link>
            </div>
          </div>
          <div>
            <div className={styles.colTitle}>联系我们</div>
            <div className={styles.links}>
              <span>教务处办公室</span>
              <span>电话：022-60216956</span>
              <span>邮箱：jwc@tjut.edu.cn</span>
              <span>办公地点：主楼 A 区 3 层</span>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <span>2026 天津理工大学教务处 版权所有</span>
          <span>津ICP备12003980号-1</span>
        </div>
      </div>
    </footer>
  )
}
