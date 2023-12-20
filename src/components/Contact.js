
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "../css/Contact.css";


const ContactPage = () => {
  
  const navigate=useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
   "beltColor":"#000000"
  });
  


  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const config={
      "SecureToken":"5b79e54e-04ba-4286-bea1-21029ce3ce09",
      "To":"testmaking@yopmail.com",
      "From":formData.email,
      "Subject":"I wanted to get Quotation for a conveyor belt with the following requirements",
      "Body":formData,
    }
    
   if(window.Email){
    window.Email.send(config).then(()=>alert("Email sent successfully"));
    
  
   }
   else{
    alert("Email doesnt exist in This react app")
   }
   
  };
  
  
  
  return (
    <div className="container">
      <div className="card">
                                  <form  className="form" onSubmit={handleSubmit} >
                                    {step === 1 && (
                                      <div>
                                        <h2>Step 1: Customer Details</h2>
                                        <label>
                                          Customer Name:
                                          <input
                                            type="text"
                                            name="customerName"
                                            value={formData.customerName}
                                            onChange={handleChange}
                                          />
                                        </label>
                                        <br />
                                        <label>
                                          Date:
                                          <input
                                            type="date"
                                            name="date"
                                            value={formData.date}
                                            onChange={handleChange}
                                          />
                                        </label>
                                        <br />
                                        <label>
                                        E-mail:
                                        <input
                                          type="email"
                                          name="email"
                                          value={formData.email}
                                          onChange={handleChange}
                                        />
                                      </label>
                                      <br />
                                        <button className='next'type="button" onClick={nextStep}>
                                          Next
                                        </button>
                                      </div>
                                    )}

                                    {step === 2 && (
                                      <div>
                                        <h2>Step 2: Technical Details</h2>
                                        <label>
                                        Machine:
                                        <input
                                        type="text"
                                        name="machine"
                                        value={formData.machine}
                                        onChange={handleChange}
                                      />
                                      </label>
                                      <br />

                                      <label>
                                    Belt Type / Pitch:
                                      <input
                                      type="text"
                                      name="beltType"
                                      value={formData.beltType}
                                      onChange={handleChange}
                                    />
                                      </label>
                                      <br />

                                      <label>
                                    WorkingTemperature:
                                      <input
                                      type="text"
                                      name="temperature"
                                      value={formData.temperature}
                                      onChange={handleChange}
                                    />
                                    </label>
                                    <br />

                                    <label>
                                    Belt length
                                    <input
                                    type="text"
                                    name="beltLength"
                                    value={formData.beltLength}
                                    onChange={handleChange}
                                  />
                                    </label>
                                    <br />

                                    <label>
                                    Belt Width:
                                    <input
                                    type="text"
                                    name="beltWidth"
                                    value={formData.beltWidth}
                                    onChange={handleChange}
                                  />
                                  </label>
                                  <br />

                                  <label>
                                  Belt Color:
                                  <input
                                  type="color"
                                  name="beltColor"
                                  value={formData.beltColor}
                                  onChange={handleChange}
                                />
                                  </label>
                                  <br />

                                  <label>
                                  Cleat pitch
                                  <input
                                  type="text"
                                  name="cleatPitch"
                                  value={formData.cleatPitch}
                                  onChange={handleChange}
                                />
                                </label>
                                <br />

                                <label>
                                Cleat Height:
                                <input
                                type="text"
                                name="cleatHeight"
                                value={formData.cleatHeight}
                                onChange={handleChange}
                              />
                                </label>
                                <br />

                                <label>
                                Cleat Width / dead zone:
                                <input
                                type="text"
                                name="cleatWidth"
                                value={formData.cleatWidth}
                                onChange={handleChange}
                              />
                              </label>
                              <br />

                              <label>
                              SprocketOD / No: of Teeth:
                              <input
                              type="text"
                              name="sprocketOD"
                              value={formData.sprocketOD}
                              onChange={handleChange}
                            />
                              </label>
                              <br />

                              <label>
                              Sprocket Bore:
                              <input
                              type="text"
                              name="SprocketBore"
                              value={formData.SprocketBore}
                              onChange={handleChange}
                            />
                            </label>
                            <br />
                                        <button className="previous" type="button" onClick={prevStep}>
                                          Previous
                                        </button>
                                        <button className="next" type="button" onClick={nextStep}>
                                          Next
                                        </button>
                                      </div>
                                    )}

                                    {step === 3 && (
                                      <div>
                                        <h2>Step 3: Conveyor System Details</h2>
                                        <label>
                                          Conveyor length:
                                          <input
                                          type="text"
                                          name="conveyorLength"
                                          value={formData.conveyorLength}
                                          onChange={handleChange}
                                        />
                                        </label>
                                        <br />
                                        
                                        <label>
                                          Angle of Inclination:
                                          <input
                                          type="text"
                                          name="inclinationAngle"
                                          value={formData.inclinationAngle}
                                          onChange={handleChange}
                                        />
                                        </label>
                                        <br />

                                        <label>
                                        Product to be conveyed:
                                          <input
                                          type="text"
                                          name="productConveyed"
                                          value={formData.productConveyed}
                                          onChange={handleChange}
                                        />
                                        </label>
                                        <br />

                                        <label>
                                          Temperature of product:
                                          <input
                                          type="text"
                                          name="productTemperature"
                                          value={formData.productTemperature}
                                          onChange={handleChange}
                                        />
                                        </label>
                                        <br />
                                        
                                        <label>
                                          Room Temperature:
                                          <input
                                          type="text"
                                          name="roomTemperature"
                                          value={formData.roomTemperature}
                                          onChange={handleChange}
                                        />
                                        </label>
                                        <br />

                                        <label>
                                        Product size(L X W X H) in mm:
                                          <input
                                          type="text"
                                          name="productSize"
                                          value={formData.productSize}
                                          onChange={handleChange}
                                        />
                                        </label>
                                        <br />

                                        <label>
                                          Weight of product:
                                          <input
                                          type="text"
                                          name="productWeight"
                                          value={formData.productWeight}
                                          onChange={handleChange}
                                        />
                                        </label>
                                        <br />

                                        <label>
                                          Total load on conveyor;
                                          <input
                                          type="text"
                                          name="conveyorLoad"
                                          value={formData.conveyorLoad}
                                          onChange={handleChange}
                                        />
                                        </label>
                                        <br />

                                        <label>
                                          Speed of the conveyor:
                                          <input
                                          type="text"
                                          name="conveyorSpeed"
                                          value={formData.conveyorSpeed}
                                          onChange={handleChange}
                                        />
                                        </label>
                                        <br />

                                        <label>
                                          Working hours/day:
                                          <input
                                          type="text"
                                          name="workingHours"
                                          value={formData.workingHours}
                                          onChange={handleChange}
                                        />
                                        </label>
                                        <br />

                                        <button className="previous"type="button" onClick={prevStep}>
                                          Previous
                                        </button>
                                        <button className="next"type="button" onClick={nextStep}>
                                          Next
                                        </button>
                                      </div>
                                    )}

                                    {step === 4 && (
                                      <div>
                                        <h2>Preview</h2>
                                        <div>
                                        {Object.entries(formData).map(([key, value]) => (
                                          <div key={key}>
                                            <strong>{key}:</strong>
                                            {key === "beltColor" ? (
                                              <div style={{ marginTop:'5px', backgroundColor: value, width: '20px', height: '20px', display: 'inline-block', marginLeft: '5px' }}></div>
                                            ) : (
                                              <span>{value}</span>
                                            )}
                                          </div>
                                        ))}
                                        
                                        </div>
                                        <button className="previous" type="button" onClick={prevStep}>
                                          Previous
                                        </button>
                                        <button type="submit">Submit</button>
                                      </div>
                                    )}
                                    
                                  </form>
      </div>
    </div>
  );
};

export default ContactPage;
