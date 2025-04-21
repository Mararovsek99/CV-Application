import { FaPhone } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

export default function AppPreview({
  personalData,
  educationsData,
  experienceData,
}) {
  return (
    <div className="CVPreview">
      <div className="header">
        <div className="headerUpper">
          <h1>{personalData.name}</h1>
        </div>
        <div className="headerLower">
          <p className="iconeGap">
            <IoIosMail />
            Email: {personalData.email}
          </p>
          <p className="iconeGap">
            <FaPhone />
            Phone: {personalData.phone}
          </p>
          <p className="iconeGap">
            <FaLocationDot />
            Location: {personalData.address}
          </p>
        </div>
      </div>
      <div className="content">
        <div className="educationPreview">
          <h2> Education</h2>
          {educationsData.map((edu) => (
            <div className="educationItem">
              <div className="experienceItemDate">
                <p className="DatePreview">
                  {edu.startDate} - {edu.endDate}
                </p>
                <p>{edu.location}</p>
              </div>
              <div>
                <h4>{edu.school}</h4>
                <p>{edu.degree}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="experiencePreview">
          <h2>Experience</h2>
          {experienceData.map((exp) => (
            <div className="experienceItem">
              <div className="experienceItemDate">
                <p className="DatePreview">
                  {exp.startDate} - {exp.endDate}
                </p>
                <p>{exp.location}</p>
              </div>
              <div>
                <h4>{exp.company}</h4>
                <p>{exp.position}</p>
                <p>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
