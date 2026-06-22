<script setup>
import { ref } from 'vue'

const tagline = '后端为主 · 兼顾前端 · 关注 AI'

const bio = '热爱技术，相信代码的力量可以改变世界。持续学习，持续构建，持续分享。'

const skillCategories = [
  {
    name: '后端',
    icon: '⚙️',
    tags: ['Node.js', 'Python', 'Go', 'PostgreSQL', 'Redis', 'Docker']
  },
  {
    name: '前端',
    icon: '🎨',
    tags: ['React', 'Vue', 'TypeScript', 'Tailwind CSS', 'Next.js']
  },
  {
    name: 'DevOps',
    icon: '🚀',
    tags: ['Docker', 'GitHub Actions', 'Nginx', 'Linux']
  },
  {
    name: 'AI / 数据',
    icon: '🧠',
    tags: ['LangChain', 'OpenAI API', 'RAG', 'Pandas']
  }
]

const currentProject = {
  name: 'wfc-blog',
  desc: '基于 VitePress 构建的个人技术博客，正在持续迭代中',
  status: '🚧 开发中',
  link: 'https://github.com/wfc-hjx/fc-blog'
}

const stats = [
  { label: '文章', value: 12, suffix: '+', icon: '📝' },
  { label: '开源项目', value: 5, suffix: '+', icon: '🔧' },
  { label: '编码年限', value: 5, suffix: '+', icon: '⏳' },
]

const milestones = [
  { year: '2026', title: '博客上线', desc: '正式开始记录技术成长与分享' },
  { year: '2025', title: '全栈转型', desc: '从前端延伸到后端与运维，打通全链路' },
  { year: '2023', title: '前端入门', desc: '写下第一行 HTML/CSS，打开编程大门' },
]

const contacts = [
  { icon: '🐙', label: 'GitHub', link: 'https://github.com/wfc-hjx' },
  { icon: '📧', label: 'Email', link: 'mailto:wfc@example.com' },
  { icon: '💬', label: 'Blog', link: '/' },
]

const hoveredTag = ref('')
</script>

<template>
  <div class="about-page">
    <!-- ===== Hero ===== -->
    <div class="about-hero">
      <div class="about-avatar">W</div>
      <h1 class="about-name">wfc</h1>
      <p class="about-tagline">{{ tagline }}</p>
      <p class="about-bio">{{ bio }}</p>
    </div>

    <!-- ===== Stats ===== -->
    <div class="about-stats">
      <div class="stat-card" v-for="s in stats" :key="s.label">
        <span class="stat-icon">{{ s.icon }}</span>
        <span class="stat-value">{{ s.value }}{{ s.suffix }}</span>
        <span class="stat-label">{{ s.label }}</span>
      </div>
    </div>

    <!-- ===== Current Project ===== -->
    <div class="about-section">
      <h2 class="section-title">📌 当前在做</h2>
      <a :href="currentProject.link" target="_blank" class="project-card">
        <div class="project-card-top">
          <h3 class="project-card-name">{{ currentProject.name }}</h3>
          <span class="project-card-status">{{ currentProject.status }}</span>
        </div>
        <p class="project-card-desc">{{ currentProject.desc }}</p>
      </a>
    </div>

    <!-- ===== Skills ===== -->
    <div class="about-section">
      <h2 class="section-title">🧠 技术栈</h2>
      <div class="skill-categories">
        <div class="skill-cat" v-for="cat in skillCategories" :key="cat.name">
          <h3 class="skill-cat-name">
            <span>{{ cat.icon }}</span>
            <span>{{ cat.name }}</span>
          </h3>
          <div class="skill-tags">
            <span
              class="skill-tag"
              v-for="t in cat.tags"
              :key="t"
              :class="{ hovered: hoveredTag === t }"
              @mouseenter="hoveredTag = t"
              @mouseleave="hoveredTag = ''"
            >{{ t }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- ===== Timeline ===== -->
    <div class="about-section">
      <h2 class="section-title">📅 历程</h2>
      <div class="timeline">
        <div class="timeline-item" v-for="m in milestones" :key="m.year">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <span class="timeline-year">{{ m.year }}</span>
            <h4 class="timeline-title">{{ m.title }}</h4>
            <p class="timeline-desc">{{ m.desc }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- ===== Contact ===== -->
    <div class="about-section">
      <h2 class="section-title">📬 联系我</h2>
      <div class="contact-cards">
        <a
          v-for="c in contacts"
          :key="c.label"
          :href="c.link"
          :target="c.link.startsWith('http') ? '_blank' : undefined"
          class="contact-card"
        >
          <span class="contact-card-icon">{{ c.icon }}</span>
          <span class="contact-card-label">{{ c.label }}</span>
        </a>
      </div>
    </div>

    <div class="about-footer">
      ✨ 感谢来访
    </div>
  </div>
</template>

<style scoped>
.about-page {
  max-width: 760px;
  margin: 0 auto;
  padding: 56px 24px 64px;
}

/* ===== Hero ===== */
.about-hero {
  text-align: center;
  margin-bottom: 48px;
}

.about-avatar {
  width: 88px;
  height: 88px;
  border-radius: 50%;
  background: linear-gradient(135deg, #4f46e5, #7c3aed, #06b6d4);
  color: #fff;
  font-size: 36px;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  box-shadow: 0 8px 32px rgba(79, 70, 229, 0.3);
  transition: transform 0.3s ease;
}

.about-avatar:hover {
  transform: scale(1.05) rotate(-3deg);
}

.about-name {
  font-size: 36px;
  font-weight: 800;
  background: linear-gradient(120deg, #4f46e5 20%, #06b6d4 80%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0 0 10px;
}

.about-tagline {
  font-size: 15px;
  font-weight: 600;
  color: var(--vp-c-brand-1);
  margin: 0 0 12px;
  letter-spacing: 0.06em;
  opacity: 0.85;
}

.about-bio {
  font-size: 15px;
  color: var(--vp-c-text-2);
  line-height: 1.8;
  margin: 0;
  max-width: 420px;
  margin: 0 auto;
}

/* ===== Stats ===== */
.about-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-bottom: 56px;
}

.stat-card {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  padding: 22px 12px;
  text-align: center;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.stat-card:hover {
  border-color: var(--vp-c-brand-1);
  box-shadow: var(--vp-shadow-3);
  transform: translateY(-2px);
}

.stat-icon {
  font-size: 24px;
}

.stat-value {
  font-size: 28px;
  font-weight: 800;
  color: var(--vp-c-brand-1);
  font-variant-numeric: tabular-nums;
}

.stat-label {
  font-size: 13px;
  color: var(--vp-c-text-2);
  font-weight: 500;
}

/* ===== Sections ===== */
.about-section {
  margin-bottom: 48px;
}

.section-title {
  font-size: 22px;
  font-weight: 700;
  margin: 0 0 24px;
  padding-bottom: 12px;
  border-bottom: 2px solid var(--vp-c-divider);
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 60px;
  height: 2px;
  background: linear-gradient(90deg, #4f46e5, #06b6d4);
  border-radius: 1px;
}

/* ===== Current Project Card ===== */
.project-card {
  display: block;
  padding: 24px 28px;
  border-radius: 16px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  text-decoration: none;
  transition: all 0.3s ease;
}

.project-card:hover {
  border-color: var(--vp-c-brand-1);
  box-shadow: var(--vp-shadow-3);
  transform: translateY(-2px);
}

.project-card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
}

.project-card-name {
  font-size: 18px;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin: 0;
}

.project-card-status {
  font-size: 12px;
  font-weight: 600;
  color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
  padding: 3px 12px;
  border-radius: 20px;
}

.project-card-desc {
  font-size: 14px;
  color: var(--vp-c-text-2);
  margin: 0;
  line-height: 1.6;
}

/* ===== Skills ===== */
.skill-categories {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.skill-cat-name {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin: 0 0 10px;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.skill-tag {
  display: inline-block;
  padding: 5px 14px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 500;
  color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
  border: 1px solid transparent;
  transition: all 0.25s ease;
  cursor: default;
}

.skill-tag.hovered,
.skill-tag:hover {
  background: var(--vp-c-brand-1);
  color: #fff;
  border-color: var(--vp-c-brand-1);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.25);
}

/* ===== Timeline ===== */
.timeline {
  position: relative;
  padding-left: 24px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 6px;
  top: 8px;
  bottom: 8px;
  width: 2px;
  background: var(--vp-c-divider);
  border-radius: 1px;
}

.timeline-item {
  position: relative;
  padding-left: 24px;
  padding-bottom: 28px;
}

.timeline-item:last-child {
  padding-bottom: 0;
}

.timeline-dot {
  position: absolute;
  left: -21px;
  top: 6px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--vp-c-brand-1);
  border: 2px solid var(--vp-c-bg);
  box-shadow: 0 0 0 2px var(--vp-c-brand-1);
}

.timeline-year {
  display: inline-block;
  font-size: 12px;
  font-weight: 700;
  color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
  padding: 2px 10px;
  border-radius: 12px;
  margin-bottom: 6px;
  letter-spacing: 0.05em;
}

.timeline-title {
  font-size: 16px;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin: 6px 0 4px;
}

.timeline-desc {
  font-size: 14px;
  color: var(--vp-c-text-2);
  margin: 0;
  line-height: 1.6;
}

/* ===== Contact Cards ===== */
.contact-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

.contact-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 20px 12px;
  border-radius: 14px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  text-decoration: none;
  transition: all 0.3s ease;
}

.contact-card:hover {
  border-color: var(--vp-c-brand-1);
  box-shadow: var(--vp-shadow-2);
  transform: translateY(-2px);
}

.contact-card-icon {
  font-size: 28px;
}

.contact-card-label {
  font-size: 13px;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

/* ===== Footer ===== */
.about-footer {
  text-align: center;
  font-size: 14px;
  color: var(--vp-c-text-3);
  margin-top: 0;
}
</style>
