const submitBtn =document.getElementById("submitBtn");
const cityName =document.getElementById("cityName");
const city_name = document.getElementById("city_name");
const temp_status = document.getElementById("temp_status");
const temp = document.getElementById("temp");
const dataHide = document.querySelector(".data_hide");


const getInfo = async(event)=>{
    // alert("hi");

    event.preventDefault();
    let city = cityName.value;
    if(city=== ""){
        city_name.innerHTML = "plz write the city name before search";
        dataHide.classList.add("data_hide");
        
    }
    else{
        try{

            let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8cea158b47be9098c17a2de0bbe47b04`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];

            city_name.innerHTML= `${arrData[0].name} , ${arrData[0].sys.country}`
            temp_real_val.innerHTML= Math.round((arrData[0].main.temp - 273)*100)/100;
            // temp_status.innerHTML = arrData[0].weather[0].main;
            console.log(arrData[0].main.temp);


// sunny aur cloudy batane ka code
            const temp_mod= arrData[0].weather[0].main;

            if(temp_mod === "Clear"){
                temp_status.innerHTML = "<i class = 'fas fa-sun' style = 'color:#eccc68;'> </i>"
            }else if(temp_mod === "Clouds"){
                temp_status.innerHTML = "<i class = 'fas fa-cloud' style = 'color:#f1f2f6;'> </i>"
            }else if(temp_mod === "Rain"){
                temp_status.innerHTML = "<i class = 'fas fa-rain' style = 'color:#a4b0be;'> </i>"
            }else{
                
                temp_status.innerHTML = "<i class = 'fas fa-cloud' style = 'color:#f1f2f6;'> </i>"
            }

        dataHide.classList.remove("data_hide");


        }catch{
            city_name.innerHTML = "plz write the city name properly";
        dataHide.classList.add("data_hide");

        }

    }
}

submitBtn.addEventListener("click",getInfo);