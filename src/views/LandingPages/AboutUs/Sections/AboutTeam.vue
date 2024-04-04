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
        <div class="col-md-12 text-start mb-5 mt-5">
          <h3 class="text-white z-index-1 position-relative">
            The Team
          </h3>
          <p class="text-white opacity-8 mb-0">
            Currently opearting as freelancers. A lean mean fighting machine. We're small but mighty.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6 col-12">
          <HorizontalTeamCard class="mt-4" :image="noah" :profile="{ name: 'Noah Moore', link: 'javascript:;' }"
            :position="{ label: 'Freelancer Pilot', color: 'success' }"
            description="Noah has been flying drones for aerial photography since 2017 and is a certified part 107 pilot. He has a background in Aerospace engineering, cloud technologies, and cybersecurity." />
        </div>
      </div>
    </div>
  </section>
</template>
