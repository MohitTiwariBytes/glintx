import React from "react";
import "./Team.css";

const Team = () => {
  const teamMembers = [
    { name: "Mohit Tiwari", age: 13 },
    { name: "Nikhil", age: 18 },
    { name: "Swastik Bajpai", age: 13 },
    { name: "Abhay", age: 16 },
    { name: "Arnav", age: 16 },
    { name: "Satoshi", age: 17 },
  ];

  return (
    <div className="main-team">
      <div className="team">
        <div className="header">
          <h1>Who's on our team?</h1>
        </div>
        <div className="cards">
          {teamMembers.map((member, index) => (
            <div key={index} className="card">
              <div className="img">
                <img
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                  alt="No profile"
                  height={"100px"}
                />
              </div>
              <div className="name">
                <h1>{member.name}</h1>
              </div>
              <div className="age">
                <h1>{member.age}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
