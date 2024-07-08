<script setup>

//common components
import DefaultNavbar from "@/components/navbars/NavbarDefault.vue";
import DefaultFooter from "@/components/footers/FooterDefault.vue";

// image
import p2 from "@/assets/img/altitude/cinematics/p2.jpg";
import p6 from "@/assets/img/altitude/cinematics/p6.jpg";
import landfpv from "@/assets/img/altitude/cinematics/landfpv.mp4";
import pano1 from "@/assets/img/altitude/cinematics/pano1.jpg";
import pano3 from "@/assets/img/altitude/cinematics/pano3.jpg";
</script>
<template>
  <DefaultNavbar transparent />
  <div class="mx-auto body-container">
    <div class="page-header min-height-400" :style="{ backgroundImage: `url(${p2})` }" loading="lazy">
      <span class="mask bg-gradient-dark opacity-8">
        <div class="col-lg-8 text-center mx-auto my-auto mt-8">
          <h1 class="text-white">
            Aerial Cinematics<br /> and Panoramas
          </h1>
        </div>
      </span>
    </div>
    <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6 mb-4">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-sm-6 mt-4">
            <VideoBackground class="shadow border-radius-lg" style="height: 100%; min-height: 200px;" :src="landfpv" />
          </div>
          <div class="col-lg-6 col-sm-6 mt-4">
            <img :src="p6" :alt="p6" class="img-fluid shadow border-radius-lg" loading="lazy" />
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12 mt-4">
            <img :src="pano3" :alt="pano3" class="img-fluid shadow border-radius-lg" loading="lazy" />
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12 mt-4">
            <img :src="pano1" :alt="pano1" class="img-fluid shadow border-radius-lg" loading="lazy" />
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
