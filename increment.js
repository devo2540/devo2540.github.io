
// increment one function
function plus(el) {
    let qty = +el.innerHTML;
    qty++;
    el.innerHTML = qty;
    totalCubicFeet();
}

// decrement one function
function minus(el) {
    let qty = +el.innerHTML;
    if (qty != 0) {
        qty--;
        el.innerHTML = qty;
    }
    totalCubicFeet();
}