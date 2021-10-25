import { get, update } from '../services/api'
import React, { useState, useEffect } from "react";


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
    const [message, setMessage] = useState("");

    const getRating = async id => {
        try {
            const response = await get(id);
            setCurrentRating(response.data);

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
            const response = update(currentRating.id, currentRating);
            setMessage("Rating updated!");
        } catch (e) {
            console.error(e);
        }

    }
}

export default UpdateRating;