const apiKey = "PASTE_YOUR_REAL_API_KEY_HERE";

const getWeather = async () => {

    const city = document.getElementById("city").value;

    if (!city) {
        alert("Enter city name");
        return;
    }

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
        );

        const data = await response.json();

        if (data.cod !== "200") {
            alert("City not found or API issue");
            return;
        }

        const labels = data.list.slice(0, 8).map(item => item.dt_txt);
        const temps = data.list.slice(0, 8).map(item => item.main.temp);

        const ctx = document.getElementById("weatherChart").getContext("2d");

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: "Temperature (°C)",
                    data: temps
                }]
            }
        });

    } catch (error) {
        console.log(error);
        alert("Something went wrong");
    }
};
