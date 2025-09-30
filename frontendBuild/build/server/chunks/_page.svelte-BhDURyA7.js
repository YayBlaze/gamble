import { w as push, E as store_get, F as unsubscribe_stores, y as pop, D as getContext } from './index-HW_zoyrV.js';
import './client-BtJPDz9X.js';
import { e as escape_html } from './escaping-CqgfEcN3.js';
import { a as attr } from './attributes-YVTFWYF4.js';
import './exports-CjYkTMuE.js';

const getStores = () => {
  const stores$1 = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores$1.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores$1.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores$1.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  let user = "";
  let password = "";
  let msg = "";
  let color = "#ee2c2c";
  let searchParams = store_get($$store_subs ??= {}, "$page", page).url.searchParams;
  if (searchParams.has("msg")) {
    msg = searchParams.get("msg") ?? msg;
  }
  if (searchParams.has("color")) {
    color = searchParams.get("color") ?? color;
  }
  $$payload.out += `<title>Login</title> <div id="bigdiv" class="m-auto mt-[10%] bg-[#3c3c3c] shadow-[0_0_50px_15px_#34adfe] dark:rounded-[10%] size-fit p-[5%] text-center flex flex-col gap-5"><h1 class="text-[3rem] m-0">Login</h1> <p class="text-[1.5rem]" id="msg">${escape_html(msg)}</p> <input type="text"${attr("value", user)} placeholder="Username" class="svelte-hzmrex"/> <input type="password"${attr("value", password)} placeholder="Password" class="svelte-hzmrex"/> <button id="submit" class="text-[1.5rem] bg-[#4c4c4c] hover:shadow-[0_0_10px_5px_#34adfe] border-solid border-2 border-(--white) dark:rounded-[5px] text-(--white) m-auto p-[3%]">Login</button> <a href="/new" class="text-[1.5rem]">Or Create a new Account</a></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-BhDURyA7.js.map
