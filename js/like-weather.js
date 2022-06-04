
function likedWeather() {

    if (!isLiked()) {
        console.log(`NEW bookmark`, currentWeather.title);
        bookmarks.push({ ...currentWeather });
    }
    else {
        console.log(`REMOVING bookmark`, currentWeather.title);
        const index = bookmarks.findIndex( weather => weather.title === currentWeather.title);
        bookmarks.splice(index, 1);
    }

    toggleBookmarkBtnClass()

    localStorage.setItem('bookmark', JSON.stringify(bookmarks));
}

$('.second-page').hide()
function goToLikedWeather() {
    // $('body').css('overflow', 'auto');
    $('body').css('background', 'linear-gradient(110deg, rgb(0 113 226) 50%, rgb(229 229 0) 50%)')
    elLIKEContainer.html("");

     bookmarks.forEach(async weather => {
        const response = await fetch(`${API_URL}goweather.herokuapp.com/weather/${weather.title}`);
        const responseJSON = await response.json()
            
        weather.forecast = responseJSON.forecast;
        renderLikedWeather()
    })

    $('.first-page').slideUp(300);
    $('.second-page').slideDown(300);
}

function goToBack() {
    // $('body').css('overflow', 'hidden');
    $('.second-page').slideUp(300);
    $('.first-page').slideDown(300);
}

function renderLikedWeather() {
    elLIKEContainer.html("");
    bookmarks.forEach(weather => {
            let nameHtml = $(`
                <h4 class="city-name mt-5">${weather.title}</h4>
            `)
            elLIKEContainer.append(nameHtml);

             weather.forecast.forEach(dayForecast => {
                let html = $(`
                <div class="col-lg-3 col-sm-7 weather__card d-flex flex-column justify-content-center mt-1 mb-1">
                    <h5 class="weather__card-days text-center">Day: ${dayForecast.day}</h5>
                    <h5 class="weather__card-tempeature mt-3">Temperature: ${dayForecast.temperature}</h5>
                    <h5 class="weather__card-wind">Wind: ${dayForecast.wind}</h5>
                </div>
                `)
                elLIKEContainer.append(html);
            })
    })
}

function isLiked() {
    return bookmarks.some(weather => weather.title === currentWeather.title);
}