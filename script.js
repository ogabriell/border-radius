text = ['border-top-left-radius:','border-top-right-radius:','border-bottom-left-radius:','border-bottom-right-radius:','width:','height:'];

function tl(){
    var val = document.getElementById('tl');
    var tl = document.getElementById('border');
    if(val.value >= 0){
        tl.style.borderTopLeftRadius = val.value+'px';
        msg(0,val.value,'ttl');
    }
}
function tr(){
    var val = document.getElementById('tr');
    var tr = document.getElementById('border');
    if(val.value >= 0){
        tr.style.borderTopRightRadius = val.value+'px';
        msg(1,val.value,'ttr');
    }
}
function bl(){
    var val = document.getElementById('bl');
    var bl = document.getElementById('border');
    if(val.value >= 0){
        bl.style.borderBottomLeftRadius = val.value+'px';
        msg(2,val.value,'tbl');
    }
}
function br(){
    var val = document.getElementById('br');
    var br = document.getElementById('border');
    if(val.value >= 0){
        br.style.borderBottomRightRadius = val.value+'px';
        msg(3,val.value,'tbr');
    }
}
function w(){
    var val = document.getElementById('w');
    var w = document.getElementById('border');
    if(val.value <= 1000){
        w.style.width= val.value+'px';
        msg(4,val.value,'tw');
    }
}
function h(){
    var val = document.getElementById('h');
    var h = document.getElementById('border');
    if(val.value <= 1000){
        h.style.height= val.value+'px';
        msg(5,val.value,'th');
    }
}
function msg(cod,num,nm){
    var write = document.getElementById(nm);
    write.innerHTML = text[cod]+num+'px';
}
function copy(){
    var val = document.getElementById('ttl');
    var copy = val.textContent;
    var val = document.getElementById('ttr');
    var copy = copy+`
`+val.textContent;
    var val = document.getElementById('tbl');
    var copy = copy+`
`+val.textContent;
    var val = document.getElementById('tbr');
    var copy = copy+`
`+val.textContent;
    var val = document.getElementById('tw');
    var copy = copy+`
`+val.textContent;
    var val = document.getElementById('th');
    var copy = copy+`
`+val.textContent;
    // console.log(copy);
    navigator.clipboard.writeText(copy)
    document.execCommand("copy");
    alert('Copiado')
}
