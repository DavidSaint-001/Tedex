import s1 from "../assets/images/1.jpg";
import s2 from "../assets/images/2.jpg";
import s3 from "../assets/images/3.jpg";
import heroImg from "../assets/images/event.jpg";

export const eventsData = [
  {
    id: "2026",
    theme: "SHAPES",
    date: "April 26, 2026",
    venue: "Main Auditorium, Okumagba Ave",
    description: "Our flagship 2026 session exploring the intersection of technology and human intuition. Join us for a day of groundbreaking ideas.",
    img: heroImg,
    isUpcoming: true,
    stats: { speakers: 12, attendees: "500+", talks: 10 }
  },
  {
    id: "2024",
    theme: "Cities That Breathe",
    date: "November 10, 2024",
    venue: "The Civic Center",
    description: "A deep dive into sustainable urban renewal and green infrastructure. We explored how architecture can mimic biological systems.",
    img: s1,
    isUpcoming: false,
    stats: { speakers: 8, attendees: "350", talks: 8 },
    videoLink: "#"
  },
  {
    id: "2023",
    theme: "Unseen Connections",
    date: "October 05, 2023",
    venue: "Unity Hall",
    description: "Discovering the hidden threads that bind our community, technology, and environment together in an increasingly digital world.",
    img: s2,
    isUpcoming: false,
    stats: { speakers: 10, attendees: "400", talks: 10 },
    videoLink: "#"
  },
   {
    id: "2023",
    theme: "Unseen Connections",
    date: "October 05, 2023",
    venue: "Unity Hall",
    description: "Discovering the hidden threads that bind our community, technology, and environment together in an increasingly digital world.",
    img: s3,
    isUpcoming: false,
    stats: { speakers: 10, attendees: "400", talks: 10 },
    videoLink: "#"
  }
];