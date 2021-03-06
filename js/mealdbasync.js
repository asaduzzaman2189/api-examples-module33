

const searchFood = async () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    //clear data
    searchField.value = '';

    if (searchText == '') {
        // eta korle faka search korle ar kichu dekhabena.
        //homework- please write something to display
    }
    else {
        //load data
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;


        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => displaySearchResult(data.meals));

        //error dekhate caile try er vitore dite hobe ar vul hole catch e error dekhave
        try {
            const res = await fetch(url);
            const data = await res.json();
            displaySearchResult(data.meals);
        }
        catch (error) {
            console.log(error);
        }

    }
}

const displaySearchResult = meals => {
    const searchResult = document.getElementById('search-result');

    //1. search clear item- it's not recommended
    // searchResult.innerHTML = '';

    //2. search clear item
    searchResult.textContent = '';

    //home work
    // if (meals.length == 0) {
    // searchResult.innerHTML = `
    // <h3 class="text-center">Oops!Nothing found...</h3>
    // `;

    meals.forEach(meal => {
        // console.log(meal);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick="loadMealDetail(${meal.idMeal})" class="card h-100">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
             <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
            </div>
         </div>
        `;
        searchResult.appendChild(div);
    });
}

const loadMealDetail = async mealId => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;

    // fetch(url)
    //     .then(res => res.json())
    //     .then(data => displayMealDetail(data.meals[0]));

    // or 
    const res = await fetch(url);
    const data = await res.json();
    displayMealDetail(data.meals[0]);
}

const displayMealDetail = meal => {
    // console.log(meal);
    const mealDetails = document.getElementById('meal-details');

    //clear korle sekhane shudhu ektai display korbe, clear na korle sobgulo serial onujayi thakbe eksathe. 
    mealDetails.textContent = '';

    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
            <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
        </div>
    `;
    mealDetails.appendChild(div);
}

