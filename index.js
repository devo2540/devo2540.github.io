
// increment one function
function plus(el) {
    let qty = +el.children[0].innerHTML;
    qty ++;
    el.children[0].innerHTML = qty;
    totalCubicFeet();
}

// decrement one function
function minus(el) {
    let qty = +el.children[0].innerHTML;
    if (qty != 0) {
        qty--;
        el.children[0].innerHTML = qty;
    }
    totalCubicFeet();
}

// add all divs to window
document.body.onload = addElements();

function addElements() {
    // cube titles
    var cubeNames = [
        'Desk',
        'L-Shape',
        'U-Shape',
        'Credenza',
        'Sm. Bookcase',
        'Lg. Bookcase',
        'Steel Shelving',
        'Chairs',
        'Chairs',
        'Sm Table',
        'Lg Table',
        'Conf Table',
        'Comp Table',
        'Copier',
        'Vertical',
        'Vertical',
        'Lateral',
        'Lateral',
        'Storage Cabinet',
        'Pictures',
        'Plants',
        'PCs',
        'Add Monitors',
        'Printers',
        'Fridge',
        'Microwave',
        'Rolling Carts',
        'PBO',
        'Crates',
        'Crates'
    ];

    // create flex-container div 
    var containerDiv = document.createElement('DIV');
        containerDiv.setAttribute('class', 'flex-container');
        document.body.appendChild(containerDiv);

    // loop through cubeNames array    
    for (i = 0; i < cubeNames.length; i++) {
        // create div for index in array
        var newDiv = document.createElement('DIV');
            newDiv.setAttribute('id', cubeNames[i] + 'Cube');
            newDiv.setAttribute('class', 'flex-child');

        // create title 
        var h3 = document.createElement('H6');
            h3.innerHTML = cubeNames[i];

        // create quantity div 
        var qtyDiv = document.createElement('DIV');
            qtyDiv.setAttribute('id', 'qty' + i);
            qtyDiv.setAttribute('class', 'count');

        // create p element 
        var p = document.createElement('P');
            p.setAttribute('class', 'total');
            p.innerHTML = '0';

        // create minus input 
        var minusInput = document.createElement('INPUT');
            minusInput.setAttribute('type', 'button');
            minusInput.setAttribute('value', ' - ');
            minusInput.setAttribute('class', 'minus');
            minusInput.setAttribute('onclick', 'minus(this.parentNode)');

        // create add input
        var addInput = document.createElement('INPUT');
            addInput.setAttribute('type', 'button');
            addInput.setAttribute('value', ' + ');
            addInput.setAttribute('class', 'plus');
            addInput.setAttribute('onclick', 'plus(this.parentNode)');

        // append title to newDiv
        newDiv.appendChild(h3);
        // append qty div to newDiv
        newDiv.appendChild(qtyDiv);
        // append p to qtyDiv
        qtyDiv.appendChild(p);
        // append minus button to qtyDiv
        qtyDiv.appendChild(minusInput);
        // append plus button to qtyDiv
        qtyDiv.appendChild(addInput);
        
        // append newDiv to containerDiv
        containerDiv.appendChild(newDiv);
    }

    // // create submit button
    // var saveBtn = document.createElement('INPUT');
    //     saveBtn.setAttribute('type', 'button');
    //     saveBtn.setAttribute('class', 'saveBtn')
    //     saveBtn.setAttribute('value', 'SAVE');
    //     saveBtn.setAttribute('onclick', 'getValues()');

    // // append saveBtn to document
    // document.body.appendChild(saveBtn);
    
    // create calculate button
    // var calculateBtn = document.createElement('INPUT');
    //     calculateBtn.setAttribute('type', 'button');
    //     calculateBtn.setAttribute('class', 'saveBtn');
    //     calculateBtn.setAttribute('value', 'CALCULATE');
    //     calculateBtn.setAttribute('onclick', 'totalCubicFeet()');
    
    // append calculate button to document
        // document.body.appendChild(calculateBtn);

    // create total cubic feet display
    var cubicFeetDisplay = document.createElement('P');
        cubicFeetDisplay.setAttribute('id', 'cubicFeetDisplay');
    
        document.body.appendChild(cubicFeetDisplay);
    
    // create total trucks display
        var trucksDisplay = document.createElement('P');
            trucksDisplay.setAttribute('id', 'trucksDisplay')
    
        document.body.appendChild(trucksDisplay);

}

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
    // console.log(newArr);

    totalCubicArr = [];

    totalCubicArr.push(newArr[0] * 10); // desk 
    totalCubicArr.push(newArr[1] * 10); // l-shape
    totalCubicArr.push(newArr[2] * 10); // u-shape
    totalCubicArr.push(newArr[3] * 40); // credenza
    totalCubicArr.push(newArr[4] * 20); // sm. bookcase
    totalCubicArr.push(newArr[5] * 30); // lg. bookcase 
    totalCubicArr.push(newArr[6] * 30); // steel shelving
    totalCubicArr.push(newArr[7] * 30); // chairs
    totalCubicArr.push(newArr[8] * 10); // sm table
    totalCubicArr.push(newArr[9] * 10); // sm table
    totalCubicArr.push(newArr[10] * 45); // lg table/work table?????
    totalCubicArr.push(newArr[11] * 80); // conf table
    totalCubicArr.push(newArr[12] * 35); // comp table 
    totalCubicArr.push(newArr[13] * 20); // copier 
    totalCubicArr.push(newArr[14] * 15); // 2/3 sm vertical 
    totalCubicArr.push(newArr[15] * 25); // 4/5 lg vertical 
    totalCubicArr.push(newArr[16] * 20); // 2/3 sm lateral 
    totalCubicArr.push(newArr[17] * 30); // 4/5 lg lateral 
    totalCubicArr.push(newArr[18] * 30); // storage cabinet 
    totalCubicArr.push(newArr[19] * 5); // pictures/whiteboards
    totalCubicArr.push(newArr[20] * 10); // plants 
    totalCubicArr.push(newArr[21] * 9); // PCs 
    totalCubicArr.push(newArr[22] * 9); // monitors 
    totalCubicArr.push(newArr[23] * 9); // printers 
    totalCubicArr.push(newArr[24] * 9); // Fridge 
    totalCubicArr.push(newArr[25] * 9); // microwave
    totalCubicArr.push(newArr[26] * 55); // rolling carts
    totalCubicArr.push(newArr[27] * 3); // PBO 
    totalCubicArr.push(newArr[28] * 9); // crates
    totalCubicArr.push(newArr[29] * 9); // crates

    var cubicFeet = totalCubicArr.reduce((a, b) => a + b, 0);
    var totalTrucks = (cubicFeet / 800);

    // console.log(totalCubicArr);
    // console.log('Total Cubic Feet: ' + cubicFeet);
    // console.log('Total Trucks: ' + totalTrucks.toFixed(1));

    totalCubicFeetDisplay.innerHTML = 'Total Cubic Feet: ' + cubicFeet;    
    totalTrucksDisplay.innerHTML = 'Total Trucks: ' + totalTrucks.toFixed(2);
}

///////////////////////////////////////////////////////////////////////

// CUBIC FEET
// desks: 40
// credenza: 40
// map file: 40

// executive unit: 80

// security desk: 60

// hutch: 50
// drafting table: 50

// sm bookcase: 20

// lg bookcase: 30
// metal shelving: 30

// map file: 40
// chairs: 10
// sm table: 10
// work table: 45
// conf table: 80
// comp table: 35
// copiers: 20
// sofa: 80
// 2 / 3 vertical file: 15
// 4 / 5 vertical file: 25
// 2 / 3 lateral file: 20
// 4 / 5 lateral file 30
// storage cabinet: 30
// pictures / white boards: 5
// plants: 10
// marble / glass top: 30
// pc units: 9
// printers: 9
// equipment: 9
// pbo cartons: 3
// 3.0 security crates: 6
// 2.2 cartons: 4
// gondolas: 20
// appliances: 40
// book / machine carts: 55
// modular stations: 80






