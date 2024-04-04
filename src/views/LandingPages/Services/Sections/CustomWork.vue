<script setup>
// example components
import TransparentBlogCard from "../../../../components/cards/blogCards/TransparentBlogCard.vue";
import BackgroundBlogCard from "../../../../components/cards/blogCards/BackgroundBlogCard.vue";

//Vue Material Kit 2 components
import foundry from "@/assets/img/altitude/events/foundry1.jpg";
import foundry2 from "@/assets/img/altitude/events/foundry2.jpg";
import land1 from "@/assets/img/altitude/land/land4.jpg";
import traffic_still from "@/assets/img/altitude/events/traffic_still.jpg";
</script>
<template>
  <section class="py-1">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <BackgroundBlogCard :image="foundry2" title="Large Events, Survey, Inspections, and Custom Work" class="mb-4"
            description="Capture dynamic shots of large-scale events, providing compelling footage for promotional purposes. Have a novel idea that requires flying to new heights? Let's talk!" />
        </div>
      </div>
      <div class="row">
        <div class="col-lg-3 col-sm-6">
          <TransparentBlogCard :image="foundry" title="Events and Celebrations" description="" :action="{
            route: 'events', color: 'info', label: 'Sample',
          }" />
        </div>
        <div class="col-lg-3 col-sm-6">
          <TransparentBlogCard :image="traffic_still" title="Traffic and Pedestrian Survey" description="" :action="{
            route: 'traffic', color: 'info', label: 'Sample',
          }" />
        </div>
        <div class="col-lg-3 col-sm-6">
          <TransparentBlogCard :image="land1" title="Land Inspection" description="" :action="{
            route: 'land', color: 'info', label: 'Sample',
          }" />
        </div>
      </div>
    </div>
  </section>
</template>
