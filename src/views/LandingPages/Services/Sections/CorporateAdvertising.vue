<script setup>

// example components
import TransparentBlogCard from "../../../../components/cards/blogCards/TransparentBlogCard.vue";
import BackgroundBlogCard from "../../../../components/cards/blogCards/BackgroundBlogCard.vue";

//Vue Material Kit 2 components
import camp1 from "@/assets/img/altitude/camp/camp1.jpg";
import land1 from "@/assets/img/altitude/land/land1.jpg";
import p2 from "@/assets/img/altitude/cinematics/p2.jpg";
import p5 from "@/assets/img/altitude/cinematics/p5.jpg";
</script>
<template>
  <section class="py-1">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <BackgroundBlogCard :image="p2" title="Corporate Branding and Advertising" class="mb-4"
            description="Each brand is distinct. Let's find a higher angle on the narative unique to you. Use compelling aerial footage for visually stunning advertisements to enhance brand visibility." />

        </div>
      </div>
      <div class="row">
        <div class="col-lg-3 col-sm-6">
          <TransparentBlogCard :image="p5" title="Aerial Cinematics" description="" :action="{
            route: 'cinematics', color: 'info', label: 'Sample',
          }" />
        </div>
        <div class="col-lg-3 col-sm-6">
          <TransparentBlogCard :image="camp1" title="Mountain Ranch" description="" :action="{
            route: 'sonrise', color: 'info', label: 'Sample',
          }" />
        </div>
        <div class="col-lg-3 col-sm-6">
          <TransparentBlogCard :image="land1" title="Land Purchase" description="" :action="{
            route: 'land', color: 'info', label: 'Sample',
          }" />
        </div>
      </div>
    </div>
  </section>
</template>
