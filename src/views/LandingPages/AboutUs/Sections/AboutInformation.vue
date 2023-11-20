<script setup>
// example components
import DefaultInfoCard from "../../../../components/cards/infoCards/DefaultInfoCard.vue";
import CenteredBlogCard from "../../../../components/cards/blogCards/CenteredBlogCard.vue";

// TODO - replace with better drone photo
import drone from "@/assets/img/drones/spark.jpg";
</script>
<template>
  <section>
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <div class="row justify-content-start">
            <DefaultInfoCard color="info" icon="photo_camera" title="Phtography"
              description="We capture video in 1080p, 2.7K or 4K, and stills up to 48MP, application depending." />
            <DefaultInfoCard color="info" icon="payments" title="Flexible Invoicing"
              description="Accepting Cash, Credit, Paypal, etc. Request an invoice or order online." />
          </div>
          <div class="row justify-content-start">
            <DefaultInfoCard color="info" icon="public" title="Denver Local"
              description="Local to Denver CO, serving the greater metro area and surrounding Front Range." />
            <DefaultInfoCard color="info" icon="3p" title="Customer Centric"
              description="We listen to and work with our clients to get them the results they need. Lets talk!" />
          </div>
        </div>
        <div class="col-lg-6 ms-auto mt-lg-0 mt-6">
          <CenteredBlogCard :image="drone" title="Services Offered"
            description="We offer aerial and indoor photography and videography services and such as residential and commercial real estate, fpv flythroughs, private events, promotional videography, aerial survey and inspections, 360 site panoramas, corporate branding and advertising, and more." />
        </div>
      </div>
      <div class="row align-items-center">
        <div class="card-body">
          <h3>
            Hours and Operating Area
          </h3>
          <p class="pb-3">
            <b>Consulation Hours:</b> 9AM MST - 5PM MST M-F
            <br />
            <b>Service Hours:</b> Variable, depending on the need. We can generally schedule sessions on evenings, and
            weekends, and some holidays. Talk to us for scheduling based on your specific needs.
          </p>
          <h3>
            Contact Info
          </h3>
        <p>
          <!-- TODO: confirm this -->
            <b>Phone:</b> 303 416 2945
            <br />
            <!-- TODO: confirm this -->
            <b>Email:</b> altitudedroneworks@gmail.com
            <br />
            <!-- TODO: confirm this
                                                                      <b>Address:</b> PO Box TODO Parker, CO 80134
                                                                      <br /> -->
            <RouterLink class="btn btn-sm mb-0 bg-gradient-success" to="/pages/landing-pages/contact-us" rel="tooltip"
              title="Contact Us" data-placement="bottom">
              Contact Us
            </RouterLink>
          </p>
          <p class="pb-3">
            Contact us to schedule an aerial videography session, hold an initial free consultation, or for any
            other related questions, comments, or concerns.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
