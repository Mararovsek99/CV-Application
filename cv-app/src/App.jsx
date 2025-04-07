// import { useState } from "react";
import { IoDocumentTextOutline, IoSchool } from "react-icons/io5";
import { FaTools, FaTrash, FaPhone } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { MdWorkHistory } from "react-icons/md";
import "./App.css";

function App() {
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
            <button>
              <FaTrash />
              Clear Resume
            </button>
            <button>Load Example</button>
          </div>
          <form className="personalDetailsForm">
            <h2>Personal Details</h2>
            <label>
              <h3>Full Name:</h3>
              <input type="text" name="fullName" />
            </label>
            <label>
              <h3>Email:</h3>
              <input type="email" name="email" />
            </label>
            <label>
              <h3>Phone Number:</h3>
              <input type="tel" name="phone" />
            </label>
            <label>
              <h3>Address:</h3>
              <input type="text" name="address" />
            </label>
          </form>
          <div className="educationForm">
            <h2>
              <IoSchool />
              Education
            </h2>
            <form className="educationDetailsForm">
              <label>
                <h3>School:</h3>
                <input type="text" name="school" />
              </label>
              <label>
                <h3>Degree:</h3>
                <input type="text" name="degree" />
              </label>
              <div className="dateInputs">
                <label>
                  <h3>Start Date:</h3>
                  <input type="date" name="startDate" />
                </label>
                <label>
                  <h3>End Date:</h3>
                  <input type="date" name="endDate" />
                </label>
              </div>
              <label>
                <h3>Location:</h3>
                <input type="text" name="location" />
              </label>
              <div className="formButtons">
                <button>
                  <FaTrash />
                  Delete
                </button>
                <div>
                  <button>Cancel</button>
                  <button>Save</button>
                </div>
              </div>
            </form>
            <div className="education"></div>
            <div className="addEducationButton">
              <button>Add Education</button>
            </div>
          </div>
          <div className="experienceForm">
            <h2>
              <MdWorkHistory />
              Experience
            </h2>
            <form className="experienceDetailsForm">
              <label>
                <h3>Company Name:</h3>
                <input type="text" name="company" />
              </label>
              <label>
                <h3>Position Title:</h3>
                <input type="text" name="position" />
              </label>
              <div className="dateInputs">
                <label>
                  <h3>Start Date:</h3>
                  <input type="date" name="startDate" />
                </label>
                <label>
                  <h3>End Date:</h3>
                  <input type="date" name="endDate" />
                </label>
              </div>
              <label>
                <h3>Location:</h3>
                <input type="text" name="location" />
              </label>
              <label>
                <h3>Description:</h3>
                <textarea name="description"></textarea>
              </label>
              <div className="formButtons">
                <button>
                  <FaTrash />
                  Delete
                </button>
                <div>
                  <button>Cancel</button>
                  <button>Save</button>
                </div>
              </div>
            </form>
            <div className="experience"></div>
            <div className="addExperienceButton">
              <button>Add Job</button>
            </div>
          </div>
        </div>
      </div>

      <div className="CVPreview">
        <div className="header">
          <div className="headerUpper">
            <h1>Full Name</h1>
          </div>
          <div className="headerLower">
            <p>
              <IoIosMail />
              Email: example@example.com
            </p>
            <p>
              <FaPhone />
              Phone: 123-456-7890
            </p>
            <p>
              <FaLocationDot />
              Location: City, Country
            </p>
          </div>
        </div>
        <div className="educationPreview">
          <h2> Education</h2>
          <div className="educationItem">
            <div>
              <p>Start Date - End Date</p>
              <p>City, Country</p>
            </div>
            <div>
              <h4>School Name</h4>
              <p>Degree</p>
            </div>
          </div>
          <div className="educationItem">
            <div>
              <p>Start Date - End Date</p>
              <p>City, Country</p>
            </div>
            <div>
              <h4>School Name</h4>
              <p>Degree</p>
            </div>
          </div>
        </div>
        <div className="experiencePreview">
          <h2>Experience</h2>
          <div className="experienceItem">
            <div>
              <p>Start Date - End Date</p>
              <p>City, Country</p>
            </div>
            <div>
              <h4>Company Name</h4>
              <p>Position Title</p>
              <p>Description of the role and responsibilities.</p>
            </div>
          </div>
          <div className="experienceItem">
            <div>
              <p>Start Date - End Date</p>
              <p>City, Country</p>
            </div>
            <div>
              <h4>Company Name</h4>
              <p>Position Title</p>
              <p>Description of the role and responsibilities.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
