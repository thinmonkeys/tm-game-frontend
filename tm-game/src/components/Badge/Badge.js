import "./Badge.css";
import bronze_medal from "../../resources/bronze_medal.png";
import silver_medal from "../../resources/silver_medal.png";
import gold_medal from "../../resources/gold_medal.png";

const Badge = ({ handleInfoClick, name, description, level }) => {
  let nameOfClass = "";
  let sourceImg;

  if (level === 0) {
    nameOfClass = "no-level";
    sourceImg = bronze_medal;
  } else if (level === 1) {
    sourceImg = bronze_medal;
  } else if (level === 2) {
    sourceImg = silver_medal;
  } else if (level === 3) {
    sourceImg = gold_medal;
  }

  return (
    <div className="badge" onClick={handleInfoClick}>
      <img className={nameOfClass} alt="medal" src={sourceImg} />
      <div className="type">
        <div className="badge-title">{name}</div>
        <div>{description}</div>
      </div>
    </div>
  );
};

export default Badge;
