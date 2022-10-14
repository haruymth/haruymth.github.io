window.addEventListener('DOMContentLoaded', function() {
	var code=document.getElementsByClassName("code");
for(let i=0;i<code.length;i++){
  var div=document.createElement("div");
  div.style="display: flex;";
    div.innerHTML=`
  <button class="button" onclick="copyScripts(this.parentNode.nextElementSibling);">Copy</button>
  <main style="margin:auto 0 0 0;padding:7px;font-size:15px;opacity:0.5;"></main>
  `;
	code[i].before(div);
};
});
/*htmlのidをファイル名の.txtを抜いたやつにする。ファイルは/scripts/codes/にある。*/
function copyScripts(scripts){
	var element = document.createElement("textarea");
	scripts.previousElementSibling.children[1].innerHTML=`...`;
  fetch(`https://haru-ymth.github.io/scripts/codes/${scripts.id}.txt`)
  .then(response => response.text())
  .then(data => {
	element.value=data;
	document.body.appendChild(element);
	element.select();
	document.execCommand('copy');
	document.body.removeChild(element);
	scripts.previousElementSibling.children[1].innerHTML=`Copied!`;
	setTimeout(function(){scripts.previousElementSibling.children[1].innerHTML=``},1000);
  });
};
