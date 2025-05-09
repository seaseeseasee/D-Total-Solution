// src/scripts/flexstart.js

import AOS from 'aos'
import GLightbox from 'glightbox'
import Swiper from 'swiper'

export function initFlexStartEffects() {
  window.addEventListener('load', () => {
    toggleScrolled()
    initScrollTop()
    initMobileNavToggle()
    AOS.init({ duration: 600, easing: 'ease-in-out', once: true })
    GLightbox({ selector: '.glightbox' })
    initSwiper()
  })

  document.addEventListener('scroll', () => {
    toggleScrolled()
    toggleScrollTop()
  })
}

function toggleScrolled() {
  const body = document.body
  const header = document.querySelector('#header')
  if (!header) return
  const shouldAdd = window.scrollY > 100 &&
    (header.classList.contains('scroll-up-sticky') ||
     header.classList.contains('sticky-top') ||
     header.classList.contains('fixed-top'))
  body.classList.toggle('scrolled', shouldAdd)
}

function initScrollTop() {
  const scrollTop = document.querySelector('.scroll-top')
  if (!scrollTop) return

  scrollTop.addEventListener('click', (e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  })
}

function toggleScrollTop() {
  const scrollTop = document.querySelector('.scroll-top')
  if (!scrollTop) return
  scrollTop.classList.toggle('active', window.scrollY > 100)
}

function initMobileNavToggle() {
  const toggleBtn = document.querySelector('.mobile-nav-toggle')
  if (!toggleBtn) return

  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('mobile-nav-active')
    toggleBtn.classList.toggle('bi-list')
    toggleBtn.classList.toggle('bi-x')
  })

  document.querySelectorAll('#navmenu a').forEach(link => {
    link.addEventListener('click', () => {
      if (document.body.classList.contains('mobile-nav-active')) {
        document.body.classList.remove('mobile-nav-active')
        toggleBtn.classList.add('bi-list')
        toggleBtn.classList.remove('bi-x')
      }
    })
  })
}

function initSwiper() {
  document.querySelectorAll('.init-swiper').forEach(swiperElement => {
    const configEl = swiperElement.querySelector('.swiper-config')
    if (!configEl) return
    const config = JSON.parse(configEl.innerHTML.trim())
    new Swiper(swiperElement, config)
  })
}
