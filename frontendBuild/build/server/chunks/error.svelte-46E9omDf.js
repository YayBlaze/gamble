import { e as escape_html } from './escaping-CqgfEcN3.js';
import { w as push, y as pop, D as getContext } from './index-BbBbiBj8.js';
import { s as stores } from './client-CayXW_Tz.js';
import './exports-Sh4A6kx-.js';

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
//# sourceMappingURL=error.svelte-46E9omDf.js.map
