import { a as attr } from './attributes-YVTFWYF4.js';
import { e as escape_html } from './escaping-CqgfEcN3.js';
import { w as push, y as pop } from './index-BbBbiBj8.js';

function _page($$payload, $$props) {
  push();
  var balance = 0;
  var bet = 100;
  var msg = "";
  var dealer = "Start a new game!";
  var player = "Start a new game!";
  var dealerValue = 0;
  var playerValue = 0;
  var cards = [];
  $$payload.out += `<title>Slots</title> <div class="m-auto text-center"><h1 class="text-[4rem] mb-0">Blackjack</h1></div> <h1 class="text-center m-auto text-[3rem]">Balance = $${escape_html(balance)}</h1> <h1 class="text-center m-auto text-[2rem]" id="msg">${escape_html(msg)}</h1> <div id="play-area" class="bg-(--light-grey) dark:bg-(--grey) text-center rounded-[15px] w-[50%] h-fit m-auto p-[2%] grid grid-cols-2 svelte-18ku462"><p class="text-[3rem] svelte-18ku462">Player Cards</p> <p class="text-[3rem] svelte-18ku462">Dealer Cards</p> <p class="svelte-18ku462">${escape_html(player)}</p> <p class="svelte-18ku462">${escape_html(dealer)}</p> <p class="svelte-18ku462">${escape_html(playerValue)}</p> <p class="svelte-18ku462">${escape_html(dealerValue)}</p></div> <div class="text-center text-[1.5rem] m-auto mt-[2%] bg-(--light-grey) dark:bg-(--grey) w-[50%] h-fit p-[1%] rounded-[15px]">Cards Left: ${escape_html(cards.length)} | Bet: <input type="number"${attr("value", bet)} class="w-[20%] p-[1%] m-auto text-center bg-(--white) dark:bg-(--black) border-2 border-solid border-(--black) dark:border-(--white) rounded-[5px] text-[1.5rem]"/></div> <div class="text-center w-[50%] h-fit m-auto p-[2%] flex justify-between"><button class="bg-green-500 p-[2%] w-[20%] text-(--black) rounded-[5px] text-[1.5rem] hover:bg-(--white) dark:hover:bg-(--black) transition duration-500 hover:text-green-500 border-2 border-solid border-green-500">Hit</button> <button class="bg-yellow-500 p-[2%] w-[30%] text-(--black) rounded-[5px] text-[1.5rem] hover:bg-(--white) dark:hover:bg-(--black) transition duration-500 hover:text-yellow-500 border-2 border-solid border-yellow-500">New Game</button> <button class="bg-red-500 p-[2%] w-[20%] text-(--black) rounded-[5px] text-[1.5rem] hover:bg-(--white) dark:hover:bg-(--black) transition duration-500 hover:text-red-500 border-2 border-solid border-red-500">Stand</button></div>`;
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-RqA9LsXX.js.map
