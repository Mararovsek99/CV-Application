import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { MdWorkHistory } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

export default function ExperienceInput({ isOpen, onToggle }) {
  return (
    <div className="experienceForm">
      <h2 onClick={onToggle} className="inputh2">
        <MdWorkHistory />
        Experience
      </h2>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="educationForm"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <>
              <form className="experienceDetailsForm inputForms">
                <label>
                  <h3>Company Name:</h3>
                  <input
                    type="text"
                    name="company"
                    placeholder="Example Corp"
                  />
                </label>
                <label>
                  <h3>Position Title:</h3>
                  <input
                    type="text"
                    name="position"
                    placeholder="Software Engineer"
                  />
                </label>
                <div className="dateInputs">
                  <label>
                    <h3>Start Date:</h3>
                    <input
                      type="date"
                      name="startDate"
                      defaultValue="2022-07-01"
                    />
                  </label>
                  <label>
                    <h3>End Date:</h3>
                    <input
                      type="date"
                      name="endDate"
                      defaultValue="2023-10-01"
                    />
                  </label>
                </div>
                <label>
                  <h3>Location:</h3>
                  <input
                    type="text"
                    name="location"
                    placeholder="City, Country"
                  />
                </label>
                <label>
                  <h3>Description:</h3>
                  <textarea
                    name="description"
                    placeholder="Developed and maintained web applications using React and Node.js."
                  ></textarea>
                </label>
                <div className="formButtons">
                  <button className="deleteBtn">
                    <FaTrash />
                    Delete
                  </button>
                  <div className="formSaveCancel">
                    <button className="cancelBtn">Cancel</button>
                    <button className="saveBtn">Save</button>
                  </div>
                </div>
              </form>
              <div className="experience"></div>
              <div className="addExperienceButton addBtnDiv">
                <button className="addBtn">Add Job</button>
              </div>
            </>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
