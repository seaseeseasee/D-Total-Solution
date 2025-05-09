<script setup
>
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import team1 from '../assets/img/team/team-1.jpg'
import team2 from '../assets/img/team/team-2.jpg'   
import team3 from '../assets/img/team/team-3.jpg'
import team4 from '../assets/img/team/team-4.jpg'

</script>

<template>
        <!-- Team Section -->
        <section id="team" class="team section">

<!-- Section Title -->
<div class="container section-title" data-aos="fade-up">
  <h2>Team</h2>
  <p>Partner</p>
</div><!-- End Section Title -->

<div class="container">

  <div class="row gy-4">

    <div class="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
      <div class="team-member">
        <div class="member-img">
          <img :src="team1" class="img-fluid" alt="Team 1">
          <div class="social">
            <a href=""><i class="bi bi-twitter-x"></i></a>
            <a href=""><i class="bi bi-facebook"></i></a>
            <a href=""><i class="bi bi-instagram"></i></a>
            <a href=""><i class="bi bi-linkedin"></i></a>
          </div>
        </div>
        <div class="member-info">
          <h4>Walter White</h4>
          <span>Chief Executive Officer</span>
          <p>Velit aut quia fugit et et. Dolorum ea voluptate vel tempore tenetur ipsa quae aut. Ipsum exercitationem iure minima enim corporis et voluptate.</p>
        </div>
      </div>
    </div><!-- End Team Member -->

    <div class="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
      <div class="team-member">
        <div class="member-img">
          <img :src="team2" class="img-fluid" alt="Team 2">
          <div class="social">
            <a href=""><i class="bi bi-twitter-x"></i></a>
            <a href=""><i class="bi bi-facebook"></i></a>
            <a href=""><i class="bi bi-instagram"></i></a>
            <a href=""><i class="bi bi-linkedin"></i></a>
          </div>
        </div>
        <div class="member-info">
          <h4>Sarah Jhonson</h4>
          <span>Product Manager</span>
          <p>Quo esse repellendus quia id. Est eum et accusantium pariatur fugit nihil minima suscipit corporis. Voluptate sed quas reiciendis animi neque sapiente.</p>
        </div>
      </div>
    </div><!-- End Team Member -->

    <div class="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
      <div class="team-member">
        <div class="member-img">
          <img :src="team3" class="img-fluid" alt="Team 3">
          <div class="social">
            <a href=""><i class="bi bi-twitter-x"></i></a>
            <a href=""><i class="bi bi-facebook"></i></a>
            <a href=""><i class="bi bi-instagram"></i></a>
            <a href=""><i class="bi bi-linkedin"></i></a>
          </div>
        </div>
        <div class="member-info">
          <h4>William Anderson</h4>
          <span>CTO</span>
          <p>Vero omnis enim consequatur. Voluptas consectetur unde qui molestiae deserunt. Voluptates enim aut architecto porro aspernatur molestiae modi.</p>
        </div>
      </div>
    </div><!-- End Team Member -->

    <div class="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="400">
      <div class="team-member">
        <div class="member-img">
          <img :src="team4" class="img-fluid" alt="Team 4">
          <div class="social">
            <a href=""><i class="bi bi-twitter-x"></i></a>
            <a href=""><i class="bi bi-facebook"></i></a>
            <a href=""><i class="bi bi-instagram"></i></a>
            <a href=""><i class="bi bi-linkedin"></i></a>
          </div>
        </div>
        <div class="member-info">
          <h4>Amanda Jepson</h4>
          <span>Accountant</span>
          <p>Rerum voluptate non adipisci animi distinctio et deserunt amet voluptas. Quia aut aliquid doloremque ut possimus ipsum officia.</p>
        </div>
      </div>
    </div><!-- End Team Member -->

  </div>

</div>

</section><!-- /Team Section -->
</template>