import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <Skilllist />
      </div>
    </div>
  );
}
function Avatar() {
  return <img className="avatar" src="shubham.jpg" alt="shubham goswami" />;
}

function Intro() {
  return (
    <div>
      <h1>Shubham Goswami</h1>
      <p>
        My Name is Shubham Goswami.I did my graduation from cdac noida in master
        of computer Application.i recently passout in 2023 and i am currently
        searching for job.there is some following set of my skill mention below.
      </p>
    </div>
  );
}
function Skilllist() {
  return (
    <div className="Skill-list">
      <Skill skill="React" emoji="👌" color="blue" />
      <Skill skill="HTML" emoji="👌" color="violet" />
      <Skill skill="Javascript" emoji="👌" color="red" />
      <Skill skill="Springboot" emoji="😢" color="yellow" />
    </div>
  );
}
function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
