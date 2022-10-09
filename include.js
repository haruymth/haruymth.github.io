const head = document.head;
head.insertAdjacentHTML('afterBegin', `
	  <link rel="stylesheet" href="https://haru-ymth.github.io/style.css">
	  <meta charset="utf-8"> 
	  <link rel="icon" href="https://haru-ymth.github.io/favicon.png">`);
window.addEventListener('DOMContentLoaded', function() {
    var header = document.createElement("header");
    header.innerHTML = `
		<ul id=headerul>
				<li class="head"> <a href="https://haru-ymth.github.io/" class="nav"><img src="https://haru-ymth.github.io/favicon.png" width="35px" height="35px" id="icon"></a> </li>
				<li class="head"><a href="https://haru-ymth.github.io/" class="nav">yamaguchi03</a></li>
				<li class="head" id="sidebartoggle"> <a class="nav">その他</a> </li>
		</ul>`;
    var shadow=document.createElement("div");
    shadow.id="_shadow";
    document.body.after(shadow);
    var footer=document.createElement("footer");
    //footer.innerHTML=`<div id="infooter">&copy;&nbsp;2022&nbsp;yamaguchi03</div>`;
    var menu=document.createElement("iframe");
    menu.id="menubar";
    menu.src="https://haru-ymth.github.io/others";
    menu.class="none";
    var head=document.head;
    head.after(header);
    head.after(menu);
    var html=document.getElementsByTagName("html")[0];
   // html.appendChild(footer);
    var head = document.getElementsByTagName('head');
    var script = document.createElement('script');
        script.setAttribute('src', 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js');script.setAttribute('type', 'text/javascript');script.addEventListener('load', function() {
            //$("#menubar").on("click",function(){$("#menubar").css("right","0");});
        })
        document.head.appendChild(script);  
    var sonota=document.getElementById("sidebartoggle");
		sonota.addEventListener('click', function(){
    	if(document.getElementById("menubar").style.right=="0px"){
        document.getElementById("_shadow").style.transitionDelay="0s,1s";
      	document.getElementById("menubar").style.right="-100vw";
        document.getElementById("_shadow").style.opacity="0";
        document.getElementById("_shadow").style.height="0";
    	}else{
        document.getElementById("_shadow").style.transitionDelay="0s,0s";
        document.getElementById("menubar").style.right="0px";
        document.getElementById("_shadow").style.opacity="0.5";
        document.getElementById("_shadow").style.height="100%";
      }
    });
    var shad=document.getElementById("_shadow");
		shad.addEventListener('click', function(){
        document.getElementById("_shadow").style.transitionDelay="0s,1s";
      	document.getElementById("menubar").style.right="-100vw";
        document.getElementById("_shadow").style.opacity="0";
        document.getElementById("_shadow").style.height="0";
    });
    
};
