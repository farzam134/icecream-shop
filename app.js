let generateBtn = document.getElementById("generateBill");
generateBtn.addEventListener("click", () => {
    let price = 0;

    let flavor = document.getElementById("flavorName").value.toLowerCase();
    let scoops = document.getElementById("scoopNum").value;
    let mode = document.getElementById("mode").value.toLowerCase();

    // Check if all fields are filled
    if (!flavor || !scoops || !mode) {
        alert("All fields are required!");
        return; // Stop execution if any field is empty
    }

    function calculateBill() {
        // Flavor Price
        if (flavor === "mango") {
            price = 150;
        } else if (flavor === "chocolate") {
            price = 190;
        } else if (flavor === "vanilla") {
            price = 100;
        } else {
            alert("This flavor is not available.");
            return false; // Stop execution if flavor is not available
        }

        // Mode validation
        if (mode === "cup" || mode === "cone") {
        
        } else {
            alert("Invalid mode! Please select either cup or cone.");
            return false; // Stop execution if mode is invalid
        }

        // Scoop validation , check if it's not a valid number, is negative, zero, or contains decimal
        if (!(scoops > 0 && scoops % 1 === 0)) {
            alert("Please enter a positive  number for scoops!");
            return false;
        }
        // Multiply by number of scoops
        price *= scoops; // Convert scoops to integer
        return true; // Indicate successful calculation
    }

    // Call the function to calculate the bill
    const isValid = calculateBill();

    // Only display output if all validations pass
    if (isValid) {
        document.getElementById("output").innerHTML =
            `Selected Flavor: ${flavor}<br>
             Number of Scoops: ${scoops}<br>
             Mode: ${mode}<br>
             Total Bill: ${price}`;
    }
});