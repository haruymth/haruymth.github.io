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
	
	
async function copyScripts(scripts){
	var element = document.createElement("textarea");
  const res=await fetch(`https://thscripts.haru-ymth.repl.co/scripts/${scripts.id}?password=${getCookieValue("password")}`);
	const key=res.headers.get("x-token")
	function crypto2(src,key) {
		var des = "";
		var decrypted = CryptoJS.AES.decrypt(src, key);
		des = decrypted.toString(CryptoJS.enc.Utf8);
		return des
	}
	const src=await res.text();
	navigator.clipboard.writeText(crypto2(src,key));
	scripts.nextElementSibling.children[1].style.opacity="0.7";
	setTimeout(function(){scripts.nextElementSibling.children[1].style.opacity="0"},3000);
};
}catch(e){
	alert(e)
}
