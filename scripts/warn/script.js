try{

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
	
	
function copyScripts(scripts){
	var element = document.createElement("textarea");
  fetch(`https://thscripts.haru-ymth.repl.co/scripts/${scripts.id}?password=${getCookieValue("password")}`)
  .then(response => response.text())
  .then(data => {
	navigator.clipboard.writeText(data);
	scripts.nextElementSibling.children[1].style.opacity="0.7";
	setTimeout(function(){scripts.nextElementSibling.children[1].style.opacity="0"},3000);
  });
};
}catch(e){
	alert(e)
}
