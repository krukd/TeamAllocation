import React from "react";
import TeamMemberCard from "./TeamMemberCard";

function TeamMembers({ selectedTeam, employees, handleCardClick }) {
  return employees.map((employee) => (
    <TeamMemberCard
      selectedTeam={selectedTeam}
      employee={employee}
      handleCardClick={handleCardClick}
    />
  ));
}

export default TeamMembers;
