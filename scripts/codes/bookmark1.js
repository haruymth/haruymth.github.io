try{
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
let aboutMe=`800+followersありがとうございます！

最終ログイン：2022/10/28 16:11:29
（自分で作った）

僕がフォローする人はすごくすごい人か、別のコミュニティでそこそこ関わりのある人です。

リア友（数学の神だからフォローしろ）
@gesyutaruto

弟
@Turbo_wata`
const users=(await(await fetch("https://scratch.mit.edu/session/",{headers:{"X-Requested-With":"XMLHttpRequest"}})).json()).user.username;
fetch(`https://scratch.mit.edu/site-api/users/all/${users}/`,{
  method: "PUT",
  body: JSON.stringify({
    status:aboutMe,
  }),
  headers: {
    'X-CSRFToken': token,
    "x-requested-with": "XMLHttpRequest"
  }
});
}catch(e){
    console.log(e.message);
}
