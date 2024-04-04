<script setup>
// example components
import DefaultInfoCard from "../../../../components/cards/infoCards/DefaultInfoCard.vue";
import CenteredBlogCard from "../../../../components/cards/blogCards/CenteredBlogCard.vue";
import RotatingCard from "../../../../components/cards/rotatingCards/RotatingCard.vue";
import RotatingCardFront from "../../../../components/cards/rotatingCards/RotatingCardFront.vue";
import RotatingCardBack from "../../../../components/cards/rotatingCards/RotatingCardBack.vue";

import drone1 from "@/assets/img/drones/drone1.jpg";
import drone2 from "@/assets/img/drones/drone2.jpg";
import drone3 from "@/assets/img/drones/drone3.jpg";
</script>
<template>
  <section>
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <div class="row justify-content-start">
            <DefaultInfoCard color="monitor" icon="photo_camera" title="Phtography"
              description="Photography 48MP@8056x4586 singles, uHDR and Panorama exposures" />
            <DefaultInfoCard color="info" icon="videocam" title="Videography"
              description="Video 4K:3840×2160@30/60fps, 2.7k1920x1080@30/60/90/120fps, hyperlapse or progressive" />
          </div>
          <div class="row justify-content-start">
            <DefaultInfoCard icon="fork_left" title="Versatility"
              description="Proven results with a diverse range of services catering to various industries; real estate, construction, large events, surveying, corporate branding, and more." />
            <DefaultInfoCard color="info" icon="payments" title="Flexible Invoicing"
              description="Accepting Cash, Credit, Paypal, etc through Square. Request a custom invoice or easy order online." />
          </div>
          <div class="row justify-content-start">
            <DefaultInfoCard color="info" icon="public" title="Denver Local"
              description="Local to Denver CO, serving the greater metro area and surrounding Front Range." />
          </div>
        </div>
        <div class="col-lg-6 ms-auto mt-lg-0 mt-6">
          <CenteredBlogCard :image="drone2" title="Services Offered"
            description="Website splash photos and videos, Residential and commercial real estate, FPV or First Person flythroughs, private events or celebrations, aerial survey and inspections, 180 and 360 site panoramas, timelapse and completion videos, corporate branding and advertising, and more." />
        </div>
      </div>
      <div class="row">
        <div class="card-body">
          <h3>
            Equipment
          </h3>
          <div class="row justify-content-start">
            <DefaultInfoCard color="info" icon="" title="Air3"
              description="40m flight times, exterior photogrtaphy and videography, high wind resistence, anti-collision lighting." />
            <DefaultInfoCard color="info" icon="" title="Avata"
              description="12m flight times, exterior or interior First Person Perspective flythroughs, video stabilization." />
            <DefaultInfoCard color="info" icon="" title="Spark"
              description="8m flight times, small frame, prop guards, good for enclosed interior photos or videos, or flights near people." />
            <DefaultInfoCard color="info" icon="" title="Osmo"
              description="Phone compatible, stabilization and active tracking, timelapse and hyperlapse, compact for tight shots." />
          </div>
        </div>
      </div>
      <div class="row align-items-center mb-3">
        <div class="col-lg-6">
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
              <b>Phone:</b> 303 416 2945
              <br />
              <b>Email:</b> altitudedroneworks@gmail.com
              <br />
              <RouterLink class="btn btn-sm mb-0 bg-gradient-success" :to="{ name: 'contactus' }" rel="tooltip"
                title="Contact Us" data-placement="bottom">
                Contact Us
              </RouterLink>
            </p>
          </div>
        </div>
        <div class="col-lg-4 ms-auto me-auto">
          <RotatingCard>
            <RotatingCardFront :image="drone3" icon="local_police" title="Compliance and Regulations"
              description="All missions operate in compliance with Part 107 FAA aviation regulations and fly with at least $1M in drone liability insurance coverage. Share the commitment to a culture of safety and excellence." />

            <RotatingCardBack :image="drone1" title="Want more details?"
              description="All commercial drone operators must adhere to Part 107 regulations when flying for any non-recreational purpose."
              :action="[
            {
              route: 'regulations',
              label: 'FAQ',
            },
          ]" />
          </RotatingCard>
        </div>
      </div>
    </div>
  </section>
</template>
