window.addEventListener('DOMContentLoaded', function() {
	var code=document.getElementsByClassName("code");
for(let i=0;i<code.length;i++){
  var div=document.createElement("div");
  div.style="display: flex;";
    div.innerHTML=`
  <button class="button" onclick="copyScripts(this.parentNode.nextElementSibiling);">Copy</button>
  <main></main>
  `;
	code[i].before(div);
};
});
/*htmlのidをファイル名の.txtを抜いたやつにする。ファイルは/scripts/codes/にある。*/
function copyScripts(scripts){
	var element = document.createElement("textarea");
  fetch(`https://haru-ymth.github.io/scripts/codes/${scripts.id}.txt`)
  .then(response => response.text())
  .then(data => {
	element.value=data;
	document.body.appendChild(element);
	element.select();
	document.execCommand('copy');
	document.body.removeChild(element);
	scripts.previousElementSibling.firstChild.innerHTML=` <button class="button" onclick="copyScripts(this.nextElementSibiling.nextElementSibiling);">Copy</button>
  <main>Copied!</main>`;
	setTimeout(function(){scripts.previousElementSibling.firstChild.innerHTML=` <button class="button" onclick="copyScripts(this.nextElementSibiling.nextElementSibiling);">Copy</button>
  <main></main>`},1000);
  });
};
