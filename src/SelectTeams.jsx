import React from "react";


function SelectTeams({ selectedTeam, switchTeamName }) {
  return (
    <select
      className="form-select form-select-lg mb-4"
      value={selectedTeam}
      onChange={switchTeamName}
    >
      <option value="TeamA">TeamA</option>
      <option value="TeamB">TeamB</option>
      <option value="TeamC">TeamC</option>
      <option value="TeamD">TeamD</option>
    </select>
  );
}

export default SelectTeams;
