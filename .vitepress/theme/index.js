import DefaultTheme from 'vitepress/theme'
import './custom.css'
import ColorDemo from '../../components/ColorDemo.vue'
import ColorMixing from '../../components/ColorMixing.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('ColorDemo', ColorDemo)
    app.component('ColorMixing', ColorMixing)
  }
}
