import { a as attr } from "../../../../chunks/attributes.js";
import { e as escape_html } from "../../../../chunks/escaping.js";
import { B as pop, z as push } from "../../../../chunks/index2.js";
function _page($$payload, $$props) {
  push();
  let balance = 0;
  let msg = "";
  let bet = 20;
  let megaJackpotMulti = 10;
  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    megaJackpotMulti = 100;
  }
  let one = 7;
  let two = 7;
  let three = 7;
  $$payload.out.push(`<title>Slots</title> `);
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--> <div id="title" class="m-auto text-center"><h1 class="text-[4rem] mb-0">Slot Machine</h1></div> <div class="m-auto w-[50%] h-fit flex flex-row justify-between">`);
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--> <div id="machine" class="rounded-[15px] m-auto dark:bg-(--grey) bg-(--light-grey) w-[100%] h-fit p-[2%] flex flex-row justify-between"><div class="box svelte-yxrulg">${escape_html(one)}</div> <div class="box svelte-yxrulg">${escape_html(two)}</div> <div class="box svelte-yxrulg">${escape_html(three)}</div></div> `);
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--></div> <h1 id="message" class="text-center m-auto text-[2rem] h-[3rem]">${escape_html(msg)}</h1> <div id="spindiv" class="w-[50%] h-fit m-auto text-center flex flex-col"><button aria-label="Spin Button" class="m-auto size-[7rem] bg-red-500 transition duration-500 hover:bg-green-500 rounded-full border-0"></button> <span class="flex flex-row justify-center text-center w-[50%] m-auto"><p class="text-[2rem] m-2">Spin Price:</p> <input type="number"${attr("value", bet)} class="w-[25%] h-fit p-[1%] text-center bg-(--white) dark:bg-(--black) border-2 border-solid border-(--black) dark:border-(--white) rounded-[10px] text-[1.5rem]"/></span></div> <h1 id="balance" class="text-center m-auto text-[3rem]">Balance = $${escape_html(balance)}</h1> <div class="bg-(--light-grey) dark:bg-(--grey) size-fit m-auto text-center text-[1.5rem] p-[2%] rounded-[15px]">Prize Pool <br/> No Matches: -Spin Price <br/> 2 of a kind: +Spin Price x 2 <br/> 3 of a kind: +Spin Price x 5 <br/> 3 Sevens: +Spin Price x ${escape_html(megaJackpotMulti)}</div>`);
  pop();
}
export {
  _page as default
};
