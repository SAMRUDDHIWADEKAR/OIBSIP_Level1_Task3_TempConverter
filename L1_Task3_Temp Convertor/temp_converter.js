function convert() {
    // Get the user input
    var tempInput = document.getElementById("temp-input").value;
    var unitSelect = document.getElementById("unit-select");

    // Validate the input
    if (isNaN(tempInput)) {
        alert("Please enter a valid number for the temperature.");
        return;
    }

    // Convert the temperature based on the selected unit
    if (unitSelect.value === "celsius") {
        // Convert from Celsius to Fahrenheit
        var fahrenheit = (parseFloat(tempInput) * 1.8) + 32;
        // Display the result
        document.getElementById("result").innerHTML = tempInput + " &#8451; = " + fahrenheit.toFixed(2) + " &#8457;";
    } else {
        // Convert from Fahrenheit to Celsius
        var celsius = (parseFloat(tempInput) - 32) / 1.8;
        // Display the result
        document.getElementById("result").innerHTML = tempInput + " &#8457; = " + celsius.toFixed(2) + " &#8451;";
    }
}