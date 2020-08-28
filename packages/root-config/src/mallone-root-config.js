import { registerApplication, start } from "single-spa";
import RedirectComponent from "./redirect.component";

const routes = [
  {
    name: "home-redirect",
    route: "/",
    exact: true,
    redirect: "/react-app",
  },
  {
    name: "@mallone/react-app",
    route: "/react-app",
  },
  {
    name: "@mallone/vue-app",
    route: "/vue-app",
  },
];

function createApp({ name, route, redirect, exact }) {
  const application = {
    name,
    activeWhen: exact ? ({ pathname }) => pathname === route : [route],
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
