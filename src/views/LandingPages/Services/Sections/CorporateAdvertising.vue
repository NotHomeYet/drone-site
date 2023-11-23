<script setup>

// example components
import TransparentBlogCard from "../../../../components/cards/blogCards/TransparentBlogCard.vue";
import BackgroundBlogCard from "../../../../components/cards/blogCards/BackgroundBlogCard.vue";

// Video Components
import VideoBackground from 'vue-responsive-video-background-player'
import over_head from "@/assets/img/altitude/camp/over-head.mp4";

//Vue Material Kit 2 components
import camp1 from "@/assets/img/altitude/camp/camp2.jpg";
import camp2 from "@/assets/img/altitude/camp/camp1.jpg";
import pano_1 from "@/assets/img/altitude/camp/pano1.jpg";
import pano_sphere from "@/assets/img/altitude/camp/pano_sphere.jpg";
</script>
<template>
  <section class="py-1">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <h3 class="mb-2">Corporate Branding and Advertising</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-3 col-md-12 col-12 pb-4">
          <BackgroundBlogCard :image="camp1" title="Tell Your Story"
            description="Each brand is distinct. Let's find a higher angle on the narative unique to you." />
        </div>
        <div class="col-lg-3 col-sm-6">
          <TransparentBlogCard :image="camp2" title="Aerial Promotion"
            description="We produce compelling aerial footage for visually stunning advertisements to enhance brand visibility." />
        </div>
        <div class="col-lg-3 col-sm-6">
          <div class="d-block blur-shadow-image img-fluid">
          <VideoBackground class="border-radius-lg mx-auto position-relative h150" :src="over_head" />
        </div>
        <div class="card-body px-0">
          <h5>Site and Facility Showcase</h5>
          <p>We showcase corporate sites, facilities, services, and more, offering promotional materials and branding.
          </p>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6">
          <img class="d-block blur-shadow-image img-fluid border-radius-lg pb-4" :src="pano_1" />
          <TransparentBlogCard :image="pano_sphere" title="Immersive Panoramas"
            description="Stunning landscapes, dynamic scenes, or progress status capture the essence of a site with accuracy and artistry." />
        </div>
      </div>
    </div>
    <!-- TODO fix me
                                                                                                            https://www.npmjs.com/package/@egjs/vue3-view360
                                                                                                            <div class="row">
                                                                                                            <div id="myPanoViewer">
                                                                                                              <PanoViewer :tag="'div'" :image="pano_sphere" />
                                                                                                            </div>
                                                                                                          </div> -->
  </section>
</template>
