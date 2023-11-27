<script setup>

//common components
import DefaultNavbar from "@/components/navbars/NavbarDefault.vue";
import DefaultFooter from "@/components/footers/FooterDefault.vue";

// sections
import RealEstatePosts from "./Sections/RealEstatePosts.vue";
import CorporateAdvertising from "./Sections/CorporateAdvertising.vue";
import CustomWork from "./Sections/CustomWork.vue";

// image
import image from "@/assets/img/altitude/landscape/silverthorne.jpg";
</script>
<template>
  <DefaultNavbar transparent />
  <div class="mx-auto body-container">
    <div class="page-header min-height-400" :style="{ backgroundImage: `url(${image})` }" loading="lazy">
      <span class="mask bg-gradient-dark opacity-8">
        <div class="col-lg-8 text-center mx-auto my-auto mt-8">
          <h1 class="text-white">
            Services Highlights
          </h1>
        </div>
      </span>
    </div>
    <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6 mb-4">
      <RealEstatePosts />
      <CorporateAdvertising />
      <CustomWork />
    </div>
  </div>
  <DefaultFooter />
</template>
