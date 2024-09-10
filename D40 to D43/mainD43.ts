//Q127
console.log("Question#127");

function traditionalFunction(a: number, b: number) {
    console.log(`${a} + ${b} = `);
    return a + b;
}
var arrowFunction = function (a: number, b: number) {
    console.log(`${a} + ${b} = `);
    return a + b;
}

console.log(traditionalFunction(1, 1));
console.log(arrowFunction(2, 2));


//Q128
console.log("Question#128");

var multipleParams=function(number:number[]){
    var result= 1;
    for(let i=0;i<number.length;i++){
        result *=number[i];
    }
    return result;
};

console.log(multipleParams([2,2,2]));
console.log(multipleParams([3,3,4]));


//Q129
console.log("Question#129");
var _this = this;
var traditionalVsArrow = {
    value: "traditionalVsArrow value",
    traditionalFunction: function () {
        console.log("Traditional function:", this.value); 
    },
    arrowFunction: function () {
        // console.log("Arrow function:", _this.value);
    },
};
traditionalVsArrow.traditionalFunction(); 
traditionalVsArrow.arrowFunction(); 