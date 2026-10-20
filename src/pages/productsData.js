export const MIN_PRICE = 20;
export const MAX_PRICE = 170;

export const OCCASIONS = ["Date Night", "Gala", "Mardi Gras", "Prom", "Valentine's Day", "Wedding"];

// make(id, ad, qiymətdən, qiymətə qədər, ulduz, [occasion-lar], [şəkil linkləri])
const make = (id, name, from, to, rating, occasions, imgs = []) => {
  const list = [imgs[0] || "", imgs[1] || imgs[0] || "", imgs[2] || imgs[0] || ""];
  return { id, name, from, to, rating, occasions, img: list[0], imgs: list };
};

export const PRODUCTS = [
  make(1, "Occasion Dress", 120, 170, 5, ["Date Night", "Gala", "Wedding"], [
    "https://your-dress.ancorathemes.com/wp-content/uploads/2017/03/img12_01.jpg",
    "https://your-dress.ancorathemes.com/wp-content/uploads/2017/03/img12_02.png",
    "https://your-dress.ancorathemes.com/wp-content/uploads/2017/03/img12_03.png",
  ]),
  make(2, "White Dress", 90, 160, 0, ["Wedding", "Prom"], [
    "https://your-dress.ancorathemes.com/wp-content/uploads/2017/03/img01_02.jpg",
    "https://your-dress.ancorathemes.com/wp-content/uploads/2017/03/img01_01.jpg"
  ]),
  make(3, "Skinny Dress", 100, 150, 5, ["Date Night", "Valentine's Day"], [
    "https://your-dress.ancorathemes.com/wp-content/uploads/2017/03/img11_01.jpg",
    "https://your-dress.ancorathemes.com/wp-content/uploads/2017/03/img11_02.jpg"
  ]),
  make(4, "Maxi Dress", 50, 50, 0, ["Mardi Gras", "Prom"], [
    "https://your-dress.ancorathemes.com/wp-content/uploads/2017/03/img10_02.jpg",
  ]),
  make(5, "Oversized Dress", 20, 20, 0, ["Date Night"], [
    "https://your-dress.ancorathemes.com/wp-content/uploads/2017/03/img03_01.jpg",
  ]),
  make(6, "Cocktail Dress", 100, 100, 0, ["Gala", "Valentine's Day"], [
    "https://your-dress.ancorathemes.com/wp-content/uploads/2017/03/img02_01.jpg",
  ]),
  make(7, "Zoe Dress", 20, 20, 0, ["Prom", "Date Night"], [
    "https://your-dress.ancorathemes.com/wp-content/uploads/2017/03/img05_01.jpg",
    "https://your-dress.ancorathemes.com/wp-content/uploads/2017/03/img05_02-760x1140.jpg"
  ]),
  make(8, "Multiway Dress", 100, 100, 0, ["Wedding", "Gala"], [
    "https://your-dress.ancorathemes.com/wp-content/uploads/2017/03/img04_01.jpg",
    "https://your-dress.ancorathemes.com/wp-content/uploads/2017/03/img04_02.jpg"
  ]),
  make(9, "Clutch Bag", 35, 35, 0, ["Gala", "Wedding"], [
    "https://your-dress.ancorathemes.com/wp-content/uploads/2017/03/img06_01.jpg",
  ]),
  make(10, "Gold Bracelet", 24, 24, 0, ["Mardi Gras", "Gala"], [
    "https://your-dress.ancorathemes.com/wp-content/uploads/2017/03/img08_02.jpg",
  ]),
  make(11, "Studded Bag", 50, 50, 0, ["Prom"], [
    "https://your-dress.ancorathemes.com/wp-content/uploads/2017/03/img07_01.jpg",
    "https://your-dress.ancorathemes.com/wp-content/uploads/2017/03/img07_02-760x1140.jpg"
  ]),
  make(12, "Black Bag", 90, 90, 0, ["Gala", "Date Night"], [
    "https://your-dress.ancorathemes.com/wp-content/uploads/2017/03/img09_01.jpg",
    "https://your-dress.ancorathemes.com/wp-content/uploads/2017/03/img09_02.jpg"
  ]),
];