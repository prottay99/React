// export const products = [
//   {
//     badge: ["new", "sale"],
//     category: "Men",
//     product_name: "Danim Pro",
//     price: { regularPrice: 19, salePrice: 15 },
//     wishlist: true,
//     img: "url",
//   },
// ];
const socialIcon = [
  {
    id: 123,
    icon: "FaFacebookF",
    color: "blue",
    link: "https://facebook.com",
    tooltip: "share on facebook",
  },
  {
    id: 124,
    icon: "FaInstagram",
    color: "blue",
    link: "https://facebook.com",
    tooltip: "share on facebook",
  },
  {
    id: 125,
    icon: "FaFacebookF",
    color: "blue",
    link: "https://facebook.com",
    tooltip: "share on facebook",
  },
];

export const product = {
  breadcumbs: [
    { text: "Home", link: "https://google.com?q=home" },
    { text: "Shop", link: "https://google.com?q=shop" },
    { text: "Men", link: "https://google.com?q=men" },
    { text: "T-Shirts", link: "https://google.com?q=tshirts" },
  ],
  title: "The newly launch tshirt",
  price: {
    currency: "$",
    sale: "29.00",
  },
  summary:
    "This is a new tshirt brand and used high quality fabrics. This product is specially made for Chrismas ocassion",
  categories: [
    {
      text: "Men",
      link: "#",
    },
    {
      text: "T-Shirts",
      link: "#",
    },
  ],
  tags: [
    {
      text: "T-Shirts",
      link: "#",
    },
    {
      text: "Man",
      link: "#",
    },
    {
      text: "Blue",
      link: "#",
    },
  ],
  share: socialIcon,
};
