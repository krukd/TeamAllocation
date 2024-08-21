import React from "react";
import { useState } from "react";

function GroupedTeamsMembers({ employees, selectedTeam, setTeam }) {
  const [groupedEmployees, setData] = useState(groupedByTeam());

  function groupedByTeam() {
    const teams = [];

    const teamAMembers = employees.filter(
      (employee) => employee.teamName === "TeamA"
    );
    const teamA = {
      team: "TeamA",
      members: teamAMembers,
      collapsed: selectedTeam === "TeamA" ? false : true,
    };
    teams.push(teamA);

    const teamBMembers = employees.filter(
      (employee) => employee.teamName === "TeamB"
    );
    const teamB = {
      team: "TeamB",
      members: teamBMembers,
      collapsed: selectedTeam === "TeamB" ? false : true,
    };
    teams.push(teamB);

    const teamCMembers = employees.filter(
      (employee) => employee.teamName === "TeamC"
    );
    const teamC = {
      team: "TeamC",
      members: teamCMembers,
      collapsed: selectedTeam === "TeamC" ? false : true,
    };
    teams.push(teamC);

    const teamDMembers = employees.filter(
      (employee) => employee.teamName === "TeamD"
    );
    const teamD = {
      team: "TeamD",
      members: teamDMembers,
      collapsed: selectedTeam === "TeamD" ? false : true,
    };
    teams.push(teamD);

    return teams;
  }

  function collapseListMembers(event) {
    const transformedGroup = groupedEmployees.map((teamObject) =>
      teamObject.team === event.currentTarget.id
        ? { ...teamObject, collapsed: !teamObject.collapsed }
        : teamObject
    );
    setData(transformedGroup);
    setTeam(event.currentTarget.id);
  }

  return (
    <div className="container mt-3 mb-3">
      {groupedEmployees.map((team) => {
        return (
          <div key={team.team} className="card m-2">
            <h3
              id={team.team}
              className="card-header m-2"
              style={{ cursor: "pointer" }}
              onClick={collapseListMembers}
            >
              {team.team}
            </h3>
            <div
              id={"collapse_" + team.team}
              className={team.collapsed === true ? "collapse" : ""}
            >
              <hr />
              {team.members.map((member) => {
                return (
                  <div key={member.id} className="mt-2">
                    <h5 className="card-title">
                      <span className="text-dark">
                        <b>Full name: </b> {member.fullName}
                      </span>
                    </h5>
                    <p className="card-text mb-3">
                      <b>Designation: </b>
                      {member.designation}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default GroupedTeamsMembers;
