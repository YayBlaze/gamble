function _layout($$payload, $$props) {
  let { children } = $$props;
  $$payload.out += `<nav class="bg-[#2c2c2c] dark:bg-[#4c4c4c] dark:dark:rounded-2xl p-4 flex flex-row w-[75%] m-auto text-[1.5rem] justify-between"><span class="w-[40%] flex flex-row justify-between"><a href="/home" class="svelte-14byx8t">Home</a> <a href="/games/blackjack" class="svelte-14byx8t">Blackjack</a> <a href="/games/slots" class="svelte-14byx8t">Slots</a></span> <div class="w-[50%]"></div> <button type="button" class="w-[10%] text-(--red) bg-transparent border-none cursor-pointer hover:underline hover:decoration-wavy hover:decoration-(--red)">Logout</button></nav> `;
  children($$payload);
  $$payload.out += `<!---->`;
}

export { _layout as default };
//# sourceMappingURL=_layout.svelte-D6kBWtLl.js.map
