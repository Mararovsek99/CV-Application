import { useState } from "react";
import { IoSchool } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function EducationInput({
  isOpen,
  onToggle,
  educationsData,
  setEducationsData,
}) {
  const [editSchool, setEditSchool] = useState(null);

  const handleAddEducation = () => {
    setEducationsData([
      ...educationsData,
      {
        school: "",
        degree: "",
        startDate: "",
        endDate: "",
        location: "",
      },
    ]);
    setEditSchool(educationsData.length);
  };
  const handleChange = (index, field, value) => {
    const updated = [...educationsData];
    updated[index][field] = value;
    setEducationsData(updated);
  };
  const handleDelete = (index) => {
    const updated = educationsData.filter((_, i) => i !== index);
    setEducationsData(updated);
  };
  return (
    <div className="educationForm ">
      <h2 onClick={onToggle} className="inputh2 pointer">
        <IoSchool />
        Education
      </h2>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="educationForm"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <>
              {educationsData.map((edu, index) => (
                <div key={index}>
                  {editSchool === null && (
                    <h2
                      className="pointer formItem"
                      onClick={() => setEditSchool(index)}
                    >
                      {edu.school}
                    </h2>
                  )}
                </div>
              ))}

              {educationsData.map((edu, index) => (
                <div key={index}>
                  {editSchool === index && (
                    <form className="educationDetailsForm inputForms">
                      <label>
                        <h3>School:</h3>
                        <input
                          type="text"
                          name="school"
                          value={edu.school}
                          onChange={(e) =>
                            handleChange(index, "school", e.target.value)
                          }
                          placeholder="University of Example"
                        />
                      </label>
                      <label>
                        <h3>Degree:</h3>
                        <input
                          type="text"
                          name="degree"
                          value={edu.degree}
                          onChange={(e) =>
                            handleChange(index, "degree", e.target.value)
                          }
                          placeholder="Bachelor of Science in Computer Science"
                        />
                      </label>
                      <div className="dateInputs">
                        <label>
                          <h3>Start Date:</h3>
                          <input
                            type="date"
                            name="startDate"
                            value={edu.startDate}
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
                            value={edu.endDate}
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
                          value={edu.location}
                          onChange={(e) =>
                            handleChange(index, "location", e.target.value)
                          }
                        />
                      </label>
                      <div className="formButtons">
                        <button
                          className="deleteBtn"
                          onClick={() => {
                            handleDelete(index);
                            setEditSchool(null);
                          }}
                        >
                          <FaTrash />
                          Delete
                        </button>
                        <div className="formSaveCancel">
                          <button
                            onClick={() => setEditSchool(null)}
                            className="saveBtn"
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    </form>
                  )}
                </div>
              ))}

              {editSchool === null && (
                <div className="addEducationButton addBtnDiv">
                  <button className="addBtn" onClick={handleAddEducation}>
                    Add Education
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
