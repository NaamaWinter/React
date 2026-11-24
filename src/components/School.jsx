import React from "react";
import StudentDetails from "./StudentDetails.jsx";
function School() {
    const students = [
        {
            id: 1,
            name: "David",
            age: 15,
            average: 95
        },
        {
            id: 2,
            name: "Sara",
            age: 16,
            average: 55
        },
        {
            id: 3,
            name: "Rachel",
            age: 14,
            average: 80
        }
    ];
    const openGate = () => {
        console.log("השער נפתח");
    };
    return (
     <div>
            <h1>בית הספר שלנו</h1>

            {students.map((student) => (
                <StudentDetails
                    key={student.id}
                    student={student}
                    onExit={openGate}
                />
            ))}
        </div>
    );
}

export default School;