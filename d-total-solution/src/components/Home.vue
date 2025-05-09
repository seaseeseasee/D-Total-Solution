<script setup>
import heroBg from '../assets/img/hero-img.png'
import aboutImg from '../assets/img/about.jpg'
import value1 from '../assets/img/values-1.png'
import value2 from '../assets/img/values-2.png'
import value3 from '../assets/img/values-3.png'
import featuresImg from '../assets/img/features.png'
import altFeaturesImg from '../assets/img/alt-features.png'
</script>

<template>


  <section id="hero" class="hero section">
    <div class="container">
      <div class="row gy-4">
        <div class="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
          <h1 data-aos="fade-up">"Your Satisfaction is our Quality"</h1>
          <p data-aos="fade-up" data-aos-delay="100">We Provide Outsourcing Service</p>
          <div class="d-flex flex-column flex-md-row" data-aos="fade-up" data-aos-delay="200">
            <a href="#about" class="btn btn-primary btn-get-started">
              Get Started <i class="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>



        <div class="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-out">
          <img :src="heroBg" class="img-fluid animated" alt="Hero Image" />
        </div>
      </div>
    </div>
  </section>



  <!-- About Section -->
  <section id="about" class="about section">

<div class="container" data-aos="fade-up">
  <div class="row gx-0">

    <div class="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
      <div class="content">
        <h3>Who We Are</h3>
        <h2>D - Total Solution Co., Ltd. was founded on April 1, 2004 by a team of young and dynamic professionals.</h2>
        <p>
          with over 21 years of experience at leading technology firms. We specialize in sourcing and implementing Integrated Service Provider systems for businesses of all sizes, delivering total solutions through centralized system integration and efficient management.
        </p>
        <div class="text-center text-lg-start">
        
        </div>
      </div>
    </div>

    <div class="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
        <img :src="aboutImg" class="img-fluid" alt="About" />

    </div>

  </div>
</div>

</section><!-- /About Section -->




  <!-- Values Section -->
  <section id="values" class="values section">


 <div class="container section-title" data-aos="fade-up">
        <h2>Our Values</h2>
        <p>What we value most<br></p>
      </div><!-- End Section Title -->

<div class="container">

  <div class="row gy-4">

    <div class="col-lg-4" data-aos="fade-up" data-aos-delay="100">
      <div class="card">
        <img :src="value1" alt="Value 1" />
        <h3>Hardware
        </h3>
        <p>Eum ad dolor et. Autem aut fugiat debitis voluptatem consequuntur sit. Et veritatis id.</p>
      </div>
    </div><!-- End Card Item -->

    <div class="col-lg-4" data-aos="fade-up" data-aos-delay="200">
      <div class="card">
        <img :src="value2" alt="Value 2" />
        <h3>Software
        </h3>
        <p>Repudiandae amet nihil natus in distinctio suscipit id. Doloremque ducimus ea sit non.</p>
      </div>
    </div><!-- End Card Item -->

    <div class="col-lg-4" data-aos="fade-up" data-aos-delay="300">
      <div class="card">
        <img :src="value3" alt="Value 3" />
        <h3>Total Solution & Services
        </h3>
        <p>Quam rem vitae est autem molestias explicabo debitis sint. Vero aliquid quidem commodi.</p>
      </div>
    </div><!-- End Card Item -->

  </div>

</div>

</section><!-- /Values Section -->




<!-- Stats Section -->
<section id="stats" class="stats section">

<div class="container" data-aos="fade-up" data-aos-delay="100">

  <div class="row gy-4">

    <div class="col-lg-3 col-md-6">
      <div class="stats-item d-flex align-items-center w-100 h-100">
        <i class="bi bi-emoji-smile color-blue flex-shrink-0"></i>
        <div>
          <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" class="purecounter"></span>
          <p>Happy Clients</p>
        </div>
      </div>
    </div><!-- End Stats Item -->

    <div class="col-lg-3 col-md-6">
      <div class="stats-item d-flex align-items-center w-100 h-100">
        <i class="bi bi-journal-richtext color-orange flex-shrink-0" style="color: #ee6c20;"></i>
        <div>
          <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" class="purecounter"></span>
          <p>Projects</p>
        </div>
      </div>
    </div><!-- End Stats Item -->

    <div class="col-lg-3 col-md-6">
      <div class="stats-item d-flex align-items-center w-100 h-100">
        <i class="bi bi-headset color-green flex-shrink-0" style="color: #15be56;"></i>
        <div>
          <span data-purecounter-start="0" data-purecounter-end="1463" data-purecounter-duration="1" class="purecounter"></span>
          <p>Hours Of Support</p>
        </div>
      </div>
    </div><!-- End Stats Item -->

    <div class="col-lg-3 col-md-6">
      <div class="stats-item d-flex align-items-center w-100 h-100">
        <i class="bi bi-people color-pink flex-shrink-0" style="color: #bb0852;"></i>
        <div>
          <span data-purecounter-start="0" data-purecounter-end="22" data-purecounter-duration="1" class="purecounter"></span>
          <p>Hard Workers</p>
        </div>
      </div>
    </div><!-- End Stats Item -->

  </div>

</div>

</section><!-- /Stats Section -->




    <!-- Features Section -->
    <section id="features" class="features section">

<!-- Section Title -->
<div class="container section-title" data-aos="fade-up">
  <h2>Features</h2>
  <p>Our Advacedd Features<br></p>
</div><!-- End Section Title -->

<div class="container">

  <div class="row gy-5">

    <div class="col-xl-6" data-aos="zoom-out" data-aos-delay="100">
        <img :src="featuresImg" alt="Features Image" class="img-fluid" />
    </div>

    <div class="col-xl-6 d-flex">
      <div class="row align-self-center gy-4">

        <div class="col-md-6" data-aos="fade-up" data-aos-delay="200">
          <div class="feature-box d-flex align-items-center">
            <i class="bi bi-check"></i>
            <h3>POS Products, Reseller Partner Tech
            </h3>
          </div>
        </div><!-- End Feature Item -->

        <div class="col-md-6" data-aos="fade-up" data-aos-delay="300">
          <div class="feature-box d-flex align-items-center">
            <i class="bi bi-check"></i>
            <h3>Computer & Peripherals 
            </h3>
          </div>
        </div><!-- End Feature Item -->

        <div class="col-md-6" data-aos="fade-up" data-aos-delay="400">
          <div class="feature-box d-flex align-items-center">
            <i class="bi bi-check"></i>
            <h3>M.A. (Maintenance Service Agreement)
            </h3>
          </div>
        </div><!-- End Feature Item -->

        <div class="col-md-6" data-aos="fade-up" data-aos-delay="500">
          <div class="feature-box d-flex align-items-center">
            <i class="bi bi-check"></i>
            <h3>Customer Support Solution
            </h3>
          </div>
        </div><!-- End Feature Item -->

        <div class="col-md-6" data-aos="fade-up" data-aos-delay="600">
          <div class="feature-box d-flex align-items-center">
            <i class="bi bi-check"></i>
            <h3>POS Solution
            </h3>
          </div>
        </div><!-- End Feature Item -->

        <div class="col-md-6" data-aos="fade-up" data-aos-delay="700">
          <div class="feature-box d-flex align-items-center">
            <i class="bi bi-check"></i>
            <h3>IT consulting for business
            </h3>
          </div>
        </div><!-- End Feature Item -->
        <div class="col-md-6" data-aos="fade-up" data-aos-delay="700">
          <div class="feature-box d-flex align-items-center">
            <i class="bi bi-check"></i>
            <h3>IT Outsourcing

            </h3>
          </div>
        </div><!-- End Feature Item -->



      </div>
    </div>

  </div>

</div>

</section><!-- /Features Section -->



<!-- Alt Features Section -->
<section id="alt-features" class="alt-features section">

<div class="container">

  <div class="row gy-5">

    <div class="col-xl-7 d-flex order-2 order-xl-1" data-aos="fade-up" data-aos-delay="200">

      <div class="row align-self-center gy-5">

        <div class="col-md-6 icon-box">
          <i class="bi bi-award"></i>
          <div>
            <h4>Corporis voluptates sit</h4>
            <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
          </div>
        </div><!-- End Feature Item -->

        <div class="col-md-6 icon-box">
          <i class="bi bi-card-checklist"></i>
          <div>
            <h4>Ullamco laboris nisi</h4>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
          </div>
        </div><!-- End Feature Item -->

        <div class="col-md-6 icon-box">
          <i class="bi bi-dribbble"></i>
          <div>
            <h4>Labore consequatur</h4>
            <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
          </div>
        </div><!-- End Feature Item -->

        <div class="col-md-6 icon-box">
          <i class="bi bi-filter-circle"></i>
          <div>
            <h4>Beatae veritatis</h4>
            <p>Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta</p>
          </div>
        </div><!-- End Feature Item -->

        <div class="col-md-6 icon-box">
          <i class="bi bi-lightning-charge"></i>
          <div>
            <h4>Molestiae dolor</h4>
            <p>Et fuga et deserunt et enim. Dolorem architecto ratione tensa raptor marte</p>
          </div>
        </div><!-- End Feature Item -->

        <div class="col-md-6 icon-box">
          <i class="bi bi-patch-check"></i>
          <div>
            <h4>Explicabo consectetur</h4>
            <p>Est autem dicta beatae suscipit. Sint veritatis et sit quasi ab aut inventore</p>
          </div>
        </div><!-- End Feature Item -->

      </div>

    </div>

    <div class="col-xl-5 d-flex align-items-center order-1 order-xl-2" data-aos="fade-up" data-aos-delay="100">
        <img :src="altFeaturesImg" alt="Alternative Features" class="img-fluid" />
    </div>

  </div>

</div>

</section><!-- /Alt Features Section -->


<!-- Services Section -->
<section id="services" class="services section">

<!-- Section Title -->
<div class="container section-title" data-aos="fade-up">
  <h2>Services</h2>
  <p>Check Our Services<br></p>
</div><!-- End Section Title -->

<div class="container">

  <div class="row gy-4">

    <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
      <div class="service-item item-cyan position-relative">
        <i class="bi bi-activity icon"></i>
        <h3>D-Retail Systems</h3>
        <p>software for retail business.</p>
        
      </div>
    </div><!-- End Service Item -->

    <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
      <div class="service-item item-orange position-relative">
        <i class="bi bi-broadcast icon"></i>
        <h3>Transportation Systems </h3>
        <p>software for logistic.</p>
        
      </div>
    </div><!-- End Service Item -->

    <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
      <div class="service-item item-teal position-relative">
        <i class="bi bi-easel icon"></i>
        <h3>Call Center Systems </h3>
        <p>software for CRM.</p>
       
      </div>
    </div><!-- End Service Item -->

    <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
      <div class="service-item item-red position-relative">
        <i class="bi bi-bounding-box-circles icon"></i>
        <h3>Spa & service Systems </h3>
        <p>software for spa & beauty.</p>
       
      </div>
    </div><!-- End Service Item -->

    <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
      <div class="service-item item-indigo position-relative">
        <i class="bi bi-calendar4-week icon"></i>
        <h3>Inventory Systems.</h3>
        <p>software for management inventory.</p>
       
      </div>
    </div><!-- End Service Item -->

    <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
      <div class="service-item item-pink position-relative">
        <i class="bi bi-chat-square-text icon"></i>
        <h3>Taxi Systems </h3>
        <p>software for taxi business.</p>
        
      </div>
    </div><!-- End Service Item -->

    <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
      <div class="service-item item-indigo position-relative">
        <i class="bi bi-calendar4-week icon"></i>
        <h3>Software On demand .</h3>
        <p>Software development by requirement from customer.</p>
        
      </div>
    </div><!-- End Service Item -->

    <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
      <div class="service-item item-pink position-relative">
        <i class="bi bi-chat-square-text icon"></i>
        <h3>Development software
        </h3>
        <p> for Kiosk and integrate with varies POS Vendor.</p>
        
      </div>
    </div><!-- End Service Item -->

  </div>

</div>

</section><!-- /Services Section -->








</template>

<style scoped>
.hero {
  padding: 80px 0;
  background-color: #f8f9fa;
}
.hero-img img {
  max-width: 100%;
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
}
</style>
