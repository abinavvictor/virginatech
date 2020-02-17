export default {
  items: [
    // {
    //   name: "Dashboard",
    //   url: "/dashboard",
    //   icon: "icon-speedometer",
    //   badge: {
    //     variant: "info",
    //     text: "NEW"
    //   }
    // },
    {
      title: true,
      name: "Universities",
      wrapper: {
        element: "",
        attributes: {}
      }
    },
    {
      name: "University List",
      url: "/base",
      icon: "icon-puzzle",
      children: [
        {
          name: "North Carolina State University",
          url: "/1",
          icon: "icon-puzzle"
        },
        {
          name: "Texas A&M",
          url: "/2",
          icon: "icon-puzzle"
        },
        {
          name: "UT Austin",
          url: "/3",
          icon: "icon-puzzle"
        },
        {
          name: "Virginia Polytechnic University",
          url: "/4",
          icon: "icon-puzzle"
        },
        {
          name: "University of Virginia",
          url: "/5",
          icon: "icon-puzzle"
        }
      ]
    }
    // {
    //   name: "Charts",
    //   url: "/charts",
    //   icon: "icon-pie-chart"
    // },
    // {
    //   name: "Widgets",
    //   url: "/widgets",
    //   icon: "icon-calculator",
    //   badge: {
    //     variant: "info",
    //     text: "NEW"
    //   }
    // },
    // {
    //   divider: true
    // }
  ]
};
