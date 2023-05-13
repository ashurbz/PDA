import "./index.css";

const ProfileCard = ({ title, handle }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <h4>{handle}</h4>
    </div>
  );
};

export default ProfileCard;
