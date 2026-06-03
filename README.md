<div align="center">
  <img src="./public/images/tjut-logo.png" alt="Logo" width="80">

  # 🎓 智慧教务管理系统

  **一个以天津理工大学为示例的现代化教务系统前端模板**<br/>
  可通过替换图片和修改文案快速适配任意高校

  <img src="https://img.shields.io/badge/Next.js-14.2-black?logo=next.js" alt="Next.js">
  <img src="https://img.shields.io/badge/React-18-61DAFB?logo=react" alt="React">
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript" alt="TypeScript">
  <img src="https://img.shields.io/badge/CSS_Modules-000000?logo=cssmodules" alt="CSS Modules">
  <img src="https://img.shields.io/badge/license-MIT-green" alt="License">
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?logo=tailwindcss" alt="Tailwind">
</div>

---

## 📖 目录

- [项目定位](#项目定位)
- [页面展示](#页面展示)
- [技术栈](#技术栈)
- [项目结构](#项目结构)
- [快速开始](#快速开始)
- [适配你的学校](#适配你的学校)
  - [1. 替换学校 Logo 和名称](#1-替换学校-logo-和名称)
  - [2. 替换校园图片](#2-替换校园图片)
  - [3. 修改 Mock 数据](#3-修改-mock-数据)
  - [4. 修改品牌色和字体](#4-修改品牌色和字体)
- [页面功能详解](#页面功能详解)
- [组件体系](#组件体系)
- [图片资源清单](#图片资源清单)
- [定制检查清单](#定制检查清单)

---

## 项目定位

这不是一个与后端对接的生产系统，而是一个**高保真的教务系统前端模板**。它的设计目标是：

- 🎨 **展示用**——演示一个完整的教务系统应该有哪些页面和功能模块
- 🔧 **模板化**——任何高校拿过去，换一套图片、改一下文案，就能作为自己学校教务系统的前端起点
- 📚 **学习用**——展示 Next.js App Router、CSS Modules、组件化设计在实际项目中的运用

当前以**天津理工大学（TJUT）**为示例载体，包含真实的校园图片、校徽和符合该校特色的 mock 数据。

---

## 页面展示

系统包含 **10 个页面**，分为三种布局形态：

### 🏠 首页型（暗色导航栏）

| 路由 | 页面 | 说明 |
|------|------|------|
| `/` | 首页 | 完整的产品落地页：Hero 大图、Bento 功能网格、公告日历、特色介绍、CTA、Footer |

### 📋 控制台型（蓝色系统导航栏）

| 路由 | 页面 | 核心数据 |
|------|------|---------|
| `/dashboard` | 控制台 | 我的应用、学业信息（成绩/考试/课程/课表）、公告消息、学习日程 |
| `/courses` | 课程查询 | 周课表、课程详情、学分统计（6门课 / 24周学时 / 21总学分） |
| `/grades` | 成绩查询 | 成绩明细（平时/期中/期末/总评/GPA）、GPA 历史趋势、学分完成进度 |
| `/exams` | 考试安排 | 待考列表（6场）、历史考试记录、考试通知 |
| `/course-selection` | 选课中心 | 待选课程（10门）、已选课程（2门）、选课阶段（4轮） |
| `/student-status` | 学籍管理 | 学生基本信息、学籍注册记录、状态变更历史、证件管理 |

### 📄 独立页面型

| 路由 | 页面 | 核心数据 |
|------|------|---------|
| `/graduation` | 毕业设计 | 论文选题、6个里程碑进度、提交记录、可选题目列表 |
| `/library` | 图书馆 | 当前借阅（3本）、座位预约（5区）、新书推荐（5本）、检索历史 |
| `/activities` | 校园活动 | 近期活动（5场）、参与记录（4条）、社团（5个）、第二课堂学分 |

所有页面均使用**纯前端 mock 数据**，无后端依赖，`npm run dev` 即可查看全部效果。

---

## 技术栈

```
┌────────────────────────────────────────────┐
│                Next.js 14 (App Router)      │
│                                             │
│  ┌──────────────────────────────────────┐  │
│  │           React 18 + TypeScript      │  │
│  │                                      │  │
│  │  ┌────────────┐  ┌────────────────┐  │  │
│  │  │ CSS Modules │  │ Tailwind CSS   │  │  │
│  │  │ (核心样式)   │  │ (辅助工具类)    │  │  │
│  │  └────────────┘  └────────────────┘  │  │
│  │                                      │  │
│  │  ┌────────────────────────────────┐  │  │
│  │  │ 10 页面 / 12 组件 / 零 API 调用 │  │  │
│  │  │ 纯静态前端 / 无状态管理库       │  │  │
│  │  └────────────────────────────────┘  │  │
│  └──────────────────────────────────────┘  │
│                                             │
│  Noto Sans SC（中文字体）+ Geist（英文/数字） │
│  Google Fonts                               │
└────────────────────────────────────────────┘
```

| 类别 | 选型 | 说明 |
|------|------|------|
| 框架 | Next.js 14.2 | App Router、文件系统路由 |
| 语言 | TypeScript 5 | 类型安全 |
| 样式 | CSS Modules | 组件级隔离，无样式冲突 |
| 辅助 | Tailwind CSS 3.4 | 原子类辅助间距、排版 |
| 字体 | Noto Sans SC + Geist | 中英文混排最佳实践 |
| 动画 | IntersectionObserver | 滚动入场动画，零依赖 |

---

## 项目结构

```
tjut-edu-react/
├── README.md                         # 本说明文档
├── package.json                      # 项目配置与依赖
├── tsconfig.json                     # TypeScript 配置
├── next.config.mjs                   # Next.js 配置
├── tailwind.config.ts                # Tailwind 配置
│
├── public/
│   └── images/                       # 🖼️ 所有图片资源
│       ├── tjut-logo.png             # 🔧 校徽（替换此项即可换 Logo）
│       ├── hero-campus.jpg           # 🔧 首页 Hero 校园全景
│       ├── *.jpg / *.png             # 🔧 各页面功能配图（共 14 张）
│       ├── raw/                      # 📦 备用图片素材库（~190 张）
│       └── verify/                   # 📦 验证/处理后的图片
│
└── src/
    ├── app/                          # 📄 页面路由（App Router）
    │   ├── layout.tsx                # 根布局（字体、元数据）
    │   ├── page.tsx                  # 首页
    │   ├── globals.css               # 全局设计 Token（品牌色、字体）
    │   ├── subpage.module.css        # 子页面共享样式
    │   ├── dashboard/                # 控制台
    │   ├── courses/                  # 课程查询
    │   ├── grades/                   # 成绩查询
    │   ├── exams/                    # 考试安排
    │   ├── course-selection/         # 选课中心
    │   ├── student-status/           # 学籍管理
    │   ├── graduation/               # 毕业设计
    │   ├── library/                  # 图书馆
    │   └── activities/               # 校园活动
    │
    └── components/                   # 🧩 通用组件库（12 个）
        ├── Navbar/                   # 首页导航栏（暗色）
        ├── SysNavbar/                # 系统导航栏（蓝色）
        ├── Hero/                     # 首页 Hero 区域
        ├── BentoGrid/                # 功能入口 Bento 卡片网格
        ├── Announcements/            # 公告列表
        ├── Calendar/                 # 交互式日历
        ├── Features/                 # 特色功能介绍
        ├── CTA/                      # 行动号召区块
        ├── Footer/                   # 页脚
        ├── PageHeader/               # 子页面统一头部
        ├── ScrollReveal/             # 滚动入场动画
        └── Toast/                    # 全局提示组件（预留）
```

---

## 快速开始

**环境要求**：Node.js 18+

```bash
# 1. 安装依赖
npm install

# 2. 启动开发服务器
npm run dev

# 3. 浏览器打开 http://localhost:3000
```

构建生产版本：

```bash
npm run build
npm run start
```

---

## 适配你的学校

这是本项目的核心价值——通过**换图片 + 改数据**，将它变成任何学校的教务系统模板。以下按优先级排列修改顺序。

### 1. 替换学校 Logo 和名称

**替换校徽：**

```
public/images/tjut-logo.png → 你的学校 Logo（建议 80×80 以上，PNG 透明底）
```

**批量修改学校名称：** 全局搜索以下关键词并替换：

| 搜索词 | 替换为 | 涉及文件 |
|--------|--------|---------|
| `天津理工` | 你的学校名 | Navbar、Footer、Hero、PageHeader 等 |
| `TJUT` | 你的学校英文缩写 | layout.tsx |
| `天理` | 你的学校简称 | Footer 等 |

### 2. 替换校园图片

**14 张核心图片的完整替换映射：**

| 当前文件 | 尺寸建议 | 用于何处 |
|---------|---------|---------|
| `hero-campus.jpg` | 1200×800 | 首页 Hero 主视觉 |
| `laptop-student.jpg` | 600×400 | 课程表查询入口卡片 |
| `classroom.jpg` | 600×400 | 成绩查询入口卡片 |
| `data-dashboard.jpg` | 600×400 | 考试安排入口卡片 |
| `library-study.jpg` | 600×400 | 选课中心入口卡片 |
| `graduation.jpg` | 600×400 | 学籍管理入口卡片 |
| `mingli-lake.jpg` | 600×400 | 图书馆服务入口卡片 |
| `graduation-ceremony.jpg` | 600×400 | 毕业设计入口卡片 |
| `opening-ceremony.jpg` | 600×400 | 校园活动入口卡片 |
| `campus-activity.jpg` | 800×500 | 特色功能：智慧排课 |
| `grad-feature.jpg` | 800×500 | 特色功能：毕业流程数字化 |
| `data-feature.jpg` | 800×500 | 特色功能：数据驱动决策 |

**💡 提示**：`public/images/raw/` 目录下还存放了约 190 张天津理工大学的校园照片（教学楼、明理湖、运动会、毕业典礼等），你可以从中挑选图片直接复制到上层目录使用，或者参考它们的尺寸和风格来准备你自己学校的图片。

### 3. 修改 Mock 数据

所有展示数据以常量数组/对象形式硬编码在页面文件中。搜索以下变量名即可定位：

| 数据内容 | 所在文件 | 关键变量名 |
|---------|---------|-----------|
| 公告列表 | `components/Announcements/Announcements.tsx` | `ANNOUNCEMENTS` |
| Bento 卡片 | `components/BentoGrid/BentoGrid.tsx` | `CARDS` |
| 课程安排 | `app/courses/page.tsx` | `SCHEDULE` |
| 成绩数据 | `app/grades/page.tsx` | `GRADES`、`GPA_HISTORY` |
| 考试列表 | `app/exams/page.tsx` | `EXAMS`、`PAST_EXAMS`、`NOTICES` |
| 选课信息 | `app/course-selection/page.tsx` | `COURSES_AVAILABLE`、`MY_SELECTIONS`、`SELECTION_PHASES` |
| 学生信息 | `app/student-status/page.tsx` | `STUDENT_INFO`、`REGISTRATION_RECORDS`、`STATUS_CHANGES`、`CERTIFICATES` |
| 毕设数据 | `app/graduation/page.tsx` | `THESIS_INFO`、`MILESTONES`、`SUBMISSIONS`、`RECENT_TOPICS` |
| 图书馆 | `app/library/page.tsx` | `BORROWED_BOOKS`、`NEW_BOOKS`、`SEAT_RESERVATION` |
| 校园活动 | `app/activities/page.tsx` | `UPCOMING_ACTIVITIES`、`MY_ACTIVITIES`、`CLUBS`、`SECOND_CLASSROOM` |

**需要替换的学生身份信息：**

| 搜索 | 替换为 | 出现位置 |
|------|--------|---------|
| `李同学` | 示例学生姓名 | `student-status/page.tsx` |
| `2024000001` | 示例学号 | `student-status/page.tsx` |
| `2024000002` | 示例学号 | `SysNavbar/SysNavbar.tsx` |

### 4. 修改品牌色和字体

**品牌色**定义在 `src/app/globals.css` 的 `:root` 块中：

```css
--primary: #0052A5;       /* TJUT 蓝 → 改成你的学校主色 */
--primary-dark: #003d7a;   /* 深色变体 */
--primary-light: #e8f2fb;  /* 浅色变体（背景用） */
--bg-page: #faf9f7;        /* 页面底色 */
```

**字体**在 `src/app/layout.tsx` 中通过 Google Fonts 加载：

```tsx
// 当前加载 Noto Sans SC（中文）+ Geist（英文）
// 替换为你的学校字体
<link href="https://fonts.googleapis.com/css2?family=..." />
```

---

## 页面功能详解

<details>
<summary><b>🏠 首页 /</b></summary>

由 7 个区块垂直拼接的完整落地页：

1. **Navbar**：固定顶部，滚动时背景由透明渐变至深色，移动端支持汉堡菜单
2. **Hero**：大标题「智慧教务 赋能成长」+ 校园全景图 + 三项统计数据（在校生/教职工/专业数）
3. **BentoGrid**：8 张不规则网格卡片，每张有图片、标签、标题、描述，hover 时显示箭头
4. **Announcements + Calendar**：双栏布局，左侧公告列表（紧急/选课/学籍/教务/活动标签），右侧交互月历
5. **Features**：3 组图文交替的特色介绍（智慧排课、毕业流程数字化、数据驱动决策），每组含清单
6. **CTA**：深色背景的行动号召「开始使用教务系统」→ 链接到 `/dashboard`
7. **Footer**：四栏（品牌介绍、教务服务链接、学生服务链接、联系方式）

所有区块均带滚动入场动画。
</details>

<details>
<summary><b>📊 控制台 /dashboard</b></summary>

登录后的主工作台（最复杂的页面）：

- 蓝色 SysNavbar + 面包屑导航
- **我的应用**：6 个占位卡片（空状态展示）
- **学业信息**：4 个 Tab（我的成绩/考试安排/我的课程/我的课表），成绩 Tab 含 4 门课得分及评级徽章
- **系统应用**：6 个 App 图标快捷入口
- **通知公告**：Tab 切换公告/私信
- **学习日程**：4 条日程安排
- 右下角粉色「A+」无障碍按钮
</details>

<details>
<summary><b>📚 课程查询 /courses</b></summary>

- 统计概览：6 门课程 / 24 周学时 / 第 8 周 / 21 总学分
- 周课表：周一至周五 × 5 个时间段表格
- 课程明细表：课程名、教师、教室、学分、时间
</details>

<details>
<summary><b>📈 成绩查询 /grades</b></summary>

- 概览卡片：当前 GPA 3.58 / 加权平均分 84.1 / 累计 89/160 学分
- 成绩明细表：6 门课，含平时/期中/期末/总评/GPA 五项
- GPA 历史趋势：4 个学期数据
- 学分完成进度：必修/选修/通识/实践四个维度
</details>

<details>
<summary><b>✏️ 考试安排 /exams</b></summary>

- 统计：6 场待考 / 12 天考试期 / 5 场闭卷 1 场开卷 / 已通过 4 场
- 待考列表：时间、地点、座位号、考试类型
- 上学期历史考试记录（4 条）
- 考试通知公告（4 条）
</details>

<details>
<summary><b>🎯 选课中心 /course-selection</b></summary>

- 可选课程：10 门，含教师、学分、剩余名额
- 已选课程：2 门
- 选课阶段时间线：4 轮（必修轮次已结束 → 专选轮次已结束 → 通选轮次进行中 → 补退选未开始）
</details>

<details>
<summary><b>👤 学籍管理 /student-status</b></summary>

- 学生基本信息：李同学 / 2024000001 / 计算机科学与技术 / 2024 级
- 学籍注册记录：4 次（每学期一次）
- 状态变更历史
- 证件管理：学生证、校园卡
</details>

<details>
<summary><b>🎓 毕业设计 /graduation</b></summary>

- 论文信息：「基于深度学习的校园交通流量预测系统」
- 6 个里程碑进度：选题 → 开题 → 中期检查 → 论文撰写 → 查重检测 → 答辩
- 提交记录：5 条
- 可选题目列表：5 个
</details>

<details>
<summary><b>📖 图书馆 /library</b></summary>

- 当前借阅：3 本书（含到期倒计时和续借按钮）
- 座位预约：5 个区域可用情况（在馆人数/总座位）
- 新书推荐：5 本（含封面、作者、索书号）
- 检索历史 + 图书馆基本信息
</details>

<details>
<summary><b>🎉 校园活动 /activities</b></summary>

- 近期活动：5 场（明理湖迷你马拉松、2026 届毕业典礼等）
- 我的活动：4 条参与记录
- 社团列表：5 个（含成员数和活动数）
- 第二课堂学分：4 个类别及已获学分
</details>

---

## 组件体系

| 组件 | 类型 | 说明 |
|------|------|------|
| `Navbar` | 客户端 | 固定顶部暗色导航栏，滚动感知，移动端汉堡菜单 |
| `SysNavbar` | 客户端 | 蓝色系统导航栏，含用户面板、搜索框、主题切换按钮 |
| `Hero` | 服务端 | 首页 Hero 区：标题 + 描述 + 按钮 + 统计数据 + 大图 |
| `BentoGrid` | 服务端 | 8 张不规则网格功能入口卡片，hover 动画 |
| `Announcements` | 服务端 | 公告列表：类型标签（紧急/选课/学籍/教务/活动）+ 日期 |
| `Calendar` | 客户端 | 交互式月历：前后翻页、事件标记 |
| `Features` | 服务端 | 3 组图文交替的特色功能介绍区块 |
| `CTA` | 服务端 | 深色背景行动号召区块 |
| `Footer` | 服务端 | 四栏页脚（品牌 + 链接 + 联系方式） |
| `PageHeader` | 服务端 | 子页面统一头部：返回链接 + 标签 + 标题 + 描述 |
| `ScrollReveal` | 客户端 | 基于 IntersectionObserver 的滚动入场动画 |
| `Toast` | 客户端 | 全局消息提示（已预留，当前未被调用） |

---

## 图片资源清单

### 核心使用的 14 张

```
public/images/
├── tjut-logo.png              # 校徽
├── hero-campus.jpg            # Hero 校园全景
├── laptop-student.jpg         # 课程表查询配图
├── classroom.jpg              # 成绩查询配图
├── data-dashboard.jpg         # 考试安排配图
├── library-study.jpg          # 选课中心配图
├── graduation.jpg             # 学籍管理配图
├── mingli-lake.jpg            # 图书馆服务配图
├── graduation-ceremony.jpg    # 毕业设计配图
├── opening-ceremony.jpg       # 校园活动配图
├── campus-activity.jpg        # 特色功能 1 配图
├── grad-feature.jpg           # 特色功能 2 配图
└── data-feature.jpg           # 特色功能 3 配图
```

### 备用素材库 `raw/`（~190 张）

`public/images/raw/` 包含大量天津理工大学的高清校园素材，未被代码直接引用，可作为替换图片的参考或直接取用：

| 分类 | 数量 | 代表文件 |
|------|------|---------|
| 校园风光 | 40+ | `campus1-*.jpg`、`tjut-local-*.jpg` |
| 毕业典礼 | 30+ | `grad-*.png`、`graduation2023/` 目录 |
| 开学典礼 | 5 | `opening2022/o*.png` |
| 明理湖马拉松 | 6 | `marathon-*.png` |
| 校园建筑 | 10+ | `tianlixiange.png`、`qixin.jpg` |
| Banner 素材 | 5+ | `banner-*.jpg` |
| 其他 | 若干 | `yanjiusheng.png`、`xuexizailushang11.jpg` |

---

## 定制检查清单

将本项目适配为你的学校模板，按顺序执行：

- [ ] **1. 更换校徽**：替换 `public/images/tjut-logo.png`
- [ ] **2. 更换 Hero 大图**：替换 `public/images/hero-campus.jpg`
- [ ] **3. 更换 12 张功能配图**：逐一替换 `public/images/` 下的 `.jpg`/`.png`
- [ ] **4. 修改学校名称**：全局搜索 `天津理工` → 替换为你的学校名
- [ ] **5. 修改品牌色**：`src/app/globals.css` → 改 `--primary` 等 CSS 变量
- [ ] **6. 替换学生姓名学号**：搜索 `李同学` / `2024000001` / `2024000002`
- [ ] **7. 修改 Mock 数据**：逐页面改课程、成绩、考试等静态数据
- [ ] **8. 修改 Footer**：学校地址、电话、邮箱、ICP 备案号
- [ ] **9. 替换页面元数据**：`layout.tsx` 中的 `<title>` 和 `description`
- [ ] **10. （可选）替换字体**：修改 `layout.tsx` 中 Google Fonts 引用
- [ ] **11. 逐页验收**：`npm run dev` → 浏览全部 10 个页面确认修改生效
- [ ] **12. 构建部署**：`npm run build` → 部署 `.next/` 或静态导出

---

## 📄 License

MIT — 自由使用、修改、分发。建议在页脚保留原始项目的致谢链接。
