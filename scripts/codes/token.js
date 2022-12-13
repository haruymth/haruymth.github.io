(async()=>{
  if(!location.hostname.includes("scratch.mit.edu")){return;}
  let token=(await(await fetch("https://scratch.mit.edu/session/",{headers:{"X-Requested-With":"XMLHttpRequest"}})).json()).user.token;
  let username=(await(await fetch("https://scratch.mit.edu/session/",{headers:{"X-Requested-With":"XMLHttpRequest"}})).json()).user.username;
})();
