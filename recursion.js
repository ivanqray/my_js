function countdown(i){
    console.log(i);
    if (i<=0) {
        return;
    }
    else {
        countdown(i-1);
    }
}
//countdown(10);

function fact(x){
    if (x == 1){
        return 1;
    }
    else {
        return x * fact(x-1);
    }
}

function len_ar(ll) {
    var len = 0;
    if (ll[0] == undefined){
        return 0;
    }
    else {
        len = 1;
        ll.pop();
        return len + len_ar(ll);
    }
}
mas_l = [5,12,1,20,3];
//console.log(len_ar(mas_l));

//Why this shit isn't work?
//Python deal with it easy.
function f_max(x){
    if (x[0] == undefined) {
        return 0;
    }
    else {
        max = x[0];
        x.shift();
        //console.log('MAX= ',max);
        res = f_max(x);
        //console.log('RES= ',res);
        if (max > res) {
            return max;
        }
        else {
            return res;
        }
    }
}
console.log(f_max(mas_l));
