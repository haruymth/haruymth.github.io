window.onload=function(){var code=document.getElementsByClassName("code");
for(let i=0;i<code.length;i++){
	var button=document.createElement("button");
  button.setAttribute("class","button");
  button.setAttribute("onclick","copyScripts(this.previousElementSibling);");
  button.innerHTML="Copy";
	code[i].after(button);
}};
function copyScripts(scripts){
	var element = document.createElement("textarea");
	element.value=scripts.textContent;
	document.body.appendChild(element);
	element.select();
	document.execCommand('copy');
	document.body.removeChild(element)
	alert("Copied!");
}
			
