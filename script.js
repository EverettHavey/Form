function doFV() {
    // 1. Get Input Values
    let p1 = parseFloat(document.getElementById("principle").value);
    let p2 = parseFloat(document.getElementById("principle2").value);
    let r = parseFloat(document.getElementById("annualrate").value);
    let n = parseInt(document.getElementById("periods").value);
    let y = parseInt(document.getElementById("years").value);
    
    let outputSpan = document.getElementById("output");
    let errorSpan = document.getElementById("error-message");

    // 2. Clear previous states
    errorSpan.textContent = "";
    outputSpan.textContent = "";

    // 3. Validation: Check if Principle amounts match
    if (p1 !== p2) {
        errorSpan.textContent = "Principle amounts do not match. Please re-enter.";
        document.getElementById("principle").value = "";
        document.getElementById("principle2").value = "";
        document.getElementById("principle").focus();
        return; // Stop execution
    }

    // 4. Prevent NaN: Ensure all values are valid numbers
    if (isNaN(p1) || isNaN(r) || isNaN(n) || isNaN(y)) {
        outputSpan.textContent = "Please fill all fields correctly.";
        return;
    }

    // 5. PROCESSING
    let result = computeFutureValue(p1, r, n, y);

    // 6. OUTPUT with formatting
    outputSpan.textContent = `$${result.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
}

function computeFutureValue(p, r, n, y) {
    let er = r / n; 
    let totalperiods = n * y;
    return p * Math.pow(1 + er, totalperiods);
}

// get and display the current year
document.getElementById("theyear").textContent = new Date().getFullYear();