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
var emptyCells4 = [];

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
       for (var i = 0; i < 80; i++) {
         for (var j = 0; j < 80; j++) {
           if (matrix[j][i] instanceof Grass) {
             console.log("Acid rain started")
             matrix[j][i] = new Acidrain(j,i);
           }
         }
       }

    acidRain=true



}
// function main() {
//     var socket = io();
//     var chatDiv = document.getElementById('Chat');
//     var input = document.getElementById('Nachricht');
//     var button = document.getElementById('Senden');
 
//     function handleSubmit(evt) {
//         var val = input.value;
//         if (val != "") {
//             socket.emit("send message", val);
//         }
//     }
//     button.onclick = handleSubmit;
 
//     function handleMessage(msg) {
//         var p = document.createElement('p');
//         p.innerText = msg;
//         chatDiv.appendChild(p);
//         input.value = "";
// }

// socket.on('display message', handleMessage);
// } // main closing bracket

// window.onload = main;   
