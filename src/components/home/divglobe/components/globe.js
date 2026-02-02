import "./globe.css";
import logo from "./img/cube.png";

const Globe = () => {
  const divs = Array.from({ length: 70 }, (_, i) => (
    <div key={i} className={`d d${i + 1}`}></div>
  ));

  return (
    <div className="globe-scene">
      <img style={{width: "40px", height:'40px'}} src={logo} alt="logo" id="g"/>
      <div className="globe">{divs}</div>
    </div>
  );
};

export default Globe;
