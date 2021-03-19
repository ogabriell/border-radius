function tl(){
    var val = document.getElementById('tl');
    var tl = document.getElementById('border');
    if(val.value >= 0){
        tl.style.borderTopLeftRadius = val.value+'px';
    }
}
function tr(){
    var val = document.getElementById('tr');
    var tr = document.getElementById('border');
    if(val.value >= 0){
        tr.style.borderTopRightRadius = val.value+'px';
    }
}
function bl(){
    var val = document.getElementById('bl');
    var bl = document.getElementById('border');
    if(val.value >= 0){
        bl.style.borderBottomLeftRadius = val.value+'px';
    }
}
function br(){
    var val = document.getElementById('br');
    var br = document.getElementById('border');
    if(val.value >= 0){
        br.style.borderBottomRightRadius = val.value+'px';
    }
}

