// src/data/books.js

import book1 from "../assets/book1.jpg";
import book2 from "../assets/book2.jpg";
import book3 from "../assets/book3.jpg";

export const booksBannerText = "I Was Never Me After You, is coming out soon!";

export const books = [
  {
    id: 1,
    title: "Yellow Days",
    description:
      "A curated collection of poems by multiple poets, including my own contributions. The book explores diverse emotions, voices, and perspectives, woven together through shared themes of life and reflection.",
    buyLink:
      "https://www.amazon.in/Poetry-book-Yellow-Writers-Pocket/dp/9360838276",
    image: book1,
  },
  {
    id: 2,
    title: "120 Amazing Poems",
    description:
      "A poetry collection featuring a complete section written by me, focused on love, grief, healing, and the journey of overcoming emotional depths through words.",
    buyLink:
      "https://www.amazon.in/dp/8197015538?ref_=cm_sw_r_apan_dp_6KJ774PFPW4SJXTYXW7Z&language=hi-IN",
    image: book2,
  },
  {
    id: 3,
    title: "I Was Never Me After You",
    description:
      "I Was Never Me After You is a collection of poems and reflections that explores the different phases of life shaped by love, loss, and time.",
    buyLink: "https://authors-page-iota.vercel.app/books",
    image: book3,
  },
];
