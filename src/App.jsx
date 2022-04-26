import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const styles = [
    ["base", "left", "right"],
    ["base1", "left1", "right1"],
    ["base2", "left2", "right2"],
  ];

  const [style, setstyle] = useState(styles[0]);
  const [couter, setcouter] = useState(0);

  const handletoggle = () => {
    setcouter((couter + 1) % 3);
    setstyle(styles[couter]);
  };
  return (
    <div className="app">
      {style && (
        <div className={style[0]}>
          <>
            <div className={style[1]}>
              <h2>Hi, left</h2>
            </div>
            <div className={style[2]}>
              <h2> Hi, right </h2>
            </div>
          </>
        </div>
      )}
      <button className="button-position" onClick={handletoggle}>
        Toggle
      </button>
    </div>
  );
}

export default App;
