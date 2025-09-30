<script lang="ts">
  import { myRedirect, urlOrigin, backendUrl } from "$lib/index";
  import { onMount } from "svelte";

  var logs: string[] = ["Logs will appear here!"];

  function getLogs() {
    let eventSource = new EventSource(backendUrl + "/logs");
    eventSource.addEventListener("newLogs", newLogs);
    console.log("added event listener");
  }

  function newLogs(event: MessageEvent) {
    // console.log("Got logs\nlog data:");
    let logData = JSON.parse(event.data);
    // console.log(logData);
    for (let i = 0; i < logData.length; i++) {
      logs.push(logData[i]);
    }
    // console.log("real logs var:");
    console.log(logs);
  }

  async function auth() {
    let sessionID = "";
    const storedSessionID = localStorage.getItem("sessionID");
    if (storedSessionID !== null) sessionID = storedSessionID;
    let response = await fetch(backendUrl + "/check", {
      headers: { sessionID: sessionID },
    });
    if (response.status == 403) {
      let msg = await response.json();
      console.log(msg);
      myRedirect(`/?msg=${msg.message}`);
    }
  }

  type LeaderboardItem = {
    username: string;
    balance: number;
  };
  let leaderboard: LeaderboardItem[] = [];

  async function getLeaderboard() {
    // console.log("get data");
    let sessionID = "";
    const storedSessionID = localStorage.getItem("sessionID");
    if (storedSessionID !== null) sessionID = storedSessionID;
    // console.log('got sesison id '+sessionID)
    const response = await fetch(backendUrl + "/baltop", {
      headers: { sessionID: sessionID },
    });
    if (response.status == 403 || response.status == 401) {
      let msg = await response.json();
      myRedirect(`/?msg=${msg.message}`);
    }
    if (response.status != 200) console.log(await response.text());
    const data = await response.json();
    leaderboard = data;
  }

  onMount(() => {
    auth();
    getLeaderboard();
    getLogs();
    setInterval(getLeaderboard, 3000);
  });

  function loadLogs() {}
</script>

<title>Admin Dashboard</title>

<h1 class="text-[3rem] text-center"><strong>Admin Dashboard</strong></h1>

<div
  class="bg-(--grey) w-[75%] h-fit m-auto rounded-[15px] grid grid-auto p-[2%]"
>
  <div class="m-auto size-fit p-[2%]] flex flex-col text-center text-[1.5rem]">
    <p class="text-[3rem]">Leaderboard</p>
    {#each leaderboard as item, i}
      <p>{i + 1}) {item["username"]} = ${item["balance"]}</p>
    {/each}
  </div>
  <div>
    <p class="text-[3rem] text-center mt-[2%]">Logs</p>
    <div
      id="logbox"
      class="bg-(--black) p-[2%] m-auto rounded-[15px] text-center"
    >
      <!-- {#each logs as line}
        <p>{line}</p>
      {/each} -->
      {logs}
    </div>
  </div>
</div>
