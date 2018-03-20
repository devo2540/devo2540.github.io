// hide div 

function showTable() {
    var hideDiv = document.querySelector('.flex-container');
    var hideBtn = document.querySelector('#tableBtn');
    var hideCubicFeet = document.getElementById('cubicFeetDisplay');
    var hideTrucks = document.getElementById('trucksDisplay');
    var inventoryBtn = document.getElementById('inventoryBtn');
        
    hideDiv.classList.add('hidden');
    hideBtn.classList.add('hidden');
    hideCubicFeet.classList.add('hidden');
    hideTrucks.classList.add('hidden');
    inventoryBtn.classList.remove('hidden');
}

function showInventory() {
    var hideTable = document.getElementById('printable');

    hideTable.classList.add('hidden');

    var hideDiv = document.querySelector('.flex-container');
    var hideBtn = document.querySelector('#tableBtn');
    var hideCubicFeet = document.getElementById('cubicFeetDisplay');
    var hideTrucks = document.getElementById('trucksDisplay');
    var inventoryBtn = document.getElementById('inventoryBtn');

    hideDiv.classList.remove('hidden');
    hideBtn.classList.remove('hidden');
    hideCubicFeet.classList.remove('hidden');
    hideTrucks.classList.remove('hidden');
    inventoryBtn.classList.add('hidden');
}

