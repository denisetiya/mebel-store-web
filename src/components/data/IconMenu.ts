import {
  ListHeart,
  User,
  MagnifyingGlass,
  ShoppingCart,
} from "phosphor-svelte";

const iconList = [
  {
    logo: User,
    url: "/user",
  },
  { logo: MagnifyingGlass, url: "/search" },
  { logo: ListHeart, url: "/wishlist" },
  { logo: ShoppingCart, url: "/cart" },
];


export default iconList;