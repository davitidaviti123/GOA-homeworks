const car = {
    Brand: "Mercedes",
    Model: "C300",
    Year: 2005,
    color: "black",
    engine: "6 cylinder - high quality",
    allInfo: function(){
        const carParts =car.Brand + ' ' + car.Model + ' ' + car.Year + ' ' + car.color + ' ' + car.engine
        return carParts
    }
}
allInfo()