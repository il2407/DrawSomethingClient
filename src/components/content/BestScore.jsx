import { Card } from "@mui/material";
import { getSession } from "../../utils/EndGameRequest";
import { useEffect, useState } from "react";
const BASE_URL = process.env.REACT_APP_API_KEY;

function BestScore(props) {
  const [highScore, setHighScore] = useState(0);
  const [bestTime, setBestTime] = useState(0);

  const updateHighScore = async () => {
    //Get the score and time
    const { data } = await getSession(BASE_URL + "/sessions");
    setHighScore(data.sessions[0].score);
    setBestTime(data.sessions[0].time);
  };

  useEffect(() => {
    updateHighScore();
  }, []);

  return (
    <>
      <Card className="cont">
        <>Best Score is : {highScore}</>
        <br></br>
        <>Best time is : {bestTime} Seconds </>
      </Card>
      <br></br>
    </>
  );
}

export default BestScore;