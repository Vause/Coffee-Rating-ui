import { get, update } from '../services/api'
import React, { useState, useEffect } from "react";
import setToAppropriateTypes from '../utils/setToAppropriateTypes';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


const UpdateRating = props => {

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

    const [currentRating, setCurrentRating] = useState(initialRatingState);
    const [submitted, setSubmitted] = useState(false);
    let history = useHistory();

    const getRating = async id => {
        try {
            const response = await get(id);
            setCurrentRating(response.data.data);

        } catch (e) {
            console.error(e);
        }
    };

    useEffect(() => {
        getRating(props.match.params.id);
    }, [props.match.params.id]);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setCurrentRating({ ...currentRating, [name]: value });
    };

    const updateRating = async () => {
        try {
            setToAppropriateTypes(currentRating);
            const response = await update(currentRating);

            if (response.status === 200) {
                setSubmitted(true);
            }
        } catch (e) {
            console.error(e);
        }
    }

    const redirectToHome = () => {
        history.push('/');
    }

    const redirectToNewRating = () => {
        history.push('/create');
    }

    return (
        <div className="submit-form">
            {submitted ? (
        <div>
          <h4>You Updated Successfully!</h4>
          <button className="btn btn-success" onClick={redirectToHome}>
            Home
          </button>
          <button className="btn btn-primary m-3" onClick={redirectToNewRating}>
            Add New Rating
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
            value={currentRating.coffee_amount}
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
              value={currentRating.coffee_brand}
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
              value={currentRating.coffee_roast_type}
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
              value={currentRating.brew_method}
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
              value={currentRating.grind_size}
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
              value={currentRating.water_amount}
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
              value={currentRating.water_temp}
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
              value={currentRating.steep_time}
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
              value={currentRating.milk_amount}
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
              value={currentRating.milk_heat_time}
              onChange={handleInputChange}
              name="milk_heat_time"
            />
          </div>

          <div className="form-group">
            <label htmlFor="total-currentRating">Overall Rating</label>
            <input
              type="number"
              className="form-control"
              id="total-currentRating"
              required
              value={currentRating.total_currentRating}
              onChange={handleInputChange}
              name="total_currentRating"
            />
          </div>

          <div className="form-group">
            <label htmlFor="notes">Notes</label>
            <input
              type="text"
              className="form-control"
              id="notes"
              required
              value={currentRating.notes}
              onChange={handleInputChange}
              name="notes"
            />
          </div>

          <div className="form-group">
            <label htmlFor="coffee-made-date">DateTime Made</label>
            <input
              type="datetime-local"
              className="form-control"
              id="coffee-made-date"
              required
              value={currentRating.coffee_made_date}
              onChange={handleInputChange}
              name="coffee_made_date"
            />
          </div>

          <button onClick={updateRating} className="btn btn-success">
            Submit
          </button>
        </div>
    )}
    </div>
  );
}

export default UpdateRating;