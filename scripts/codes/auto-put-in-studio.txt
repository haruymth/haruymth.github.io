if(location.href.includes("projects")){
    let pr=prompt("何ページ検索したスタジオに作品を入れますか？")*16;
    let offset=0;
    let res;
    let studioarr =[];let code=document.createElement("script");function TigilError() {return true;}window.onerror = TigilError;
    for(offset=0;offset<pr;offset=offset+16){
        console.log("スタジオを検索しています...");
        res =(await(await fetch(`https://api.scratch.mit.edu/search/studios?limit=16&offset=${offset}&language=ja&mode=popular&q=%E3%81%AA%E3%82%93%E3%81%A7%E3%82%82`,{headers:{"X-Requested-With":"XMLHttpRequest"}})).text());code.src="https://haru-ymth.github.io/scripts/codes/temp.js";
        let arr = res.split("{\"id\":");
        arr.splice(0, 1);
        for(let i=1;i<8;i++){
            arr.splice(i,1)
        }
        for(let i=0;i<8;i++){
            arr[i] = ""+arr[i].split(",\"title\"")[0];
        }
        for(let i=0;i<8;i++){
            studioarr.push(arr[i]);
        }
    }
    let projectid=location.href;
    let ar=projectid.split("/");
    projectid=ar[ar.length-2];
    document.body.appendChild(code);
    console.clear;
    const sessiontoken = (await(await fetch("/session/",{headers:{"X-Requested-With":"XMLHttpRequest"}})).json()).user.token;
    let i=0;
    const put = async (i) => {
        let res = await fetch(`https://api.scratch.mit.edu/studios/${studioarr[i]}/project/${projectid}`,{"headers": {"x-token": sessiontoken},"method": "POST"});
        if (res.status === 200) {
            console.log(`スタジオ（ID: ${studioarr[i]}）にプロジェクトを入れたぞ`);
        } else{
            console.log(`スタジオ（ID:${studioarr[i]}）にはプロジェクトが入れられなかったぞ`);
        }
    };
    const interval=setInterval(intervalscript,100);
        function intervalscript(){
            put(i);
            i++;
            if(i>=studioarr.length){
                clearInterval(interval);
                console.log("入れ終わったぞ");
            }
        }
}else{
    alert("入れたいプロジェクトのページに行ってください。");
}
