function divide(a, b) {
    try {
        if (b === 0) {
            throw new Error("Divide by 0 ist not possible.");
        }
        let result = a / b;
        console.log(`Result = ${result}`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
    } finally {
        console.log('Function divide is finished.');
    }
}

divide(10, 2);