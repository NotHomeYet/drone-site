<script setup>

//common components
import DefaultNavbar from "@/components/navbars/NavbarDefault.vue";
import DefaultFooter from "@/components/footers/FooterDefault.vue";
import VideoBackground from 'vue-responsive-video-background-player'

// image
import land3 from "@/assets/img/altitude/events/land3.jpg";
import traffic from "@/assets/img/altitude/events/traffic_still.jpg";
import traffic_mv from "@/assets/img/altitude/events/traffic_mv.mp4";
</script>
<template>
  <DefaultNavbar transparent />
  <div class="mx-auto body-container">
    <div class="page-header min-height-400" :style="{ backgroundImage: `url(${land3})` }" loading="lazy">
      <span class="mask bg-gradient-dark opacity-8">
        <div class="col-lg-8 text-center mx-auto my-auto mt-8">
          <h1 class="text-white">
            Survey and Inspection
          </h1>
          <h3 class="text-white">Traffic Survey</h3>
        </div>
      </span>
    </div>
    <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6 mb-4">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-sm-6 mt-4">
            <img :src="traffic" :alt="traffic" class="img-fluid shadow border-radius-lg" loading="lazy" />
          </div>
          <div class="col-lg-6 col-sm-6 mt-4">
            <VideoBackground class="shadow border-radius-lg" style="height: 100%; min-height: 200px" :src="traffic_mv" />
          </div>
        </div>
        <div class="row">
          <RouterLink class="btn btn-sm bg-gradient-info mb-0 ms-auto mt-4" :to="{ name: 'services' }" rel="tooltip"
            title="Back" data-placement="bottom">
            Back
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
  <DefaultFooter />
</template>
