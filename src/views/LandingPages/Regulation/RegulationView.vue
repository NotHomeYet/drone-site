<script setup>
//example components
import DefaultNavbar from "../../../components/navbars/NavbarDefault.vue";
import DefaultFooter from "../../../components/footers/FooterDefault.vue";

// image
import image from "@/assets/img/drones/drone1.jpg";
</script>
<template>
  <DefaultNavbar :action="{
    route: 'javascript:;',
    label: 'Buy Now',
    color: 'btn-white',
  }" transparent />

  <div class="mx-auto body-container">
    <div class="page-header min-height-400" :style="{ backgroundImage: `url(${image})` }" loading="lazy">
      <span class="mask bg-gradient-dark opacity-8">
        <div class="col-lg-8 text-center mx-auto my-auto mt-8">
          <h1 class="text-white">
            Regulation and Compliance
          </h1>
        </div>
      </span>
    </div>
    <div class="card card-body shadow-xl mx-3 mx-md-4 mt-n6">
      <div class="row mx-2">
        <div class="col-lg-12">
          <h2>Regulation and Compliance FAQ</h2>
          <p class="lead mb-4">
            All commercial drone missions (ie operations not flown exclusivly for fun) fall under part 107 regulations.
            The general guidelines are safety focused and limit or ban certain types of operations. Some of the rules are
            fixed while others can be mitigated and lifted via a waiver application to the FAA prior to the mission start.
            the FAA has up to 90 days to evaluate waivers but generally responds more quickly.
          </p>
          <ul>
            <li>
              <h5>Are Altitude Droneworks pilots licensed?</h5>
              <p class="lead mb-4">
                Yes - each mission will have a part 107 licensed 'Report Pilot in Command' in charge of all operations.
              </p>
            </li>
            <li>
              <h5>Do all participants need to be part 107 licensed?</h5>
              <p class="lead mb-4">
                No - only the 'Remote Pilot in Command', who is the person directly in charge of the mission. No other
                participants, including the person operating the controls for the drone, need to be licensed.
              </p>
            </li>
            <li>
              <h5>Is Altitude Droneworks Incorporated?</h5>
              <p class="lead mb-4">
                Not currently, plans in the works - as of now all pilots act as freelancers under the umbrella of Altitude
                Droneworks management and policy.
              </p>
            </li>
            <li>
              <h5>What is the highest you can fly?</h5>
              <p class="lead mb-4">
                We are limited to 400ft above ground level, or 400ft around and above a structure. In certain
                restriced airspace near airports this ceiling may be lower.
              </p>
            </li>
            <li>
              <h5>Can you fly at night?</h5>
              <p class="lead mb-4">
                It depends. We can fly 30m after sunset or 30m before sunrise using anti-collision lighting. If flying
                directly prior to sunrise or directly after sunset in that 30m window we can request a waiver to lift the
                lighting requirement if there are mitigating controls.
              </p>
            </li>
            <li>
              <h5>What about indoors?</h5>
              <p class="lead mb-4">
                The FAA only regulates the National Air Space (NAS) and indoor airspace is not a part of the NAS. None of
                these part 107 regulations apply under indoor conditions.
              </p>
            </li>
            <li>
              <h5>Can you fly directly over people or vehicles?</h5>
              <p class="lead mb-4">
                It depends on the situation, yes if the people are directly participating in the drone operation and yes
                if the drone is near but not directly over. Otherwise a waiver with mitigations is needed
                prior to the mission.
              </p>
            </li>
            <li>
              <h5>Can you fly while piloting from a moving vehicle?</h5>
              <p class="lead mb-4">
                Yes in sparsely populated areas without a waiver, if in a populated area will need a waiver.
              </p>
            </li>
            <li>
              <h5>What about a crash that causes injury or property damage?</h5>
              <p class="lead mb-4">
                Situation depending we will need to file a report with the FAA detailing the incident. Altitude Droneworks
                pilots are required to carry drone insurance of at least $1M each mission per internal policy, which is
                not a stipulation of part 107.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <DefaultFooter />
</template>
