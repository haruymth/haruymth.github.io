function getParam(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
async function fetchApi(url,arg){
    return await fetch("https://scratchapi2.glitch.me/",{
        method:"POST",
        body:url
    })
}
let username=getParam("username");
username="yamaguchi03"
async function showStatus(){
try{
	let data1=await (await fetchApi(`https://api.scratch.mit.edu/users/${username}`)).json();
  let data=await (await fetch(`https://scratchdb.lefty.one/v3/user/info/${username}`)).json();
  let f=data1.history.joined.split("-");
  let date=`${f[0]}/${f[1]}/${f[2].split("T")[0]}`
  let u=document.getElementById("username");
    u.innerHTML=`<img id="statusicon" src="https://uploads.scratch.mit.edu/get_image/user/${data.id}_60x60.png" height="60" width="60"><span><a href="https://scratch.mit.edu/users/${username}">`+username+`</a><br><span id="scratcher">${date}&nbsp;に参加&nbsp;|&nbsp;${data1.profile.country}</span></span>`;
  let bio=document.getElementById("bio");
  let work=document.getElementById("work");
  bio.innerHTML=data1.profile.bio.replace(/href=\"/g,"href=\"https://scratch.mit.edu").replace(/\n/g,"<br>");
  work.innerHTML=data1.profile.status.replace(/href=\"/g,"href=\"https://scratch.mit.edu").replace(/\n/g,"<br>");
  let follower=document.getElementById("followerbox");
  follower.innerHTML+=`総カウント：${data["statistics"]["followers"]}&nbsp;人<br>国際ランク：${data["statistics"]["ranks"]["followers"]}&nbsp;位<br>国内ランク：${data["statistics"]["ranks"]["country"]["followers"]}&nbsp;位`;
  let view=document.getElementById("viewbox");
  view.innerHTML+=`総カウント：${data["statistics"]["views"]}&nbsp;回<br>国際ランク：${data["statistics"]["ranks"]["views"]}&nbsp;位<br>国内ランク：${data["statistics"]["ranks"]["country"]["views"]}&nbsp;位`;
  let love=document.getElementById("lovebox");
  love.innerHTML+=`総カウント：${data["statistics"]["loves"]}&nbsp;回<br>国際ランク：${data["statistics"]["ranks"]["loves"]}&nbsp;位<br>国内ランク：${data["statistics"]["ranks"]["country"]["loves"]}&nbsp;位`;
  let favorite=document.getElementById("favoritebox");
  favorite.innerHTML+=`総カウント：${data["statistics"]["favorites"]}&nbsp;回<br>国際ランク：${data["statistics"]["ranks"]["favorites"]}&nbsp;位<br>国内ランク：${data["statistics"]["ranks"]["country"]["favorites"]}&nbsp;位`;
  }catch(e){
  console.error(e.toString());
  }
}
showStatus();
document.title=username+"'s statistics";
