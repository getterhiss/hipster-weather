

function addFunk(currently) {

    if (currently.precipProbability > 0.7 && currently.precipType === "rain") {
        currently.summary = `Better bring the rain coat, coz it is rainy and ${currently.temperature} degrees out there.`;
    } else if (currently.temperature < parseInt(23)) {
        currently.summary = `${currently.temperature} degrees! Is this even possible !?! Better stay in today..`
    } else if (currently.temperature < parseInt(40)) {
        currently.summary = `Wear your hat yo, it's fu@#%@ cold outside. It's a nippy ${currently.temperature} degrees!`;
    } else if (currently.temperature < parseInt(60))  {
        currently.summary = `Sweater weather again, get your coat on too, yo. Just about ${currently.temperature} degrees out there`;
    };
    
};

module.exports = addFunk;