try{
function aiueo(src,key) {
var des = "";
    var decrypted = CryptoJS.AES.decrypt(src, key);
    var decrypt = decrypted.toString(CryptoJS.enc.Utf8);
        console.log(decrypt)
        return decrypt
}
function getCookieValue(key) {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
        var cookiesArray = cookie.split('='); 
        if (cookiesArray[0].trim() == key.trim()) { 
            return cookiesArray[1];
        }
    }
    return '';
}
window.addEventListener('DOMContentLoaded', function() {
	var code=document.getElementsByClassName("script");
for(let i=0;i<code.length;i++){
  var div=document.createElement("div");
  div.style="display: flex;";
    div.innerHTML=`
  <button class="button" onclick="copyScripts(this.parentNode.previousElementSibling);">Copy</button>
  <main style="margin:auto 0 0 0;padding:7px;font-size:15px;opacity:0;transition: opacity 0.2s;">Copied!</main>
  `;
	code[i].after(div);
};
});
function copyScripts(scripts){
	var element = document.createElement("textarea");
  fetch(`https://haruymth.github.io/scripts/warn/codes/${scripts.id}.txt`)
  .then(response => response.text())
  .then(data => {
	/*element.value=data;
	document.body.appendChild(element);
	element.select();
	document.execCommand('copy');
	document.body.removeChild(element);*/
  let data2=aiueo(data,getCookieValue("password"))
	navigator.clipboard.writeText(data2);
	scripts.nextElementSibling.children[1].style.opacity="0.7";
	setTimeout(function(){scripts.nextElementSibling.children[1].style.opacity="0"},3000);
  });
};
}catch(e){
	alert(e)
}
