document.querySelector(".mult").onclick=function(){
    let one = document.querySelector(".one").value
    let two = document.querySelector(".two").value
    alert(one*two)
}
document.querySelector(".divi").onclick=function(){
    let one = document.querySelector(".one").value
    let two = document.querySelector(".two").value
    alert(one/two)
}
document.querySelector(".per").onclick=function(){
    let a = document.querySelector(".a").value
    let b = document.querySelector(".b").value
    alert((+a + +b)*2)
}
document.querySelector(".plo").onclick=function(){
    let c = document.querySelector(".c").value
    let d = document.querySelector(".d").value
    alert(c*d)
}
document.querySelector(".pov").onclick=function(){
    let e = document.querySelector(".e").value
    let f = document.querySelector(".f").value
    alert(e**f)
}