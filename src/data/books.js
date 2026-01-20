// src/data/books.js

import book1 from "../assets/book1.jpg";
import book2 from "../assets/book2.jpg";
import book3 from "../assets/book3.jpg";

/**
 * Banner text for Books page
 */
export const booksBannerText =
  "A glimpse into my published work, collaborative anthologies, and ongoing poetry projects inspired by lived experiences.";

/**
 * Books data
 * NOTE:
 * - `description` → short (used on books listing)
 * - `longDescription` → detailed (used on Read More page)
 * - Dummy data added where real info is unavailable
 */

export const books = [
  {
    id: "yellow-days",
    title: "Yellow Days",
    subtitle: "A Poetry Anthology",
    image: book1,

    description:
      "A curated collection of poems by multiple poets, including my own contributions, exploring diverse emotions and shared human experiences.",

    longDescription:
      "Yellow Days is a collaborative poetry anthology that brings together voices from different walks of life. The collection explores themes of love, longing, hope, and quiet resilience. My contributions focus on emotional transitions, inner reflection, and moments that often go unnoticed in everyday life. This book is for readers who find comfort in shared emotions and reflective poetry.",

    genre: "Poetry Anthology",
    role: "Contributor",
    year: 2023,
    publisher: "Writers Pocket",

    buyLink:
      "https://www.amazon.in/Poetry-book-Yellow-Writers-Pocket/dp/9360838276",
  },

  {
    id: "120-amazing-poems",
    title: "120 Amazing Poems",
    subtitle: "A Collective Poetry Collection",
    image: book2,

    description:
      "A poetry collection featuring a complete section written by me, focused on love, grief, healing, and emotional growth.",

    longDescription:
      "120 Amazing Poems is a large-scale poetry collection featuring selected poets from across the country. I have contributed a dedicated section centered around love, grief, healing, and the slow journey of emotional recovery. The poems are intimate, reflective, and rooted in lived experiences, making this book a meaningful read for those navigating complex emotions.",

    genre: "Poetry Collection",
    role: "Contributor",
    year: 2024,
    publisher: "Independently Published",

    buyLink:
      "https://www.amazon.in/dp/8197015538?ref_=cm_sw_r_apan_dp_6KJ774PFPW4SJXTYXW7Z&language=hi-IN",
  },

  {
    id: "i-was-never-me-after-you",
    title: "I Was Never Me After You",
    subtitle: "Poems & Reflections on Love and Loss",
    image: book3,

    description:
      "A collection of poems and reflections exploring the different phases of life shaped by love, loss, and time.",

    longDescription:
      "I Was Never Me After You is a deeply personal poetry collection exploring love, separation, grief, and emotional transformation. The book captures quiet moments, unspoken emotions, and the way loss reshapes identity over time. Written as reflections rather than conclusions, this collection invites readers to sit with their feelings and find meaning in vulnerability.",

    genre: "Poetry",
    role: "Author",
    year: 2026, // upcoming (dummy)
    publisher: "Upcoming / To Be Announced",

    buyLink: "https://authors-page-iota.vercel.app/books", // placeholder for now
  },
];
