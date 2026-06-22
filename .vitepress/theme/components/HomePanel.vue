<script setup>
import { ref } from 'vue'

const tagline = '记录技术探索，分享编程心得'

const techTags = [
  'Node.js', 'Python', 'React', 'Vue', 'TypeScript',
  'Docker', 'PostgreSQL', 'Go', 'Tailwind CSS'
]

const recentArticles = [
  { title: 'Hello World', desc: '欢迎来到我的技术博客，了解本站的初衷与定位', link: '/fc-blog/articles/life/hello-world', date: '2026-06', tag: '随笔' },
  { title: 'Markdown 写作指南', desc: 'VitePress 内置 Markdown 扩展：语法高亮、信息框、折叠面板、Emoji', link: '/fc-blog/articles/frontend/markdown-guide', date: '2026-06', tag: '教程' },
]

const projects = [
  {
    name: 'fc-blog',
    desc: '基于 VitePress 的个人技术博客，蓝紫科技风主题',
    link: 'https://github.com/wfc-hjx/fc-blog',
    tag: 'VitePress',
    stars: '⭐'
  },
]
</script>

<template>
  <div class="home-page">
    <!-- ===== Hero ===== -->
    <section class="home-hero">
      <div class="hero-glow"></div>
      <h1 class="hero-name">wfc-blog</h1>
      <p class="hero-text">Code &amp; Beyond</p>
      <p class="hero-tagline">{{ tagline }}</p>

      <!-- 技术标签 -->
      <div class="hero-tags">
        <span class="hero-tag" v-for="t in techTags" :key="t">{{ t }}</span>
      </div>

      <div class="hero-actions">
        <a href="/fc-blog/articles/life/hello-world" class="hero-btn hero-btn-brand">📝 开始阅读</a>
        <a href="/fc-blog/about" class="hero-btn hero-btn-alt">🙋 关于我</a>
      </div>
    </section>

    <!-- ===== Recent Articles ===== -->
    <section class="home-section">
      <h2 class="section-title">📝 最近文章</h2>
      <div class="article-cards">
        <a
          v-for="a in recentArticles"
          :key="a.title"
          :href="a.link"
          class="article-card"
        >
          <div class="article-card-top">
            <span class="article-tag">{{ a.tag }}</span>
            <span class="article-date">{{ a.date }}</span>
          </div>
          <h3 class="article-card-title">{{ a.title }}</h3>
          <p class="article-card-desc">{{ a.desc }}</p>
        </a>
      </div>
    </section>

    <!-- ===== Projects ===== -->
    <section class="home-section">
      <h2 class="section-title">🔧 开源项目</h2>
      <div class="project-cards">
        <a
          v-for="p in projects"
          :key="p.name"
          :href="p.link"
          target="_blank"
          class="project-card"
        >
          <div class="project-card-top">
            <h3 class="project-card-name">{{ p.name }}</h3>
            <span class="project-card-star">{{ p.stars }}</span>
          </div>
          <p class="project-card-desc">{{ p.desc }}</p>
          <span class="project-card-tag">{{ p.tag }}</span>
        </a>
      </div>
    </section>

    <div class="home-footer">
      ✨ 持续更新中
    </div>
  </div>
</template>

<style scoped>
.home-page {
  max-width: 820px;
  margin: 0 auto;
  padding: 0 24px 64px;
}

/* ===== Hero ===== */
.home-hero {
  text-align: center;
  padding: 72px 0 56px;
  position: relative;
}

.hero-name {
  font-size: 48px;
  font-weight: 800;
  background: linear-gradient(120deg, #4f46e5 20%, #7c3aed 50%, #06b6d4 80%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0 0 12px;
  line-height: 1.2;
}

.hero-text {
  font-size: 24px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0 0 12px;
}

.hero-tagline {
  font-size: 16px;
  color: var(--vp-c-text-2);
  margin: 0 0 28px;
}

/* 技术标签云 */
.hero-tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  margin-bottom: 36px;
}

.hero-tag {
  display: inline-block;
  padding: 5px 16px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 500;
  color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
  border: 1px solid transparent;
  transition: all 0.25s ease;
  cursor: default;
}

.hero-tag:hover {
  background: var(--vp-c-brand-1);
  color: #fff;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.25);
}

/* 按钮 */
.hero-actions {
  display: flex;
  gap: 14px;
  justify-content: center;
}

.hero-btn {
  display: inline-flex;
  align-items: center;
  padding: 12px 28px;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.hero-btn-brand {
  background: var(--vp-c-brand-1);
  color: #fff;
}

.hero-btn-brand:hover {
  background: var(--vp-c-brand-2);
  transform: translateY(-1px);
  box-shadow: 0 4px 16px rgba(79, 70, 229, 0.3);
}

.hero-btn-alt {
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  border: 1px solid var(--vp-c-divider);
}

.hero-btn-alt:hover {
  border-color: var(--vp-c-brand-1);
  transform: translateY(-1px);
  box-shadow: var(--vp-shadow-2);
}

/* ===== Section ===== */
.home-section {
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

/* ===== Article Cards ===== */
.article-cards {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.article-card {
  display: block;
  padding: 22px 28px;
  border-radius: 14px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  text-decoration: none;
  transition: all 0.3s ease;
}

.article-card:hover {
  border-color: var(--vp-c-brand-1);
  box-shadow: var(--vp-shadow-3);
  transform: translateY(-2px);
}

.article-card-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.article-tag {
  font-size: 11px;
  font-weight: 700;
  color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
  padding: 2px 10px;
  border-radius: 10px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.article-date {
  font-size: 12px;
  color: var(--vp-c-text-3);
}

.article-card-title {
  font-size: 18px;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin: 0 0 6px;
}

.article-card-desc {
  font-size: 14px;
  color: var(--vp-c-text-2);
  margin: 0;
  line-height: 1.6;
}

/* ===== Project Cards ===== */
.project-cards {
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
}

@media (min-width: 640px) {
  .project-cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

.project-card {
  display: block;
  padding: 22px 26px;
  border-radius: 14px;
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
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.project-card-name {
  font-size: 18px;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin: 0;
}

.project-card-star {
  font-size: 13px;
  color: var(--vp-c-text-2);
}

.project-card-desc {
  font-size: 14px;
  color: var(--vp-c-text-2);
  margin: 0 0 12px;
  line-height: 1.6;
}

.project-card-tag {
  display: inline-block;
  font-size: 11px;
  font-weight: 600;
  color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
  padding: 2px 10px;
  border-radius: 10px;
}

/* ===== Footer ===== */
.home-footer {
  text-align: center;
  font-size: 14px;
  color: var(--vp-c-text-3);
  margin-top: 8px;
}
</style>
