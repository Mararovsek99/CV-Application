import { useState } from "react";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaTools, FaTrash } from "react-icons/fa";
import "./App.css";
import "./CVPreview.css";
import AppPreview from "./components/AppPreview";
import PersonalDetails from "./components/PersonalDetails";
import EducationInput from "./components/EducationInput";
import ExperienceInput from "./components/ExperienceInput";

function App() {
  const [openInputSection, setopenInputSection] = useState(null);

  const handleSection = (section) => {
    setopenInputSection((prev) => (prev === section ? null : section));
  };
  return (
    <div className="CV">
      <div className="input">
        <div className="settings">
          <button id="contentBtn">
            <IoDocumentTextOutline />
            Content
          </button>
          <button id="CustomizeBtn">
            <FaTools />
            Customize
          </button>
        </div>
        <div className="formContainer">
          <div className="controls">
            <button className="deleteBtn">
              <FaTrash />
              Clear Resume
            </button>
            <button>Load Example</button>
          </div>
          <PersonalDetails />

          {(openInputSection === "education" || openInputSection === null) && (
            <>
              <EducationInput
                isOpen={openInputSection === "education"}
                onToggle={() => handleSection("education")}
              />
            </>
          )}

          {(openInputSection === "experience" || openInputSection === null) && (
            <>
              <ExperienceInput
                isOpen={openInputSection === "experience"}
                onToggle={() => handleSection("experience")}
              />
            </>
          )}
        </div>
      </div>
      <AppPreview />
    </div>
  );
}

export default App;
