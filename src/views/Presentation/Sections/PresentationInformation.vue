<script setup>
import RotatingCard from "../../../components/cards/rotatingCards/RotatingCard.vue";
import RotatingCardFront from "../../../components/cards/rotatingCards/RotatingCardFront.vue";
import RotatingCardBack from "../../../components/cards/rotatingCards/RotatingCardBack.vue";
import DefaultInfoCard from "../../../components/cards/infoCards/DefaultInfoCard.vue";

// Images
import lake2 from "@/assets/img/altitude/landscape/lake2.jpg";
import spark from "@/assets/img/drones/spark.jpg";
</script>
<template>
  <section class="my-2 py-2">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 ms-auto">
          <div class="row justify-content-start">
            <DefaultInfoCard icon="rocket_launch" title="Innovation and Technology"
              description="Leverage the latest advancements in drone capabilities and camera equipment for high-quality and innovative visuals." />
            <DefaultInfoCard icon="workspace_premium" title="Expertise and Skill"
              description="Proven results from skilled operators and profesional expertise generate compelling aerial stills and video." />
          </div>
          <div class="row justify-content-start mt-2">
            <DefaultInfoCard class="mt-3" icon="price_change" title="Save Time & Money"
              description="A one-stop-shop solution utilizing a comprehensive range of tools from stunning photography to precise surveying." />
            <DefaultInfoCard class="mt-3" icon="fork_left" title=" Versatility in Services"
              description="Offering a diverse range of services catering to various industries such as real estate, construction, events, and more." />
          </div>
        </div>
        <div class="col-lg-4 ms-auto me-auto">
          <RotatingCard>
            <RotatingCardFront :image="lake2" icon="local_police" title="Compliance and Regulations"
              description="We operate in full compliance with Part 107 FAA aviation regulations in the NAS. We require drone insurance for all operations and are commited to a culture of safety." />

            <RotatingCardBack :image="spark" title="Want more details?"
              description="All commercial drone operators must adhear to Part 107 regulations when flying missions for any non recreational purpose."
              :action="[
                {
                  route: './pages/landing-pages/regulations',
                  label: 'Read More',
                },
              ]" />
          </RotatingCard>
        </div>
      </div>
    </div>
  </section>
</template>
