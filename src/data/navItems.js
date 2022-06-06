import { showEvents, showStory, showLodging, showRegistry, showActivities } from "./toggles";

export let weddingDayNavItems = [
  {
    label: "Program",
    href: "#program",
    display: true,
  },
  {
    label: "Oak Hill Farm",
    href: "#oak-hill",
    display: true,
  }
];

export let navItems = [
  {
    label: "Our Story",
    href: "#story",
    display: showStory,
  },
  {
    label: "Events",
    href: "#events",
    display: showEvents,
  },
  {
    label: "Photos",
    href: "#photos",
    display: true,
  },
  {
    label: "Accommodations",
    href: "#lodging",
    display: showLodging,
  },
  {
    label: "Things to Do",
    href: "#activities",
    display: showActivities,
  },
  {
    label: "Registry",
    href: "#registry",
    display: showRegistry,
  },
  {
    label: "Oak Hill Farm",
    href: "#venue",
    display: true,
  },
];
