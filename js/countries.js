
const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}
loadCountries();

const displayCountries = countries => {

    /* for (const country of countries) {
        console.log(country);
     }*/

    //forEach, for of এর কাজ করবে কিন্তু রিটার্ন করবে না। 
    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {
        console.log(country);

        // নতুন div create করা হয়েছে 
        const div = document.createElement('div');
        div.classList.add('country');

        const h3 = document.createElement('h3');
        h3.innerText = country.name;
        div.appendChild(h3);

        const p = document.createElement('p');
        p.innerText = country.capital;
        div.appendChild(p);

        // আগের div এর সাথে নতুন div যোগ করা হয়েছে। 
        countriesDiv.appendChild(div);


    });
}

