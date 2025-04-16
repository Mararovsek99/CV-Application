import React, { useState } from "react";
import { IoSchool } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function EducationInput({ isOpen, onToggle }) {
  return (
    <div className="educationForm ">
      <h2 onClick={onToggle} className="inputh2">
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
              <form className="educationDetailsForm inputForms">
                <label>
                  <h3>School:</h3>
                  <input
                    type="text"
                    name="school"
                    placeholder="University of Example"
                  />
                </label>
                <label>
                  <h3>Degree:</h3>
                  <input
                    type="text"
                    name="degree"
                    placeholder="Bachelor of Science in Computer Science"
                  />
                </label>
                <div className="dateInputs">
                  <label>
                    <h3>Start Date:</h3>
                    <input
                      type="date"
                      name="startDate"
                      defaultValue="2018-09-01"
                    />
                  </label>
                  <label>
                    <h3>End Date:</h3>
                    <input
                      type="date"
                      name="endDate"
                      defaultValue="2022-06-15"
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

              <div className="addEducationButton addBtnDiv">
                <button className="addBtn">Add Education</button>
              </div>
            </>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
