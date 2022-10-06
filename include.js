window.onload=function(){var header = document.createElement("header");
header.innerHTML = `
		<ul>
				<li> <a href="https://haru-ymth.github.io/" class="nav"><img src="https://haru-ymth.github.io/favicon.png" width="35px" height="35px" id="icon"></a> </li>
				<li><a href="https://haru-ymth.github.io/" class="nav">yamaguchi03</a></li>
				<li> <a href="https://haru-ymth.github.io/others" class="nav">その他</a> </li>
		</ul>`;
var footer=document.createElement("footer");
footer.innerHTML=`
&copy;&nbsp;2022&nbsp;yamaguchi03
`;
var head=document.getElementsByTagName("head")[0];
head.before(header);
var html=document.getElementsByTagName("html")[0];
html.appendChild(footer);
			};
