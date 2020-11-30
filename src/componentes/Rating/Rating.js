import React from 'react'

const Rating = ({ value, reviews }) => {
    const color = {
        "color": "#f8e825"
    }
    return (
        <div>
            <span style={color}>
                <i className={value >= 1 ? "fas fa-star" : value >= 0.5 ? "fas fa-star-half-alt" : "far fa-star"}></i>
            </span>
            <span style={color}>
                <i className={value >= 2 ? "fas fa-star" : value >= 1.5 ? "fas fa-star-half-alt" : "far fa-star"}></i>
            </span>
            <span style={color}>
                <i className={value >= 3 ? "fas fa-star" : value >= 2.5 ? "fas fa-star-half-alt" : "far fa-star"}></i>
            </span>
            <span style={color}>
                <i className={value >= 4 ? "fas fa-star" : value >= 3.5 ? "fas fa-star-half-alt" : "far fa-star"}></i>
            </span>
            <span style={color}>
                <i className={value >= 5 ? "fas fa-star" : value >= 4.5 ? "fas fa-star-half-alt" : "far fa-star"}></i>
            </span>
            <span className="ml-2">{reviews} Reseñas</span>
        </div>
    )
}

export default Rating
