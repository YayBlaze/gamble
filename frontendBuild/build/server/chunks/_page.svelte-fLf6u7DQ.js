import { a as attr } from './attributes-YVTFWYF4.js';
import { e as escape_html } from './escaping-CqgfEcN3.js';
import { w as push, y as pop } from './index-BbBbiBj8.js';

function _page($$payload, $$props) {
  push();
  let balance = 0;
  let msg = "";
  let bet = 20;
  let one = 9;
  let two = 9;
  let three = 9;
  $$payload.out += `<title>Slots</title> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <div id="title" class="m-auto text-center"><h1 class="text-[4rem] mb-0">Slot Machine</h1></div> <div class="m-auto w-[50%] h-fit flex flex-row justify-between">`;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <div id="machine" class="dark:rounded-[15px] m-auto bg-[#3c3c3c] w-[100%] h-fit p-[2%] flex flex-row justify-between"><div class="box svelte-yr5s2h">${escape_html(one)}</div> <div class="box svelte-yr5s2h">${escape_html(two)}</div> <div class="box svelte-yr5s2h">${escape_html(three)}</div></div> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div> <h1 id="message" class="text-center m-auto text-[2rem] h-[3rem]">${escape_html(msg)}</h1> <div id="spindiv" class="w-[50%] h-fit m-auto text-center flex flex-col"><button aria-label="Spin Button" class="m-auto size-[7rem] bg-red-500 transition duration-500 hover:bg-green-500 dark:rounded-full border-0"></button> <span class="flex flex-row justify-center text-center w-[50%] m-auto"><p class="text-[2rem] m-2">Spin Price:</p> <input type="number"${attr("value", bet)} class="w-[25%] p-[1%] m-auto text-center bg-(--black) border-2 border-solid border-(--white) dark:rounded-[5px] text-(--white) text-[1.5rem]"/></span></div> <h1 id="balance" class="text-center m-auto text-[3rem]">Balance = $${escape_html(balance)}</h1>`;
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-fLf6u7DQ.js.map
