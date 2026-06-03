import Image from 'next/image'
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal'
import styles from './Features.module.css'

interface FeatureItem {
  number: string
  title: string
  desc: string
  list: string[]
  image: string
  alt: string
  reverse?: boolean
}

const FEATURES: FeatureItem[] = [
  {
    number: '01',
    title: '智能课程管理',
    desc: '从排课到选课，从调课到停课，全流程线上化管理。智能排课算法自动处理教室冲突、教师时间冲突，大幅提升排课效率。',
    list: [
      '智能排课算法，自动规避冲突',
      '在线调课申请，审批流程透明可追踪',
      '课表实时同步至手机端与桌面端',
    ],
    image: '/images/campus-activity.jpg',
    alt: '天津理工大学教学管理会议',
  },
  {
    number: '02',
    title: '毕业全流程数字化',
    desc: '毕业设计选题、开题报告、中期检查、论文提交、答辩安排全部线上流转，导师与学生实时协作，进度一目了然。',
    list: [
      '选题双向选择，师生互选智能匹配',
      '论文在线提交与查重一体化',
      '答辩安排自动生成，评分在线录入',
    ],
    image: '/images/grad-feature.jpg',
    alt: '天津理工大学毕业答辩评审',
    reverse: true,
  },
  {
    number: '03',
    title: '数据驱动决策',
    desc: '教学数据大屏实时展示选课热度、成绩分布、毕业率趋势等关键指标，为教学管理提供科学决策依据。',
    list: [
      '可视化教学数据大屏',
      '成绩多维分析与异常预警',
      '一键导出统计报表，支持多格式',
    ],
    image: '/images/data-feature.jpg',
    alt: '天津理工大学教学研讨会议',
  },
]

function CheckIcon() {
  return (
    <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}

export default function Features() {
  return (
    <section className={styles.section} id="features">
      <div className="container">
        <ScrollReveal>
          <div className={styles.header}>
            <div className={styles.label}>系统功能</div>
            <h2 className={styles.title}>为教务数字化而生</h2>
            <p className={styles.desc}>
              覆盖教学管理全生命周期，让数据多跑路、师生少跑腿
            </p>
          </div>
        </ScrollReveal>

        {FEATURES.map((feature) => (
          <ScrollReveal key={feature.number}>
            <div className={`${styles.row} ${feature.reverse ? styles.reverse : ''}`}>
              <div className={styles.content}>
                <div className={styles.number}>{feature.number}</div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDesc}>{feature.desc}</p>
                <ul className={styles.list}>
                  {feature.list.map((item) => (
                    <li key={item} className={styles.listItem}>
                      <CheckIcon />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.image}>
                <Image
                  src={feature.image}
                  alt={feature.alt}
                  width={640}
                  height={400}
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
