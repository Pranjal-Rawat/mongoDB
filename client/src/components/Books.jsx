import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// List of states and their corresponding cities
const statesAndCities = {
  "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur"],
  "Arunachal Pradesh": ["Itanagar", "Pasighat"],
  "Assam": ["Guwahati", "Silchar", "Dibrugarh"],
  "Bihar": ["Patna", "Gaya", "Bhagalpur"],
  "Chhattisgarh": ["Raipur", "Bilaspur", "Korba"],
  "Goa": ["Panaji", "Margao"],
  "Gujarat": ["Ahmedabad", "Surat", "Vadodara"],
  "Haryana": ["Chandigarh", "Faridabad", "Gurugram"],
  "Himachal Pradesh": ["Shimla", "Dharamshala"],
  "Jharkhand": ["Ranchi", "Jamshedpur"],
  "Karnataka": ["Bangalore", "Mysore", "Hubli"],
  "Kerala": ["Thiruvananthapuram", "Kochi", "Kozhikode"],
  "Madhya Pradesh": ["Bhopal", "Indore", "Jabalpur"],
  "Maharashtra": ["Mumbai", "Pune", "Nagpur"],
  "Manipur": ["Imphal"],
  "Meghalaya": ["Shillong"],
  "Mizoram": ["Aizawl"],
  "Nagaland": ["Kohima"],
  "Odisha": ["Bhubaneswar", "Cuttack"],
  "Punjab": ["Chandigarh", "Amritsar"],
  "Rajasthan": ["Jaipur", "Udaipur", "Jodhpur"],
  "Sikkim": ["Gangtok"],
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai"],
  "Telangana": ["Hyderabad", "Warangal"],
  "Tripura": ["Agartala"],
  "Uttar Pradesh": ["Lucknow", "Kanpur", "Varanasi"],
  "Uttarakhand": ["Dehradun", "Haridwar"],
  "West Bengal": ["Kolkata", "Siliguri"]
};

export default function Login() {
  const [selectedState, setSelectedState] = useState("");
  const [cities, setCities] = useState([]);
  const navigate = useNavigate();

  const handleStateChange = (event) => {
    const state = event.target.value;
    setSelectedState(state);
    setCities(statesAndCities[state] || []);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform any additional form processing here if needed
    navigate('/Thanks');
  };

  return (
    <>
      <div style={{ height: "auto" }}>
        <div className='m-5 bg-seagreen border border-info rounded'>
          <form className="row g-3" onSubmit={handleSubmit}>
            <div className="col-md-4">
              <label htmlFor="validationDefault01" className="form-label">First name</label>
              <input type="text" className="form-control" id="validationDefault01" required />
            </div>
            <div className="col-md-4">
              <label htmlFor="validationDefault02" className="form-label">Last name</label>
              <input type="text" className="form-control" id="validationDefault02" required />
            </div>
            <div className="col-md-4">
              <label htmlFor="validationDefaultUsername" className="form-label">Username</label>
              <div className="input-group">
                <span className="input-group-text" id="inputGroupPrepend2">@</span>
                <input type="text" className="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required />
              </div>
            </div>
            <div className="col-md-6">
              <label htmlFor="validationDefaultCity" className="form-label">City</label>
              <select className="form-select" id="validationDefaultCity" required>
                <option value="" disabled>Choose...</option>
                {cities.map((city, index) => (
                  <option key={index} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-3">
              <label htmlFor="validationDefaultState" className="form-label">State</label>
              <select className="form-select" id="validationDefaultState" onChange={handleStateChange} required>
                <option value="" disabled>Choose...</option>
                {Object.keys(statesAndCities).map((state, index) => (
                  <option key={index} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-3">
              <label htmlFor="validationDefaultZip" className="form-label">Zip</label>
              <input type="text" className="form-control" id="validationDefaultZip" required />
            </div>
            <div className="col-12">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
                <label className="form-check-label" htmlFor="invalidCheck2">
                  Agree to terms and conditions
                </label>
              </div>
            </div>
            <div className="col-12">
              <button className="btn btn-primary bg-seagreen" type="submit">Submit form</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
