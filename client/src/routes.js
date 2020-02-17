import React from "react";
const UniversityView = React.lazy(() =>
  import("./views/UniversityView/UniversityView")
);

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/1", name: "North Carolina State", component: UniversityView },
  { path: "/2", name: "Texas A&M", component: UniversityView },
  { path: "/3", name: "UT Austin", component: UniversityView },
  { path: "/4", name: "Virginia Polytechnic", component: UniversityView },
  { path: "/5", name: "University of virginia", component: UniversityView }
];

export default routes;
