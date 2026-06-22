<script setup>
import { ref, onMounted } from 'vue'

const stats = [
  { label: '文章', value: 12, suffix: '+', icon: '📝' },
  { label: '开源项目', value: 5, suffix: '+', icon: '🔧' },
  { label: '编码年限', value: 5, suffix: '+', icon: '⏳' },
]

const skills = [
  { name: 'React / Vue', level: 90, color: '#4f46e5' },
  { name: 'TypeScript', level: 85, color: '#7c3aed' },
  { name: 'Node.js', level: 80, color: '#06b6d4' },
  { name: 'CSS / Tailwind', level: 88, color: '#8b5cf6' },
  { name: 'Docker / DevOps', level: 70, color: '#6366f1' },
  { name: 'Python', level: 65, color: '#3b82f6' },
]

const milestones = [
  { year: '2026', title: '博客上线', desc: '正式开始记录技术成长与分享' },
  { year: '2025', title: '全栈转型', desc: '从前端延伸到后端与运维，打通全链路' },
  { year: '2023', title: '前端入门', desc: '写下第一行 HTML/CSS，打开编程大门' },
]

const activeSkill = ref(-1)

function progressStyle(sk, i) {
  return {
    width: (activeSkill.value === i ? sk.level : 0) + '%',
    background: sk.color
  }
}
</script>

<template>
  <div class="about-page">
    <!-- Header -->
    <div class="about-header">
      <div class="about-avatar">W</div>
      <h1 class="about-name">wfc</h1>
      <p class="about-role">全栈开发者 · 开源爱好者</p>
      <p class="about-bio">热爱技术，相信代码的力量可以改变世界。<br/>持续学习，持续构建，持续分享。</p>
    </div>

    <!-- Stats -->
    <div class="about-stats">
      <div class="stat-card" v-for="s in stats" :key="s.label">
        <span class="stat-icon">{{ s.icon }}</span>
        <span class="stat-value">{{ s.value }}{{ s.suffix }}</span>
        <span class="stat-label">{{ s.label }}</span>
      </div>
    </div>

    <!-- Skills -->
    <div class="about-section">
      <h2 class="section-title">🛠 技术栈</h2>
      <div class="skills-grid">
        <div
          class="skill-bar-row"
          v-for="(sk, i) in skills"
          :key="sk.name"
          @mouseenter="activeSkill = i"
          @mouseleave="activeSkill = -1"
        >
          <div class="skill-info">
            <span class="skill-name">{{ sk.name }}</span>
            <span class="skill-pct">{{ sk.level }}%</span>
          </div>
          <div class="skill-track">
            <div
              class="skill-fill"
              :class="{ active: activeSkill === i }"
              :style="progressStyle(sk, i)"
            ></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Timeline -->
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

    <!-- Contact -->
    <div class="about-section contact-section">
      <h2 class="section-title">📬 联系我</h2>
      <p class="contact-text">技术交流与建议，欢迎通过以下方式联系</p>
      <div class="contact-links">
        <a href="https://github.com" target="_blank" class="contact-link">
          <span class="contact-icon">🐙</span>
          <span>GitHub</span>
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
  max-width: 720px;
  margin: 0 auto;
  padding: 48px 24px 64px;
}

/* ===== Header ===== */
.about-header {
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
  margin: 0 0 8px;
}

.about-role {
  font-size: 16px;
  color: var(--vp-c-brand-1);
  font-weight: 600;
  margin: 0 0 12px;
  letter-spacing: 0.05em;
}

.about-bio {
  font-size: 15px;
  color: var(--vp-c-text-2);
  line-height: 1.8;
  margin: 0;
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
  padding: 20px 12px;
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

/* ===== Skills ===== */
.skills-grid {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.skill-bar-row {
  cursor: default;
}

.skill-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;
}

.skill-name {
  font-size: 14px;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.skill-pct {
  font-size: 13px;
  color: var(--vp-c-text-2);
  font-variant-numeric: tabular-nums;
}

.skill-track {
  height: 6px;
  background: var(--vp-c-divider);
  border-radius: 3px;
  overflow: hidden;
}

.skill-fill {
  height: 100%;
  border-radius: 3px;
  transition: width 0.8s cubic-bezier(0.25, 0.8, 0.25, 1.2);
}

.skill-bar-row:hover .skill-fill {
  box-shadow: 0 0 12px currentColor;
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

/* ===== Contact ===== */
.contact-section {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  padding: 28px 32px;
}

.contact-text {
  font-size: 14px;
  color: var(--vp-c-text-2);
  margin: 0 0 16px;
}

.contact-links {
  display: flex;
  gap: 12px;
}

.contact-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border-radius: 10px;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  font-size: 14px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  text-decoration: none;
  transition: all 0.3s ease;
}

.contact-link:hover {
  border-color: var(--vp-c-brand-1);
  box-shadow: var(--vp-shadow-2);
  transform: translateY(-1px);
}

.contact-icon {
  font-size: 18px;
}

/* ===== Footer ===== */
.about-footer {
  text-align: center;
  font-size: 14px;
  color: var(--vp-c-text-3);
  margin-top: 8px;
}
</style>
