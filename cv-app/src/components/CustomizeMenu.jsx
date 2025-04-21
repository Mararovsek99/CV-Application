import { useState } from "react";
import { readableColor, darken } from "polished";

export default function CustomizeMenu() {
  const handleColorChange = (e) => {
    const newColor = e.target.value;
    document.documentElement.style.setProperty("--CVColor", newColor);
    let textColor = readableColor(newColor);
    if (textColor === "#fff") {
      textColor = darken(0.1, textColor);
    }
    console.log(textColor);
    document.documentElement.style.setProperty("--CVTextColor", textColor);
  };

  const handleLayoutChange = (direction) => {
    document.documentElement.style.setProperty(
      "--previewFlexDirection",
      direction
    );
    const header = document.querySelector(".header");
    const headerLower = document.querySelector(".headerLower");

    if (direction === "column") {
      header.style.justifyContent = "space-between";
      header.style.justifyContent = "space-between";
      headerLower.style.padding = "0px";
    } else {
      header.style.justifyContent = "unset";
      headerLower.style.flexDirection = "column";
      headerLower.style.padding = "35px";
    }
  };

  const [font, setFont] = useState("sans");
  const handleFontChange = (font) => {
    setFont(font);
    document.documentElement.style.setProperty("--CVPreviewFont", font);
  };

  return (
    <>
      {/* Layout Section */}
      <div className="layout">
        <h2>Layout</h2>
        <div className="layoutButtons">
          <button
            className="layoutbutton"
            onClick={() => handleLayoutChange("column")}
          >
            <div className="topLayoutBtn"></div>
            Top
          </button>
          <button
            className="layoutbutton"
            onClick={() => handleLayoutChange("row")}
          >
            <div className="leftLayoutBtn"></div>
            Left
          </button>
          <button
            className="layoutbutton"
            onClick={() => handleLayoutChange("row-reverse")}
          >
            <div className="rightLayoutBtn"></div>
            Right
          </button>
        </div>
      </div>

      {/* Color Section */}
      <div className="layout">
        <h2>Color</h2>
        <div className="colorPickerContainer">
          <h3>Theme:</h3>
          <label className="customColorPicker">
            <input
              style={{
                opacity: 0,
                width: "100%",
                height: "100%",
                position: "absolute",
              }}
              type="color"
              onChange={handleColorChange}
            />
            <div className="colorPicker"></div>
          </label>
        </div>
      </div>

      {/* Fonts Section */}
      <div className="layout">
        <h2>Fonts</h2>
        <div className="fonts">
          {/* Sans Font Button */}
          <button
            className={
              (font === "sans" ? "activeFontButton" : "") + " sansFontButton"
            }
            onClick={() => handleFontChange("sans")}
          >
            <div className="fontButton">Aa</div>Sans
          </button>

          {/* Serif Font Button */}
          <button
            className={
              (font === "serif" ? "activeFontButton" : "") + " serifFontButton"
            }
            onClick={() => handleFontChange("serif")}
          >
            <div className="fontButton">Aa</div>Serif
          </button>

          {/* Monospace Font Button */}
          <button
            className={
              (font === "monospace" ? "activeFontButton" : "") +
              " monoFontButton"
            }
            onClick={() => handleFontChange("monospace")}
          >
            <div className="fontButton">Aa</div>Mono
          </button>
        </div>
      </div>
    </>
  );
}
