<script setup>
import RotatingCard from "../../../components/cards/rotatingCards/RotatingCard.vue";
import RotatingCardFront from "../../../components/cards/rotatingCards/RotatingCardFront.vue";
import RotatingCardBack from "../../../components/cards/rotatingCards/RotatingCardBack.vue";
import DefaultInfoCard from "../../../components/cards/infoCards/DefaultInfoCard.vue";

// Images
import drone1 from "@/assets/img/drones/drone3.jpg";
import drone2 from "@/assets/img/drones/drone2.jpg";
</script>
<template>
  <section class="my-2 py-2">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 ms-auto">
          <div class="row justify-content-start">
            <DefaultInfoCard icon="camera" title="Photography And Videography"
              description="Capture the extraordinary with drone powered Photography and Videography expertise. Elevate your narrative with unparalleled precision and artistic perspective." />
            <DefaultInfoCard icon="rocket_launch" title="Expertise and Skill"
              description="Leverage the latest in aerial tech for high-quality and innovative visuals. Stay up to date with trends such as First Person View (FPV) flythroughs and timelapse videos." />
          </div>
          <div class="row justify-content-start mt-2">
            <DefaultInfoCard class="mt-3" icon="price_change" title="Save Time & Money"
              description="Enjoy a one-stop-shop solution for anything from stunning photography to difficult to reach inspections. Use simple, one click ordering or build your own custom mission." />
            <DefaultInfoCard class="mt-3" icon="fork_left" title=" Versatility in Services"
              description="Proven results with a diverse range of services catering to various industries; real estate, construction, large events, surveying, corporate branding, and more." />
          </div>
        </div>
        <div class="col-lg-4 ms-auto me-auto">
          <RotatingCard>
            <RotatingCardFront :image="drone1" icon="local_police" title="Compliance and Regulations"
              description="All missions operate in compliance with Part 107 FAA aviation regulations and fly with at least $1M in drone liability insurance coverage. Share the commitment to a culture of safety and excellence." />

            <RotatingCardBack :image="drone2" title="Want more details?"
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
