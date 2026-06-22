// wfc-blog 自定义主题
// 继承 VitePress 默认主题，注入自定义样式与全局组件

import DefaultTheme from 'vitepress/theme'
import AboutPanel from './components/AboutPanel.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('AboutPanel', AboutPanel)
  }
}
