interface MenuItem {
  exact: boolean;
  title: string;
  href: string;
  icon: string;
  regex: RegExp;
}

export const menuItems: MenuItem[] = [
  {
    title: "Home",
    exact: true,
    href: "/",
    icon: "mdi:home",
    regex: /^\/$/,
  },
  {
    title: "Shows",
    exact: false,
    href: "/shows",
    icon: "mdi:play-box-outline",
    regex: /^\/shows$/,
  },
  {
    title: "Articles",
    exact: false,
    href: "/articles",
    icon: "mdi:play-box-outline",
    regex: /^\/articles$/,
  },
  {
    title: "Prices",
    exact: false,
    href: "/pricing",
    icon: "mdi:cash",
    regex: /^\/pricing$/,
  },
  {
    title: "Contact",
    exact: false,
    href: "/contact",
    icon: "mdi:account-box-outline",
    regex: /^\/contact$/,
  },
  {
    title: "Articles",
    exact: false,
    href: "/articles",
    icon: "mdi:account-box-outline",
    regex: /^\/articles$/,
},
];
