import { registerApplication, start } from "single-spa";
import RedirectComponent from "./redirect.component";

const routes = [
  {
    name: "home-redirect",
    routes: ["/single-spa-hello/", "/"],
    exact: true,
    redirect: "/single-spa-hello/react-app",
  },
  {
    name: "@mallone/react-app",
    routes: "/single-spa-hello/react-app",
  },
  {
    name: "@mallone/vue-app",
    routes: "/single-spa-hello/vue-app",
  },
];

function getActiveWhen({ routes, exact }) {
  const arrayRoutes = Array.isArray(routes) ? routes : [routes];

  if (exact) {
    return ({ pathname }) => arrayRoutes.find((route) => pathname === route);
  }

  return arrayRoutes;
}

function createApp({ name, routes, redirect, exact }) {
  const application = {
    name,
    activeWhen: getActiveWhen({ routes, exact }),
    customProps: {
      redirect,
    },
  };

  if (redirect) {
    application.app = async () => RedirectComponent();
  } else {
    application.app = async () => System.import(name);
  }

  return application;
}

routes.map(createApp).map(registerApplication);

start({
  urlRerouteOnly: true,
});
