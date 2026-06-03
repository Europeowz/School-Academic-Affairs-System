import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal'
import styles from './CTA.module.css'

export default function CTA() {
  return (
    <section className={styles.section} id="help">
      <div className="container">
        <ScrollReveal>
          <div className={styles.inner}>
            <h2>开始使用教务系统</h2>
            <p>
              使用学号或工号登录，即可享受一站式教务服务。首次登录请使用初始密码，登录后请及时修改。
            </p>
            <Link href="/dashboard" className={styles.btn}>
              立即登录
              <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
