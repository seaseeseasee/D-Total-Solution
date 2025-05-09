<template>
  <!-- Contact Section -->
<section id="contact" class="contact section">
  <div class="container section-title" data-aos="fade-up">
    <h2>Contact</h2>
    <p>Contact Us</p>
  </div>

  <div class="container" data-aos="fade-up" data-aos-delay="100">
    <div class="row gy-4">

      <!-- LEFT: Info + Map -->
      <div class="col-lg-6">
        <!-- Info Box -->
        <div class="info-box mb-4">
          <div class="d-flex flex-column gap-3">
            <div class="d-flex align-items-start">
              <i class="bi bi-geo-alt fs-4 text-success me-3"></i>
              <div>
                <h6 class="mb-1 fw-bold">Address</h6>
                <p class="mb-0">D Total Solution Co.,Ltd.
119/87 Moo. 4, Rattanathibeth Rd.,
Tambon Saima, Muang, Nonthaburi,
Thailand, 11000</p>
              </div>
            </div>
            <div class="d-flex align-items-start">
              <i class="bi bi-telephone fs-4 text-success me-3"></i>
              <div>
                <h6 class="mb-1 fw-bold">Call Us</h6>
                <p class="mb-0">(66)0-2985-4270</p>
                    <p>(66)0-2149-3979-80 #11,12,14,15</p>
              </div>
            </div>
            <div class="d-flex align-items-start">
              <i class="bi bi-envelope fs-4 text-success me-3"></i>
              <div>
                <h6 class="mb-1 fw-bold">Email Us</h6>
                <p class="mb-0">phornsak@dtotalsolution.com</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Google Map -->
        <div style="width: 100%; height: 300px;" class="rounded overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3873.554807657991!2d100.473172!3d13.865741!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29ad030c8793d%3A0x9c2742a53c327cf9!2sD%20Total%20Solution%20Co.%2C%20Ltd.!5e0!3m2!1sth!2sth!4v1746524498062!5m2!1sth!2st"
            width="100%" height="100%" style="border:0;" allowfullscreen loading="lazy">
          </iframe>
        </div>
      </div>

      <!-- RIGHT: Contact Form -->
      <div class="col-lg-6">
        <form action="forms/contact.php" method="post" class="php-email-form" data-aos="fade-up" data-aos-delay="200">
          <div class="row gy-4">
            <div class="col-md-6">
              <input type="text" name="name" class="form-control" placeholder="Your Name" required>
            </div>
            <div class="col-md-6">
              <input type="email" class="form-control" name="email" placeholder="Your Email" required>
            </div>
            <div class="col-12">
              <input type="text" class="form-control" name="subject" placeholder="Subject" required>
            </div>
            <div class="col-12">
              <textarea class="form-control" name="message" rows="6" placeholder="Message" required></textarea>
            </div>
            <div class="col-12 text-center">
              <div class="loading">Loading</div>
              <div class="error-message"></div>
              <div class="sent-message">Your message has been sent. Thank you!</div>
              <button type="submit" class="btn btn-success">Send Message</button>
            </div>
          </div>
        </form>
      </div>

    </div>
  </div>
</section>

</template>