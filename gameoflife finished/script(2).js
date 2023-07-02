function random1(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

class Predator {
    constructor(x, y, energy,gender) {
        this.gender=gender
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
        //         if (matrix[y][x] instanceof Sunflower) {
        //             find.push(this.directions[i]);
        //         }
        //     }
        //     this.energy--
        // }
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
    constructor(x, y,gender) {
        this.gender=gender;
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
        // for (var i in this.directions) {
        //     var x = this.directions[i][0];
        //     var y = this.directions[i][1];
        //     if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
        //         if (matrix[y][x] instanceof Sunflower) {
        //             find.push(this.directions[i]);
        //         }
        //     }
        //     this.energy--
        // }
        var target = random(found);
        return target;
    }
}

XPathEvaluator

class Empty {
    constructor(x, y, color,gender) {
        this.gender = gender;
        this.color = color;
        this.x = x;
        this.y = y;

    }

}
class Grasseater {
    constructor(x, y, energy,gender) {
        this.gender= gender;
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
        // for (var i in this.directions) {
        //     var x = this.directions[i][0];
        //     var y = this.directions[i][1];
        //     if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
        //         if (matrix[y][x] instanceof Sunflower) {
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
    constructor(x, y, index,gender){
        super(x, y, index,gender);
        this.energy = 8;
        this.gender = gender; 
    }
   getNewCoordinates() {
       this.directions = [
           [this.x - 1, this.y - 1],
           [this.x, this.y - 1],
           [this.x + 1, this.y - 1],
           [this.x - 1, this.y],
           [this.x + 1, this.y],
           [this.x - 1, this.y + 1],
           [this.x, this.y + 1],
           [this.x + 1, this.y + 1]
       ];
   }
   chooseCell(character) {
       this.getNewCoordinates();
       return super.chooseCell(character);
   }
    choseCell5(){
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
        // for (var i in this.directions) {
        //     var x = this.directions[i][0];
        //     var y = this.directions[i][1];
        //     if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
        //         if (matrix[y][x] instanceof Sunflower) {
        //             find.push(this.directions[i]);
        //         }
        //     }
        //     this.energy--
        // }
        if (find.length == 2) {
            for (var i in this.directions) {
                var x = this.directions[i][0];
                var y = this.directions[i][1];
                if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                    if (matrix[y][x] instanceof Fall) {
                        find.push(this.directions[i]);
                    }
                }
            }
            this.energy--
        }


        var target = random(find);
        return target;
    }
    move3() {
        var targetCell = this.ChooseCells5()
        var x = targetCell[0]
        var y = targetCell[1]
        matrix[this.y][this.x] = new Empty(this.x, this.y)
        if (this.energy > 0) {
            matrix[y][x] = new Fall(x, y, this.energy)
        }




    }
    }

class Acidrain {
    constructor(x, y, energy,gender) {
        this.color= "white"
        this.x = x
        this.y = y
        // this.ChooseCells
        this.multiply = 2
        this.energy = energy
        this.gender = gender
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
    // ChooseCells4() {
    //     var find = [];
    //     for (var i in this.directions) {
    //         var x = this.directions[i][0];
    //         var y = this.directions[i][1];
    //         if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
    //             if (matrix[y][x] instanceof Grass) {
    //                 find.push(this.directions[i]);
    //                 this.energy = 10;
    //             }
    //         }
    //     }
    //     for (var i in this.directions) {
    //         var x = this.directions[i][0];
    //         var y = this.directions[i][1];
    //         if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
    //             if (matrix[y][x] instanceof Fall) {
    //                 find.push(this.directions[i]);
    //             }
    //         }
    //         this.energy--
    //     }

    //     if (find.length == 0) {
    //         for (var i in this.directions) {
    //             var x = this.directions[i][0];
    //             var y = this.directions[i][1];
    //             if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
    //                 if (matrix[y][x] instanceof Empty) {
    //                     find.push(this.directions[i]);

    //                 }
    //             }


    //         }
    //         this.energy--

    //     }
    //     // for (var i in this.directions) {
    //     //     var x = this.directions[i][0];
    //     //     var y = this.directions[i][1];
    //     //     if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
    //     //         if (matrix[y][x] instanceof Sunflower) {
    //     //             find.push(this.directions[i]);
    //     //         }
    //     //     }
    //     //     this.energy--
    //     // }
    //     if (find.length == 1) {
    //         for (var i in this.directions) {
    //             var x = this.directions[i][0];
    //             var y = this.directions[i][1];
    //             if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
    //                 if (matrix[y][x] instanceof Grasseater) {
    //                     find.push(this.directions[i]);
    //                 }
    //             }
    //         }
    //         this.energy--
    //     }
    //     if (find.length == 2) {
    //         for (var i in this.directions) {
    //             var x = this.directions[i][0];
    //             var y = this.directions[i][1];
    //             if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
    //                 if (matrix[y][x] instanceof Predator) {
    //                     find.push(this.directions[i]);
    //                 }
    //             }
    //         }
    //         this.energy--
    //     }


    //     var target = random(find);
    //     return target;
    // }
    // move2() {
        
    //     var targetCell = this.ChooseCells4()
    //     var x = targetCell[0]
    //     var y = targetCell[1]
    //     matrix[this.y][this.x] = new Empty(this.x, this.y)
    //     if (this.energy > 0) {
    //         matrix[y][x] = new Acidrain(x, y, this.energy)
    //     }




    // }
}
// class Sunflower extends Empty{
//     constructor(x,y,energy,gender){
//         super(x,y,color,energy,gender)

//     }
    
// }

class Lighting extends Predator{
    constructor(x,y,energy,gender){
        super(x,y,energy,gender);
    }
} 

class Hero{
    constructor(x, y, energy,gender) {
        this.gender= gender;
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
    ChooseCells6() {
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
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] instanceof Sunflower) {
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
                    if (matrix[y][x] instanceof Hero) {
                        find.push(this.directions[i]);
                    }
                }
            }
            this.energy--
        }


        var target = random(find);
        return target;
    }
    move4() {
        var targetCell = this.ChooseCells6()
        var x = targetCell[0]
        var y = targetCell[1]
        matrix[this.y][this.x] = new Empty(this.x, this.y)
        if (this.energy > 0) {
            matrix[y][x] = new Hero(x, y, this.energy)
        }




    }
}

class Infecter extends Empty{
    constructor(x,y,color,energy,gender){
        super(x,y,color,energy,gender)
        this.multiplier = 1.1
        this.gender = gender; 
    }
   getNewCoordinates() {
       this.directions = [
           [this.x - 1, this.y - 1],
           [this.x, this.y - 1],
           [this.x + 1, this.y - 1],
           [this.x - 1, this.y],
           [this.x + 1, this.y],
           [this.x - 1, this.y + 1],
           [this.x, this.y + 1],
           [this.x + 1, this.y + 1]
       ];
   }
   chooseCell(character) {
       this.getNewCoordinates();
       return super.chooseCell(character);
   }
    choseCell(){
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
        
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] instanceof Sunflower) {
                    find.push(this.directions[i]);
                }
            }
            this.energy--
        }
        if (find.length == 2) {
            for (var i in this.directions) {
                var x = this.directions[i][0];
                var y = this.directions[i][1];
                if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                    if (matrix[y][x] instanceof Fall) {
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
    move3() {
        var targetCell = this.ChooseCells5()
        var x = targetCell[0]
        var y = targetCell[1]
        matrix[this.y][this.x] = new Empty(this.x, this.y)
        if (this.energy > 0) {
            matrix[y][x] = new Infecter(x, y, this.energy)
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
var size2 = 50; // Reduced size due to lag
var side = 20;
var timer = 0
function setupMatrix(){
    
    for (var i = 0; i < size2; i++) {
        var arr = [];
        for (var j = 0; j < size2; j++) {
            var entity = Math.random()
            if (entity > 0.4 && entity < 0.99) {
                arr.push(new Empty(j, i,"female"))
            }
             else if (entity < 0.4 && entity > 0.01) {
                arr.push(new Grass(j, i,"female"))
                // arr.push(new Fall(j, i))
            }
            // 
            else if (entity < 0.995) {
                arr.push(new Grasseater(j, i, 15,"female"))
                
            }
            else if (entity > 0.01) {
                arr.push(new Predator(j, i, 3,"male"))
            }
            else if (entity > 0.6) {
                arr.push(new Acidrain(j, i, 2,"male" ))
            }
            else if (entity > 0.4 && entity <0.8) {
                arr.push(new Fall(j, i, 10,"female"))
            }
            else if (entity > 0.01 && entity <0.2){
                arr.push(new Hero(j, i, 5,"male"))
                
            }
            else if (entity> 0.01 && entity <0.08){
                arr.push(new Infecter(j,i,"blue",2,"female"))
            }
        }
        matrix.push(arr)
    }
}

function initateAction(){
    emptyCells = [];
    emptyCells2 = [];
    emptyCells3 = [];
    emptyCells4 = [];
    emptyCells5 = [];
    emptyCells6 = [];

    timer++
    for (var i = 0; i < size2; i++) {
        for (var j = 0; j < size2; j++) {
            if (matrix[j][i] instanceof Empty) {
                fill('grey')
            } else if (matrix[j][i] instanceof Grass) {
                fill(matrix[j][i].color)
                // console.log("foundCells", matrix[j][i].ChooseCells())
                emptyCells.push(matrix[j][i].ChooseCells());
                emptyCells = emptyCells.filter(e => e != null);
            } else if (matrix[j][i] instanceof Grasseater) {
                fill('yellow')
                matrix[j][i].move()

            }else if (matrix[j][i]instanceof Acidrain){
                fill('white')
                
            }
            else if (matrix[j][i] instanceof Predator) {
                fill('red')
                matrix[j][i].move1()

            } else if (matrix[j][i] instanceof Fall) {
                fill('brown')
                matrix[j][i].move3()
            }
            else if (matrix[j][i] instanceof Hero){
                fill(grey)
                matrix[j][i].move4()
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

    
}

function setup() {
    frameRate(30)
    createCanvas(size2 * side, size2 * side)
    background(50)
    setupMatrix();
}
console.log("matrix ", matrix)
function draw() {
    initateAction();
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
       Fall==true
}
var xIndicator = 0;
var yIndicator = 0;
var refresh = false;
function Acidrainstarts(){
    setTimeout(function() {   
        console.log('hello'); 
        if(refresh)
            return;
        matrix[xIndicator][yIndicator] = new Acidrain(xIndicator,yIndicator);
        //  your code here
        if (xIndicator < size2 && yIndicator<size2) {          
            Acidrainstarts();            
        } 
        xIndicator++;   
        if(xIndicator==size2)       
        {
            xIndicator=0;       
            yIndicator++;
        }
      }, 1000)

}
function Stop(){
}
  
function refreshGame(){
    refresh = true;
    matrix = [];
    setupMatrix()
    initateAction()
}