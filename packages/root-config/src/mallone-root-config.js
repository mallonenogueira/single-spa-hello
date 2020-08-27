import { registerApplication, start, navigateToUrl } from "single-spa";

const routes = [
  {
    name: "home-redirect",
    route: "/",
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

function createApp({ name, route, redirect }) {
  const application = {
    name,
    activeWhen: [route],
  };

  if (redirect) {
    application.app = () => {
      if (window.location.pathname === route) navigateToUrl(redirect);
    };
  } else {
    application.app = () => System.import(name);
  }

  return application;
}

routes.map(createApp).map(registerApplication);

start({
  urlRerouteOnly: true,
});
