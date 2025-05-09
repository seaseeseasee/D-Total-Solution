
<script setup>
import app1 from '../assets/img/portfolio/app-1.jpg'
import app2 from '../assets/img/portfolio/app-2.jpg'
import app3 from '../assets/img/portfolio/app-3.jpg'

import product1 from '../assets/img/portfolio/product-1.jpg'
import product2 from '../assets/img/portfolio/product-2.jpg'
import product3 from '../assets/img/portfolio/product-3.jpg'

import branding1 from '../assets/img/portfolio/branding-1.jpg'
import branding2 from '../assets/img/portfolio/branding-2.jpg'
import branding3 from '../assets/img/portfolio/branding-3.jpg'

import barger1 from '../assets/img/barger/barger-1.jpg'
import barger2 from '../assets/img/barger/barger-2.jpg'
import barger3 from '../assets/img/barger/barger-3.jpg'
import barger4 from '../assets/img/barger/barger-4.jpg'
import barger5 from '../assets/img/barger/barger-5.jpg'


import books1 from '../assets/img/portfolio/books-1.jpg'
import books2 from '../assets/img/portfolio/books-2.jpg'
import books3 from '../assets/img/portfolio/books-3.jpg'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'

import { onMounted, nextTick } from 'vue'
import '@fancyapps/ui/dist/fancybox/fancybox.css'
import { Fancybox } from '@fancyapps/ui'

// ✅ ผูก fancybox หลัง DOM render เสร็จ
onMounted(() => {
  nextTick(() => {
    Fancybox.bind('[data-fancybox]', { groupAll: true })
  })
})
</script>


<template>
    <!-- Portfolio Section -->
    <section id="portfolio" class="portfolio section">
      <div class="container section-title" data-aos="fade-up">
        <h2>Portfolio</h2>
        <p>Check our latest work</p>
      </div>
                
      <div class="container-xl px-4">
                <div class="row gy-3">
                  <!-- แผ่นที่ 1 -->
                  <div class="col-lg-4 col-md-6">
                    <!-- Lightbox -->
                <div id="dret-lightbox" style="display: none">
                  <div class="d-flex gap-4 flex-wrap justify-content-center align-items-start" style="max-width: 2000px">
                    <!-- Carousel -->
                    <div id="spaCarousel1" class="carousel slide" data-bs-ride="carousel" style="max-width: 700px;">
                      <div class="carousel-inner rounded">
                        <div class="carousel-item active">
                          <img :src="barger1" class="d-block w-100" alt="Barger-1" />
                        </div>
                        <div class="carousel-item">
                          <img :src="barger2" class="d-block w-100" alt="Barger-2" />
                        </div>
                        <div class="carousel-item">
                          <img :src="barger3" class="d-block w-100" alt="Barger-3" />
                        </div>
                      </div>
                      <button class="carousel-control-prev" type="button" data-bs-target="#spaCarousel1" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon"></span>
                      </button>
                      <button class="carousel-control-next" type="button" data-bs-target="#spaCarousel1" data-bs-slide="next">
                        <span class="carousel-control-next-icon"></span>
                      </button>
                    </div>
                    <!-- รายละเอียด -->
                    <div style="max-width: 450px;">
                      <h3>D-OND</h3>
                      <p class="mb-2">software on demand</p>
                      <ul class="text-muted ps-3 mb-0">
                        <li>Phoenix Paper & Pulp PLC: Intranet payment system</li>
                        <li>Freeze Systems Rental</li>
                        <li>Phuket Srisuchard Delivery: Logistic systems</li>
                        <li>Probike: Inventory system</li>
                        <li>TAXI: Call center and taxi management system</li>
                        <li>Thailand Film Office: Intranet film shooting registration</li>
                        <li>One2One: Education solution across 120+ outlets</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <!-- ภาพก่อนกด -->
                <div class="portfolio-content h-100 position-relative">
                  <img :src="barger4" class="img-fluid" alt="Barger-4" />
                  <div class="portfolio-info text-center mt-2">
                    <h4>App 3</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                    <a class="btn btn-primary position-absolute top-50 start-50 translate-middle" data-fancybox data-src="#dret-lightbox" data-type="inline" title="View More">
                      <i class="bi bi-plus-circle fs-4"></i>
                    </a>
                  </div>
                </div>
              </div>

                  <!-- แผ่นที่ 2 -->
                  <div class="col-lg-4 col-md-6">
                    <!-- Lightbox -->
                    <div id="dret-lightbox2" style="display: none">
                      <div class="d-flex gap-4 flex-wrap justify-content-center align-items-start" style="max-width: 2000px">
                        <!-- Carousel -->
                        <div id="spaCarousel2" class="carousel slide" data-bs-ride="carousel" style="max-width: 700px;">
                          <div class="carousel-inner rounded">
                            <div class="carousel-item active">
                              <img :src="product1" class="d-block w-100" alt="Product 1" />
                            </div>
                            <div class="carousel-item">
                              <img :src="product2" class="d-block w-100" alt="Product 2" />
                            </div>
                            <div class="carousel-item">
                              <img :src="product3" class="d-block w-100" alt="Product 3" />
                            </div>
                          </div>
                          <button class="carousel-control-prev" type="button" data-bs-target="#spaCarousel2" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon"></span>
                          </button>
                          <button class="carousel-control-next" type="button" data-bs-target="#spaCarousel2" data-bs-slide="next">
                            <span class="carousel-control-next-icon"></span>
                          </button>
                        </div>
                        <!-- รายละเอียด -->
                        <div style="max-width: 450px;">
                          <h3>D-OND</h3>
                          <p class="mb-2">software on demand</p>
                          <ul class="text-muted ps-3 mb-0">
                            <li>Phoenix Paper & Pulp PLC: Intranet payment system</li>
                            <li>Freeze Systems Rental</li>
                            <li>Phuket Srisuchard Delivery: Logistic systems</li>
                            <li>Probike: Inventory system</li>
                            <li>TAXI: Call center and taxi management system</li>
                            <li>Thailand Film Office: Intranet film shooting registration</li>
                            <li>One2One: Education solution across 120+ outlets</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <!-- ภาพก่อนกด -->
                    <div class="portfolio-content h-100 position-relative">
                      <img :src="product1" class="img-fluid" alt="Product 1" />
                      <div class="portfolio-info text-center mt-2">
                        <h4>Product 1</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur</p>
                        <a class="btn btn-primary position-absolute top-50 start-50 translate-middle" data-fancybox data-src="#dret-lightbox2" data-type="inline" title="View More">
                          <i class="bi bi-plus-circle fs-4"></i>
                        </a>
                      </div>
                    </div>
                  </div>

                  <!-- แผ่นที่ 3 -->
                  <div class="col-lg-4 col-md-6">
                    <!-- Lightbox -->
                    <div id="dret-lightbox3" style="display: none">
                      <div class="d-flex gap-4 flex-wrap justify-content-center align-items-start" style="max-width: 2000px">
                        <!-- Carousel -->
                        <div id="spaCarousel3" class="carousel slide" data-bs-ride="carousel" style="max-width: 700px;">
                          <div class="carousel-inner rounded">
                            <div class="carousel-item active">
                              <img :src="branding1" class="d-block w-100" alt="Branding 1" />
                            </div>
                            <div class="carousel-item">
                              <img :src="branding2" class="d-block w-100" alt="Branding 2" />
                            </div>
                            <div class="carousel-item">
                              <img :src="branding3" class="d-block w-100" alt="Branding 3" />
                            </div>
                          </div>
                          <button class="carousel-control-prev" type="button" data-bs-target="#spaCarousel3" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon"></span>
                          </button>
                          <button class="carousel-control-next" type="button" data-bs-target="#spaCarousel3" data-bs-slide="next">
                            <span class="carousel-control-next-icon"></span>
                          </button>
                        </div>
                        <!-- รายละเอียด -->
                        <div style="max-width: 450px;">
                          <h3>D-OND</h3>
                          <p class="mb-2">software on demand</p>
                          <ul class="text-muted ps-3 mb-0">
                            <li>Phoenix Paper & Pulp PLC: Intranet payment system</li>
                            <li>Freeze Systems Rental</li>
                            <li>Phuket Srisuchard Delivery: Logistic systems</li>
                            <li>Probike: Inventory system</li>
                            <li>TAXI: Call center and taxi management system</li>
                            <li>Thailand Film Office: Intranet film shooting registration</li>
                            <li>One2One: Education solution across 120+ outlets</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <!-- ภาพก่อนกด -->
                    <div class="portfolio-content h-100 position-relative">
                      <img :src="branding3" class="img-fluid" alt="Branding 3" />
                      <div class="portfolio-info text-center mt-2">
                        <h4>Branding 3</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur</p>
                        <a class="btn btn-primary position-absolute top-50 start-50 translate-middle" data-fancybox data-src="#dret-lightbox3" data-type="inline" title="View More">
                          <i class="bi bi-plus-circle fs-4"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                
                <!--จบแผ่นที่ 3 -->
                <div class="row gy-3">
                  <!-- แผ่นที่ 4 -->
                  <div class="col-lg-4 col-md-6">
                    <div id="dret-lightbox4" style="display: none">
                      <div class="d-flex gap-4 flex-wrap justify-content-center align-items-start" style="max-width: 2000px">

                        <div id="spaCarousel4" class="carousel slide" data-bs-ride="carousel" style="max-width: 700px;">
                          <div class="carousel-inner rounded">
                            <div class="carousel-item active">
                              <img :src="books1" class="d-block w-100" alt="Books 1" />
                            </div>
                            <div class="carousel-item">
                              <img :src="books2" class="d-block w-100" alt="Books 2" />
                            </div>
                            <div class="carousel-item">
                              <img :src="books3" class="d-block w-100" alt="Books 3" />
                            </div>
                          </div>
                          <button class="carousel-control-prev" type="button" data-bs-target="#spaCarousel4" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon"></span>
                          </button>
                          <button class="carousel-control-next" type="button" data-bs-target="#spaCarousel4" data-bs-slide="next">
                            <span class="carousel-control-next-icon"></span>
                          </button>
                        </div>

                        <div style="max-width: 450px;">
                          <h3>Books Feature</h3>
                          <p class="mb-2">Showcasing our best book designs</p>
                          <ul class="text-muted ps-3 mb-0">
                            <li>Elegant layouts</li>
                            <li>Minimalist covers</li>
                            <li>Premium print materials</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div class="portfolio-content h-100 position-relative portfolio-item isotope-item filter-app">
                      <img :src="books1" class="img-fluid" alt="Books 1" />
                      <div class="portfolio-info text-center mt-2">
                        <h4>Books 1</h4>
                        <p>Premium designed covers</p>
                        <a class="btn btn-primary position-absolute top-50 start-50 translate-middle" data-fancybox data-src="#dret-lightbox4" data-type="inline" title="View More">
                          <i class="bi bi-plus-circle fs-4"></i>
                        </a>
                      </div>
                    </div>
                  </div>

                            <!-- แผ่นที่ 5 -->
                            <div class="col-lg-4 col-md-6">
                              <div id="dret-lightbox5" style="display: none">
                                <div class="d-flex gap-4 flex-wrap justify-content-center align-items-start" style="max-width: 2000px">

                                  <div id="spaCarousel5" class="carousel slide" data-bs-ride="carousel" style="max-width: 700px;">
                                    <div class="carousel-inner rounded">
                                      <div class="carousel-item active">
                                        <img :src="books1" class="d-block w-100" alt="Books 1" />
                                      </div>
                                      <div class="carousel-item">
                                        <img :src="books2" class="d-block w-100" alt="Books 2" />
                                      </div>
                                      <div class="carousel-item">
                                        <img :src="books3" class="d-block w-100" alt="Books 3" />
                                      </div>
                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#spaCarousel5" data-bs-slide="prev">
                                      <span class="carousel-control-prev-icon"></span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#spaCarousel5" data-bs-slide="next">
                                      <span class="carousel-control-next-icon"></span>
                                    </button>
                                  </div>

                                  <div style="max-width: 450px;">
                                    <h3>Book Design</h3>
                                    <p class="mb-2">A collection of book layouts</p>
                                    <ul class="text-muted ps-3 mb-0">
                                      <li>Photography portfolios</li>
                                      <li>Typography experiments</li>
                                      <li>Cover layout variations</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>

                              <div class="portfolio-content h-100 position-relative portfolio-item isotope-item filter-app">
                                <img :src="books2" class="img-fluid" alt="Books 2" />
                                <div class="portfolio-info text-center mt-2">
                                  <h4>Books 2</h4>
                                  <p>Artistic layout samples</p>
                                  <a class="btn btn-primary position-absolute top-50 start-50 translate-middle" data-fancybox data-src="#dret-lightbox5" data-type="inline" title="View More">
                                    <i class="bi bi-plus-circle fs-4"></i>
                                  </a>
                                </div>
                              </div>
                            </div>

            <!-- แผ่นที่ 6 -->
            <div class="col-lg-4 col-md-6">
                    <!-- Lightbox -->
                    <div id="dret-lightbox6" style="display: none">
                      <div class="d-flex gap-4 flex-wrap justify-content-center align-items-start" style="max-width: 2000px">
                        <!-- Carousel -->
                        <div id="spaCarousel6" class="carousel slide" data-bs-ride="carousel" style="max-width: 700px;">
                          <div class="carousel-inner rounded">
                            <div class="carousel-item active">
                              <img :src="branding1" class="d-block w-100" alt="Branding 1" />
                            </div>
                            <div class="carousel-item">
                              <img :src="branding2" class="d-block w-100" alt="Branding 2" />
                            </div>
                            <div class="carousel-item">
                              <img :src="branding3" class="d-block w-100" alt="Branding 3" />
                            </div>
                          </div>
                          <button class="carousel-control-prev" type="button" data-bs-target="#spaCarousel6" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon"></span>
                          </button>
                          <button class="carousel-control-next" type="button" data-bs-target="#spaCarousel6" data-bs-slide="next">
                            <span class="carousel-control-next-icon"></span>
                          </button>
                        </div>
                        <!-- รายละเอียด -->
                        <div style="max-width: 450px;">
                          <h3>D-OND</h3>
                          <p class="mb-2">software on demand</p>
                          <ul class="text-muted ps-3 mb-0">
                            <li>Phoenix Paper & Pulp PLC: Intranet payment system</li>
                            <li>Freeze Systems Rental</li>
                            <li>Phuket Srisuchard Delivery: Logistic systems</li>
                            <li>Probike: Inventory system</li>
                            <li>TAXI: Call center and taxi management system</li>
                            <li>Thailand Film Office: Intranet film shooting registration</li>
                            <li>One2One: Education solution across 120+ outlets</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <!-- ภาพก่อนกด -->
                    <div class="portfolio-content h-100 position-relative">
                      <img :src="branding3" class="img-fluid" alt="Branding 3" />
                      <div class="portfolio-info text-center mt-2">
                        <h4>Branding 3</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur</p>
                        <a class="btn btn-primary position-absolute top-50 start-50 translate-middle" data-fancybox data-src="#dret-lightbox6" data-type="inline" title="View More">
                          <i class="bi bi-plus-circle fs-4"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
            <div class="row gy-3">
                  <!-- แผ่นที่ 7 -->
                  <div class="col-lg-4 col-md-6">
                    <div id="dret-lightbox7" style="display: none">
                      <div class="d-flex gap-4 flex-wrap justify-content-center align-items-start" style="max-width: 2000px">

                        <div id="spaCarousel7" class="carousel slide" data-bs-ride="carousel" style="max-width: 700px;">
                          <div class="carousel-inner rounded">
                            <div class="carousel-item active">
                              <img :src="books1" class="d-block w-100" alt="Books 1" />
                            </div>
                            <div class="carousel-item">
                              <img :src="books2" class="d-block w-100" alt="Books 2" />
                            </div>
                            <div class="carousel-item">
                              <img :src="books3" class="d-block w-100" alt="Books 3" />
                            </div>
                          </div>
                          <button class="carousel-control-prev" type="button" data-bs-target="#spaCarousel7" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon"></span>
                          </button>
                          <button class="carousel-control-next" type="button" data-bs-target="#spaCarousel7" data-bs-slide="next">
                            <span class="carousel-control-next-icon"></span>
                          </button>
                        </div>

                        <div style="max-width: 450px;">
                          <h3>Books Feature</h3>
                          <p class="mb-2">Showcasing our best book designs</p>
                          <ul class="text-muted ps-3 mb-0">
                            <li>Elegant layouts</li>
                            <li>Minimalist covers</li>
                            <li>Premium print materials</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div class="portfolio-content h-100 position-relative portfolio-item isotope-item filter-app">
                      <img :src="books1" class="img-fluid" alt="Books 1" />
                      <div class="portfolio-info text-center mt-2">
                        <h4>Books 1</h4>
                        <p>Premium designed covers</p>
                        <a class="btn btn-primary position-absolute top-50 start-50 translate-middle" data-fancybox data-src="#dret-lightbox7" data-type="inline" title="View More">
                          <i class="bi bi-plus-circle fs-4"></i>
                        </a>
                      </div>
                    </div>
                  </div>

                            <!-- แผ่นที่ 8 -->
                            <div class="col-lg-4 col-md-6">
                              <div id="dret-lightbox8" style="display: none">
                                <div class="d-flex gap-4 flex-wrap justify-content-center align-items-start" style="max-width: 2000px">

                                  <div id="spaCarousel8" class="carousel slide" data-bs-ride="carousel" style="max-width: 700px;">
                                    <div class="carousel-inner rounded">
                                      <div class="carousel-item active">
                                        <img :src="books1" class="d-block w-100" alt="Books 1" />
                                      </div>
                                      <div class="carousel-item">
                                        <img :src="books2" class="d-block w-100" alt="Books 2" />
                                      </div>
                                      <div class="carousel-item">
                                        <img :src="books3" class="d-block w-100" alt="Books 3" />
                                      </div>
                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#spaCarousel8" data-bs-slide="prev">
                                      <span class="carousel-control-prev-icon"></span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#spaCarousel8" data-bs-slide="next">
                                      <span class="carousel-control-next-icon"></span>
                                    </button>
                                  </div>

                                  <div style="max-width: 450px;">
                                    <h3>Book Design</h3>
                                    <p class="mb-2">A collection of book layouts</p>
                                    <ul class="text-muted ps-3 mb-0">
                                      <li>Photography portfolios</li>
                                      <li>Typography experiments</li>
                                      <li>Cover layout variations</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>

                              <div class="portfolio-content h-100 position-relative portfolio-item isotope-item filter-app">
                                <img :src="books2" class="img-fluid" alt="Books 2" />
                                <div class="portfolio-info text-center mt-2">
                                  <h4>Books 2</h4>
                                  <p>Artistic layout samples</p>
                                  <a class="btn btn-primary position-absolute top-50 start-50 translate-middle" data-fancybox data-src="#dret-lightbox8" data-type="inline" title="View More">
                                    <i class="bi bi-plus-circle fs-4"></i>
                                  </a>
                                </div>
                              </div>
                            </div>

            <!-- แผ่นที่ 9 -->
            <div class="col-lg-4 col-md-6">
              <div id="dret-lightbox9" style="display: none">
                <div class="d-flex gap-4 flex-wrap justify-content-center align-items-start" style="max-width: 2000px">

                  <div id="spaCarousel6" class="carousel slide" data-bs-ride="carousel" style="max-width: 700px;">
                    <div class="carousel-inner rounded">
                      <div class="carousel-item active">
                        <img :src="books1" class="d-block w-100" alt="Books 1" />
                      </div>
                      <div class="carousel-item">
                        <img :src="books2" class="d-block w-100" alt="Books 2" />
                      </div>
                      <div class="carousel-item">
                        <img :src="books3" class="d-block w-100" alt="Books 3" />
                      </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#spaCarousel9" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon"></span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#spaCarousel9" data-bs-slide="next">
                      <span class="carousel-control-next-icon"></span>
                    </button>
                  </div>

                  <div style="max-width: 450px;">
                    <h3>Books Showcase</h3>
                    <p class="mb-2">Creative book mockups</p>
                    <ul class="text-muted ps-3 mb-0">
                      <li>Business books</li>
                      <li>Art books</li>
                      <li>Creative inspiration</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="portfolio-content h-100 position-relative portfolio-item isotope-item filter-app">
                <img :src="books3" class="img-fluid" alt="Books 3" />
                <div class="portfolio-info text-center mt-2">
                  <h4>Books 3</h4>
                  <p>Book mockups in style</p>
                  <a class="btn btn-primary position-absolute top-50 start-50 translate-middle" data-fancybox data-src="#dret-lightbox9" data-type="inline" title="View More">
                    <i class="bi bi-plus-circle fs-4"></i>
                  </a>
                </div>
              </div>
            </div>

            </div>
          <!-- จบแผ่นที่ 9 -->
            <div class="row gy-3">
                  <!-- แผ่นที่ 10 -->
                  <div class="col-lg-4 col-md-6">
                    <div id="dret-lightbox10" style="display: none">
                      <div class="d-flex gap-4 flex-wrap justify-content-center align-items-start" style="max-width: 2000px">

                        <div id="spaCarousel10" class="carousel slide" data-bs-ride="carousel" style="max-width: 700px;">
                          <div class="carousel-inner rounded">
                            <div class="carousel-item active">
                              <img :src="books1" class="d-block w-100" alt="Books 1" />
                            </div>
                            <div class="carousel-item">
                              <img :src="books2" class="d-block w-100" alt="Books 2" />
                            </div>
                            <div class="carousel-item">
                              <img :src="books3" class="d-block w-100" alt="Books 3" />
                            </div>
                          </div>
                          <button class="carousel-control-prev" type="button" data-bs-target="#spaCarousel10" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon"></span>
                          </button>
                          <button class="carousel-control-next" type="button" data-bs-target="#spaCarousel10" data-bs-slide="next">
                            <span class="carousel-control-next-icon"></span>
                          </button>
                        </div>

                        <div style="max-width: 450px;">
                          <h3>Books Feature</h3>
                          <p class="mb-2">Showcasing our best book designs</p>
                          <ul class="text-muted ps-3 mb-0">
                            <li>Elegant layouts</li>
                            <li>Minimalist covers</li>
                            <li>Premium print materials</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div class="portfolio-content h-100 position-relative portfolio-item isotope-item filter-app">
                      <img :src="books1" class="img-fluid" alt="Books 1" />
                      <div class="portfolio-info text-center mt-2">
                        <h4>Books 1</h4>
                        <p>Premium designed covers</p>
                        <a class="btn btn-primary position-absolute top-50 start-50 translate-middle" data-fancybox data-src="#dret-lightbox10" data-type="inline" title="View More">
                          <i class="bi bi-plus-circle fs-4"></i>
                        </a>
                      </div>
                    </div>
                  </div>

                            <!-- แผ่นที่ 11 -->
                            <div class="col-lg-4 col-md-6">
                              <div id="dret-lightbox11" style="display: none">
                                <div class="d-flex gap-4 flex-wrap justify-content-center align-items-start" style="max-width: 2000px">

                                  <div id="spaCarousel11" class="carousel slide" data-bs-ride="carousel" style="max-width: 700px;">
                                    <div class="carousel-inner rounded">
                                      <div class="carousel-item active">
                                        <img :src="books1" class="d-block w-100" alt="Books 1" />
                                      </div>
                                      <div class="carousel-item">
                                        <img :src="books2" class="d-block w-100" alt="Books 2" />
                                      </div>
                                      <div class="carousel-item">
                                        <img :src="books3" class="d-block w-100" alt="Books 3" />
                                      </div>
                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#spaCarousel11" data-bs-slide="prev">
                                      <span class="carousel-control-prev-icon"></span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#spaCarousel11" data-bs-slide="next">
                                      <span class="carousel-control-next-icon"></span>
                                    </button>
                                  </div>

                                  <div style="max-width: 450px;">
                                    <h3>Book Design</h3>
                                    <p class="mb-2">A collection of book layouts</p>
                                    <ul class="text-muted ps-3 mb-0">
                                      <li>Photography portfolios</li>
                                      <li>Typography experiments</li>
                                      <li>Cover layout variations</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>

                              <div class="portfolio-content h-100 position-relative portfolio-item isotope-item filter-app">
                                <img :src="books2" class="img-fluid" alt="Books 2" />
                                <div class="portfolio-info text-center mt-2">
                                  <h4>Books 2</h4>
                                  <p>Artistic layout samples</p>
                                  <a class="btn btn-primary position-absolute top-50 start-50 translate-middle" data-fancybox data-src="#dret-lightbox11" data-type="inline" title="View More">
                                    <i class="bi bi-plus-circle fs-4"></i>
                                  </a>
                                </div>
                              </div>
                            </div>

            <!-- แผ่นที่ 12 -->
            <div class="col-lg-4 col-md-6">
              <div id="dret-lightbox12" style="display: none">
                <div class="d-flex gap-4 flex-wrap justify-content-center align-items-start" style="max-width: 2000px">

                  <div id="spaCarousel12" class="carousel slide" data-bs-ride="carousel" style="max-width: 700px;">
                    <div class="carousel-inner rounded">
                      <div class="carousel-item active">
                        <img :src="books1" class="d-block w-100" alt="Books 1" />
                      </div>
                      <div class="carousel-item">
                        <img :src="books2" class="d-block w-100" alt="Books 2" />
                      </div>
                      <div class="carousel-item">
                        <img :src="books3" class="d-block w-100" alt="Books 3" />
                      </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#spaCarousel12" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon"></span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#spaCarousel12" data-bs-slide="next">
                      <span class="carousel-control-next-icon"></span>
                    </button>
                  </div>

                  <div style="max-width: 450px;">
                    <h3>Books Showcase</h3>
                    <p class="mb-2">Creative book mockups</p>
                    <ul class="text-muted ps-3 mb-0">
                      <li>Business books</li>
                      <li>Art books</li>
                      <li>Creative inspiration</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="portfolio-content h-100 position-relative portfolio-item isotope-item filter-app">
                <img :src="books3" class="img-fluid" alt="Books 3" />
                <div class="portfolio-info text-center mt-2">
                  <h4>Books 3</h4>
                  <p>Book mockups in style</p>
                  <a class="btn btn-primary position-absolute top-50 start-50 translate-middle" data-fancybox data-src="#dret-lightbox12" data-type="inline" title="View More">
                    <i class="bi bi-plus-circle fs-4"></i>
                  </a>
                </div>
              </div>
            </div>

            </div>
          </div>
    </section>
  </template>
  <style>

.portfolio-content {
  position: relative;
}

.portfolio-content a.btn {
  z-index: 10; /* ให้ปุ่มอยู่หน้าสุด */

}


.portfolio-content {
  overflow: hidden;
}


.portfolio-content .fancy-btn {
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 2;
}

.portfolio-content:hover::after,
.portfolio-content:hover .fancy-btn {
  opacity: 1;
}

.fancybox-hidden {
  position: absolute !important;
  width: 1.5px !important;
  height: 1px !important;
  overflow: hidden !important;
  clip: rect(0 0 0 0);
  white-space: nowrap;
}
.portfolio-content img {
  width: 100%;
  height: 300px; /* หรือขนาดที่ต้องการ */
  object-fit: cover; /* ทำให้ภาพไม่ยืด/หดผิดสัดส่วน */
}


</style>