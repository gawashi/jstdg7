function plus1(x) {
  return x + 1;
}

let x = 1;

let result = plus1(x); // => 2
console.log(result);

let square = function (x) {
    return x * x;
};

console.log(square(plus1(x))); // => 4

const _plus1 = x => x + 1; // arrow function
const _square = x => x * x; // arrow function

let y = 2;
console.log(_plus1(y));
console.log(_square(_plus1(y)));

let a = [];
a.push(1, 2, 3);
console.log(a);
a.reverse(); // => [3, 2, 1]
console.log(a);

let points = [
    {x: 0, y: 0},
    {x: 1, y: 1}
];

points.dist = function () {
    let p1 = this[0];
    let p2 = this[1];
    let a = p2.x - p1.x;
    let b = p2.y - p1.y;
    return Math.sqrt(a * a + b * b);
}

console.log(points.dist()); // => 1.4142135623730951
