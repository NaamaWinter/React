import React from "react";
function PersonalDetails() {

    const handleChange = (event) => {
        console.log("typing…", event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("הטופס נשלח בהצלחה");
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>פרטים אישיים</h2>

            <label>שם מלא:</label>
            <input
                type="text"
                onChange={handleChange}
            />

            <br />

            <label>אימייל:</label>
            <input
                type="email"
                onChange={handleChange}
            />

            <br />

            <label>טלפון:</label>
            <input
                type="text"
                onChange={handleChange}
            />

            <br />

            <button type="submit">שליחה</button>
        </form>
    );
}

export default PersonalDetails;
