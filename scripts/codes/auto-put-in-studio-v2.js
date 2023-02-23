if(location.href.includes("projects")){
    async function autoPutInStudio(){
        let pr=prompt("何個検索したスタジオに作品を入れますか？（推奨：1~60)");
        let q="&q="+encodeURI(prompt("検索キーワードは？（推奨：なんでも/入れろ など）")||"");
        if(q=="&q=")q="";
        let projectid=location.href.replace(/[^0-9]/g,"");
        let offset=0;
        let response;
        let studioarr =[];
        while(studioarr.length<pr){
            console.log(`(${(studioarr.length)}/${(pr)})「${decodeURI(q)}」でスタジオを検索しています...`);
            response =await fetch(`https://api.scratch.mit.edu/search/studios?limit=16&offset=${offset}&language=ja&mode=trending${q}`,{headers:{"X-Requested-With":"XMLHttpRequest"}});
            let res=await response.json();
            for(let i=0;i<res.length;i++){
                if(!studioarr.includes(res[i].id)&&res[i].open_to_all){
                    studioarr.push(res[i].id);
                }
            }
            offset+=16;
            console.log(studioarr.length<pr)
        }
        studioarr=studioarr.slice(0,pr);
        const sessiontoken = (await(await fetch("/session/",{headers:{"X-Requested-With":"XMLHttpRequest"}})).json()).user.token;
        let i=0;
        const put = async (i) => {
            await fetch(`https://api.scratch.mit.edu/studios/${studioarr[i]}/project/${projectid}`,{"headers": {"x-token": sessiontoken},"method": "POST"});
            await fetch(`https://api.scratch.mit.edu/studios/${studioarr[i]}/project/${projectid}`,{"headers": {"x-token": sessiontoken},"method": "DELETE"});
            let res = await fetch(`https://api.scratch.mit.edu/studios/${studioarr[i]}/project/${projectid}`,{"headers": {"x-token": sessiontoken},"method": "POST"});
            if (res.status === 200) {
                console.log(`(${i+1}/${pr})スタジオ（ID: ${studioarr[i]}）にプロジェクトを入れたぞ`);
            } else{
                console.log(`(${i+1}/${pr})スタジオ（ID: ${studioarr[i]}）にはプロジェクトが入れられなかったぞ(${res.status}エラー)`);
            }
        };
        const interval=setInterval(intervalscript,100);
            function intervalscript(){
                put(i);
                i++;
                if(i>=studioarr.length){
                    clearInterval(interval);
                }
            }
        }
        autoPutInStudio();
}else{
    alert("入れたいプロジェクトのページに行ってください");
}
