
// increment one function
function plus(el) {
    let qty = +el.children[0].innerHTML;
    qty++;
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