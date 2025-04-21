import { IoPersonSharp } from "react-icons/io5";

export default function PersonalDetails({ personalData, setPersonalData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <form className="personalDetailsForm">
      <h2 className="inputh2">
        <IoPersonSharp />
        Personal Details
      </h2>
      <label>
        <h3>Full Name:</h3>
        <input
          type="text"
          name="name"
          placeholder="John Doe"
          value={personalData.name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        <h3>Email:</h3>
        <input
          type="email"
          name="email"
          placeholder="john.doe@example.com"
          value={personalData.email}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        <h3>Phone Number:</h3>
        <input
          type="tel"
          name="phone"
          placeholder="123-456-7890"
          value={personalData.phone}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        <h3>Address:</h3>
        <input
          type="text"
          name="address"
          placeholder="123 Main St, City, Country"
          value={personalData.address}
          onChange={handleChange}
          required
        />
      </label>
    </form>
  );
}
