import { ACCESSORIES } from "./occasionsData";

const IMG = "https://your-dress.ancorathemes.com/wp-content/uploads/2017/03/";

/* ---------- 1) HOME SLIDER (3 slayd) ----------
   Şəkilləri öz şəkillərinizlə əvəz edin (template preview-da şəklin üstündə
   sağ klik -> "Open image in new tab" -> ünvanı bura yapışdırın). */
export const HERO_SLIDES = [
  { id: 1, image: "https://your-dress.ancorathemes.com/wp-content/uploads/2017/03/image-2-1155x615.jpg" , eyebrow: "FOR ANY OCCASION", title: "Rent Some Style", button: "FIND YOUR DRESS", to: "/find" },
  { id: 2, image: "https://your-dress.ancorathemes.com/wp-content/uploads/2017/03/image-10-1155x615.jpg", eyebrow: "BEAUTIFUL ACCESSORIES", title: "Complete Your Look", button: "SEE ACCESSORIES", to: "/services/accessories" },
  { id: 3, image: "https://your-dress.ancorathemes.com/wp-content/uploads/2017/03/image-3-1155x615.jpg", eyebrow: "ASK A STYLIST", title: "Look Great Every Day", button: "CONTACT US", to: "/contact" },
];

/* ---------- 2) PALTARLAR (Rent.jsx ilə eyni) ---------- */
export const DRESSES = [
  { id: 1, name: "Occasion Dress", price: 120, image: `${IMG}img12_01.jpg` },
  { id: 2, name: "White Dress", price: 90, image: `${IMG}img01_02.jpg` },
  { id: 3, name: "Skinny Dress", price: 100, rating: 5, image: `${IMG}img11_01.jpg` },
  { id: 4, name: "Maxi Dress", price: 50, image: `${IMG}img10_01.jpg` },
  { id: 5, name: "Oversized Dress", price: 20, image: `${IMG}img03_01.jpg` },
  { id: 6, name: "Cocktail Dress", price: 100, image: `${IMG}img02_01.jpg` },
  { id: 7, name: "Zoe Dress", price: 20, image: `${IMG}img05_01.jpg` },
  { id: 8, name: "Multiway Dress", price: 100, image: `${IMG}img04_01.jpg` },
];

const dress = (id) => {
  const d = DRESSES.find((x) => x.id === id);
  return { name: d.name, price: d.price, image: d.image, to: `/product/${d.id}` };
};
const acc = (id) => {
  const a = ACCESSORIES.find((x) => x.id === id);
  return { name: a.name, price: a.price, image: a.image, to: "/find" };
};
export const SERVICES = [
  {
    id: 1,
    slug: "dresses",
    title: "Dresses",
    text: "Looking to hire the gorgeous designer dress? Find your favorite one!",
    image: "https://your-dress.ancorathemes.com/wp-content/uploads/2017/03/service-1-1170x658.jpg",
    intro: [
      "Our dress collection brings together designer pieces for every season and every event. From lace cocktail dresses to long evening gowns, you can find a style that fits your taste and your budget.",
      "Every dress is professionally cleaned and carefully checked after each rental, so it reaches you ready to wear. Choose your size, pick your dates and we take care of the rest.",
    ],
    products: [dress(2), dress(6), acc(2)],
    outro: [
      "Not sure which cut suits you best? Try several styles, compare them and keep the one that makes you feel confident. Our team is always happy to help you choose.",
      "Delivery and return are included in the rental period, so you can focus on enjoying your event.",
    ],
  },
  {
    id: 2,
    slug: "accessories",
    title: "Accessories",
    text: "Hire accessories that complement your dress rental!",
    image: "https://your-dress.ancorathemes.com/wp-content/uploads/2017/03/service-3-1170x658.jpg",
    intro: [
      "The right accessory turns a nice dress into a complete look. Browse earrings, bracelets, rings and fascinators that you can hire together with your dress.",
      "Our pieces are selected to match the most popular colours and styles, from soft gold to dark crystal.",
    ],
    products: [acc(2), acc(1), acc(3)],
    outro: [
      "Hiring accessories is a simple way to wear statement pieces without buying them. Add them to your order at checkout.",
      "Every item is cleaned and inspected before it is sent to you.",
    ],
  },
  {
    id: 3,
    slug: "handbags",
    title: "Handbags",
    text: "Are you looking for a perfect clutch or handbag?",
    image: "https://your-dress.ancorathemes.com/wp-content/uploads/2017/03/service-4-1170x658.jpg",
    intro: [
      "A clutch is small, but it finishes the whole outfit. Choose from embroidered, studded and sparkling bags that match both light and dark dresses.",
      "All bags are lightweight and have enough room for your phone, keys and lipstick.",
    ],
    products: [acc(1), acc(3), acc(4)],
    outro: [
      "Pick a bag that either matches your dress or adds a contrast. Neutral shades go with almost everything.",
      "Rent a bag for a single evening or for a whole weekend of events.",
    ],
  },
  {
    id: 4,
    slug: "designer-clothing",
    title: "Designer Clothing",
    text: "Find the perfect designer clothing for all amazing occasions this season.",
    image: `https://your-dress.ancorathemes.com/wp-content/uploads/2017/03/service-2-1170x658.jpg`,
    intro: [
      "Wear the latest designer clothing without paying designer prices. Our wardrobe is updated every month with new arrivals from well-known fashion designers.",
      "From lace tops to tailored dresses, each piece is chosen for its quality, fit and fabric.",
    ],
    products: [dress(1), dress(4), dress(7)],
    outro: [
      "Rent for a day, a week or longer. If your plans change, our flexible rental terms make it easy to extend your booking.",
      "Our stylists can help you put together a full outfit for any occasion.",
    ],
  },
];