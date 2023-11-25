<script setup>
// example components
import DefaultInfoCard from "../../../../components/cards/infoCards/DefaultInfoCard.vue";
import CenteredBlogCard from "../../../../components/cards/blogCards/CenteredBlogCard.vue";

import drone from "@/assets/img/drones/drone3.jpg";
</script>
<template>
  <section>
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <div class="row justify-content-start">
            <DefaultInfoCard color="info" icon="photo_camera" title="Phtography"
              description="Video up to 4K/60fps, 2.7k/120fps, and stills up to 4000x3000px or 48MP." />
            <DefaultInfoCard color="monitor" icon="monitor" title="Post Processing"
              description="Resized photos and videos at 1536x1152, 1200x530, or any desired deliverable." />
          </div>
          <div class="row justify-content-start">
            <DefaultInfoCard color="info" icon="flight" title="Drones Used"
              description="The DJI Avata (14m flight) and DJI Spark (8m flight), job depending, with more being supported soon." />
            <DefaultInfoCard color="info" icon="payments" title="Flexible Invoicing"
              description="Accepting Cash, Credit, Paypal, etc through Square. Request a custom invoice or easy order online." />
          </div>
          <div class="row justify-content-start">
            <DefaultInfoCard color="info" icon="public" title="Denver Local"
              description="Local to Denver CO, serving the greater metro area and surrounding Front Range." />
            <DefaultInfoCard color="info" icon="3p" title="Customer Centric"
              description="Let's talk! Our clients get the results they need when they need it." />
          </div>
        </div>
        <div class="col-lg-6 ms-auto mt-lg-0 mt-6">
          <CenteredBlogCard :image="drone" title="Services Offered"
            description="Exterior and interior drone powered photography and videography. Residential and commercial real estate, fpv flythroughs, private events, promotional videography, aerial survey and inspections, 360 site panoramas, corporate branding and advertising, and more." />
        </div>
      </div>
      <div class="row align-items-center">
        <div class="card-body">
          <h3>
            Hours
          </h3>
          <p class="pb-3">
            <b>Consulation Hours:</b> 9AM MST - 5PM MST M-F
            <br />
            <b>Service Hours:</b> Variable. Missions can be scheduled daytime, evenings,
            weekends, and some holidays. Contact us for scheduling.
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
        </div>
      </div>
    </div>
  </section>
</template>
