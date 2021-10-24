import React, { useState } from 'react';
import { create } from '../services/api'

const CreateRating = () => {
    const initialRatingState = {
        coffee_amount: 0,
        coffee_brand: "",
        coffee_roast_type: "",
        brew_method: "",
        grind_size: "",
        water_amount: 0,
        water_temp: 0,
        steep_time: 0,
        milk_amount: 0,
        milk_heat_time: 0,
        coffee_made_date: ""
    };
    const [rating, setRating] = useState(initialRatingState);
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setRating({ ...rating, [name]: value });
    };

    const saveRating = async () => {
      var ratingData = {
        coffee_amount: parseFloat(rating.coffee_amount),
        coffee_brand: rating.coffee_brand,
        coffee_roast_type: rating.coffee_roast_type,
        brew_method: rating.brew_method,
        grind_size: rating.grind_size,
        water_amount: parseFloat(rating.water_amount),
        water_temp: parseFloat(rating.water_temp),
        steep_time: parseFloat(rating.steep_time),
        milk_amount: parseFloat(rating.milk_amount),
        milk_heat_time: parseFloat(rating.milk_heat_time),
        coffee_made_date: rating.coffee_made_date
      };

      try {
      const response = await create(ratingData);
      setRating(response.data);
      setSubmitted(true);
      } catch (e) {
          console.error(e);
      }
    };

    const newRating = () => {
        setRating(initialRatingState);
        setSubmitted(false);
    };

    return (
      <div className="submit-form">
        {submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={newRating}>
              Add Another Rating
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="coffee-amount">Coffee Amount (g)</label>
              <input
                type="number"
                className="form-control"
                id="coffee-amount"
                required
                value={rating.coffee_amount}
                onChange={handleInputChange}
                name="coffee_amount"
              />
            </div>

            <div className="form-group">
              <label htmlFor="coffee-brand">Coffee Brand</label>
              <input
                type="text"
                className="form-control"
                id="coffee-brand"
                required
                value={rating.coffee_brand}
                onChange={handleInputChange}
                name="coffee_brand"
              />
            </div>

            <div className="form-group">
              <label htmlFor="coffee-roast-type">Coffee Roast Type</label>
              <input
                type="text"
                className="form-control"
                id="coffee-roast-type"
                required
                value={rating.coffee_roast_type}
                onChange={handleInputChange}
                name="coffee_roast_type"
              />
            </div>

            <div className="form-group">
              <label htmlFor="brew-method">Brew Method</label>
              <input
                type="text"
                className="form-control"
                id="brew-method"
                required
                value={rating.brew_method}
                onChange={handleInputChange}
                name="brew_method"
              />
            </div>

            <div className="form-group">
              <label htmlFor="grind-size">Grind Size</label>
              <input
                type="text"
                className="form-control"
                id="grind-size"
                required
                value={rating.grind_size}
                onChange={handleInputChange}
                name="grind_size"
              />
            </div>

            <div className="form-group">
              <label htmlFor="water-amount">Water Amount (g)</label>
              <input
                type="number"
                className="form-control"
                id="water-amount"
                required
                value={rating.water_amount}
                onChange={handleInputChange}
                name="water_amount"
              />
            </div>

            <div className="form-group">
              <label htmlFor="water-temp">Water Temperature (°C)</label>
              <input
                type="number"
                className="form-control"
                id="water-temp"
                required
                value={rating.water_temp}
                onChange={handleInputChange}
                name="water_temp"
              />
            </div>

            <div className="form-group">
              <label htmlFor="steep-time">Steep Time (s)</label>
              <input
                type="number"
                className="form-control"
                id="steep-time"
                required
                value={rating.steep_time}
                onChange={handleInputChange}
                name="steep_time"
              />
            </div>

            <div className="form-group">
              <label htmlFor="milk-amount">Milk Amount (g)</label>
              <input
                type="number"
                className="form-control"
                id="milk-amount"
                required
                value={rating.milk_amount}
                onChange={handleInputChange}
                name="milk_amount"
              />
            </div>

            <div className="form-group">
              <label htmlFor="milk-heat-time">Milk Heat Time</label>
              <input
                type="number"
                className="form-control"
                id="milk-heat-time"
                required
                value={rating.milk_heat_time}
                onChange={handleInputChange}
                name="milk_heat_time"
              />
            </div>

            <div className="form-group">
              <label htmlFor="coffee-made-date">DateTime Made</label>
              <input
                type="datetime-local"
                className="form-control"
                id="coffee-made-date"
                required
                value={rating.coffee_made_date}
                onChange={handleInputChange}
                name="coffee_made_date"
              />
            </div>
    
            <button onClick={saveRating} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
}

export default CreateRating;