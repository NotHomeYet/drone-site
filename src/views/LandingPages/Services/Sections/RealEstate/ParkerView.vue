<script setup>

//common components
import DefaultNavbar from "@/components/navbars/NavbarDefault.vue";
import DefaultFooter from "@/components/footers/FooterDefault.vue";

// image
import rein1 from "@/assets/img/altitude/house/random/rein1.jpg";
import ph1 from "@/assets/img/altitude/house/ph/ph1.jpg";
import ph2 from "@/assets/img/altitude/house/ph/ph2.jpg";
import ph3 from "@/assets/img/altitude/house/ph/ph3.jpg";
import ph_up from "@/assets/img/altitude/house/ph/ph_up.mp4";
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
          <h3 class="text-white">Parker, CO</h3>
        </div>
      </span>
    </div>
    <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6 mb-4">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-sm-6 mt-4">
            <img :src="ph1" :alt="ph1" class="img-fluid shadow border-radius-lg" loading="lazy" />
          </div>
          <div class="col-lg-6 col-sm-6 mt-4">
            <img :src="ph3" :alt="ph3" class="img-fluid shadow border-radius-lg" loading="lazy" />
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6 col-sm-6 mt-4">
            <img :src="ph2" :alt="ph2" class=" img-fluid shadow border-radius-lg" loading="lazy" />
          </div>
          <div class="col-lg-6 col-sm-6 mt-4">
            <VideoBackground class="shadow border-radius-lg" style="height: 100%;" :src="ph_up" />
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
