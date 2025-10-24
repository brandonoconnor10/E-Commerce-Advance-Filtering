import { BsFillBagFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";

const Card = ({ img, title, rating, reviews, prevPrice, newPrice }) => {
  return (
    <section className="card">
      <img src={img} alt={title} className="card-img" />
      <div className="card-details">
        <h3 className="card-title">{title}</h3>

        <section className="card-reviews">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <AiFillStar key={i} className="rating-star" />
            ))}
          <span className="total-reviews">({reviews} reviews)</span>
        </section>

        <section className="card-price">
          <div className="price">
            <del>${prevPrice.toFixed(2)}</del> ${newPrice.toFixed(2)}
          </div>
          <div className="bag">
            <BsFillBagFill className="bag-icon" />
          </div>
        </section>
      </div>
    </section>
  );
};

export default Card;
