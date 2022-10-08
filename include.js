window.onload=function(){var header = document.createElement("header");
header.innerHTML = `
		<ul id=headerul>
				<li class="head"> <a href="https://haru-ymth.github.io/" class="nav"><img src="https://haru-ymth.github.io/favicon.png" width="35px" height="35px" id="icon"></a> </li>
				<li class="head"><a href="https://haru-ymth.github.io/" class="nav">yamaguchi03</a></li>
				<li class="head"> <a href="https://haru-ymth.github.io/others" class="nav">その他</a> </li>
		</ul>`;
var footer=document.createElement("footer");
footer.innerHTML=`
<div id="infooter">
&copy;&nbsp;2022&nbsp;yamaguchi03
</div>
`;
var head=document.getElementsByTagName("head")[0];
head.before(header);
var html=document.getElementsByTagName("html")[0];
html.appendChild(footer);
			
var theme=document.createElement("div");
theme.setAttribute("id","theme");
theme.innerHTML=`
<img src="/imgs/lightnow.png" width="40" height="40">
`;
footer.insertBefore(theme,footer.firstChild);
function getCookieValue(key: string): string {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
        var cookiesArray = cookie.split('='); 
        if (cookiesArray[0].trim() == key.trim()) { 
            return cookiesArray[1];  // (key[0],value[1])
        }
    }
    return '';
}
if(getCookieValue("haruymththeme")==""){
document.cookie="haruymththeme=light";
}
let lightOrDark=getCookieValue("haruymththeme");
$("#theme").css(
    {"text-align":"right",
    "margin-bottom":"25px",
     "cursor": "pointer",
     "width":"100%",
     "margin-top":"50px"
    });
function themeSet(mode){
	if(mode=="dark"){
	$("body").css(
		{"background-color":"#233648","color":"#f4f6f7"
		});
	$("h2").css(
		{
		"color":"#f4f6f7"
		});
	$("a").css(
		{
		"color":"#FFF7D6"
		});
	$("a:hover").css(
		{
		"color":"#FFF7D6"
		});
	$(".code").css(
		{
		"color":"#233648",
		"background-color":"#f4f6f7"
		});
	lightOrDark="dark";
		theme.innerHTML=`
        <img src="/imgs/${lightOrDark}now.png" width="25" height="25">`;
		document.cookie=`haruymththeme=${lightOrDark}`;
	}
	if(mode=="light"){
	$("body").css(
		{"background-color":"#f4f6f7","color":"#233648"
		});
	$("h2").css(
		{
		"color":"#233648"
		});
	$("a").css(
		{
		"color":"#4b749c"
		});
	$("a:hover").css(
		{
		"color":"#4b749c"
		});
	$(".code").css(
		{
		"color":"#f4f6f7",
		"background-color":"#233648"
		});
	lightOrDark="light";
		theme.innerHTML=`
        <img src="/imgs/${lightOrDark}now.png" width="25" height="25">`;
		document.cookie=`haruymththeme=${lightOrDark}`;
	}
	$("a.nav").css({
  "text-decoration":"none",
  "color":"#ffffff",
  "text-align":"center",
  "font-weight":"600",
  "vertical-align": "middle",
  "padding":"20px"
});
$("a.nav:hover").css({
  "text-decoration":"none",
  "color":"#ffffff",
  "text-align":"center",
  "font-weight":"600",
  "vertical-align": "middle",
  "padding":"20px",
});
}
themeSet(lightOrDark);
theme.onclick=function(){
	if(lightOrDark=="light"){
	themeSet("dark");
	}else{
	themeSet("light");
	}
}
};
