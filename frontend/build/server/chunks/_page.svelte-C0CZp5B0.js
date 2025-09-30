import { w as push, M as ensure_array_like, y as pop } from './index2-C3tRWoqm.js';
import { e as escape_html } from './escaping-CqgfEcN3.js';

function _page($$payload, $$props) {
  push();
  var logs = ["Logs will appear here!"];
  let leaderboard = [];
  const each_array = ensure_array_like(leaderboard);
  $$payload.out.push(`<title>Admin Dashboard</title> <h1 class="text-[3rem] text-center"><strong>Admin Dashboard</strong></h1> <div class="bg-(--grey) w-[75%] h-fit m-auto rounded-[15px] grid grid-auto p-[2%]"><div class="m-auto size-fit p-[2%]] flex flex-col text-center text-[1.5rem]"><p class="text-[3rem]">Leaderboard</p> <!--[-->`);
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let item = each_array[i];
    $$payload.out.push(`<p>${escape_html(i + 1)}) ${escape_html(item["username"])} = $${escape_html(item["balance"])}</p>`);
  }
  $$payload.out.push(`<!--]--></div> <div><p class="text-[3rem] text-center mt-[2%]">Logs</p> <div id="logbox" class="bg-(--black) p-[2%] m-auto rounded-[15px] text-center">${escape_html(logs)}</div></div></div>`);
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-C0CZp5B0.js.map
