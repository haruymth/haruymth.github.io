window.addEventListener('DOMContentLoaded', function() {
	var code=document.getElementsByClassName("code");
for(let i=0;i<code.length;i++){
	var button=document.createElement("button");
  button.setAttribute("class","button");
  button.setAttribute("onclick","copyScripts(this.nextElementSibling);");
  button.innerHTML="Copy";
	code[i].before(button);
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
	scripts.nextElementSibling.innerHTML="Copied!";
	setTimeout(function(){scripts.previousElementSibling.innerHTML="Copy"},1000);
  });
};
