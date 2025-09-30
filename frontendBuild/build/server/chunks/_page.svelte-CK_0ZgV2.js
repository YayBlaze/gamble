import { w as push, y as pop, I as stringify } from './index2-C3tRWoqm.js';
import { u as urlOrigin } from './index3-BPRjNQcD.js';
import { e as escape_html } from './escaping-CqgfEcN3.js';
import { a as attr } from './attributes-YVTFWYF4.js';

function _page($$payload, $$props) {
  push();
  let user = "";
  let password = "";
  let msg = "";
  $$payload.out.push(`<title>New Account</title> <div id="bigdiv" class="m-auto mt-[10%] bg-[#3c3c3c] shadow-[0_0_50px_15px_#34adfe] rounded-[10%] size-fit p-[5%] text-center flex flex-col gap-5"><h1 class="text-[3rem] m-0">Create an Account</h1> <p class="text-[#ee2c2c] text-[1.5rem]">${escape_html(msg)}</p> <input type="text"${attr("value", user)} placeholder="Username" class="svelte-hzmrex"/> <input type="password"${attr("value", password)} placeholder="Password" class="svelte-hzmrex"/> <button id="submit" class="text-[1.5rem] bg-[#4c4c4c] hover:shadow-[0_0_10px_5px_#34adfe] border-solid border-2 border-(--white) rounded-[5px] text-(--white) m-auto p-[3%]">Create Account</button> <a${attr("href", `${stringify(urlOrigin)}/`)} class="text-[1.5rem]">Or Log in</a></div>`);
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-CK_0ZgV2.js.map
