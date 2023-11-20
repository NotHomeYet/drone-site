<script setup>
// example component
import HorizontalTeamCard from "@/components/cards/teamCards/HorizontalTeamCard.vue";

// images
import noah from "@/assets/img/team/noah_fly.jpg";
</script>

<template>
  <section class="pb-5 position-relative bg-gradient-dark mx-n3">
    <div class="container">
      <div class="row">
        <div class="col-md-8 text-start mb-5 mt-5">
          <h3 class="text-white z-index-1 position-relative">
            The Team
          </h3>
          <p class="text-white opacity-8 mb-0">
            Currently a lean mean fighting machine. We're small but mighty.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6 col-12">
          <HorizontalTeamCard class="mt-4" :image="noah" :profile="{ name: 'Noah Moore', link: 'javascript:;' }"
            :position="{ label: 'Owner / Founder', color: 'success' }"
            description="Noah has been flying drones and other RC aircraft for most of his adult life, working with dji drones from 2017. He has a professional background in Aerospace engineering, cloud technologies, and cybersecurity and loves to join his expertise in technology with practical applications such as aerial videography." />
        </div>
      </div>
    </div>
  </section>
</template>
