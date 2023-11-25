import { createRouter, createWebHashHistory } from "vue-router";
import PresentationView from "../views/Presentation/PresentationView.vue";
import AboutView from "../views/LandingPages/AboutUs/AboutView.vue";
import ContactView from "../views/LandingPages/ContactUs/ContactView.vue";
import ServicesView from "../views/LandingPages/Services/ServicesView.vue";
import RegulationView from "../views/LandingPages/Regulation/RegulationView.vue";
import PrivacyView from "../views/LandingPages/Legal/PrivacyPolicyView.vue";
import TermsView from "../views/LandingPages/Legal/TermsView.vue";
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
  ],
});

export default router;
