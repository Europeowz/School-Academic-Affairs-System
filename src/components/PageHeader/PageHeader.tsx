import Link from 'next/link'
import styles from './PageHeader.module.css'

interface PageHeaderProps {
  tag: string
  title: string
  desc: string
}

export default function PageHeader({ tag, title, desc }: PageHeaderProps) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.inner}>
          <Link href="/" className={styles.back}>
            <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            返回首页
          </Link>
          <div className={styles.tag}>{tag}</div>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.desc}>{desc}</p>
        </div>
      </div>
    </section>
  )
}
