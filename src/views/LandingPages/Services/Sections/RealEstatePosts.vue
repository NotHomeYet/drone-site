<script setup>
// example components
import TransparentBlogCard from "../../../../components/cards/blogCards/TransparentBlogCard.vue";

import ph1 from "@/assets/img/altitude/house/ph/ph1.jpg";
import mh1 from "@/assets/img/altitude/house/mh/mh1.jpg";
import mountain1 from "@/assets/img/altitude/house/mountain/mh1.jpg";
import shawct from "@/assets/img/altitude/house/random/shawct.jpg";
import bath from "@/assets/img/altitude/house/random/bath.jpg";
import BackgroundBlogCard from "../../../../components/cards/blogCards/BackgroundBlogCard.vue";
</script>
<template>
  <section class="py-1">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <BackgroundBlogCard :image="shawct" title="Real Estate Photography and Videograph" class="mb-4"
            description="Stunning aerial shots providing unique perspectives and highlighting surrounding
                                                                                              areas, landscapes, and architectural features. Showcase your listing with a unique and captivating view from above." />

        </div>
      </div>
      <div class="row">
        <div class="col-lg-3 col-sm-6">
          <TransparentBlogCard :image="mh1" title="Centennial, CO" description="" :action="{
            route: 'centennial', color: 'info', label: 'Sample',
          }" />
        </div>
        <div class="col-lg-3 col-sm-6">
          <TransparentBlogCard :image="mountain1" title="Summit County" description="" :action="{
            route: 'summit', color: 'info', label: 'Sample',
          }" />
        </div>
        <div class="col-lg-3 col-sm-6">
          <TransparentBlogCard :image="ph1" title="Parker, CO" description="" :action="{
            route: 'parker', color: 'info', label: 'Sample',
          }" />
        </div>
        <div class="col-lg-3 col-sm-6">
          <TransparentBlogCard :image="bath" title="Interior and FPV Flythrough" description="" :action="{
            route: 'interior', color: 'info', label: 'Sample',
          }" />
        </div>
      </div>
    </div>
  </section>
</template>


