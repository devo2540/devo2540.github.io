var totalCubicArr = [];
var totalCubicFeetDisplay = document.querySelector('#cubicFeetDisplay');
var totalTrucksDisplay = document.querySelector('#trucksDisplay');

function totalCubicFeet() {
    var allBoxes = document.querySelectorAll('.total');
    var totalArr = [...allBoxes];
    var newArr = [];

    for (i = 0; i < totalArr.length; i++) {
        newArr.push(+totalArr[i].innerHTML);
    };

    totalCubicArr = [];

    totalCubicArr.push(newArr[0] * 45); // desk
    totalCubicArr.push(newArr[1] * 80); // exec unit
    totalCubicArr.push(newArr[2] * 60); // sec. desk 
    totalCubicArr.push(newArr[3] * 50); // hutch
    totalCubicArr.push(newArr[4] * 40); // credenza 
    totalCubicArr.push(newArr[5] * 20); // sm. bookcase
    totalCubicArr.push(newArr[6] * 30); // lg. bookcase
    totalCubicArr.push(newArr[7] * 30); // metal Shelving
    totalCubicArr.push(newArr[8] * 50); // drafting table 
    totalCubicArr.push(newArr[9] * 40); // map file 
    totalCubicArr.push(newArr[10] * 10); // chairs 
    totalCubicArr.push(newArr[11] * 10); // sm table  
    totalCubicArr.push(newArr[12] * 45); // work table  
    totalCubicArr.push(newArr[13] * 80); // conf table  
    totalCubicArr.push(newArr[14] * 35); // comp table  
    totalCubicArr.push(newArr[15] * 20); // copier  
    totalCubicArr.push(newArr[16] * 80); // sofa  
    totalCubicArr.push(newArr[17] * 15); // 2/3 vertical
    totalCubicArr.push(newArr[18] * 25); // 4/5 vertical
    totalCubicArr.push(newArr[19] * 20); // 2/3 lateral
    totalCubicArr.push(newArr[20] * 30); // 4/5 Lateral
    totalCubicArr.push(newArr[21] * 30); // storage cabinet 
    totalCubicArr.push(newArr[22] * 5); // pictures 
    totalCubicArr.push(newArr[23] * 10); // plants 
    totalCubicArr.push(newArr[24] * 30); // marble/glass top 
    totalCubicArr.push(newArr[25] * 9); // PCs
    totalCubicArr.push(newArr[26] * 9); // printers 
    totalCubicArr.push(newArr[27] * 9); // equipment 
    totalCubicArr.push(newArr[28] * 3); // PBO cartons  
    totalCubicArr.push(newArr[29] * 6); // 3.0 sec crates   
    totalCubicArr.push(newArr[30] * 4); // 2.2 cartons   
    totalCubicArr.push(newArr[31] * 20); // gondolas   
    totalCubicArr.push(newArr[32] * 40); // appliances   
    totalCubicArr.push(newArr[33] * 55); // rolling carts    
    totalCubicArr.push(newArr[34] * 80); // modular stations    
    totalCubicArr.push(newArr[35] * 200); // MISC    

    var cubicFeet = totalCubicArr.reduce((a, b) => a + b, 0);
    var totalTrucks = (cubicFeet / 800);

    totalCubicFeetDisplay.innerHTML = 'Total Cubic Feet: ' + cubicFeet;    
    totalTrucksDisplay.innerHTML = 'Total Trucks: ' + totalTrucks.toFixed(2);
}









