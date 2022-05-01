const _numberFields = [ 'coffee_amount', 'water_amount', 'water_temp', 'steep_time', 'milk_amount', 'milk_heat_time' ];

module.exports = (ratingObject) => {
    for (let k in ratingObject) {
        if (_numberFields.includes(k)) {
            ratingObject[k] = parseInt(ratingObject[k]);
        }
    }
}