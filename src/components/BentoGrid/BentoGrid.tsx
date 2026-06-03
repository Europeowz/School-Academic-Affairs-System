import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal'
import styles from './BentoGrid.module.css'

interface BentoCardData {
  tag: string
  title: string
  desc: string
  image: string
  alt: string
  href: string
  wide?: boolean
}

const CARDS: BentoCardData[] = [
  {
    tag: '核心功能',
    title: '课程表查询',
    desc: '实时查看本学期课表安排，支持按周次、教室、教师多维度筛选',
    image: '/images/laptop-student.jpg',
    alt: '天津理工大学校园建筑',
    href: '/courses',
    wide: true,
  },
  {
    tag: '查询',
    title: '成绩查询',
    desc: '历年成绩、GPA 统计与学分完成进度',
    image: '/images/classroom.jpg',
    alt: '天津理工大学校园建筑',
    href: '/grades',
  },
  {
    tag: '考试',
    title: '考试安排',
    desc: '期末考试时间、地点、座位号一键查看',
    image: '/images/data-dashboard.jpg',
    alt: '天津理工大学校园蓝调',
    href: '/exams',
  },
  {
    tag: '选课',
    title: '选课中心',
    desc: '通识课、专业课在线选退，实时余量查询',
    image: '/images/library-study.jpg',
    alt: '天津理工大学校园建筑',
    href: '/course-selection',
  },
  {
    tag: '学籍',
    title: '学籍管理',
    desc: '学籍信息、注册状态、异动申请在线办理',
    image: '/images/graduation.jpg',
    alt: '天津理工大学校园建筑',
    href: '/student-status',
  },
  {
    tag: '资源',
    title: '图书馆服务',
    desc: '馆藏检索、借阅续借、座位预约一站搞定',
    image: '/images/mingli-lake.jpg',
    alt: '天津理工大学校园景色',
    href: '/library',
  },
  {
    tag: '毕业',
    title: '毕业设计',
    desc: '选题、开题、中期、答辩全流程线上管理',
    image: '/images/graduation-ceremony.jpg',
    alt: '天津理工大学毕业典礼',
    href: '/graduation',
  },
  {
    tag: '活动',
    title: '校园活动',
    desc: '第二课堂、社团活动、讲座论坛，丰富校园生活触手可及',
    image: '/images/opening-ceremony.jpg',
    alt: '天津理工大学明理湖马拉松',
    href: '/activities',
    wide: true,
  },
]

export default function BentoGrid() {
  return (
    <section className={styles.section} id="quick-access">
      <div className="container">
        <ScrollReveal>
          <div className={styles.header}>
            <div className={styles.label}>快捷服务</div>
            <h2 className={styles.title}>一键直达常用功能</h2>
            <p className={styles.desc}>
              涵盖课程、考试、成绩、学籍等核心教务功能，为师生提供全方位数字化服务
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal stagger>
          <div className={styles.grid}>
            {CARDS.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className={`${styles.card} ${card.wide ? styles.cardWide : ''}`}
              >
                <div className={styles.cardImage}>
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    sizes={card.wide ? '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw' : '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw'}
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.cardTag}>{card.tag}</div>
                  <div className={styles.cardTitle}>{card.title}</div>
                  <div className={styles.cardDesc}>{card.desc}</div>
                </div>
                <div className={styles.cardArrow}>
                  <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
