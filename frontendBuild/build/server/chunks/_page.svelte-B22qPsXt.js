import { a as attr } from './attributes-YVTFWYF4.js';
import { e as escape_html } from './escaping-CqgfEcN3.js';
import { w as push, y as pop } from './index-HW_zoyrV.js';

function _page($$payload, $$props) {
  push();
  var balance = 1e3;
  var bet = 50;
  var msg = "";
  var playing = false;
  var dealer = "Start a new game!";
  var player = "Start a new game!";
  var dealerValue = 0;
  var playerValue = 0;
  var dealerCards = [];
  var playerCards = [];
  const suits = ["♠", "♥", "♦", "♣"];
  const ranks = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  var cards = [];
  function newDeck() {
    cards = [];
    for (const suit of suits) {
      for (const rank of ranks) {
        cards.push(`${rank}${suit}`);
      }
    }
  }
  function getCardValue(card) {
    const rank = card.slice(0, card.length - 1);
    if (rank == "?") return 0;
    if (rank === "A") return 11;
    if (["K", "Q", "J"].includes(rank)) return 10;
    return parseInt(rank, 10);
  }
  function fixAce() {
    for (let i = 0; i < playerCards.length; i++) {
      if (playerCards[i].startsWith("A")) {
        if (playerValue > 21) {
          playerValue -= 10;
        }
      }
    }
    for (let i = 0; i < dealerCards.length; i++) {
      if (dealerCards[i].startsWith("A")) {
        if (dealerValue > 21) {
          dealerValue -= 10;
        }
      }
    }
  }
  function start() {
    if (playing) {
      msg = "You are currently playing a game!";
      const msgElem = document.getElementById("msg");
      if (msgElem) msgElem.style.color = "#ee2c2c";
      return;
    } else if (balance < bet) {
      msg = "You don't have enough money! Lower your bet to play.";
      const msgElem = document.getElementById("msg");
      if (msgElem) msgElem.style.color = "#ee2c2c";
      return;
    } else ;
    playing = true;
    msg = "";
    newDeck();
    playerCards = [];
    dealerCards = [];
    for (let i = 0; i < 2; i++) {
      playerCards.push(cards.splice(Math.floor(Math.random() * cards.length), 1)[0]);
    }
    dealerCards.push(cards.splice(Math.floor(Math.random() * cards.length), 1)[0]);
    dealerCards.push("??");
    calcValues();
    calcWin();
  }
  function calcValues() {
    playerValue = 0;
    dealerValue = 0;
    player = "";
    dealer = "";
    for (let i = 0; i < playerCards.length; i++) {
      let value = getCardValue(playerCards[i]);
      playerValue += value;
      player += playerCards[i] + " ";
    }
    for (let i = 0; i < dealerCards.length; i++) {
      let value = getCardValue(dealerCards[i]);
      dealerValue += value;
      dealer += dealerCards[i] + " ";
    }
    fixAce();
  }
  function calcWin(stand) {
    if (playerValue > 21) lose("Bust");
    else if (playerValue == 21) win("Blackjack");
    else if (dealerValue == 21) lose("Dealer Blackjack");
    else if (playerValue == 21 && dealerValue == 21) push$1();
    else ;
  }
  function win(winMsg) {
    calcValues();
    balance += bet * 2;
    msg = "You Win: " + winMsg;
    const msgElem = document.getElementById("msg");
    if (msgElem) msgElem.style.color = "green";
    playing = false;
    updateData();
  }
  function lose(loseMsg) {
    calcValues();
    balance -= bet;
    msg = "Dealer Wins: " + loseMsg;
    const msgElm = document.getElementById("msg");
    if (msgElm) msgElm.style.color = "#ee2c2c";
    playing = false;
    updateData();
  }
  function push$1() {
    msg = "Push: Money back";
    const msgElm = document.getElementById("msg");
    if (msgElm) msgElm.style.color = "#ffb347";
    playing = false;
    updateData();
  }
  start();
  async function updateData() {
    let sessionID = "";
    const storedSessionID = localStorage.getItem("sessionID");
    if (storedSessionID !== null) sessionID = storedSessionID;
    const myBody = JSON.stringify({ balance });
    const myHeaders = { "Content-Type": "application/json", sessionID };
    const response = await fetch("https://cs.catlin.edu/node/2025/blaze/updateuser", {
      method: "POST",
      body: myBody,
      headers: myHeaders
    });
    if (response.status == 403 || response.status == 401) {
      let msg2 = await response.json();
      window.location.href = `/?msg=${msg2.message}`;
    }
  }
  $$payload.out += `<title>Slots</title> <div class="m-auto text-center"><h1 class="text-[4rem] mb-0">Blackjack</h1></div> <h1 class="text-center m-auto text-[3rem]">Balance = $${escape_html(balance)}</h1> <h1 class="text-center m-auto text-[2rem]" id="msg">${escape_html(msg)}</h1> <div id="play-area" class="bg-[#bbbbb] dark:bg-[#3c3c3c] text-center dark:rounded-[15px] w-[50%] h-fit m-auto p-[2%] grid grid-cols-2 svelte-18ku462"><p class="text-[3rem] svelte-18ku462">Player Cards</p> <p class="text-[3rem] svelte-18ku462">Dealer Cards</p> <p class="svelte-18ku462">${escape_html(player)}</p> <p class="svelte-18ku462">${escape_html(dealer)}</p> <p class="svelte-18ku462">${escape_html(playerValue)}</p> <p class="svelte-18ku462">${escape_html(dealerValue)}</p></div> <div class="text-center text-[1.5rem] m-auto mt-[2%] bg-[#bbbb] dark:bg-[#3c3c3c] w-[50%] h-fit p-[1%] dark:rounded-[15px]">Cards Left: ${escape_html(cards.length)} | Bet: <input type="number"${attr("value", bet)} class="w-[20%] p-[1%] m-auto text-center bg-(--black) border-2 border-solid border-(--white) dark:rounded-[5px] text-(--white) text-[1.5rem]"/></div> <div class="text-center w-[50%] h-fit m-auto p-[2%] flex justify-between"><button class="bg-green-500 p-[2%] w-[20%] text-(--black) dark:rounded-[5px] text-[1.5rem] hover:bg-(--black) transition duration-500 hover:text-green-500 border-2 border-solid border-green-500">Hit</button> <button class="bg-yellow-500 p-[2%] w-[30%] text-(--black) dark:rounded-[5px] text-[1.5rem] hover:bg-(--black) transition duration-500 hover:text-yellow-500 border-2 border-solid border-yellow-500">New Game</button> <button class="bg-red-500 p-[2%] w-[20%] text-(--black) dark:rounded-[5px] text-[1.5rem] hover:bg-(--black) transition duration-500 hover:text-red-500 border-2 border-solid border-red-500">Stand</button></div>`;
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-B22qPsXt.js.map
