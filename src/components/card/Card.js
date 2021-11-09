
import "./Card.css";
import { Link} from "react-router-dom";

const Card = (props) => {
    const { name, duration, price, img,_id } = props.place;

    
  
   
    return (
        <div className="card">
            <div className="image-section">
                <img width="100%" height="150px" src={img} alt="" />
            </div>
            <div className="description-section" >
                <h3>{name}</h3>
                <div className="d-flex justify-content-between">
                    <h6 className="duration-box">{duration}</h6>
                    <h6 className="price-box">{price}</h6>
                </div>
                <Link className="bn39" to={`/placeorder/${_id}`} ><span className="bn39span">BOOK NOW</span>
                </Link>
                


            </div>
        </div>
    );
};

export default Card;