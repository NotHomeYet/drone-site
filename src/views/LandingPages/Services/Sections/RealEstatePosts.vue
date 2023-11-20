<script setup>
// example components
import TransparentBlogCard from "../../../../components/cards/blogCards/TransparentBlogCard.vue";
import BackgroundBlogCard from "../../../../components/cards/blogCards/BackgroundBlogCard.vue";

// Video Components
import { Vue3Marquee } from 'vue3-marquee'

// Video Components
import VideoBackground from 'vue-responsive-video-background-player'

//Vue Material Kit 2 components
import shawct from "@/assets/img/altitude/house/shawct.jpg";
import ph1 from "@/assets/img/altitude/house/ph1.jpg";
import ph2 from "@/assets/img/altitude/house/ph2.jpg";
import ph3 from "@/assets/img/altitude/house/ph3.jpg";
import bath from "@/assets/img/altitude/house/bath.jpg";
import mh1 from "@/assets/img/altitude/house/mh1.jpg";
import mh2 from "@/assets/img/altitude/house/mh2.jpg";
import mh3 from "@/assets/img/altitude/house/mh3.jpg";
import fpv from "@/assets/img/altitude/house/fpv.mp4";
</script>``
<template>
  <section class="py-3">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h3 class="mb-4">Real Estate Listings</h3>
        </div>
      </div>
      <div class="row">
        <Vue3Marquee id="marquee-slider" duration="75" class="border-radius-lg mb-4">
          <img :src="`${shawct}`" :height="500" />
          <img :src="`${ph1}`" :height="500" />
          <img :src="`${ph2}`" :height="500" />
          <img :src="`${ph3}`" :height="500" />
          <img :src="`${bath}`" :height="500" />
          <img :src="`${mh1}`" :height="500" />
          <img :src="`${mh2}`" :height="500" />
          <img :src="`${mh3}`" :height="500" />
        </Vue3Marquee>
      </div>
      <div class="row">
        <div class="col-lg-3 col-sm-6">
          <TransparentBlogCard :image="mh1" title="Photography and Videography" action=""
            description="Drones capture stunning aerial shots of properties, providing unique perspectives and highlighting surrounding areas, landscapes, and architectural features." />
        </div>
        <div class="col-lg-3 col-sm-6">
          <div class="card-header p-0">
            <VideoBackground class="d-block blur-shadow-image img-fluid border-radius-lg" :src="`${fpv}`"
              style="height: 130px; max-height: 130px">
            </VideoBackground>
          </div>
          <div class="card-body px-0">
            <h5>Virtual Tours</h5>
            <p>First person virtual tours allow buyers to explore properties online, enhancing the presence of
              your listings.
            </p>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6">
          <TransparentBlogCard :image="ph3" title="Elevated Perspective" action=""
            description="Showcase your property with a unique and captivating view from above." />
        </div>
        <div class="col-lg-3 col-md-12 col-12">
          <BackgroundBlogCard :image="bath" title="Wide-Angle Interior Photogrpahy" action=""
            description="Interior photography presents the interior of a property in the best possible light." />
        </div>
      </div>
    </div>
  </section>
</template>

