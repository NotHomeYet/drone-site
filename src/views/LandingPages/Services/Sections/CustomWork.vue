<script setup>
// example components
import TransparentBlogCard from "../../../../components/cards/blogCards/TransparentBlogCard.vue";
import BackgroundBlogCard from "../../../../components/cards/blogCards/BackgroundBlogCard.vue";

// Video Components
import { Vue3Marquee } from 'vue3-marquee'
import VideoBackground from 'vue-responsive-video-background-player'
import ff from "@/assets/img/altitude/events/fall_fest.mp4";

//Vue Material Kit 2 components
import fc1 from "@/assets/img/altitude/events/foundry1.jpg";
import lake2 from "@/assets/img/altitude/landscape/lake2.jpg";
import traffic from "@/assets/img/altitude/custom/traffic_still.jpg";
</script>
<template>
  <section class="py-1">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <h3 class="mb-2">Custom Work</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-3 col-sm-6">
          <TransparentBlogCard :image="fc1" title="Events and Celebrations"
            description="Capture dynamic shots of large-scale events, providing compelling footage for promotional purposes." />
        </div>
        <div class="col-lg-3 col-sm-6">
          <div class="d-block blur-shadow-image img-fluid">
            <VideoBackground class="border-radius-lg mx-auto position-relative h150" :src="ff" />
          </div>
          <div class="card-body px-0">
            <h5>Adventure Sessions</h5>
            <p>Active tracking and FPV captures the action, delivering dynamic footage that effortlessly keeps up with
              your every move.
            </p>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6">
          <TransparentBlogCard :image="traffic" title="Traffic & Pedestrian Surveys"
            description="Get a bird's eye view on traffic flow and pedestrian patterns, enabling informed decisions for safer, more efficient urban environments." />
        </div>
        <div class="col-lg-3 col-sm-6">
          <BackgroundBlogCard :image="lake2" title="The Sky's the Limit"
            description="Have a novel idea that requires flying to new heights? Let's talk!" />
        </div>
      </div>
    </div>
  </section>
</template>
