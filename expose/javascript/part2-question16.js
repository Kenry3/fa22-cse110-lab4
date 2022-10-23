let statistic = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};
for(const cars in statistic) {
    if(cars.indexOf('r') == 0 || statistic[cars] % 2 != 0) 
        console.log(statistic[cars]);
}
