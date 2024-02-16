const but1 = document.getElementById("but1");
const but2 = document.getElementById("but2");
const out = document.getElementById("out");
const blackOkno = document.getElementById("blackOkno");
const goodOkno = document.getElementById("goodOkno");
let i = 0;

but1.addEventListener("click", ()=>{
    goodOkno.style.top = "0vh";
});

but2.addEventListener("click", ()=>{
    if(i == 0){
        i++;
        out.innerHTML = "<p>ТЫ УВЕРЕНА?!</p>";
    }
    else if(i == 1){
        i++;
        out.innerHTML = "<p>ТЫ ЧЁ СОВСЕМ ОФИГЕЛА?!</p>";
    }
    else if(i == 2){
        i++;
        out.innerHTML = "<p>ПОСЛЕДНИЙ ШАНС</p>";
    }
    else{
        blackOkno.style.top = "0vh";
    }
});