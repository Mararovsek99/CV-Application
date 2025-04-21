import { useState } from "react";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaTools, FaTrash } from "react-icons/fa";
import "./App.css";
import "./CVPreview.css";
import AppPreview from "./components/AppPreview";
import PersonalDetails from "./components/PersonalDetails";
import CustomizeMenu from "./components/CustomizeMenu";
import EducationInput from "./components/EducationInput";
import ExperienceInput from "./components/ExperienceInput";

function App() {
  const [personalData, setPersonalData] = useState({
    name: "Luka Dončić",
    email: "luka.doncic@example.com",
    phone: "+1 234 567 890",
    address: "Dallas, Texas, USA",
  });
  const [menuState, setMenuState] = useState("content");
  const [openInputSection, setopenInputSection] = useState(null);

  const handleSection = (section) => {
    setopenInputSection((prev) => (prev === section ? null : section));
  };

  const [educationsData, setEducationsData] = useState([
    {
      school: "University of Ljubljana",
      degree: "Diploma in Sports",
      startDate: "2012-09",
      endDate: "2016-06",
      location: "Ljubljana, Slovenia",
    },
    {
      school: "Basketball Academy",
      degree: "Specialization in Basketball",
      startDate: "2016-09",
      endDate: "2018-06",
      location: "Ljubljana, Slovenia",
    },
  ]);

  const [experienceData, setExperienceData] = useState([
    {
      company: "Real Madrid Baloncesto",
      position: "Professional Basketball Player",
      startDate: "2015-09",
      endDate: "2018-06",
      location: "Madrid, Spain",
      description: "Won multiple titles and was named EuroLeague MVP.",
    },
    {
      company: "Dallas Mavericks",
      position: "NBA Basketball Player",
      startDate: "2018-07",
      endDate: "Present",
      location: "Dallas, USA",
      description:
        "Set numerous records and became one of the top players in the NBA.",
    },
  ]);

  const handleClearResume = () => {
    setPersonalData({
      name: "",
      email: "",
      phone: "",
      address: "",
    });
    setEducationsData([]);
    setExperienceData([]);
  };

  const handleLoadExample = () => {
    setPersonalData({
      name: "Luka Dončić",
      email: "luka.doncic@example.com",
      phone: "+1 234 567 890",
      address: "Dallas, Texas, USA",
    });
    setEducationsData([
      {
        school: "University of Ljubljana",
        degree: "Diploma in Sports",
        startDate: "2012-09",
        endDate: "2016-06",
        location: "Ljubljana, Slovenia",
      },
      {
        school: "Basketball Academy",
        degree: "Specialization in Basketball",
        startDate: "2016-09",
        endDate: "2018-06",
        location: "Ljubljana, Slovenia",
      },
    ]);
    setExperienceData([
      {
        company: "Real Madrid Baloncesto",
        position: "Professional Basketball Player",
        startDate: "2015-09",
        endDate: "2018-06",
        location: "Madrid, Spain",
        description: "Won multiple titles and was named EuroLeague MVP.",
      },
      {
        company: "Dallas Mavericks",
        position: "NBA Basketball Player",
        startDate: "2018-07",
        endDate: "Present",
        location: "Dallas, USA",
        description:
          "Set numerous records and became one of the top players in the NBA.",
      },
    ]);
  };

  return (
    <div className="CV">
      <div className="input">
        <div className="settings">
          <button
            id="contentBtn"
            onClick={() => setMenuState("content")}
            className={
              menuState === "content" ? "chossenMenu" : "notChossenMenu"
            }
          >
            <IoDocumentTextOutline />
            Content
          </button>
          <button
            id="CustomizeBtn"
            onClick={() => setMenuState("customize")}
            className={
              menuState === "customize" ? "chossenMenu" : "notChossenMenu"
            }
          >
            <FaTools />
            Customize
          </button>
        </div>
        <div className="formContainer">
          <div className="controls">
            <button className="deleteBtn" onClick={handleClearResume}>
              <FaTrash />
              Clear Resume
            </button>
            <button onClick={handleLoadExample}>Load Example</button>
          </div>
          {menuState === "content" && (
            <>
              <PersonalDetails
                personalData={personalData}
                setPersonalData={setPersonalData}
              />
            </>
          )}
          {menuState === "customize" && (
            <>
              <CustomizeMenu />
            </>
          )}
          {(openInputSection === "education" || openInputSection === null) &&
            menuState === "content" && (
              <>
                <EducationInput
                  isOpen={openInputSection === "education"}
                  onToggle={() => handleSection("education")}
                  educationsData={educationsData}
                  setEducationsData={setEducationsData}
                />
              </>
            )}

          {(openInputSection === "experience" || openInputSection === null) &&
            menuState === "content" && (
              <>
                <ExperienceInput
                  isOpen={openInputSection === "experience"}
                  onToggle={() => handleSection("experience")}
                  experienceData={experienceData}
                  setExperienceData={setExperienceData}
                />
              </>
            )}
        </div>
      </div>
      <AppPreview
        personalData={personalData}
        educationsData={educationsData}
        experienceData={experienceData}
      />
    </div>
  );
}

export default App;
