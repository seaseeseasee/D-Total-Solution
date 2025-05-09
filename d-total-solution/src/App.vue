<script setup>
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Home from './components/Home.vue'
import Portfolio from './components/Portfolio.vue'
import Partner from './components/Partner.vue'
import Contact from './components/Contact.vue'

</script>

<template>
  <Header></Header>
  <Home></Home>
  <Portfolio></Portfolio>
  <Partner></Partner>
  <Contact></Contact>
  <Footer></Footer>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
