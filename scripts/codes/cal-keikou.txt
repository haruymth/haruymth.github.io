async function calKei() {
    const projectId = prompt("調べたいプロジェクトIDを入力");
    const saidai = 10000;
    let offset = 0;
    let page = 0;
    let rank = 0;
    let ok = 0;
    while(ok==0){
        const res = await fetch(`https://api.scratch.mit.edu/explore/projects?limit=16&offset=${offset}&language=ja&mode=trending&q=*`);
        const users = await res.text();
        let idList = users.split("\"id\"");
        let i = 2;
        while(i<idList.length){
            idList.splice(i,1);
            if(i<idList.length){
                idList.splice(i,1);
            }
            i += 1;
        }
        idList.splice(0,1);
        i = 0;
        while(i<idList.length){
            idList[i] = idList[i].slice(1,10);
            i += 1;
        }
    if(idList.includes(projectId)){
        rank = offset + idList.indexOf(projectId) + 1;
        page = Math.floor(rank/16) + 1;
        rank = rank%16;
        ok = 1;
    }
    if(offset>=saidai){
        rank ="None";
        page ="None";
        break;
    }
    offset += 16;
    console.log(`全ページ合わせて${offset}位まで調べました`);
    }
    console.log(`=====結果====\n${page}ページ目、${rank}位にありました。`)
  };
  calKei();
