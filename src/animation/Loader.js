import "./Loader.css";
import centerImage from "../assets/images/logo f.png";

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader-spinner">
        {/* Center image */}
        <img src={centerImage} alt="center" className="loader-center-image" />

        {/* 18 rotating bars */}
        {Array.from({ length: 18 }).map((_, i) => (
          <div
            key={i}
            className="loader-bar"
            style={{ transform: `rotate(${i * 20}deg) translateX(-50%)` }}
          />
        ))}
      </div>
    </div>
  );
};

export default Loader;
