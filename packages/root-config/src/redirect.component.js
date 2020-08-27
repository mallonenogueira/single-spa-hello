import { navigateToUrl } from "single-spa";

export default function Redirect({ route, redirect }) {
  return {
    async bootstrap() {
      if (window.location.pathname === route) navigateToUrl(redirect);
    },
    async mount() {},
    async unmount() {},
  };
}
