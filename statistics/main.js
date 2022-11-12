function getParam(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
const username=/*getParam("username")*/"yamaguchi03";
async function showStatus(){
	let data=await (await fetch(`https://scratchdb.lefty.one/v3/user/info/${username}`)).json();
  let f=data["joined"].split("-");
  let date=`${f[0]}/${f[1]}/${f[2].split("T")[0]}`
  let u=document.getElementById("username");
  if(data["school"]==null){
    u.innerHTML=`<img id="statusicon" src="https://uploads.scratch.mit.edu/get_image/user/${data["id"]}_60x60.png" height="60" width="60"><span>`+username+`<br><span id="scratcher">${date}&nbsp;に参加&nbsp;|&nbsp;${data["status"]}&nbsp;/&nbsp;${data["country"]}</span></span>`;
    }else{
    u.innerHTML=`<img id="statusicon" src="https://uploads.scratch.mit.edu/get_image/user/${data["id"]}_60x60.png" height="60" width="60"><span>`+username+`<br><span id="scratcher">${date}&nbsp;に参加&nbsp;|&nbsp;${data["status"]}&nbsp;/&nbsp;${data["country"]}&nbsp;/&nbsp;学校アカウント</span></span>`;
    }
  let bio=document.getElementById("bio");
  let work=document.getElementById("work");
  bio.innerHTML=data["bio"].replace(/href=\"/g,"href=\"https://scratch.mit.edu");
  work.innerHTML=data["work"].replace(/href=\"/g,"href=\"https://scratch.mit.edu");
  let follower=document.getElementById("followerbox");
  follower.innerHTML+=`総カウント：${data["statistics"]["followers"]}&nbsp;人<br>国際ランク：${data["statistics"]["ranks"]["followers"]}&nbsp;位<br>国内ランク：${data["statistics"]["ranks"]["country"]["followers"]}&nbsp;位`;
  let view=document.getElementById("viewbox");
  view.innerHTML+=`総カウント：${data["statistics"]["views"]}&nbsp;回<br>国際ランク：${data["statistics"]["ranks"]["views"]}&nbsp;位<br>国内ランク：${data["statistics"]["ranks"]["country"]["views"]}&nbsp;位`;
  let love=document.getElementById("lovebox");
  love.innerHTML+=`総カウント：${data["statistics"]["loves"]}&nbsp;回<br>国際ランク：${data["statistics"]["ranks"]["loves"]}&nbsp;位<br>国内ランク：${data["statistics"]["ranks"]["country"]["loves"]}&nbsp;位`;
  let favorite=document.getElementById("favoritebox");
  favorite.innerHTML+=`総カウント：${data["statistics"]["favorites"]}&nbsp;回<br>国際ランク：${data["statistics"]["ranks"]["favorites"]}&nbsp;位<br>国内ランク：${data["statistics"]["ranks"]["country"]["favorites"]}&nbsp;位`;
}
showStatus();
console.log(Date())
