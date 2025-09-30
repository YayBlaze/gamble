<script>
  import { myRedirect, urlOrigin, backendUrl } from "$lib/index";
  let user = "";
  let password = "";
  let msg = "";

  async function login() {
    msg = "Loading...";
    if (user.includes(" ") || password.includes(" ")) {
      msg = "Please do not include spaces in your username or password.";
      return;
    } else if (user.length < 4 || user.length > 15) {
      msg = "Your username must be 4-15 characters long";
      return;
    } else if (password.length < 4 || user.length > 15) {
      msg = "Your password must be 4-15 characters long";
      return;
    }
    let mybody = JSON.stringify({
      username: user,
      password: password,
      ip: await fetch("https://api.ipify.org").then(res => res.text()),
    });
    let myHeaders = {
      "Content-Type": "application/json",
    };
    console.log(mybody);
    let response = await fetch(backendUrl + "/adduser", {
      method: "POST",
      body: mybody,
      headers: myHeaders,
    });
    if (response.status == 200) {
      // window.location.href = "/?msg=Account created. Please log in&color=lawngreen";
      myRedirect(
        `/?msg=Account created. Please log in&color=lawngreen&user=${user}&password=${password}`
      );
    } else if (response.status == 400)
      msg = "Username Taken. Please choose another";
    else msg = "Internal Server Error. Please try again later.";
  }
</script>

<title>New Account</title>

<div
  id="bigdiv"
  class="m-auto mt-[10%] bg-[#3c3c3c] shadow-[0_0_50px_15px_#34adfe] rounded-[10%] size-fit p-[5%] text-center flex flex-col gap-5"
>
  <h1 class="text-[3rem] m-0">Create an Account</h1>
  <p class="text-[#ee2c2c] text-[1.5rem]">{msg}</p>
  <input type="text" bind:value={user} placeholder="Username" />
  <input type="password" bind:value={password} placeholder="Password" />
  <button
    id="submit"
    on:click={login}
    class="text-[1.5rem] bg-[#4c4c4c] hover:shadow-[0_0_10px_5px_#34adfe] border-solid border-2 border-(--white) rounded-[5px] text-(--white) m-auto p-[3%]"
    >Create Account</button
  >
  <a href="{urlOrigin}/" class="text-[1.5rem]">Or Log in</a>
</div>

<style>
  input {
    background-color: #4c4c4c;
    color: white;
    border: 2px solid white;
    border-radius: 5px;
    padding: 2%;
    margin: auto;
  }
  input:hover {
    box-shadow: 0 0 10px 5px #34adfe;
  }
</style>
