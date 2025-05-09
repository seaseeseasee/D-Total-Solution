import { createApp } from 'vue'
import App from './App.vue'

// CSS
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'aos/dist/aos.css'
import 'glightbox/dist/css/glightbox.min.css'
import 'swiper/css'
import './assets/css/style.css'

// JS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// DOM Effects
import { initFlexStartEffects } from './scripts/flexstart'

// Fancy Effects
import AOS from 'aos'
import PureCounter from "@srexi/purecounterjs"

const app = createApp(App)
app.mount('#app')

AOS.init()
new PureCounter()

// ✅ เรียกใช้ DOM Script หลังโหลดหน้าเสร็จ
window.addEventListener('load', () => {
  initFlexStartEffects()
})
