<script setup>

//common components
import DefaultNavbar from "@/components/navbars/NavbarDefault.vue";
import DefaultFooter from "@/components/footers/FooterDefault.vue";
import VideoBackground from 'vue-responsive-video-background-player'

// image
import alexa2 from "@/assets/img/altitude/bespoke/alexa2.jpg";
import alexa4 from "@/assets/img/altitude/bespoke/alexa4.jpg";
import alexa from "@/assets/img/altitude/bespoke/alexa.mp4";
import peregrine4 from "@/assets/img/altitude/bespoke/peregrine4.jpg";
import peregrine6 from "@/assets/img/altitude/bespoke/peregrine6.jpg";
import peregrine from "@/assets/img/altitude/bespoke/peregrine.mp4";
</script>
<template>
  <DefaultNavbar transparent />
  <div class="mx-auto body-container">
    <div class="page-header min-height-400" :style="{ backgroundImage: `url(${peregrine6})` }" loading="lazy">
      <span class="mask bg-gradient-dark opacity-8">
        <div class="col-lg-8 text-center mx-auto my-auto mt-8">
          <h1 class="text-white">
            Website Content
          </h1>
          <h3 class="text-white">Professional Decks</h3>
        </div>
      </span>
    </div>
    <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6 mb-4">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 mt-4">
            <img :src="alexa2" :alt="alexa2" class="img-fluid shadow border-radius-lg" loading="lazy" />
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6 col-sm-6 mt-4">
            <img :src="alexa4" :alt="alexa4" class="img-fluid shadow border-radius-lg" loading="lazy" />
          </div>
          <div class="col-lg-6 col-sm-6 mt-4">
            <VideoBackground class="shadow border-radius-lg" style="height: 100%; min-height: 200px;" :src="alexa" />
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6 col-sm-6 mt-4">
            <VideoBackground class="shadow border-radius-lg" style="height: 100%; min-height: 200px;" :src="peregrine" />
          </div>
          <div class="col-lg-6 col-sm-6 mt-4">
            <img :src="peregrine4" :alt="peregrine4" class="img-fluid shadow border-radius-lg" loading="lazy" />
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
