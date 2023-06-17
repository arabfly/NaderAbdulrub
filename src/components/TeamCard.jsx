import { BsLinkedin, BsGithub } from "react-icons/bs";

export const TeamCard = ({ img, name, role, linkedIn, github }) => {
  return (
    <div className="teamCard">
      <div className="memberImgContainer">
        <img src={img} alt="teamMember" className="memberImg" />
      </div>
      <div className="memberInfo">
        <h1>{name}</h1>
        <h2>{role}</h2>
        <div className="memberSocials">
          <a href={linkedIn} target="_blank" rel="noreferrer">
            <BsLinkedin size={25} />
          </a>
          <a href={github} target="_blank" rel="noreferrer">
            <BsGithub size={25} />
          </a>
        </div>
      </div>
    </div>
  );
};
