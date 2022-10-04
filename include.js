var header = document.createElement("header");
header.innerHTML = `
		<ul>
				<li> <a href="https://haru-ymth.github.io/" class="nav"><img src="https://haru-ymth.github.io/favicon.png" width="35px" height="35px" id="icon"></a> </li>
				<li><a href="https://haru-ymth.github.io/" class="nav">yamaguchi03</a></li>
				<li> <a href="https://haru-ymth.github.io/others" class="nav">その他</a> </li>
		</ul>`;
var footer=document.createElement("footer");
footer.innerHTML=`
&copy;&nbsp;2022&nbsp;yamaguchi03`;
var head=getElementsByTagName("head")[0];
document.body.insertBefore(header,head);
document.bodu.appendChild(footer);
//var head =document.getElementsByTagName("head")[0];
//var header = document.createElement("header");
//header.innerHTML =`
//<ul>
//	<li> <a href="https://haru-ymth.github.io/" class="nav"><img src="https://haru-ymth.github.io/favicon.png" width="35px" height="35px" id="icon"></a> </li>
//	<li><a href="https://haru-ymth.github.io/" class="nav">yamaguchi03</a></li>
//	<li> <a href="https://haru-ymth.github.io/others" class="nav">その他</a> </li>
//</ul>`;
//head.after(header);
