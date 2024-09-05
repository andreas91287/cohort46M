function getRandomCocktail() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then(response => response.json())
    .then(data => {
        const cocktail = data.drinks[0];
        const cocktailName = cocktail.strDrink;
        const cocktailImage = cocktail.strDrinkThumb;
        const cocktailInstruction = cocktail.strInstructions;

        document.getElementById('cocktail-image').src = cocktailImage;
        document.getElementById('cocktail-description').textContent = `Name: ${cocktailName}. Beschreibung: ${cocktailInstruction}`;
    })
    .catch(error => {
        console.log('Es ist ein Fehler bei der Zubereitung der Cocktail aufgetretten!', error);
    })
}

getRandomCocktail();