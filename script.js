let string="";
let sum=document.querySelectorAll(".button");
for(var i=0;i<sum.length;i++){
  sum[i].addEventListener("click",(e)=>{
   
   
    if(e.target.innerHTML=="C"){
        string=""
        document.querySelector("input").value=string;
    }
    
    else if(e.target.innerHTML=="←"){
        
       let str= document.querySelector("#result");
        str.value=str.value.slice(0,-1)
        string=str.value+""
    
    }
    else if(e.target.innerHTML=="="){
        string=eval(string);
        document.querySelector("input").value=string;
        
    }
    else{
    string=string+e.target.innerHTML;
    document.querySelector("input").value=string;
   
    }
  })
            
}








// Array.from(sum).forEach((button)=>{
//     button.addEventListener( "click",(e)=>{
        
//         string=string+ e.target.innerHTML;
//         document.querySelector("input").value=string;
//     console.log(string)
//     })
// });