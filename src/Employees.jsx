import React from "react";
import SelectTeams from "./SelectTeams";
import TeamMembers from "./TeamMembers";

function Employees({
  employees,
  selectedTeam,
  handleCardClick,
  switchTeamName,
}) {
  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-6">
          <SelectTeams
            selectedTeam={selectedTeam}
            switchTeamName={switchTeamName}
          />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-8">
          <div className="card-collection">
              <TeamMembers
              selectedTeam={selectedTeam}
              employees={employees}
              handleCardClick={handleCardClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Employees;
