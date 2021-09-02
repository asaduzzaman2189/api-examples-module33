
//display none message
document.getElementById('error-message').style.display = 'none';

const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    //clear data
    searchField.value = '';

    // empty input nile 
    if (searchText == '') {
        // eta korle faka search korle ar kichu dekhabena. 
        //homework- please write something to display
    }
    else {
        //load data- এখানে 1 এর জায়গায় 91 দেয়া আছে error দেখানোর জন্য আর .catch(error => displayError(error)) যোগ করা হয়েছে শেষে। 
        const url = `https://www.themealdb.com/api/json/v1/91/search.php?s=${searchText}`;

        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResult(data.meals))
            .catch(error => displayError(error));
    }
}

const displayError = error => {
    document.getElementById('error-message').style.display = 'block';
}

const displaySearchResult = meals => {
    const searchResult = document.getElementById('search-result');

    //1. search clear item- it's not recommended
    // searchResult.innerHTML = '';

    //2. search clear item
    searchResult.textContent = '';

    // if (meals.length == 0) {
    // searchResult.innerHTML = `
    // <h3 class="text-center">Oops!Nothing found...</h3>
    // `;
    //home work


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

const loadMealDetail = mealId => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetail(data.meals[0]));
}

const displayMealDetail = meal => {
    console.log(meal);
    const mealDetail = document.getElementById('meal-details');
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
    mealDetail.appendChild(div);
}

