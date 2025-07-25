import '../css/welcome.css';

const Welcome = () => {
  const currentTime = new Date().toLocaleTimeString();

  return (
    <div className="welcome-wrapper">
      <div className="welcome-box">
        <h1>Hi, I am Jessica</h1>
        <p>Current time: {currentTime}</p>
      </div>
    </div>
  );
};

export default Welcome;