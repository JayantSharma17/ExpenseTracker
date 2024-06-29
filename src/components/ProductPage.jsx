import React, { useState } from "react";
import "./CSS/ProductPage.css";
import { FaStar } from "react-icons/fa";

const ProductPage = () => {

  const productName = "Awesome Product";
  const price = 19.99;
  const description = "This is a fantastic product with amazing features.";
  const category = "Electronics";
  const img = "https://tse4.mm.bing.net/th?id=OIP.1d6tBbNiJTFQNEK_k0sSjQHaFj&pid=Api&P=0&h=180"; 

  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [reviews, setReviews] = useState([{
    rating: 4,
    review: "product acha hai or"
  },{
    rating: 4,
    review: "product acha hai or"
  }]);
 

  const handleRatingChange = (event) => {
    
    setRating(parseInt(event.target.value));
  };

  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };

  const handleSubmitReview = () => {
    if (rating && review) {
      setReviews([...reviews, { rating, review }]);
      setRating(null);
      setReview("");
    } else {
      alert("Please provide a rating and review.");
    }
  };

  const averageRating = reviews.length > 0
    ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
    : 0;

  return (
    <div className="product">
      <div className="product-img-container">
        <img src={img} alt={productName} />
      </div>
      <div className="product-info">
        <div className="product-name-rating">
          <p className="product-name">{productName}</p>
          <p>{category}</p>
        </div>
        <p className="product-desc">{description}</p>
        <p className="product-price">${price.toFixed(2)}</p>

        <div className="review-section">
          
          <h3>Add a Review</h3>
          <div className="rating-stars">
            {[...Array(5)].map((_, i) => (
              <label key={i}>
                <input
                className="rating-input"
                  type="radio"
                  name="rating"
                  value={i + 1}
                  onChange={handleRatingChange}
                  checked={rating === i + 1}
                />
                <FaStar
                  className={rating <= i ? "empty" : "filled"}
                  size={20}
                />
              </label>
            ))}
          </div>
          <textarea
            placeholder="Write your review here..."
            value={review}
            onChange={handleReviewChange}
          />
          <button onClick={handleSubmitReview}>Submit Review</button>
          <h3>Reviews</h3>
          {reviews.length === 0 ? (
            <p>No reviews yet.</p>
          ) : (
            <>
              <p>Average Rating: {averageRating.toFixed(1)} <FaStar className="filled" size={16} /></p>
              {reviews.map((review, index) => (
                <div key={index} className="review">
                  <p>Rating: {review.rating} <FaStar className="filled" size={16} /></p>
                  <p>{review.review}</p>
                </div>
              ))}
            </>
          )}

    
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
