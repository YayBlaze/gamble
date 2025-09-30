import { B as pop, z as push, G as stringify } from "../../../chunks/index2.js";
import { u as urlOrigin } from "../../../chunks/index3.js";
import { a as attr } from "../../../chunks/attributes.js";
function _layout($$payload, $$props) {
  push();
  let { children } = $$props;
  $$payload.out.push(`<nav class="bg-(--light-grey) dark:bg-(--grey) rounded-2xl p-4 flex flex-row w-[75%] m-auto text-[1.5rem] justify-between"><span class="w-[40%] flex flex-row justify-between"><a${attr("href", `${stringify(urlOrigin)}/home`)} class="svelte-rqiv9s">Home</a> <a${attr("href", `${stringify(urlOrigin)}/games/blackjack`)} class="svelte-rqiv9s">Blackjack</a> <a${attr("href", `${stringify(urlOrigin)}/games/slots`)} class="svelte-rqiv9s">Slots</a></span> <div class="w-[50%]"></div> <button type="button" class="w-[10%] text-(--red) bg-transparent border-none cursor-pointer hover:underline hover:decoration-wavy hover:decoration-(--red)">Logout</button></nav> `);
  children($$payload);
  $$payload.out.push(`<!---->`);
  pop();
}
export {
  _layout as default
};
