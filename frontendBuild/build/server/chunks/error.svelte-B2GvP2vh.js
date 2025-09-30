import { e as escape_html } from './escaping-CqgfEcN3.js';
import { w as push, y as pop, D as getContext } from './index-HW_zoyrV.js';
import { s as stores } from './client-BtJPDz9X.js';
import './exports-CjYkTMuE.js';

({
  check: stores.updated.check
});
function context() {
  return getContext("__request__");
}
const page$1 = {
  get error() {
    return context().page.error;
  },
  get status() {
    return context().page.status;
  }
};
const page = page$1;
function Error$1($$payload, $$props) {
  push();
  $$payload.out += `<h1>${escape_html(page.status)}</h1> <p>${escape_html(page.error?.message)}</p>`;
  pop();
}

export { Error$1 as default };
//# sourceMappingURL=error.svelte-B2GvP2vh.js.map
