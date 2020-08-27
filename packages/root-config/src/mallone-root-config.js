import { registerApplication, start, navigateToUrl } from "single-spa";
import RedirectComponent from "./redirect.component";

const routes = [
  {
    name: "my-application",
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
    application.app = async () => RedirectComponent({ route, redirect });
  } else {
    application.app = async () => System.import(name);
  }

  return application;
}

routes.map(createApp).map(registerApplication);

start({
  urlRerouteOnly: true,
});
