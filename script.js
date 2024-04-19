const text = "* HUmano! BEm VinDo A loja TeM, TeM qUer DindIN. TeM paGar FaCul ";
const text2 = "* MaS TeM qUeR FoCUU !!";

const speed = 50;
let i = 0;

function escrever2(){
    if (i < text2.length) {
        document.getElementById("text2").innerHTML += text2.charAt(i);
        i++;
        setTimeout(escrever2, speed);
    }
}

function typeWriter() {
    if (i < text.length) {
        document.getElementById("text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else {
        i = 0;
        escrever2()
    }
}

typeWriter();
