import { createRouter, createWebHashHistory } from "vue-router";
import PresentationView from "../views/Presentation/PresentationView.vue";
import AboutView from "../views/LandingPages/AboutUs/AboutView.vue";
import ContactView from "../views/LandingPages/ContactUs/ContactView.vue";
import ServicesView from "../views/LandingPages/Services/ServicesView.vue";
import RegulationView from "../views/LandingPages/Regulation/RegulationView.vue";
import PrivacyView from "../views/LandingPages/Legal/PrivacyPolicyView.vue";
import TermsView from "../views/LandingPages/Legal/TermsView.vue";
import ParkerView from "../views/LandingPages/Services/Sections/RealEstate/ParkerView.vue";
import CentennialView from "../views/LandingPages/Services/Sections/RealEstate/CentennialView.vue";
import SummitView from "../views/LandingPages/Services/Sections/RealEstate/SummitView.vue";
import InteriorView from "../views/LandingPages/Services/Sections/RealEstate/InteriorView.vue";
import SonriseView from "../views/LandingPages/Services/Sections/Corporate/SonriseView.vue";
import EventsView from "../views/LandingPages/Services/Sections/Events/EventsView.vue";
import TrafficView from "../views/LandingPages/Services/Sections/Events/TrafficView.vue";
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "presentation",
      component: PresentationView,
    },
    {
      path: "/pages/landing-pages/about-us",
      name: "about",
      component: AboutView,
    },
    {
      path: "/pages/landing-pages/contact-us",
      name: "contactus",
      component: ContactView,
    },
    {
      path: "/pages/landing-pages/services",
      name: "services",
      component: ServicesView,
    },
    {
      path: "/pages/landing-pages/regulations",
      name: "regulations",
      component: RegulationView,
    },
    {
      path: "/pages/legal/privacy",
      name: "privacy",
      component: PrivacyView,
    },
    {
      path: "/pages/legal/terms",
      name: "terms",
      component: TermsView,
    },
    {
      path: "/pages/service/parker",
      name: "parker",
      component: ParkerView,
    },
    {
      path: "/pages/service/centennial",
      name: "centennial",
      component: CentennialView,
    },
    {
      path: "/pages/service/summit",
      name: "summit",
      component: SummitView,
    },
    {
      path: "/pages/service/interior",
      name: "interior",
      component: InteriorView,
    },
    {
      path: "/pages/service/sonrise",
      name: "sonrise",
      component: SonriseView,
    },
    {
      path: "/pages/service/events",
      name: "events",
      component: EventsView,
    },
    {
      path: "/pages/service/traffic",
      name: "traffic",
      component: TrafficView,
    },
  ],
});

export default router;
