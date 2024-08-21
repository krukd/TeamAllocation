import React from "react";
import femaleProfile from "./images/femaleProfile.jpg";
import maleProfile from "./images/maleProfile.jpg";


function TeamMemberCard({selectedTeam, employee, handleCardClick}) {
  
  return (
    <div
    key={employee.id}
    id={employee.id}
    className={
      employee.teamName === selectedTeam
        ? "card m-2 standout"
        : "card m-2"
    }
    style={{ cursor: "pointer" }}
    onClick={handleCardClick}
  >
    {employee.gender === "male" ? (
      <img src={maleProfile} class="card-img-top" />
    ) : (
      <img src={femaleProfile} class="card-img-top" />
    )}

    <div className="card-body">
      <h5 className="card-title">
        {" "}
        Full name: {employee.fullName}
      </h5>
      <p className="card-text">
        <b>Designation:</b> {employee.designation}
      </p>
    </div>
  </div>
  );
}

export default TeamMemberCard;