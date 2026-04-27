import { CalendarDays, Clock, DollarSign, Award } from 'lucide-react';

export const CALENDAR_DAYS = [
  { name: 'Mon', date: 27, current: true },
  { name: 'Tue', date: 28 },
  { name: 'Wed', date: 29 },
  { name: 'Thu', date: 30 },
  { name: 'Fri', date: 31 },
  { name: 'Sat', date: 1 },
  { name: 'Sun', date: 2 },
];

export const TIME_SLOTS = Array.from({ length: 16 }, (_, i) => {
  const hour = i.toString().padStart(2, '0');
  return `${hour}:00`;
});

export const CALENDAR_EVENTS = [
  {
    id: 1,
    name: "Amina Hassan",
    service: "Hair Braiding",
    time: "10:00 AM - 10:40 AM",
    day: 27,
    rowStart: 11,
    rowSpan: 1,
  },
  {
    id: 2,
    name: "Amina Hassan",
    service: "Hair Braiding",
    time: "10:00 AM - 10:40 AM",
    day: 27,
    rowStart: 2,
    rowSpan: 1,
  },
  {
    id: 3,
    name: "Amina Hassan",
    service: "Hair Braiding",
    time: "10:00 AM - 10:40 AM",
    day: 27,
    rowStart: 3,
    rowSpan: 1,
  },
  {
    id: 4,
    name: "Amina Hassan",
    service: "Hair Braiding",
    time: "10:00 AM - 10:40 AM",
    day: 27,
    rowStart: 12,
    rowSpan: 1,
  },
  {
    id: 5,
    name: "Amina Hassan",
    service: "Hair Braiding",
    time: "10:00 AM - 10:40 AM",
    day: 27,
    rowStart: 14,
    rowSpan: 1,
  },
  {
    id: 6,
    name: "Amina Hassan",
    service: "Hair Braiding",
    time: "10:00 AM - 10:40 AM",
    day: 27,
    rowStart: 16,
    rowSpan: 1,
  },
];
