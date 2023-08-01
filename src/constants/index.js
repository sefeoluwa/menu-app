import { 
        Facebook, 
        Instagram, 
        Twitter, 
        appstore, 
        googleplay,
        home6,
        home7,
        home8,
        home9,
        home31, 
    } from "../assets"
    

    const heroScreens = [
      {
        name: "home7",
        image: home7,
    },
        {
            name: "home8",
            image: home8,
        },
  ]

    const screens = [
       { 
        name: "home31",
        image: home31,
    },
    {
        name: "home6",
        image: home6,
    },
    {
        name: "home7",
        image: home7,
    },
    {
        name: "home9",
        image: home9,
    },
    ]

   
 const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "faq",
      title: "FAQ",
    },
    {
      id: "support",
      title: "Support",
    },
  ];

   const company = [
    {
      id: "aboutUs",
      title: "About Us",
    },
    {
      id: "careers",
      title: "Careers",
    },
    {
      id: "blog",
      title: "Blog",
    },
    {
        id: "pricing",
        title: "Pricing",
    }
  ];

  const help = [
    {
      id: "help",
      title: "Help/FAQ",
    },
    {
      id: "cancel",
      title: "Cancel Order",
    },
    {
      id: "press",
      title: "Press",
    },
  ];

  const terms = [
    {
      id: "privacy",
      title: "Privacy Policy",
    },
    {
      id: "terms",
      title: "Terms of Use",
    },
    {
      id: "accessibility",
      title: "Accessibility",
    },
  ];

  const icons = [
    {
        name: "facebook",
        icon: Facebook,
      },
    {
      name: "instagram",
      icon: Instagram,
    },
    {
      name: "twitter",
      icon: Twitter,
    },
  ];

  const download = [
    {
        name: 'googleplay',
        image: googleplay,
    },
    {
        name: 'appstore',
        image: appstore,
    },
  ]




  export { 
    navLinks, 
    company, 
    help, 
    terms, 
    icons, 
    download, 
    screens, 
    heroScreens 
}