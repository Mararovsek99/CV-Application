import { IoPersonSharp } from "react-icons/io5";

export default function PersonalDetails() {
  return (
    <form className="personalDetailsForm">
      <h2 className="inputh2">
        <IoPersonSharp />
        Personal Details
      </h2>
      <label>
        <h3>Full Name:</h3>
        <input type="text" name="fullName" placeholder="John Doe" />
      </label>
      <label>
        <h3>Email:</h3>
        <input type="email" name="email" placeholder="john.doe@example.com" />
      </label>
      <label>
        <h3>Phone Number:</h3>
        <input type="tel" name="phone" placeholder="123-456-7890" />
      </label>
      <label>
        <h3>Address:</h3>
        <input
          type="text"
          name="address"
          placeholder="123 Main St, City, Country"
        />
      </label>
    </form>
  );
}
