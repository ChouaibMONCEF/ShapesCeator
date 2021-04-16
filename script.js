function setup() {
  createCanvas(1000, 500);
  background(240, 122, 10);
}

class shape {
  constructor(name, x, y) {
    this.x = x;
    this.y = y;
  }
}

class square1 extends shape {
  constructor(name, x, y, s) {
    super(name, y, x);
    this.s = s;
  }
  drawshape() {
    square(this.x, this.y, this.s);
  }
}

class rectangle extends shape {
  constructor(name, x, y, w, h) {
    super(name, y, x);
    this.w = w;
    this.h = h;
  }
}
class ellipse1 extends shape {
  constructor(name, x, y, r) {
    super(name, y, x);
    this.r = r;
  }
}

var RecWidth = document.querySelector("#RecWidth");
var RecHeight = document.querySelector("#RecHeight");
var X = document.querySelector("#X");
var Y = document.querySelector("#Y");
var SqrSide = document.querySelector("#SqrSide");
var Radius = document.querySelector("#Radius");

btn3.onclick = function draw() {
  let elps = new ellipse1(50, 50, Radius.value);
};

btn1.onclick = function draw() {
  rect(X.value, Y.value, RecWidth.value, RecHeight.value);
};
let todraw=[]
btn2.onclick = () => {
 
  const sq = new square1(50, 50, SqrSide.value);
  todraw.push(sq);
};

// function draw() {
//   todraw.forEach(element => {
//    element.todraw)
//  });
// }

// const rect = document.createElement("div")
// rect.setAttribute("class", "rectangle")
// rect.style.width=RecWidth
// rect.style.height=RecHeight

// class Circle {
//   Radius = 0;
//   constructor(radius) {
//     this.radius = radius;
//   }

// }

// class Square {
//   constructor() {
//     this.Side = side;
//   }
// }

// class Rectangle {
//   constructor() {
//     this.RecHeight = RecHeight;
//     this.Recwidth = Recwidth;
//   }
// }

// btn3.addEventListener("click", function () {
//   //   var Radius = document.querySelector("#Radius").value;
//   var Aame = new Circle(+Radius);
//   Aame.print();
// });

// btn2.addEventListener("click", function () {
//   var RecWidth = document.querySelector("#RecWidth").value;
//   var RecHeight = document.querySelector("#RecHeight").value;
//   var Aame = new Circle(+Radius);
//   Aame.print();
// });

// btn1.addEventListener("click", function () {
//   var Radius = document.querySelector("#Radius").value;
//   var Aame = new Circle(+Radius);
//   Aame.print();
// });
