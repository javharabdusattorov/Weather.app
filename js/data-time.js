
dataTime()
function dataTime() {
    let dataHTML = `
        <span class="ps-2">/</span>
    `
    let clockHTML = `
        <span class="clockS ps-5">:</span>
    `
    let data = new Date()
    let year = data.getFullYear()
    let month = data.getMonth() + 1
    let day = data.getDate()
    let hour = data.getHours()
    let minute = data.getMinutes()
    let second = data.getSeconds()

    elYear.text(year);
    elMonth.text(month);
    elDay.text(day);

    elHour.text(hour);
    elMinute.text(minute);
    elSecond.text(second);
    setTimeout( () => dataTime(), 1000);

    if(month <= 9) {
        elMonth.text(`0${month}`);
    }
    if(day <= 9) {
        elDay.text(`0${day}`);
    }
    if(hour <= 9) {
        elHour.text(`0${hour}`);
    }
    if(minute <= 9) {
        elMinute.text(`0${minute}`);
    }
    if(second <= 9) {
        elSecond.text(`0${second}`);
    }

    if((hour >= 0 && hour < 5) || (hour >= 20 && hour <= 23)) {
        $('.moon-or-sun i').attr('class', 'fas fa-moon');
        $('.moon-or-sun i').css('color', 'darkblue');
    } else if(hour >= 5 && hour < 20) {
        $('.moon-or-sun i').attr('class', 'fas fa-sun');
        $('.moon-or-sun i').css('color', 'goldenrod');
    }
    

    elYear.append(dataHTML);
    elMonth.append(dataHTML);
    elHour.append(clockHTML);
    elMinute.append(clockHTML);
}