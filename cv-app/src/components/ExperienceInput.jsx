import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { MdWorkHistory } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

export default function ExperienceInput({
  isOpen,
  onToggle,
  experienceData,
  setExperienceData,
}) {
  const [editExperience, setEditExperience] = useState(null);
  const handleAddExperience = () => {
    setExperienceData([
      ...experienceData,
      {
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        location: "",
        description: "",
      },
    ]);
    setEditExperience(experienceData.length);
  };
  const handleChange = (index, field, value) => {
    const updated = [...experienceData];
    updated[index][field] = value;
    setExperienceData(updated);
  };
  const handleDelete = (index) => {
    const updated = experienceData.filter((_, i) => i !== index);
    setExperienceData(updated);
  };
  return (
    <div className="experienceForm">
      <h2 onClick={onToggle} className="inputh2 pointer">
        <MdWorkHistory />
        Experience
      </h2>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="experienceForm"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <>
              {experienceData.map((exp, index) => (
                <div key={index}>
                  {editExperience === null && (
                    <h2
                      className="pointer formItem"
                      onClick={() => setEditExperience(index)}
                    >
                      {exp.company}
                    </h2>
                  )}
                </div>
              ))}
              {experienceData.map((exp, index) => (
                <div key={index}>
                  {editExperience === index && (
                    <form className="experienceDetailsForm inputForms">
                      <label>
                        <h3>Company Name:</h3>
                        <input
                          type="text"
                          name="company"
                          placeholder="Example Corp"
                          value={exp.company}
                          onChange={(e) =>
                            handleChange(index, "company", e.target.value)
                          }
                        />
                      </label>
                      <label>
                        <h3>Position Title:</h3>
                        <input
                          type="text"
                          name="position"
                          placeholder="Software Engineer"
                          value={exp.position}
                          onChange={(e) =>
                            handleChange(index, "position", e.target.value)
                          }
                        />
                      </label>
                      <div className="dateInputs">
                        <label>
                          <h3>Start Date:</h3>
                          <input
                            type="date"
                            name="startDate"
                            value={exp.startDate}
                            onChange={(e) =>
                              handleChange(index, "startDate", e.target.value)
                            }
                          />
                        </label>
                        <label>
                          <h3>End Date:</h3>
                          <input
                            type="date"
                            name="endDate"
                            value={exp.endDate}
                            onChange={(e) =>
                              handleChange(index, "endDate", e.target.value)
                            }
                          />
                        </label>
                      </div>
                      <label>
                        <h3>Location:</h3>
                        <input
                          type="text"
                          name="location"
                          placeholder="City, Country"
                          value={exp.location}
                          onChange={(e) =>
                            handleChange(index, "location", e.target.value)
                          }
                        />
                      </label>
                      <label>
                        <h3>Description:</h3>
                        <textarea
                          name="description"
                          placeholder="Develop.."
                          value={exp.description}
                          onChange={(e) =>
                            handleChange(index, "description", e.target.value)
                          }
                        ></textarea>
                      </label>
                      <div className="formButtons">
                        <button
                          className="deleteBtn"
                          onClick={() => {
                            setEditExperience(null);
                            handleDelete(index);
                          }}
                        >
                          <FaTrash />
                          Delete
                        </button>
                        <div className="formSaveCancel">
                          <button
                            className="saveBtn"
                            onClick={() => setEditExperience(null)}
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    </form>
                  )}
                </div>
              ))}

              {editExperience === null && (
                <div className="addExperienceButton addBtnDiv">
                  <button className="addBtn" onClick={handleAddExperience}>
                    Add Experience
                  </button>
                </div>
              )}
            </>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
