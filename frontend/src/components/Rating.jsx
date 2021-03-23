import React from "react";
import PropTypes from "prop-types";

const DrawStars = (rate, color) => {
  let stars = [];
  for (let i = 1; i < 6; i++) {
    stars.push(
      <i
        style={{ color }}
        className={
          rate > i
            ? "fas fa-star"
            : rate >= i - 0.5
            ? "fas fa-star-half-alt"
            : "far fa-star"
        }
      ></i>
    );
  }
  return stars;
};

const Rating = ({ rate, reviwes, color }) => {
  return (
    <div className="rating">
      {DrawStars(rate, color).map((star, idx) => (
        <span key={idx}>{star}</span>
      ))}
      <span className="reviews-text">{reviwes}</span>
    </div>
  );
};

Rating.defaultProps = {
  color: "#f8e825",
};

Rating.propTypes = {
  rate: PropTypes.number.isRequired,
  reviwes: PropTypes.string.isRequired,
  color: PropTypes.string,
};
export default Rating;
