const head = document.head;
head.insertAdjacentHTML('afterBegin', `
	  <link rel="stylesheet" href="https://haru-ymth.github.io/style.css">
	  <meta charset="utf-8"> 
	  <link rel="icon" href="https://haru-ymth.github.io/favicon.png">`);
window.onload=function(){
    var header = document.createElement("header");
    header.innerHTML = `
		<ul id=headerul>
				<li class="head"> <a href="https://haru-ymth.github.io/" class="nav"><img src="https://haru-ymth.github.io/favicon.png" width="35px" height="35px" id="icon"></a> </li>
				<li class="head"><a href="https://haru-ymth.github.io/" class="nav">yamaguchi03</a></li>
				<li class="head" id="sidebartoggle"> <a href="https://haru-ymth.github.io/others" class="nav">その他</a> </li>
		</ul>`;
    var footer=document.createElement("footer");
    footer.innerHTML=`<div id="infooter">&copy;&nbsp;2022&nbsp;yamaguchi03</div>`;
    var head=document.head;
    head.after(header);
    var html=document.getElementsByTagName("html")[0];
    html.appendChild(footer);
    var head = document.getElementsByTagName('head')
    var script = document.createElement('script')
        script.setAttribute('src', 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js');script.setAttribute('type', 'text/javascript');script.addEventListener('load', function() {
            //jQuery
        })
        document.head.appendChild(script);  
};
