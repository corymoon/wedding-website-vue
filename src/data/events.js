import { v4 as uuidv4 } from 'uuid';

export let events = [
  // 10/6/2023
  {
    id: uuidv4(),
    header: true,
    title: "October 6, 2023",
  },
  {
    id: uuidv4(),
    icon: "flag",
    time: "11:00 AM",
    desc: "Arrival",
    location: {
      name: "",
      address: "",
    },
  },
  // 10/7/2023
  {
    id: uuidv4(),
    header: true,
    title: "October 7, 2023",
  },
  {
    id: uuidv4(),
    icon: "flag",
    time: "11:00 AM",
    desc: "Rehersal",
    location: {
      name: "",
      address: "",
    },
  },
  {
    id: uuidv4(),
    icon: "drumstick-bite",
    time: "4:00 PM",
    desc: "Rehersal Dinner",
    location: {
      name: "",
      address: "",
    },
  },
  // 10/8/2023
  {
    id: uuidv4(),
    header: true,
    title: "October 8, 2023",
  },
  {
    id: uuidv4(),
    icon: "ring",
    time: "12:00 PM",
    desc: "Ceremony",
    location: {
      name: "",
      address: "",
    },
  },
  {
    id: uuidv4(),
    icon: "utensils",
    time: "5:00 PM",
    desc: "Dinner",
    location: {
      name: "",
      address: "",
    },
  },
  {
    id: uuidv4(),
    icon: "glass-cheers",
    time: "10:00 PM",
    desc: "Send-off",
    location: {
      name: "",
      address: "",
    },
  },
];
