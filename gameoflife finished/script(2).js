// var animals = "Lion,Monkey,Unicorn,Goblin,Dragon,Eagle";
// animalsArr = animals.split(",");

// const { redirect } = require("express/lib/response");

// animalsARR.push("Horse");
// console.log(animalsArr);

// animalsArr.push("Dog");
// console.log(animalsArr);

// animalsArr.pop();
// animalsArr.pop();
// animalsArr.pop();
// console.log(animalsArr);

// animalsArr.shift();
// console.log(animalsArr);


// animalsArr.unshift("Cat");
// animalsArr.unshift("Lemur","Centaur");
// console.log(animalsArr);


// var m = 10;
// console.log(m);
// change();
// console.log(m);

// function change(){
//    var m = 100;
// }



// var a = 100;
// var b = 200;
// var p = calcPer(a,b);
// var s = calcSq(a,b);
// console.log(p,s);

// function calcPer(c,d){
// return 2*(c,d);
// }

// function calcSq(e,f){
// return e*f;

// }


// var c = [45,60,12,98,78,154,65];
// var m = [15,98,45,33,78,98,100,56,98];
// var s1 = sumArray(c);
// var s2 = sumArray(m);
// console.log(s1, s2);
// console.log(sumArray(c))

// function sumArray(a){
//     var sum=0;
//     for(var i = 0;i<a.length;i++)
//     {
//         sum=sum+m[i];

//     }
// }



// var filamteEnesit= ['spiderman','batman','Fast and Furious']
// var filmateAronit=['Ironman','Captain America','Encanto']
// var filmateAndit=['Stranger things','Spiderman','End game']

// var filmatGr3=[ filamteEnesit,filmateAronit,filmateAndit]

// for(var i=0;i<filmatGr3.length;i++){
//     for(var j=0;j<filmatGr3[i].length;j++){
//         console.log(filmatGr3[i][j])
//     }
// }


// var matrix = [
//     [0,1,0,2,2,0,0,0],
//     [0,3,0,1,1,0,0,0],
//     [0,2,0,1,0,0,1,3],
//     [0,0,1,2,2,0,2,2],
//     [0,0,1,0,0,0,2,0],
//     [0,0,3,0,1,1,0,0]
// ];


// for(var i=0;i<matrix.length;i++){
//     for(var j=0;j<matrix[i].length;j++){
//         if(matrix[i][j])
//         console.log(matrix[i],[j])
//     }
// }

// function setup() {
//     frameRate(60)
//     createCanvas(700,500);
//     background('#acacac');
// }
// function draw() {
//     fill("blue")
//     ellipse(random(500),random(700), 5, 5);


// }







// function setup() {
//     frameRate(60)
//     createCanvas(800,600);
//     background('#acacac');
// }
// function draw() {
//     var matrix = [
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
//         [0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
//         [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
//         [0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
//         [0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
//         [0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0],
//         [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
//         [0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]
//     ];

//     for(var y=0;y<matrix.length;y++){
//         for(var x=0;x<matrix[y].length;x++){
//             if(matrix[y][x]==0){
//                 fill("white")            }
//         }
//     }



// }








// var color =[
//     ["e zeze","e kuqe","e bardhe"],
//     ["e verdhe","lejla","blu"],
//     ["jeshile","gri","kafe"],
// ]

// console.log(color[1][1])





// function setup(){
//     createCanvas(400,400)
//     background("grey")

// }

// function draw(){
//     fill("black")
//     rect(0,0,10,10)
//     fill("black")
//     rect(0,390,10,10)
//     fill("black")
//     rect(390,0,10,10)
//     fill("black")
//     rect(390,390,10,10)
// }




// function setup() {
//     frameRate(60)
//     createCanvas(500,500);
//     background("grey");
// }
// function draw() {
//     var side=10
//     var matrix = [
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
//         [0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
//         [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
//         [0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
//         [0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
//         [0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0],
//         [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
//         [0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]
//     ];

//     for(var y=0;y<matrix.length;y++){
//         for(var x=0;x<matrix[y].length;x++){
//             if(matrix[y][x]==0){
//                 fill("white")     
//             rect(x*side,y*side,side,side)       }
//             if(matrix[y][x]==1){
//                 fill("red")     
//             rect(x*side,y*side,side,side)       }

//         }
//     }



// }



// function setup(){
// createCanvas(1000,1000)
// background("grey")
// }
// var side = 10;

// function draw(){
//     for(var x=0;x<=10;x++){
//         for(var y=0;y<=10;y++){
//             fill("balck")
//          rect(x*side,y*side,side,side)
//          fill("green")
//          rect(0*10,0*10,side,side)
//          fill("green")
//          rect(1*10,1*10,side,side)
//          fill("green")
//          rect(2*10,2*10,side,side)
//          fill("green")
//          rect(3*10,3*10,side,side)
//          fill("green")
//          rect(4*10,4*10,side,side)
//          fill("green")
//          rect(5*10,5*10,side,side)
//          fill("green")
//          rect(6*10,6*10,side,side)
//          fill("green")
//          rect(7*10,7*10,side,side)
//          fill("green")
//          rect(8*10,8*10,side,side)
//          fill("green")
//          rect(9*10,9*10,side,side)
//          fill("green")
//          rect(10*10,10*10,side,side)
//         }

//     }

// }


// chooseCell(character) 
//     var found = [];
//     for (var i in this.directions) {
//         var x = this.directions[i][0];
//         var y = this.directions[i][1];
//         if (matrix[y][x] == character) {
//             found.push(this.directions[i]);
//         }
//     }
//     return found;




// function setup(){
//     createCanvas(1000,1000)
//     background("grey")
// }



// function draw(){
//     for(var i=0;i<=10;i++){
//         fill("green")
//         rect(i*100,i*100,100,100)
//     }            
// }


// // var matrix = [
// //     [1,0,0,0,0,0,0,0],
// //     [0,1,0,0,0,0,0,0],
// //     [0,0,1,0,0,0,0,0],
// //     [0,0,0,1,0,0,0,0],
// //     [0,0,0,0,1,0,0,0],
// //     [0,0,0,0,0,1,0,0],
// //     [0,0,0,0,0,0,1,0],
// //     [0,0,0,0,0,0,0,1]
// // ];






// // function setup(){
// //     createCanvas(1000,1000)
// //     background("grey")
// // }



// // function draw(){
// //     for(var i=0;i<=10;i++){
// //         fill("green")
// //         rect(i*100,i*100,100,100)
// //     }            
// // }





// var tect = 0
// function text(){
//   for(var tect=0;tect<=10;tect++){
//     text(tect,tect*100,0,100,100)
//   }
// }
// function setup(){
//   createCanvas(1100,1100)
//   background("grey")
// }
// var tect=0;
// var tecti=1;
// function draw(){
//      for(var i=0;i<=10;i++){
//         fill("white")
//         rect(0,i*100,100,100)
//     }    
//     for(var i=0;i<=10;i++){
//         fill("white")
//         rect(i*100,0,100,100)
//     }
//   for(var tect=0;tect<=10;tect++){
//     textSize(20)
//     fill(100);
//     text(tect,tect*102,50,100,100)
//     text(tect,50,tect*102,100,100)
//   }
//   for(var x=0;x<=10;x++){
//     fill("grey")
//         rect(x*100,x*100,100,100)
//   }
//   for(var i=1;i<=10;i++){
//         fill("grey")
//         rect(i*100,100,100,100)
//     for(var tecti=1;tecti<=11;tecti++){
//       fill(50)
//       text(tecti,tecti*100,100,100,100,)
// // }
// //     }
// //  for(var i=1;i<=10;i++){
// //         fill("grey")
// //         rect(i*100,200,100,100)
// //    for(var tecti=1;tecti<=21;tecti++){
// //       fill(50)
// //       text(tecti*2,tecti*100,200,100,100,)
// // }
// //     }
// //   for(var i=1;i<=10;i++){
// //         fill("grey")
// //         rect(i*100,300,100,100)
// //     for(var tecti=1;tecti<=21;tecti++){
// //       fill(50)
// //       text(tecti*3,tecti*100,300,100,100,)
// //       }
// //     }
// //   for(var i=1;i<=10;i++){
// //         fill("grey")
// //         rect(i*100,400,100,100)
// //     for(var tecti=1;tecti<=21;tecti++){
// //       fill(50)
// //       text(tecti*4,tecti*100,400,100,100,)
// //       }
// //     }
// //   for(var i=1;i<=10;i++){
// //         fill("grey")
// //         rect(i*100,500,100,100)
// //     for(var tecti=1;tecti<=21;tecti++){
// //       fill(50)
// //       text(tecti*5,tecti*100,500,100,100,)
// //       }
// //     }
// //   for(var i=1;i<=10;i++){
// //         fill("grey")
// //         rect(i*100,600,100,100)
// //     for(var tecti=1;tecti<=21;tecti++){
// //       fill(50)
// //       text(tecti*6,tecti*100,600,100,100,)
// //       }
// //     }
// //   for(var i=1;i<=10;i++){
// //         fill("grey")
// //         rect(i*100,700,100,100)
// //     for(var tecti=1;tecti<=21;tecti++){
// //       fill(50)
// //       text(tecti*7,tecti*100,700,100,100,)
// //       }
// //     }
// //   for(var i=1;i<=10;i++){
// //         fill("grey")
// //         rect(i*100,800,100,100)
// //     for(var tecti=1;tecti<=21;tecti++){
// //       fill(50)
// //       text(tecti*8,tecti*100,800,100,100,)
// //       }
// //     }
// //   for(var i=1;i<=10;i++){
// //         fill("grey")
// //         rect(i*100,900,100,100)
// //     for(var tecti=1;tecti<=21;tecti++){
// //       fill(50)
// //       text(tecti*9,tecti*100,900,100,100,)
// //       }
// //     }
// //   for(var i=1;i<=10;i++){
// //         fill("grey")
// //         rect(i*100,1000,100,100)
// //     for(var tecti=1;tecti<=21;tecti++){
// //       fill(50)
// //       text(tecti*10,tecti*100,1000,100,100,)
// //       }
// //     }
// // }


// function setup(){
//     // createCanvas(1000,1000)
//     // background("grey")
//     // }
//     // var side = 10;

//     // function draw(){
//     //     for(var x=0;x<=10;x++){
//     //         for(var y=0;y<=10;y++){
//     //             fill("balck")
//     //          rect(x*side,y*side,side,side)
//     //          fill("green")
//     //          rect(0*10,0*10,side,side)
//     //          fill("green")
//     //          rect(1*10,1*10,side,side)
//     //          fill("green")
//     //          rect(2*10,2*10,side,side)
//     //          fill("green")
//     //          rect(3*10,3*10,side,side)
//     //          fill("green")
//     //          rect(4*10,4*10,side,side)
//     //          fill("green")
//     //          rect(5*10,5*10,side,side)
//     //          fill("green")
//     //          rect(6*10,6*10,side,side)
//     //          fill("green")
//     //          rect(7*10,7*10,side,side)
//     //          fill("green")
//     //          rect(8*10,8*10,side,side)
//     //          fill("green")
//     //          rect(9*10,9*10,side,side)
//     //          fill("green")
//     //          rect(10*10,10*10,side,side)
//     //         }

//     //     }

//     // }

//       constructor(x,y) {
//          this.treatsTaken = 5;
//          this.cuddlyLevel = cuddlyLevel;
//          this.age=9


//       }
//   importantInformation(){
//     return
//   }
// }
//     class GrassEater{
//         constructor(x,y){
//         this.x=x
//         this.y=y

//         }

//     }

//     class EmptyCells{
//         constructor(x,y){


//                 this.x=x
//                 this.y=y
//         }

//          }

// // var matrix = [[0,0,1,0,0],
// //     		   [1,0,0,0,0],
// //     		   [0,1,0,0,0],
// //     		   [0,0,1,0,0],
// //     		   [1,1,0,0,0],
// //                [0,0,1,0,0],
// //     		   [1,0,0,0,0],
// //     		   [0,1,0,0,0],
// //     		   [0,0,1,0,0],
// //     		   [1,1,0,0,0]
// //     		   ];

// var matrix2 = [
// ];

//    var side = 70;


//    function setup() {
//     createCanvas(matrix[0].length * side, matrix.length * side);
//     background('grey');
//     for (var y = 0; y < matrix.length; y++) {
//         var array=[];
//             for (var x = 0; x < matrix[y].length; x++) {
//                 if(random1()==1){
//                     array.push(new Grass(y,x))        
//                 }
//                 if(random1()==0){
//                     array.push(new EmptyCells(y,x))
//                 }
//                 if(random1()==2){
//                     array.push(new GrassEater(y,x))
//                 }
//             }
//          matrix2.push(array)

//     }
// }

// //       for (var y = 0; y < matrix.length; y++) {
// //         for (var x = 0; x < matrix[y].length; x++) {
// //                 if(matrix[y][x]==1){

// //                         foundCells.push(new Grass[y][x])
// //                 }
// //                 if(matrix[y][x]==0){

// //                         foundCells.push(new EmptyCells[y][x])
// //                 }
// //         }
// //    }


//    function draw() {
// //         for (var y = 0; y < matrix.length; y++) {
// //                 for (var x = 0; x < matrix[y].length; x++) {
// //                         if(matrix[y][x]==1){

// //                                 foundCells.push(new Grass[y][x])
// //                         }
// //                         if(matrix[y][x]==0){

// //                                 foundCells.push(new EmptyCells[y][x])
// //                         }
// //                 }
// //         }
// // }


//     for (var i = 0; i< matrix2.length; i++) {
//         for (var j = 0; j < matrix2[i].length; j++) {

//             if (matrix2[i][j] instanceof Grass) {
//                 fill("green");



//             }
//              if (matrix2[i][j]  instanceof EmptyCells) {
//                 fill("grey");

//             }
//             if(matrix2[i][j] instanceof GrassEater){

//                 fill("yellow")

//             }
//             rect(j * side, i * side, side, side);




//         }

//     }
//    }




//     class Grass{
// constructor(x,y){

// this.x=x
// this.y=y
// this.multiply=0
// this.directions=[
//   [this.x - 1, this.y - 1],
//   [this.x    , this.y - 1],
//   [this.x + 1, this.y - 1],
//   [this.x - 1, this.y    ],
//   [this.x + 1, this.y    ],
//   [this.x - 1, this.y + 1],
//   [this.x    , this.y + 1],
//   [this.x + 1, this.y + 1]
// ];
// }
// chooseCells(){
// var found=[];
// for(var i in this.directions){
// var x=this.directions[i][0]
// var y=this.directions[i][1];


// if(x>=0&&x<matrix[0].length&&y>=0&&y<matrix.length){
//     if(matrix[y][x] instanceof EmptyCells){

//         found.push(this.directions[i])
//     }

// }
// }
//  var target=random1(found);
//  return target
//   }
//     }










//   findEmptyCells() {
//         var foundCells=[]
// for(var i=0;i<this.directions.length;i++){
//         for(j=0;j>this.direction[i].length;i++){

//                 if(matrix[i][j]instanceof EmptyCells){

//                         foundCells.push(this.directions[i]);

//                 }



//         }
// }

// return foundCells


// }
//     }



// console.log(random())
//  var a=   Math.random(1)
//  var b= a*3
//  var c= Math.floor(b)
// console.log(c)




// }
// class school{
// constructor(numberofPeople,HowmanyPluses,scoreOfTest){

// this.numberofPeople=numberofPeople
// this.HowmanyPluses=HowmanyPluses
// this.scoreOfTest=scoreOfTest

// }
// calculatingGrade(){

// if(this.HowmanyPluses<5){
//       this.scoreOfTest=this.scoreOfTest+0
// }
// if(this.HowmanyPluses>5){
//         this.scoreOfTest=this.scoreOfTest+1

// }

// }

// }
// var calculatingGrade1=new school(18,6,9)
// console.log(calculatingGrade1.calculatingGrade())

// console.log(calculatingGrade1.scoreOfTes


//     function setup(){
//         createCanvas(1000,1000)
//         background("grey")
//     }



//     function draw(){
//         for(var i=0;i<=10;i++){
//             fill("green")
//             rect(i*100,i*100,100,100)
//         }            
//     }


//     // var matrix = [
//     //     [1,0,0,0,0,0,0,0],
//     //     [0,1,0,0,0,0,0,0],
//     //     [0,0,1,0,0,0,0,0],
//     //     [0,0,0,1,0,0,0,0],
//     //     [0,0,0,0,1,0,0,0],
//     //     [0,0,0,0,0,1,0,0],
//     //     [0,0,0,0,0,0,1,0],
//     //     [0,0,0,0,0,0,0,1]
//     // ];






//     function setup(){
//         createCanvas(1000,1000)
//         background("grey")
//     }



//     function draw(){
//         for(var i=0;i<=10;i++){
//             fill("green")
//             rect(i*100,i*100,100,100)
//         }            
//     }






// class Hamster{
//     constructor(name,ngjyra,breed,x,y){
//         this.x = x;
//         this.y = y;
//         this.name = name
//         this.ngjyra = ngjyra;
//         this.breed = breed
//         this.mosha = 20
//         this.energy = 20;
//         this.hungry = false;
//         this.price = 25;
//     }
//     move(){
//         this.x++
//         this.y++
//     }
//     eat(){
//         if(this.x =10){
//             this.energy = 10
//         }
//         if(this.energy = 10){
//             this.hungry = true
//         }
//         if(this.hungry= true){
//             alert("The hamster is hungry give him food ")
//         }
//     } 
// }
// var Hamster1 = new Hamster("Arnold","white","Chinese hamster",2,2);
// console.log(Hamster1);
// Hamster1.move();
// console.log(Hamster1);
// Hamster1.eat();
// console.log(Hamster1);
function random1(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

class Predator {
    constructor(x, y, energy) {
        this.x = x
        this.y = y
        this.color = color
        this.multiply = 2
        this.energy = energy
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ]
    }
    ChooseCells3() {
        var find = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] instanceof Grass) {
                    find.push(this.directions[i]);
                    this.energy = 5;
                }
            }
        }
        // for (var i in this.directions) {
        //     var x = this.directions[i][0];
        //     var y = this.directions[i][1];
        //     if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
        //         if (matrix[y][x] instanceof Fall) {
        //             find.push(this.directions[i]);
        //         }
        //     }
        //     this.energy--
        // }

        if (find.length == 0) {
            for (var i in this.directions) {
                var x = this.directions[i][0];
                var y = this.directions[i][1];
                if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                    if (matrix[y][x] instanceof Empty) {
                        find.push(this.directions[i]);

                    }
                }


            }
            this.energy--

        }
        if (find.length == 1) {
            for (var i in this.directions) {
                var x = this.directions[i][0];
                var y = this.directions[i][1];
                if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                    if (matrix[y][x] instanceof Grasseater) {
                        find.push(this.directions[i]);
                    }
                }
            }
            this.energy--
        }


        var target = random(find);
        return target;
    }
    move1() {
        var targetCell = this.ChooseCells3()
        if(targetCell==undefined)
        return;
        var x = targetCell[0]
        var y = targetCell[1]
        matrix[this.y][this.x] = new Empty(this.x, this.y, "grey")
        if (this.energy > 0) {
            matrix[y][x] = new Predator(x, y, this.energy)
        }




    }
}
class Grass {
    constructor(x, y) {
        this.color = "green"
        this.x = x
        this.y = y
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ]
    }
    ChooseCells() {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] instanceof Empty) {
                    found.push(this.directions[i]);
                }
            }
        }
        var target = random(found);
        return target;
    }
}



class Empty {
    constructor(x, y, color) {
        this.color = color;
        this.x = x;
        this.y = y;

    }

}
class Grasseater {
    constructor(x, y, energy) {
        this.x = x
        this.y = y
        this.color = color
        this.ChooseCells
        this.multiply = 2
        this.energy = energy
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ]
    }
    ChooseCells2() {
        var find = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] instanceof Grass) {
                    find.push(this.directions[i]);
                    this.energy = 10;
                }
            }
        }
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] instanceof Fall) {
                    find.push(this.directions[i]);
                }
            }
            this.energy--
        }

        if (find.length == 0) {
            for (var i in this.directions) {
                var x = this.directions[i][0];
                var y = this.directions[i][1];
                if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                    if (matrix[y][x] instanceof Empty) {
                        find.push(this.directions[i]);

                    }
                }


            }
            this.energy--

        }
        if (find.length == 2) {
            for (var i in this.directions) {
                var x = this.directions[i][0];
                var y = this.directions[i][1];
                if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                    if (matrix[y][x] instanceof Grasseater) {
                        find.push(this.directions[i]);
                    }
                }
            }
            this.energy--
        }


        var target = random(find);
        return target;
    }
    move() {
        var targetCell = this.ChooseCells2()
        var x = targetCell[0]
        var y = targetCell[1]
        matrix[this.y][this.x] = new Empty(this.x, this.y)
        if (this.energy > 0) {
            matrix[y][x] = new Grasseater(x, y, this.energy)
        }




    }
}
class Fall extends Grass { 
    }
class Acidrain {
    constructor(x, y, energy) {
        this.x = x
        this.y = y
        this.ChooseCells
        this.multiply = 2
        this.energy = energy
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ]
    }
    ChooseCells4() {
        var find = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] instanceof Grass) {
                    find.push(this.directions[i]);
                    this.energy = 5;
                }
            }
        }
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] instanceof Fall) {
                    find.push(this.directions[i]);
                }
            }
            this.energy--
        }

        if (find.length == 0) {
            for (var i in this.directions) {
                var x = this.directions[i][0];
                var y = this.directions[i][1];
                if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                    if (matrix[y][x] instanceof Empty) {
                        find.push(this.directions[i]);

                    }
                }


            }
            this.energy--

        }
        if (find.length == 1) {
            for (var i in this.directions) {
                var x = this.directions[i][0];
                var y = this.directions[i][1];
                if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                    if (matrix[y][x] instanceof Grasseater) {
                        find.push(this.directions[i]);
                    }
                }
            }
            this.energy--
        }
        if (find.length == 2) {
            for (var i in this.directions) {
                var x = this.directions[i][0];
                var y = this.directions[i][1];
                if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                    if (matrix[y][x] instanceof Predator) {
                        find.push(this.directions[i]);
                    }
                }
            }
            this.energy--
        }


        var target = random(find);
        return target;
    }
    move2() {
        
        var targetCell = this.ChooseCells4()
        var x = targetCell[0]
        var y = targetCell[1]
        matrix[this.y][this.x] = new Empty(this.x, this.y)
        if (this.energy > 0) {
            matrix[y][x] = new Acidrain(x, y, this.energy)
        }




    }
}


//    var matrix2 = [
// ];

//    var side = 70;


//    function setup() {
//     createCanvas(800,600);
//     background('grey');
//     for (var y = 0; y < matrix2.length; y++) {
//         var array=[];
//             for (var x = 0; x < matrix2[y].length; x++) {
//                 if(random1()==1){
//                     array.push(new Grass(y,x))        
//                 }
//                 if(random1()==0){
//                     array.push(new EmptyCells(y,x))
//                 }
//                 if(random1()==2){
//                     array.push(new Grasseater(y,x))
//                 }
//             }
//          matrix2.push(array)

//     }
// }
// console.log(matrix2);


// function draw(){
//  for (var i = 0; i< matrix2.length; i++) {
//     for (var j = 0; j < matrix2[i].length; j++) {

//         if (matrix2[i][j] instanceof Grass) {
//             rect(j * side, i * side, side, side);
//             fill("green");



//         }
//          if (matrix2[i][j]  instanceof EmptyCells) {
//             rect(j * side, i * side, side, side);
//             fill("grey");

//         }
//         if(matrix2[i][j] instanceof Grasseater){
//             rect(j * side, i * side, side, side);
//             fill("yellow")

//         }
//         rect(j * side, i * side, side, side);




//     }

// }
// }


var matrix = [];
var side = 20;
var size2 = 50; // Reduced size due to lag
var emptyCells = [];
var emptyCells2 = [];
var emptyCells3 = [];

var timer = 0;

function setup() {
    frameRate(30)
    createCanvas(size2 * side, size2 * side)
    background(50)
    for (var i = 0; i < size2; i++) {
        var arr = [];
        for (var j = 0; j < size2; j++) {
            var entity = Math.random()
            if (entity > 0.4 && entity < 0.99) {
                arr.push(new Empty(j, i))
            } else if (entity < 0.4 && entity > 0.01) {
                arr.push(new Grass(j, i))
                // arr.push(new Fall(j, i))
            }
            // 
            else if (entity < 0.995) {
                arr.push(new Grasseater(j, i, 15))
                
            }
            else if (entity > 0.01) {
                arr.push(new Predator(j, i, 3))
            }
            else if (entity > 0.6) {
                arr.push(new Acidrain(j, i, 2))
            }
            else if (entity < 0.4 && entity <0.8) {
                arr.push(new Fall(j, i))
            }
        }
        matrix.push(arr)
    }
}
console.log("matrix ", matrix)
var acidRain=false;
function draw() {
    emptyCells = [];
    emptyCells2 = [];
    emptyCells3 = [];
    emptyCells4 = [];

    timer++
    for (var i = 0; i < size2; i++) {
        for (var j = 0; j < size2; j++) {
            if (matrix[j][i] instanceof Empty) {
                fill('grey')
            } else if (matrix[j][i] instanceof Grass) {
                fill('green')
                // console.log("foundCells", matrix[j][i].ChooseCells())
                emptyCells.push(matrix[j][i].ChooseCells());
                emptyCells = emptyCells.filter(e => e != null);
            } else if (matrix[j][i] instanceof Grasseater) {
                fill('yellow')
                matrix[j][i].move()

            }else if (matrix[j][i]instanceof Acidrain){
                fill('white')
                matrix[j][i].move2()
                
            }
            else if (matrix[j][i] instanceof Predator) {
                fill('red')
                matrix[j][i].move1()

            } else if (matrix[j][i] instanceof Fall) {
                fill('brown')
            }
            rect(j * side, i * side, side, side)


        }


    }
   

    if (timer == 5) {
        for (var i = 0; i < emptyCells.length; i++) {


            var x = emptyCells[i][0]
            var y = emptyCells[i][1]
            matrix[y][x] = new Grass(x, y)
        }
        timer = 0;

    }

    
    
    
        if(acidRain==true)
        {
            matrix[0][0] = new Acidrain(0, 0)
            acidRain=false;
        }

    // if(timer==3){
    //     for(var n=0;n<emptyCells.length;n++){
    //         var x = emptyCells2[i][0]
    //         var y =emptyCells2[i][1]
    //         matrix[y][x]= new Grasseater(x,y)
    //     }
    //     timer==0
    // }



}
function Fallstarts(){
    console.log(matrix)
       for (var i = 0; i < 50; i++) {
         for (var j = 0; j < 50; j++) {
           if (matrix[j][i] instanceof Grass) {
             console.log("Fall started")
             matrix[j][i] = new Fall(j,i);
           }
         }
       }
}
function Acidrainstarts(){
   console.log(matrix)
    //    for (var i = 0; i < 80; i++) {
    //      for (var j = 0; j < 80; j++) {
    //        if (matrix[j][i] instanceof Grass) {
    //          console.log("Acid rain started")
    //          matrix[j][i] = new Acidrain(j,i);
    //        }
    //      }
    //    }

    acidRain=true



}
function main() {
    var socket = io();
    var chatDiv = document.getElementById('Chat');
    var input = document.getElementById('Nachricht');
    var button = document.getElementById('Senden');
 
    function handleSubmit(evt) {
        var val = input.value;
        if (val != "") {
            socket.emit("send message", val);
        }
    }
    button.onclick = handleSubmit;
 
    function handleMessage(msg) {
        var p = document.createElement('p');
        p.innerText = msg;
        chatDiv.appendChild(p);
        input.value = "";
}

socket.on('display message', handleMessage);
} // main closing bracket

window.onload = main;   
