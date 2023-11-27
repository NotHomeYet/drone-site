<script setup>

//common components
import DefaultNavbar from "@/components/navbars/NavbarDefault.vue";
import DefaultFooter from "@/components/footers/FooterDefault.vue";
import VideoBackground from 'vue-responsive-video-background-player'

// image
import rein1 from "@/assets/img/altitude/house/random/rein1.jpg";
import bath from "@/assets/img/altitude/house/random/bath.jpg";
import fpv from "@/assets/img/altitude/house/random/fpv.mp4";
</script>
<template>
  <DefaultNavbar transparent />
  <div class="mx-auto body-container">
    <div class="page-header min-height-400" :style="{ backgroundImage: `url(${rein1})` }" loading="lazy">
      <span class="mask bg-gradient-dark opacity-8">
        <div class="col-lg-8 text-center mx-auto my-auto mt-8">
          <h1 class="text-white">
            Real Estate Photography and Videography
          </h1>
          <h3 class="text-white">Interior and FPV</h3>
        </div>
      </span>
    </div>
    <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6 mb-4">
      <div class="container">
        <div class="row mt-4">
          <div class="col-lg-6 col-sm-6">
            <img :src="bath" :alt="bath" class="img-fluid shadow border-radius-lg" loading="lazy" />
          </div>
          <div class="col-lg-6 col-sm-6">
            <VideoBackground class="shadow border-radius-lg" style="height: 100%;" :src="fpv" />
          </div>
        </div>
        <div class="row mt-4">
          <RouterLink class="btn btn-sm bg-gradient-info mb-0 ms-auto" :to="{ name: 'services' }" rel="tooltip"
            title="Back" data-placement="bottom">
            Back
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
  <DefaultFooter />
</template>
