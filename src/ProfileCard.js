import "./index.css";

const ProfileCard = ({ title, handle, image }) => {
  return (
    <div className="card">
      <img className="image" src={image} alt="pda" />
      <span className="title">{title}</span>
      <span className="handle">{handle}</span>
    </div>
  );
};

export default ProfileCard;
