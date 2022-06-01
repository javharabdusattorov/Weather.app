elInput.keyup(function(evt) {
    let code = evt.which;
    if(code === 13) {
        evt.preventDefault()
        defaultCity = elInput.val()
        elInput.val("");
        elInput.attr("placeholder", `${defaultCity}`);
        searchFetch();
    }
})

searchFetch();
function searchFetch() {
    startLoader()
    fetch(`${API_URL}goweather.herokuapp.com/weather/${defaultCity}`)
        .then(res => res.json())
        .then(data => {
            currentWeather.forecast = data.forecast;
            currentWeather.title = defaultCity;
            endLoader()

            $('.temperature').text(data.temperature);
            $('.wind').text(`Wind: ${data.wind}`);
            $('.description').text(`Description: ${data.description}`);
            $('.city__name').text(`${defaultCity.toUpperCase()}`);

            if(data.description == '') {
                reflash()
            }
            renderWeather()
        })
}

function renderWeather() {
    elCardContainer.html("");
    currentWeather.forecast.forEach( (weather, index) => {
        let html = $(`
            <div class="col-lg-3 weather__card d-flex flex-column justify-content-center" data-id="${index}">
                <h5 class="weather__card-days text-center">Day: ${weather.day}</h5>
                <h5 class="weather__card-tempeature mt-3">Temperature: ${weather.temperature}</h5>
                <h5 class="weather__card-wind">Wind: ${weather.wind}</h5>
            </div>
        `)

        elCardContainer.append(html);
    })

    toggleBookmarkBtnClass()
}

function reflash() {
    elInput.val("");
    elInput.attr("placeholder", 'Enter your CITY and see the weather');
    $('.temperature').text('0 °C');
    $('.wind').text(`Wind: 0 km/h`);
    $('.description').text(`Description:`);
    $('.city').text(`City: `);
    
    var toastLiveExample = document.getElementById('liveToast')
    var toast = new bootstrap.Toast(toastLiveExample)
    toast.show()
}

function toggleBookmarkBtnClass() {
    const likedClass = isLiked() ? "red":  "white";
    $('.likedWeather i').css('color', likedClass);
}