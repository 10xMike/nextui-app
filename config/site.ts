export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next.js + NextUI",
  description: "Esplora il Mediterraneo a prezzi imbattibili con le migliori offerte Last Minute di MSC Crociere!.",
  navItems: [
    {
      label: "OFFERTE TRAGHETTI",
      href: "/",
    },
    {
      label: "PRIMA DI PARTIRE",
      href: "/faqs",
    },
    {
      label: "A BORDO",
      href: "/pricing",
    },
    {
      label: "GNV",
      href: "/docs",
    }, {
      label: "DESTINAZIONI",
      href: "/about",
    }, {
      label: "PORTI",
      href: "/about",
    },
    {
      label: "INFO E ASSISTENZA",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    /*  github: "https://github.com/nextui-org/nextui",
     twitter: "https://twitter.com/getnextui",
     docs: "https://nextui.org",
     discord: "https://discord.gg/9b6yyZKmH4",
     sponsor: "https://patreon.com/jrgarciadev", */
  },
};
