var romanToInt = function (s) {
    var result = 0;
    for (var i = 0; i < s.length; i++) {
        if (s[i] === "I") {
            if (s.includes("V",i+1)) {
                result += 4;
                i += 1;
            } else if (s.includes("X",i+1)){
                result += 9;
                i += 1;
            } else if(s.includes("I")){
                result++;
            }
        } else if (s[i] === "V") {
            result += 5;
        } else if (s[i] === "X") {
            if (s.includes("L",i+1)) {
                result += 40;
                i += 1;
            } else if (s.includes("C",i+1)){
                result += 90;
                i += 1;
            } else if(s.includes("X")){
                result+=10;
            }
        } else if (s[i] === "L") {
            result += 50;
        } else if (s[i] === "C") {
            if (s.includes("D",i+1)) {
                result += 400;
                i += 1;
            } else if (s.includes("M",i+1)){
                result += 900;
                i += 1;
            } else if(s.includes("C")){
                result+=100;
            }
        } else if (s[i] === "D") {
            result += 500;
        } else if (s[i] === "M") {
            result += 1000;
        }

    }
    return result;
}
console.log(romanToInt("DCXXI"));
