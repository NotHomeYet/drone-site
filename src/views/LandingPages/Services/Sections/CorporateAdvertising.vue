<script setup>

// example components
import TransparentBlogCard from "../../../../components/cards/blogCards/TransparentBlogCard.vue";
import BackgroundBlogCard from "../../../../components/cards/blogCards/BackgroundBlogCard.vue";

//Vue Material Kit 2 components
import camp1 from "@/assets/img/altitude/camp/camp1.jpg";
import pano from "@/assets/img/altitude/camp/pano2.jpg";
</script>
<template>
  <section class="py-1">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <BackgroundBlogCard :image="pano" title="Corporate Branding and Advertising" class="mb-4"
            description="Each brand is distinct. Let's find a higher angle on the narative unique to you. Use compelling aerial footage for visually stunning advertisements to enhance brand visibility." />

        </div>
      </div>
      <div class="row">
        <div class="col-lg-3 col-sm-6">
          <TransparentBlogCard :image="camp1" title="Mountain Ranch" description="" :action="{
            route: 'sonrise', color: 'info', label: 'Sample',
          }" />
        </div>
      </div>
    </div>
  </section>
</template>
