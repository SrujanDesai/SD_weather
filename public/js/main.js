const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const temp_status = document.getElementById('temp_status');
const temp_real_val = document.getElementById('temp_real_val');
const datahide = document.querySelector('.middle_layer');

const getInfo = async (event) => {
    event.preventDefault();
    let cityVal = cityName.value;

    if (cityVal === "") {
        city_name.innerText = `Please write the name befor search`;
        datahide.classList.add('data_hide');
    } else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=1292bd9533b548bb1ce26ecfe36bd431`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];

            city_name.innerText = `${arrData[0].name} , ${arrData[0].sys.country}`;
            temp_real_val.innerText = Math.round((arrData[0].main.temp) - 273.15);
            // temp_status.innerText =arrData[0].weather[0].main;
            const tempStatus = arrData[0].weather[0].main;

            if (tempStatus == "Sunny") {
                temp_status.innerHTML =
                    "<i class='fa-solid fa-sun' style='color: #eccc68'></i>";
            } else if (tempStatus == "Clouds") {
                temp_status.innerHTML =
                    "<i class='fa-solid fa-cloud' style='color: #0097e6'></i>";
            } else if (tempStatus == "Rain") {
                temp_status.innerHTML =
                    "<i class='fa-solid fa-cloud-rain' style='color: #a4b0be'></i>";
            } else if (tempStatus == "Smoke") {
                temp_status.innerHTML =
                    "<i class='fa-sharp fa-solid fa-smog' style='color: #5c6f82'></i>";
            } else if (tempStatus == "Haze") {
                temp_status.innerHTML =
                    "<i class='fa-sharp fa-solid fa-smog' style='color: #9aa6f2'></i>";
            } else {
                temp_status.innerHTML =
                    "<i class='fa-solid fa-sun' style='color: #eccc68'></i>";
            }
            datahide.classList.remove('data_hide');


        } catch {
            city_name.innerText = `Please enter city name properly`;
            datahide.classList.add('data_hide');
        }
    }
}

submitBtn.addEventListener('click', getInfo);