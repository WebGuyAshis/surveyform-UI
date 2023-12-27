import React, { useState } from "react";
import axios from 'axios'
import '../assets/css/surveyform.css'

const SurveyForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        gender: "Male",
        nationality: "Indian",
        email: "",
        phone: "",
        address: "",
        message: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = async(e) => {
        e.preventDefault();

        const baseUrl = 'https://surveyform-backend-2n7e.onrender.com/'
        try {
            const response = await axios.post(baseUrl, formData)
            if(response.status === 200){
                console.log("Data Saved!");
            }
        } catch (error) {
            console.log("Error", error)
        }

        // Add your form submission logic here using formData
        console.log(formData);
    };

    return (
        <div className="survey-container">
            <div className="form-header">
                <h1>Learn the Skills needed for your next job.</h1>
                <p>
                    You want to land a new job as a developer and don't have the skills
                    required for it? Don't worry and take one of our classes and get
                    accepted for the new job. Fill in this little survey, and we'll send
                    you the classes you need for it.
                </p>
            </div>

            <form onSubmit={handleSubmit}>
                <h2>Your Personal Details</h2>

                <div className="form-field">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="form-field">
                    <label htmlFor="gender">Gender</label>
                    <select
                        name="gender"
                        id="gender"
                        value={formData.gender}
                        onChange={handleInputChange}
                    >
                    </select>
                </div>

                <div className="form-field">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="form-field">
                    <label htmlFor="nationality">Nationality</label>
                    <select
                        name="nationality"
                        id="nationality"
                        value={formData.nationality}
                        onChange={handleInputChange}
                    >
                        {/* Add your nationality options here */}
                    </select>
                </div>

                <div className="form-field">
                    <label htmlFor="phone">Phone</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="form-field">
                    <label htmlFor="address">Address</label>
                    <textarea
                        name="address"
                        id="address"
                        value={formData.address}
                        onChange={handleInputChange}
                    ></textarea>
                </div>

                <div className="form-field">
                    <label htmlFor="message">Message</label>
                    <textarea
                        name="message"
                        id="message"
                        value={formData.message}
                        onChange={handleInputChange}
                    ></textarea>
                </div>

                <button type="submit">Submit Data</button>
            </form>
        </div>
    );
};

export default SurveyForm;
