import "./Badge.css";
import bronze_medal from "../../resources/bronze_medal.png";
import silver_medal from "../../resources/silver_medal.png";
import gold_medal from "../../resources/gold_medal.png";

const Badge = ({ handleInfoClick, name, description }) => (
  <div className="badge" onClick={handleInfoClick}>
    <img className="no-level" alt="medal" src={bronze_medal} />
    <div className="type">
      <div className="badge-title">{name}</div>
      <div>{description}</div>
    </div>
  </div>
);

export default Badge;
