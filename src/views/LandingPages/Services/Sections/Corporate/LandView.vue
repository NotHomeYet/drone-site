<script setup>

//common components
import DefaultNavbar from "@/components/navbars/NavbarDefault.vue";
import DefaultFooter from "@/components/footers/FooterDefault.vue";
import VideoBackground from 'vue-responsive-video-background-player'

// image
import land1 from "@/assets/img/altitude/land/land1.jpg";
import land2 from "@/assets/img/altitude/land/land2.jpg";
import land4 from "@/assets/img/altitude/land/land4.jpg";
import landp1 from "@/assets/img/altitude/land/landp1.jpg";
import landv from "@/assets/img/altitude/land/landv.mp4";
</script>
<template>
  <DefaultNavbar transparent />
  <div class="mx-auto body-container">
    <div class="page-header min-height-400" :style="{ backgroundImage: `url(${land2})` }" loading="lazy">
      <span class="mask bg-gradient-dark opacity-8">
        <div class="col-lg-8 text-center mx-auto my-auto mt-8">
          <h1 class="text-white">
            Land Showcase
          </h1>
          <h3 class="text-white">Castle Pines</h3>
        </div>
      </span>
    </div>
    <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6 mb-4">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 mt-4">
            <img :src="landp1" :alt="landp1" class="img-fluid shadow border-radius-lg" loading="lazy" />
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6 col-sm-6 mt-4">
            <img :src="land4" :alt="land4" class="img-fluid shadow border-radius-lg" loading="lazy" />
          </div>
          <div class="col-lg-6 col-sm-6 mt-4">
            <VideoBackground class="shadow border-radius-lg" style="height: 100%; min-height: 200px;" :src="landv" />
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6 col-sm-6 mt-4">
            <img :src="land1" :alt="land1" class="img-fluid shadow border-radius-lg" loading="lazy" />
          </div>
          <div class="col-lg-6 col-sm-6 mt-4">
            <img :src="land2" :alt="land2" class="img-fluid shadow border-radius-lg" loading="lazy" />
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
