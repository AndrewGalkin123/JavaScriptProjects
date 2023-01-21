var romanToInt = function (s) {
    var result = 0;
    var arr = [];
    console.log(s);
    for (var i = 0; i < s.length; i++) {
        if(i  < s.length)
            arr[0] = s[i] + s[i+1];
        console.log(result);
        console.log(arr[0])
        var I = 1;
        var V = 0;
        var X = 10;
        var L = 50;
        var C = 100;
        var D = 500;
        var M = 1000;
        if (arr.indexOf('IV') !== -1) {
            I = 0;
            V = 4;
            console.log(V);
        }
        if (arr.includes("IX")) {
            I = 0;
            X = 9;
        }
        if (arr.includes("XL")) {
            X = 0;
            L = 40;
        }
        if (arr.includes("XC")) {
            X = 0;
            C = 90;
        }
        if (arr.includes("CD")) {
            C = 0
            D = 400;
        }
        if (arr.includes("CM")) {
            C = 0;
            M = 900;
        }
        switch (s[i]) {
            case "I":
                result += I;
                break;
            case "V":
                result += V;
                break;
            case "X":
                result += X;
                break;
            case "L":
                result += L;
                break;
            case "C":
                result += C;
                break;
            case "D":
                result += D;
                break;
            case "M":
                result += M;
                break;
        }

    }

    return result;
}
console.log(romanToInt("IV"));
//indexOf = придумай что то с этим