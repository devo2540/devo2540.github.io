function removeTable() {
    var table = document.querySelector('#printable');
    if (table) {
        document.body.removeChild(table);
    }
}

function addTable() {
    removeTable();

    // create container DIV
    var printable = document.createElement('DIV');
    printable.setAttribute('id', 'printable');

        var unitColumn = document.createElement('DIV');
        unitColumn.setAttribute('id', 'unitColumn');
        unitColumn.setAttribute('class', 'containerColumn');

            var unitColumnHeader = document.createElement('H3');
            unitColumnHeader.setAttribute('class', 'columnHeader')
            unitColumnHeader.innerHTML = "Unit";

        var unitCountColummn = document.createElement('DIV');
        unitCountColummn.setAttribute('id', 'unitCountColummn');
        unitCountColummn.setAttribute('class', 'containerColumn');
    
            var unitCountColummnHeader = document.createElement('H3');
            unitCountColummnHeader.setAttribute('class', 'columnHeader')
            unitCountColummnHeader.innerHTML = "Unit Count";


        var unitCubicFeetColumn = document.createElement('DIV');
        unitCubicFeetColumn.setAttribute('id', 'unitCubicFeetColumn');
        unitCubicFeetColumn.setAttribute('class', 'containerColumn');
    
            var unitCubicFeetColumnHeader = document.createElement('H3');
            unitCubicFeetColumnHeader.setAttribute('class', 'columnHeader')
            unitCubicFeetColumnHeader.innerHTML = "Cubic Feet";

    document.body.appendChild(printable);

    printable.appendChild(unitColumn);
        unitColumn.appendChild(unitColumnHeader);
    
    printable.appendChild(unitCountColummn); 
        unitCountColummn.appendChild(unitCountColummnHeader);
    
    printable.appendChild(unitCubicFeetColumn);  
    unitCubicFeetColumn.appendChild(unitCubicFeetColumnHeader);  
    
    var units = [...document.querySelectorAll('.flex-child > h6')];
    for (unit = 0; unit < units.length; unit++) {
        var unitDiv = document.createElement('DIV');
        unitDiv.setAttribute('class', 'unitDiv');
        unitDiv.innerHTML = units[unit].innerHTML;
        unitColumn.appendChild(unitDiv);
    }

    var unitCount = [...document.querySelectorAll('.total')];
    for (singleUnitCount = 0; singleUnitCount < unitCount.length; singleUnitCount++) {
        var unitCountDiv = document.createElement('DIV');
        unitCountDiv.setAttribute('class', 'unitDiv');
        unitCountDiv.innerHTML = unitCount[singleUnitCount].innerHTML;
        unitCountColummn.appendChild(unitCountDiv);
    }

    
    for (cubic = 0; cubic < totalCubicArr.length; cubic++) {
        var unitCubicFeetDiv = document.createElement('DIV');
        unitCubicFeetDiv.setAttribute('class', 'unitDiv');
        unitCubicFeetDiv.innerHTML = totalCubicArr[cubic];
        unitCubicFeetColumn.appendChild(unitCubicFeetDiv);
    }

    
    
    var totalDisplays = [...document.querySelectorAll('.totalDisplay')];
    for (total = 0; total < totalDisplays.length; total++) {
        var totalDiv = document.createElement('DIV');
        // totalDiv.setAttribute('class', 'unitDiv');
        totalDiv.setAttribute('class', 'totalDiv');
        totalDiv.style.fontWeight = 'bold';
        totalDiv.innerHTML = totalDisplays[total].innerHTML;
        unitColumn.appendChild(totalDiv);
    }
    
 


    showTable();
}



    





