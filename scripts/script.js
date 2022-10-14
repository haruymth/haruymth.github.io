window.addEventListener('DOMContentLoaded', function() {
	var code=document.getElementsByClassName("code");
for(let i=0;i<code.length;i++){
	var button=document.createElement("button");
  button.setAttribute("class","button");
  button.setAttribute("onclick","copyScripts(this.previousElementSibling);");
  button.innerHTML="Copy";
	code[i].after(button);
};
});
/*function copyScripts(scripts){
	var element = document.createElement("textarea");
	element.value=scripts.textContent;
	document.body.appendChild(element);
	element.select();
	document.execCommand('copy');
	document.body.removeChild(element)
	scripts.nextElementSibling.innerHTML="Copied!";
	setTimeout(function(){scripts.nextElementSibling.innerHTML="Copy"},1000);
};*/
function copyScripts(scripts){
	var element = document.createElement("textarea");
    	var code=(await(await fetch(`/scripts/codes/${scripts.id}.txt`,{headers:{"X-Requested-With":"XMLHttpRequest"}})).text());
	element.value=code;
	document.body.appendChild(element);
	element.select();
	document.execCommand('copy');
	document.body.removeChild(element);
	scripts.nextElementSibling.innerHTML="Copied!";
	setTimeout(function(){scripts.nextElementSibling.innerHTML="Copy"},1000);
};
