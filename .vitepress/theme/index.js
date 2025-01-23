import DefaultTheme from 'vitepress/theme'
import './custom.css'
import ColorDemo from '../../components/ColorDemo.vue'
import ColorMixing from '../../components/ColorMixing.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app, router }) {
    app.component('ColorDemo', ColorDemo)
    app.component('ColorMixing', ColorMixing)
    
    // 在 playground 页面隐藏 footer
    if (typeof window !== 'undefined') {
      router.onAfterRouteChanged = (to) => {
        const isPlayground = to?.endsWith('/playground/')
        document.documentElement.classList.toggle('hide-footer', isPlayground)
      }
    }
  }
}
