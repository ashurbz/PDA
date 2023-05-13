import ProfileCard from "./ProfileCard";
import "./index.css";

function App() {
  return (
    <div className="card-container">
      <ProfileCard title="Alexa" handle="@alexa99" />
      <ProfileCard title="Cortana" handle="@cortana540" />
      <ProfileCard title="Siri" handle="@siri555" />
    </div>
  );
}

export default App;
