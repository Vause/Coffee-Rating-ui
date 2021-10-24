import React, { useState, useEffect } from "react";
import { getAll } from "../services/api";
import { Link } from "react-router-dom";

const RatingList = () => {
    const [ ratings, setRatings ] = useState([]);

    useEffect(() => {
        retrieveRatings();
    }, []);

    const retrieveRatings = async () => {
        try {
           const response = await getAll();
           console.log(response.data.data);
           setRatings(response.data.data);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <table className="table">
            <thead>
                <tr>
                    <th className="text-center">Coffee Brand</th>
                    <th className="text-center">Coffee Amount (g)</th>
                    <th className="text-center">Brew Method</th>
                    <th className="text-center">Coffee Roast</th>
                    <th className="text-center">Grind Size</th>
                    <th className="text-center">Steep Time (s)</th>
                    <th className="text-center">Water Amount (g)</th>
                    <th className="text-center">Water Temperature (°C)</th>
                    <th className="text-center">DateTime Made</th>
                    <th className="text-center">Milk Amount (g)</th>
                    <th className="text-center">Milk Heat Time (s)</th>
                    <th className="text-center">Overall Rating (/10)</th>
                </tr>
            </thead>
            <tbody>
                {
                    ratings.map(rating => (
                        <tr key={rating.id}>
                            <td className="text-center">{rating.coffee_brand}</td>
                            <td className="text-center">{rating.coffee_amount}</td>
                            <td className="text-center">{rating.brew_method}</td>
                            <td className="text-center">{rating.coffee_roast_type}</td>
                            <td className="text-center">{rating.grind_size}</td>
                            <td className="text-center">{rating.steep_time}</td>
                            <td className="text-center">{rating.water_amount}</td>
                            <td className="text-center">{rating.water_temp}</td>
                            <td className="text-center">{rating.coffee_made_date}</td>
                            {rating.milk_amount === 0 ?
                            <td className="text-center">No Milk Used</td> : <td className="text-center">{rating.milk_amount}</td>}
                            {rating.milk_heat_time === 0 ?
                            <td className="text-center">No Milk Used</td> : <td className="text-center">{rating.milk_heat_time}</td>}
                            <td className="text-center">4</td>

                            <td className="text-center">
                                <div className="btn-group">
                                    <Link to={`/edit/${rating.id}`} className="btn btn-primary">
                                        Edit
                                        <i className="fa fa-edit"></i>
                                    </Link>
                                    <Link to={`/details/${rating.id}`} className="btn btn-secondary">
                                        Details
                                        <i className="fa fa-eye"></i>
                                    </Link>
                                    <Link to={`/delete/${rating.id}`} className="btn btn-danger">
                                        Delete
                                        <i className="fa fa-trash"></i>
                                    </Link>
                                </div>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
};

export default RatingList;