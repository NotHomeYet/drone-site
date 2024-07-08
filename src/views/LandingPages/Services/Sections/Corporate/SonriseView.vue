<script setup>

//common components
import DefaultNavbar from "@/components/navbars/NavbarDefault.vue";
import DefaultFooter from "@/components/footers/FooterDefault.vue";

// image
import camp1 from "@/assets/img/altitude/camp/camp1.jpg";
import camp2 from "@/assets/img/altitude/camp/camp2.jpg";
import camp3 from "@/assets/img/altitude/camp/camp3.jpg";
import pano1 from "@/assets/img/altitude/camp/pano1.jpg";
import pano2 from "@/assets/img/altitude/camp/pano2.jpg";
import pano_sphere from "@/assets/img/altitude/camp/pano_sphere.jpg";
import sonrise from "@/assets/img/altitude/camp/sonrise.mp4";
</script>
<template>
  <DefaultNavbar transparent />
  <div class="mx-auto body-container">
    <div class="page-header min-height-400" :style="{ backgroundImage: `url(${pano1})` }" loading="lazy">
      <span class="mask bg-gradient-dark opacity-8">
        <div class="col-lg-8 text-center mx-auto my-auto mt-8">
          <h1 class="text-white">
            Corporate Branding and Advertising
          </h1>
          <h3 class="text-white">Mountain Ranch, Gunnison County</h3>
        </div>
      </span>
    </div>
    <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6 mb-4">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-sm-6 mt-4">
            <VideoBackground class="shadow border-radius-lg" style="height: 100%; min-height: 200px;" :src="sonrise" />
          </div>
          <div class="col-lg-6 col-sm-6 mt-4">
            <img :src="camp1" :alt="camp1" class="img-fluid shadow border-radius-lg" loading="lazy" />
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6 col-sm-6 mt-4">
            <img :src="camp3" :alt="camp3" class="img-fluid shadow border-radius-lg" loading="lazy" />
          </div>
          <div class="col-lg-6 col-sm-6 mt-4">
            <img :src="camp2" :alt="camp2" class="img-fluid shadow border-radius-lg" loading="lazy" />
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12 mt-4">
            <img :src="pano1" :alt="pano1" class="img-fluid shadow border-radius-lg" loading="lazy" />
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12 mt-4">
            <img :src="pano2" :alt="pano2" class="img-fluid shadow border-radius-lg" loading="lazy" />
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12 mt-4">
            <img :src="pano_sphere" :alt="pano_sphere" class="img-fluid shadow border-radius-lg" loading="lazy" />
          </div>
          <!-- TODO fix me
                                                                                                                                                                                          https://www.npmjs.com/package/@egjs/vue3-view360
                                                                                                                                                                                          <div class="row">
                                                                                                                                                                                          <div id="myPanoViewer">
                                                                                                                                                                                            <PanoViewer :tag="'div'" :image="pano_sphere" />
                                                                                                                                                                                          </div>
                                                                                                                                                                                        </div> -->
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
