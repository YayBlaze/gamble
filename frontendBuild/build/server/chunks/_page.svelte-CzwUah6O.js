import { w as push, K as ensure_array_like, y as pop } from './index-BbBbiBj8.js';
import { e as escape_html } from './escaping-CqgfEcN3.js';

function _page($$payload, $$props) {
  push();
  var logs = ["Logs will appear here!"];
  let leaderboard = [];
  const each_array = ensure_array_like(leaderboard);
  const each_array_1 = ensure_array_like(logs);
  $$payload.out += `<title>Admin Dashboard</title> <h1 class="text-[3rem] text-center"><strong>Admin Dashboard</strong></h1> <div class="bg-(--grey) w-[75%] h-fit m-auto rounded-[15px] grid grid-auto p-[2%]"><div class="m-auto size-fit p-[2%]] flex flex-col text-center text-[1.5rem]"><p class="text-[3rem]">Leaderboard</p> <!--[-->`;
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let item = each_array[i];
    $$payload.out += `<p>${escape_html(i + 1)}) ${escape_html(item["username"])} = $${escape_html(item["balance"])}</p>`;
  }
  $$payload.out += `<!--]--></div> <div><p class="text-[3rem] text-center mt-[2%]">Logs</p> <div id="logbox" class="bg-(--black) p-[2%] m-auto rounded-[15px] text-center"><!--[-->`;
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let line = each_array_1[$$index_1];
    $$payload.out += `<p>${escape_html(line)}</p>`;
  }
  $$payload.out += `<!--]--></div></div></div>`;
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-CzwUah6O.js.map
