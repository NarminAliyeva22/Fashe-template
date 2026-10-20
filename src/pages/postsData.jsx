export const LOREM =
  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat…";

export const LONG_TEXT = [
  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",
  "Veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam.",
];

const TITLES = [
  "15 Easy And Stylish Casual Summer Outfits",
  "Wedding Fashion, Beauty & Style Ideas",
  "How To Pick The Right Handbag For Lifestyle",
  "How to Find Affordable Bridesmaid Dresses",
  "Why You Should Wear Interesting Accessories",
  "The Little Black Dress – The Fashion Historian",
  "The New Shoes Are Sure to Make You Smile",
  "Celebrity Style and Fashion Trend Coverage",
  "9 Ways to Make Your Clothes Look More Expensive",
  "Top 10 Best Fashion Designers of All Time",
  "The Best-Dressed Celebrities of the Week",
  "The 8 Best Look-Pretty Tips Ever",
];

const BASE = "https://your-dress.ancorathemes.com/wp-content/uploads/2017/03/";
const IMAGES = [1, 3, 5, 6, 7, 8, 9, 10, 11, 12, 2, 13].map(
  (n) => `${BASE}image-${n}-1155x615.jpg`
);

export const ALL_POSTS = TITLES.map((title, i) => {
  const day = 8 - (i % 7);
  return {
    id: i + 1,
    title,
    img: IMAGES[i],
    text: LOREM,
    day: String(day),
    month: "MAR",
    date: `March ${day}, 2017`,
  };
});