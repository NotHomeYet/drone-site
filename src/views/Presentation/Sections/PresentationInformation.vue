<script setup>
import DefaultInfoCard from "../../../components/cards/infoCards/DefaultInfoCard.vue";
import TransparentBlogCard from "../../../components/cards/blogCards/TransparentBlogCard.vue";
import pano3 from "@/assets/img/altitude/cinematics/pano3.jpg";
</script>
<template>
  <section class="my-2 py-2">
    <div class="container">
      <div class="row align-items-center">
        <div class="row">
          <div class="col-lg-12 ms-auto">
            <div class="row justify-content-start">
              <DefaultInfoCard icon="camera" title="Aerial Photography and Videography"
                description="Capture the extraordinary with inspiring photography and videography services from a new vantage point. Elevate your narrative with unparalleled precision and artistic perspective." />
              <DefaultInfoCard icon="rocket" title="Expertise and Skill"
                description="Leverage the latest in drone tech for high-quality and innovative visuals. Stay up to date with 4k videos, First Person View (FPV) flythroughs, hyperlapse and progressive waypoint videos, and more." />
            </div>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-lg-6 col-sm-6">
            <h3>
              <RouterLink class="color-info" :to="{ name: 'services' }" rel="tooltip" title="Service Highlights"
                data-placement="bottom">
                Spark Imagination
              </RouterLink>
            </h3>
            <ol>
              <li><b>Aerial Photography and Videography:</b> Stunning aerial perspective for real estate,
                events, marketing, and monitoring.</li>
              <li><b>Content Generation:</b> Engaging and dynamic website content to enhance online presence.</li>
              <li><b>First Person Flythroughs:</b> Immersive first person experiences for virtual tours to showcase
                properties and venues.</li>
              <li><b>Inspections and Surveying:</b> Surveying, site and landscape inspection,
                job sites, and infrastructure using drone technology.</li>
              <li><b>Construction or Project Site Management:</b> Aerial insights for construction site management,
                including
                progress tracking, site planning, and safety monitoring.</li>
              <li><b>Event Coverage:</b> Aerial coverage for events such as weddings, concerts, sports events,
                and
                festivals to capture dynamic and immersive footage.</li>
              <li><b>Consultation and Training:</b> Consultation services on drone technology, regulations, and
                best
                practices, as well as offering training programs for drone operators and businesses.</li>
            </ol>
            The sky's the limit!
          </div>
          <div class="col-lg-6 col-sm-6 mt-0 pt-0">
            <RouterLink :to="{ name: 'services' }" rel="tooltip" title="Service Highlights" data-placement="bottom">
              <TransparentBlogCard :image="pano3" title="" description="Click for Service Highlights" />
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
