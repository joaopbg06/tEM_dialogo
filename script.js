const text = "* HUmano! bOia A loja TeM, TeM qUer DindIN. TeM paGar FaCul ";
const text2 = "* MaS TeM qUeR FoCUU !!";

const speed = 50;
let i = 0;

function escrever2() {
    if (i < text2.length) {
        document.getElementById("text2").innerHTML += text2.charAt(i);
        i++;
        setTimeout(escrever2, speed);
    }
}

function escrever1() {
    if (i < text.length) {
        document.getElementById("text").innerHTML += text.charAt(i);
        
        i++;
        setTimeout(escrever1, speed);
    } else {
        i = 0;
        escrever2()
    }
}
function trocar(){

}

escrever1();
