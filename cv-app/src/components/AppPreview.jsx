import { FaPhone } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

export default function AppPreview() {
  return (
    <div className="CVPreview">
      <div className="header">
        <div className="headerUpper">
          <h1>John Doe</h1>
        </div>
        <div className="headerLower">
          <p className="iconeGap">
            <IoIosMail />
            Email: john.doe@example.com
          </p>
          <p className="iconeGap">
            <FaPhone />
            Phone: 123-456-7890
          </p>
          <p className="iconeGap">
            <FaLocationDot />
            Location: City, Country
          </p>
        </div>
      </div>
      <div className="educationPreview">
        <h2> Education</h2>
        <div className="educationItem">
          <div className="experienceItemDate">
            <p>2018-09-01 - 2022-06-15</p>
            <p>City, Country</p>
          </div>
          <div>
            <h4>University of Example</h4>
            <p>Bachelor of Science in Computer Science</p>
          </div>
        </div>
      </div>
      <div className="experiencePreview">
        <h2>Experience</h2>
        <div className="experienceItem">
          <div className="experienceItemDate">
            <p>2022-07-01 - 2023-10-01</p>
            <p>City, Country</p>
          </div>
          <div>
            <h4>Example Corp</h4>
            <p>Software Engineer</p>
            <p>
              Developed and maintained web applications using React and Node.js.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
