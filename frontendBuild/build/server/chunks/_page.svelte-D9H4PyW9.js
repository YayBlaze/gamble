import { w as push, K as ensure_array_like, y as pop } from './index-BbBbiBj8.js';
import { m as myRedirect } from './index2-DjUGUlMO.js';
import { e as escape_html } from './escaping-CqgfEcN3.js';

function _page($$payload, $$props) {
  push();
  let leaderboard = [];
  async function getData() {
    let sessionID = "";
    const storedSessionID = localStorage.getItem("sessionID");
    if (storedSessionID !== null) sessionID = storedSessionID;
    const response = await fetch("https://cs.catlin.edu/node/2025/blaze/baltop", { headers: { sessionID } });
    if (response.status == 403 || response.status == 401) {
      let msg = await response.json();
      myRedirect(`/?msg=${msg.message}`);
    }
    if (response.status != 200) console.log(await response.text);
    const data = await response.json();
    leaderboard = data;
  }
  setInterval(
    () => {
      getData();
    },
    1e3 * 20
  );
  const each_array = ensure_array_like(leaderboard);
  $$payload.out += `<title>Admin Dashboard</title> <h1 class="text-[3rem] text-center"><strong>Admin Dashboard</strong></h1> <div class="bg-[#4c4c4c] w-[75%] h-fit m-auto rounded-[15px] grid p-[2%]"><div class="m-auto size-fit p-[2%]] flex flex-col text-center text-[1.5rem]"><p class="text-[2rem]">Leaderboard</p> <!--[-->`;
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let item = each_array[i];
    $$payload.out += `<p>${escape_html(i + 1)}) ${escape_html(item["username"])} = $${escape_html(item["balance"])}</p>`;
  }
  $$payload.out += `<!--]--></div></div>`;
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-D9H4PyW9.js.map
