import mustafa from "../assets/mustafa.jpg";
import hatem from "../assets/hatem.jpg";
import thanoon from "../assets/thanoon.jpg";
import { TeamCard } from "./TeamCard";
import "./Team.css";

//teamCard: img, name, role, linkedIn, github

const team = {
  mustafa: {
    img: mustafa,
    name: "Mustafa Rajeh",
    role: "Frontend Engineer",
    linkedIn: "https://www.linkedin.com/in/mustafa-rajeh",
    github: "https://github.com/kuroafa",
  },
  hatem: {
    img: hatem,
    name: "Hatem Soliman",
    role: "Frontend Engineer",
    linkedIn: "https://www.linkedin.com/in/h4temsoliman/",
    github: "https://github.com/CodeNKoffee",
  },
  thanoon: {
    img: thanoon,
    name: "Thanoon Thabet",
    role: "UI/UX Designer",
    linkedIn:
      "https://www.linkedin.com/in/thanoon-thabet-bsn-rn-wta-c-353391148/",
    github: "",
  },
};

const Team = () => {
  return (
    <div className="teamContainer">
      <h1 className="teamTitle">Team Members</h1>
      <div className="team">
        {Object.keys(team).map((keyName, i) => (
          <TeamCard
            key={i}
            img={team[keyName].img}
            name={team[keyName].name}
            role={team[keyName].role}
            linkedIn={team[keyName].linkedIn}
            github={team[keyName].github}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;
