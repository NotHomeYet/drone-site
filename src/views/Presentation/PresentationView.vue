<script setup>
import { onMounted, onUnmounted } from "vue";

//common components
import DefaultNavbar from "@/components/navbars/NavbarDefault.vue";
import DefaultFooter from "@/components/footers/FooterDefault.vue";

// Video Components
import VideoBackground from 'vue-responsive-video-background-player'

// sections
import PresentationTestimonials from "./Sections/PresentationTestimonials.vue";
import PresentationInformation from "./Sections/PresentationInformation.vue";
import PresentationPricing from "./Sections/PresentationPricing.vue";

//images
import splashView from "@/assets/img/altitude/landscape/splash.mp4";
import logo from "@/assets/img/altitude/logo_big.png";

//hooks
const body = document.getElementsByTagName("body")[0];
onMounted(() => {
  body.classList.add("presentation-page");
  body.classList.add("bg-gray-200");
});
onUnmounted(() => {
  body.classList.remove("presentation-page");
  body.classList.remove("bg-gray-200");
});
</script>

<template>
  <div class="container position-sticky z-index-sticky top-0">
    <div class="row">
      <div class="col-12">
        <DefaultNavbar :sticky="true" />
      </div>
    </div>
  </div>
  <div class="mx-auto body-container">
    <VideoBackground class="mx-auto position-relative h750" :src="`${splashView}`">
      <div class="container">
        <div class="row mt-12 pt-6">
          <div class="text-center mx-auto position-relative">
            <img :src="logo" alt="altitude droneworks icon" class="h150" loading="lazy" />
          </div>
        </div>
        <div class="row">
          <div class="text-center mx-auto position-relative" :style="{ marginTop: '-2rem' }">
            <h1 class="text-white pt-3 mt-n5 me-2" :style="{ display: 'inline-block', textShadow: '3px 3px #000000' }">
              Altitude Droneworks
            </h1>
          </div>
        </div>
      </div>
    </VideoBackground>

    <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6">
      <PresentationInformation />
      <!-- TODO add this back once I have some -->
      <!-- <PresentationTestimonials /> -->
      <PresentationPricing />
    </div>
  </div>
  <DefaultFooter />
</template>
