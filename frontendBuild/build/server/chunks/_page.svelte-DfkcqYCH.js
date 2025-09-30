import { w as push, M as ensure_array_like, y as pop, I as stringify } from './index2-C3tRWoqm.js';
import { u as urlOrigin } from './index3-CHQQBS_v.js';
import { e as escape_html } from './escaping-CqgfEcN3.js';
import { a as attr } from './attributes-YVTFWYF4.js';

function _page($$payload, $$props) {
  push();
  let user = "person";
  let balance = 0;
  let collectBTN = "Collect $1000";
  let msg = "";
  let leaderboard = [];
  function counter() {
    {
      msg = "Consider enabling dark mode for a better viewing experience!";
      collectBTN = "Collect $1000";
    }
  }
  setInterval(
    () => {
      counter();
    },
    1e3
  );
  const each_array = ensure_array_like(leaderboard);
  $$payload.out.push(`<h1 class="pt-[2%] m-auto text-center text-[3rem]">Welcome <strong>${escape_html(user)}</strong>, you currently have <strong>$${escape_html(balance)}</strong></h1> <title>Home</title> <div id="links" class="bg-[#bbbbbb] dark:bg-[#3c3c3c] m-auto size-fit p-[2%] rounded-[15px] flex flex-col text-center text-[1.5rem]"><a${attr("href", `${stringify(urlOrigin)}/games/slots`)}>Slot Machine</a> <a${attr("href", `${stringify(urlOrigin)}/games/blackjack`)}>Blackjack</a>  <button type="button" class="text-(--red) bg-transparent border-none cursor-pointer hover:underline hover:decoration-wavy hover:decoration-(--blue)">Logout</button></div> <p class="m-auto mt-[3%] size-fit text-center text-[1.5rem]" id="msg">${escape_html(msg)}</p> <button class="bg-[#bbbbbb] border-[2px solid #bbbbbb] dark:bg-[#4c4c4c] border-2 border-solid dark:border-[#4c4c4c] border-[#bbbbbb] transition duration-500 hover:bg-[#fbfbfb] dark:hover:bg-[#1c1c1c] m-auto size-fit p-[2%] rounded-[15px] flex flex-col text-center text-[1.5rem]">${escape_html(collectBTN)}</button> <div class="m-auto mt-[5%] size-fit p-[2%]] flex flex-col text-center text-[1.5rem]"><p class="text-[2rem]">Leaderboard</p> <!--[-->`);
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let item = each_array[i];
    $$payload.out.push(`<p>${escape_html(i + 1)}) ${escape_html(item["username"])} = $${escape_html(item["balance"])}</p>`);
  }
  $$payload.out.push(`<!--]--></div> `);
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]-->`);
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-DfkcqYCH.js.map
