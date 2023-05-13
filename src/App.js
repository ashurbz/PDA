import ProfileCard from "./ProfileCard";
import { ALEXA_IMG_URL, SIRI_IMG_URL, CORTANA_IMG_URL } from "./constant";
import "./index.css";

function App() {
  return (
    <div className="card-container">
      <ProfileCard title="Alexa" handle="@alexa99" image={ALEXA_IMG_URL} />
      <ProfileCard
        title="Cortana"
        handle="@cortana540"
        image={CORTANA_IMG_URL}
      />
      <ProfileCard title="Siri" handle="@siri555" image={SIRI_IMG_URL} />
    </div>
  );
}

export default App;
