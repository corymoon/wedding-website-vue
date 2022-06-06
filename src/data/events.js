import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs';
var duration = require('dayjs/plugin/duration')
dayjs.extend(duration)


const ceremony = new Date("October 8, 2023, 14:00:00");

const seatingDuration = dayjs.duration({ 'minutes': 15 });
const ceremonyDuration = dayjs.duration({ 'hours': 1 });
const cocktailHourDuration = dayjs.duration({ 'hours': 1.5 });
const dinnerDuration = dayjs.duration({ 'hours': 1 });

export let programEvents = [
  {
    id: uuidv4(),
    icon: "chair",
    desc: "Seating begins",
    date: dayjs(ceremony).subtract(seatingDuration),
    location: {
      name: "",
      address: "",
    },
  },
  {
    id: uuidv4(),
    icon: "heart",
    desc: "Ceremony begins",
    date: ceremony,
    location: {
      name: "",
      address: "",
    },
  },
  {
    id: uuidv4(),
    icon: "glass-cheers",
    desc: "Cocktail hour",
    date: dayjs(ceremony).add(ceremonyDuration),
    location: {
      name: "",
      address: "",
    },
  },
  {
    id: uuidv4(),
    icon: "utensils",
    desc: "Dinner",
    date: dayjs(ceremony).add(ceremonyDuration).add(cocktailHourDuration),
    location: {
      name: "",
      address: "",
    },
  },
  {
    id: uuidv4(),
    icon: "music",
    desc: "Celebrate",
    date: dayjs(ceremony).add(ceremonyDuration).add(cocktailHourDuration).add(dinnerDuration),
    location: {
      name: "",
      address: "",
    },
  },
  {
    id: uuidv4(),
    icon: "bus",
    desc: "Last call",
    date: new Date("October 8, 2023, 21:00:00"),
    location: {
      name: "",
      address: "",
    },
  },
];

export let events = [
  // 10/6/2023
  {
    id: uuidv4(),
    header: true,
    title: "October 6, 2023",
    date: new Date("October 6, 2023")
  },
  {
    id: uuidv4(),
    icon: "flag",
    time: "11:00 AM",
    desc: "Arrival",
    date: new Date("October 6, 2023, 11:00:00"),
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
    date: new Date("October 7, 2023")
  },
  {
    id: uuidv4(),
    icon: "flag",
    time: "11:00 AM",
    desc: "Rehersal",
    date: new Date("October 7, 2023 11:00:00"),
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
    date: new Date("October 7, 2023 16:00:00"),
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
    date: new Date("October 8, 2023"),
  },
  {
    id: uuidv4(),
    icon: "ring",
    time: "12:00 PM",
    desc: "Ceremony",
    date: new Date("October 8, 2023 12:00:00"),
    location: {
      name: "Oak Hill Farm - Woodland Forest",
      address: "",
    },
  },
  {
    id: uuidv4(),
    icon: "utensils",
    time: "5:00 PM",
    desc: "Dinner",
    date: new Date("October 8, 2023 17:00:00"),
    location: {
      name: "Oak Hill Farm - Pavillion",
      address: "",
    },
  },
  {
    id: uuidv4(),
    icon: "glass-cheers",
    time: "10:00 PM",
    desc: "Send-off",
    date: new Date("October 8, 2023 22:00:00"),
    location: {
      name: "Oak Hill Farm - Pavillion",
      address: "",
    },
  },
];
