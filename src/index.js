import './styles.css';
import fetchCountries from './js/fetchCountries';
import countryCard from './js/templates/country-card.hbs';
import countriesList from './js/templates/countriesList.hbs';
import debounce from 'lodash.debounce';
import {onSpecificNotification, errorNotification} from './js/PNotify'

const refs = {
    cardContainer: document.querySelector('.card-container'),
    inputEl: document.querySelector('.js-input')
}

const renderCountries = (country, template) => {
    const markup = template(country);
    refs.cardContainer.innerHTML = markup
}

const clearContainer = () => {
    refs.cardContainer.innerHTML = ""
}

refs.inputEl.addEventListener('input', debounce(onSearch, 500))

function onSearch(evt) {
    const query = evt.target.value;

    fetchCountries(query)
        .then(data => {
            if (data.length > 10) {
                onSpecificNotification();
                clearContainer()
            }
            else if (data.length >= 2 && data.length < 10) {
                renderCountries(data, countriesList)
            }
            else if (data.length === 1) {
                renderCountries(data, countryCard)
            }
        })
        .catch(data => 
            errorNotification()
        )
        .finally(clearContainer())
}