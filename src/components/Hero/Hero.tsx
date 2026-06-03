import Image from 'next/image'
import Link from 'next/link'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.badge}>系统运行正常</div>
        <h1>
          智慧教务
          <br />
          <span className={styles.accent}>赋能成长</span>
        </h1>
        <p className={styles.desc}>
          天津理工大学教务管理系统 — 集课程管理、成绩查询、考试安排、学籍管理于一体的数字化教务平台，为师生提供高效、便捷的一站式服务。
        </p>
        <div className={styles.cta}>
          <Link href="/dashboard" className={`${styles.btnHero} ${styles.btnHeroPrimary}`}>登录系统</Link>
          <a href="#quick-access" className={`${styles.btnHero} ${styles.btnHeroSecondary}`}>
            浏览功能
          </a>
        </div>
        <div className={styles.stats}>
          <div>
            <div className={styles.statNum}>28,000+</div>
            <div className={styles.statLabel}>在校学生</div>
          </div>
          <div>
            <div className={styles.statNum}>1,600+</div>
            <div className={styles.statLabel}>教职工</div>
          </div>
          <div>
            <div className={styles.statNum}>65+</div>
            <div className={styles.statLabel}>本科专业</div>
          </div>
        </div>
      </div>
      <div className={styles.image}>
        <Image
          src="/images/hero-campus.jpg"
          alt="天津理工大学校园全景"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          style={{ objectFit: 'cover' }}
        />
        <div className={styles.imageOverlay}>
          <p>天津理工大学 · 校园全景</p>
        </div>
      </div>
    </section>
  )
}
