"use strict"
window.onload=()=>{
    Touch.rmvWtr();
    var bnc,str='',cnt=0,str2='';
    var obj;
 obj=document.getElementsByTagName("style");
    bnc=document.getElementById("bnc");
    for(let x of bnc.innerHTML){
    str+=`<span class='bounce'>${x}</span>`;
    str2+=`.bounce:nth-child(${++cnt}){animation-delay:${cnt}s;color:${Touch.randomRGB()}}`;
    }
    obj[0].innerHTML+=str2;
    bnc.innerHTML=str;
}