<script setup>
// example components
import TransparentBlogCard from "../../../../components/cards/blogCards/TransparentBlogCard.vue";
import BackgroundBlogCard from "../../../../components/cards/blogCards/BackgroundBlogCard.vue";

// Video Components
import { Vue3Marquee } from 'vue3-marquee'
import VideoBackground from 'vue-responsive-video-background-player'
import ff from "@/assets/img/altitude/custom/adventure.mp4";

//Vue Material Kit 2 components
import fc1 from "@/assets/img/altitude/custom/fc1_1.1.1.jpg";
import lake2 from "@/assets/img/altitude/landscape/lake2.jpg";
import traffic from "@/assets/img/altitude/custom/traffic_still.jpg";
import camp1 from "@/assets/img/altitude/camp/camp2.jpg";
import camp2 from "@/assets/img/altitude/camp/camp1.jpg";
import pano_1 from "@/assets/img/altitude/camp/pano1.jpg";

</script>
<template>
  <section class="py-3">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <h3 class="mb-5">Custom Work</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-3 col-sm-6">
          <TransparentBlogCard :image="fc1" title="Events and Celebrations" action=""
            description="Capture dynamic shots of large-scale events, providing compelling footage for promotional purposes." />
        </div>
        <div class="col-lg-3 col-sm-6">
          <div class="card-header p-0">
            <VideoBackground class="d-block blur-shadow-image img-fluid border-radius-lg" :src="ff"
              style="height: 130px; max-height: 130px">
            </VideoBackground>
          </div>
          <div class="card-body px-0">
            <h5>Adventure Sessions</h5>
            <p>Active tracking and FPV captures the action, delivering dynamic footage that effortlessly keeps up with
              your every move.
            </p>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6">
          <TransparentBlogCard :image="traffic" title="Traffic & Pedestrian Surveys" action=""
            description="Get a bird's eye view on traffic flow and pedestrian patterns, enabling informed decisions for safer, more efficient urban environments." />
        </div>
        <div class="col-lg-3 col-sm-6">
          <BackgroundBlogCard :image="lake2" title="The Sky's the Limit" action=""
            description="Have a novel idea that requires flying to new heights? Let talk!" />
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12 mt-4">
          <Vue3Marquee id="marquee-slider" duration="100" class="border-radius-lg">
            <img :src="`${pano_1}`" :height="500" />
            <img :src="`${lake2}`" :height="500" />
            <img :src="`${traffic}`" :height="500" />
            <img :src="`${camp1}`" :height="500" />
            <img :src="`${camp2}`" :height="500" />
            <img :src="`${fc1}`" :height="500" />
          </Vue3Marquee>
        </div>
      </div>
    </div>
  </section>
</template>
