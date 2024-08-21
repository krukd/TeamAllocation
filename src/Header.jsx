import React from "react";


function Header({selectedTeam, countMembersPerTeam}) {
  
  return (
    <div className="m-3">
      <h1>Team Member Allocation</h1>
      <h3>{selectedTeam} has {countMembersPerTeam()} {countMembersPerTeam() === 1 ? 'member' : 'members'}</h3>
      
    </div>
  );
}

export default Header;
