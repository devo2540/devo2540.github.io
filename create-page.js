// add all divs to window
document.body.onload = addElements();

function addElements() {
    // cube titles
    var cubeNames = [
        'Desks',
        'L Shape',
        'U Shape',
        'Hutch',
        'Credenza',
        'Sm. Bookcase',
        'Lg. Bookcase',
        'Metal Shelving',
        'Drafting Table',
        'Map File',
        'Chairs',
        'Sofa',
        'Sm. Table',
        'Lg. Table',
        'Conf. Table',
        'Comp. Table',
        'Copier',
        'Printers',
        '2/3 Vertical',
        '4/5 Vertical',
        '2/3 Lateral',
        '4/5 Lateral',
        'Storage Cabinet',
        'Pictures/WB',
        'Plants',
        'Marble/Glass Top',
        'PCs',
        'Equipment',
        'PBO Cartons',
        '3.0 Sec. Crates',
        '2.2 Cartons',
        'Gondolas',
        'Rolling Carts',
        'Modular Stations',
        'TV Box',
        'Fridge',
        'Microwave',
        'Misc.'
    ];

    // create flex-container div 
    var containerDiv = document.createElement('DIV');
    containerDiv.setAttribute('class', 'flex-container');
    document.body.appendChild(containerDiv);

    // loop through cubeNames array    
    for (i = 0; i < cubeNames.length; i++) {
        // create div for index in array
        var newDiv = document.createElement('DIV');
        newDiv.setAttribute('id', cubeNames[i]);
        newDiv.setAttribute('class', 'flex-child');

        // create div to hold title and count 
        var plusDiv = document.createElement('DIV');
        plusDiv.setAttribute('class', 'plusDiv');
        plusDiv.setAttribute('onclick', 'plus(this.querySelector(".total"))');

        // create hot corner 
        var hotCorner = document.createElement('DIV');
        hotCorner.setAttribute('class', 'hotCorner');
        hotCorner.setAttribute('onclick', 'minus(this.parentNode.querySelector(".total"))');

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
    
        newDiv.appendChild(plusDiv);
        plusDiv.appendChild(h3);
        plusDiv.appendChild(qtyDiv);
        qtyDiv.appendChild(p);
        newDiv.appendChild(hotCorner);
        
        containerDiv.appendChild(newDiv);
    }

    // create total cubic feet display
    var cubicFeetDisplay = document.createElement('P');
    cubicFeetDisplay.setAttribute('id', 'cubicFeetDisplay');
    cubicFeetDisplay.setAttribute('class', 'totalDisplay');

    document.body.appendChild(cubicFeetDisplay);

    // create total trucks display
    var trucksDisplay = document.createElement('P');
    trucksDisplay.setAttribute('id', 'trucksDisplay')
    trucksDisplay.setAttribute('class', 'totalDisplay');

    document.body.appendChild(trucksDisplay);
}