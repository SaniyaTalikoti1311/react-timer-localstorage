import { useEffect, useState } from "react";
import "./Timer.css";

const Timer = () => {
  const [seconds, setSeconds] = useState(() => {
    const saved = localStorage.getItem("second");
    return saved !== null ? Number(saved) : 0;
  });
  const [isRunning, setIsRunning] = useState(false);

  // Timer logic
  useEffect(() => {
    let timeId;

    if (isRunning) {
      timeId = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(timeId);
  }, [isRunning]);

  // Save to localStorage whenever seconds changes
  useEffect(() => {
    localStorage.setItem("second", seconds);
  }, [seconds]);

  return (
    <div className="timer-card">
      <h2 className="timer-title">Timer</h2>

      <span className={`timer-status ${isRunning ? "running" : "paused"}`}>
        {isRunning ? "Running" : "Paused"}
      </span>

      <p className="timer-display">{seconds}</p>
      <p className="timer-unit">seconds</p>

      <div className="timer-buttons">
        <button
          className="btn btn-start"
          onClick={() => setIsRunning(true)}
          disabled={isRunning}
        >
          START
        </button>

        <button
          className="btn btn-stop"
          onClick={() => setIsRunning(false)}
          disabled={!isRunning}
        >
          STOP
        </button>

        <button
          className="btn btn-reset"
          onClick={() => {
            setSeconds(0);
            setIsRunning(false);
          }}
        >
          RESET
        </button>
      </div>
    </div>
  );
};

export default Timer;