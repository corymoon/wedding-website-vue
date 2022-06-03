import { showEvents, showStory, showLodging, showRegistry } from "./toggles";

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
    label: "Lodging",
    href: "#lodging",
    display: showLodging,
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
