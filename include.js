const head = document.head;
head.insertAdjacentHTML('beforeend', `
	  <link rel="stylesheet" href="https://haru-ymth.github.io/style.css">
	  <meta charset="utf-8"> 
	  <link rel="icon" href="https://haru-ymth.github.io/favicon.png">
	  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js" type="text/javascript"></script>
	  `);
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
	var googleAnalytics=document.createElement("div");
	googleAnalytics.innerHTML=`<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-T5V03S2YS9"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-T5V03S2YS9');
</script>`;/*var afterHead=document.head;
	afterHead.after(googleAnalytics);*/
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
    
});
if(location.href.includes("#")){
location.href=location.href.replace(/#/g,"");
}
