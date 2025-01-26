const priceAndBills = (price,bills) =>{
    const bills1 = 5
    if (bills == 0){
        return bills1 + price
    }else {
        return price + bills
    }
}
console.log(priceAndBills(10,20))