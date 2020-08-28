import { navigateToUrl } from "single-spa";

export default function Redirect() {
  return {
    async bootstrap({ redirect }) {
      navigateToUrl(redirect);
    },
    async mount() {},
    async unmount() {},
  };
}
