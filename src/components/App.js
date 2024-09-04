import React, { useState, useEffect } from "react";
import BotsPage from "./BotsPage";

function App() {
  const [bots, setBots] = useState([]);
  const [yourBotArmy, setYourBotArmy] = useState([]);

  // Fetch bots data
  useEffect(() => {
    fetch("http://localhost:8002/bots")
      .then((response) => response.json())
      .then((data) => setBots(data));
  }, []);

  // Function to add a bot to your army
  const enlistBot = (bot) => {
    if (!yourBotArmy.some((b) => b.id === bot.id)) {
      setYourBotArmy([...yourBotArmy, bot]);
    }
  };

  // Function to remove a bot from your army
  const removeBot = (bot) => {
    setYourBotArmy(yourBotArmy.filter((b) => b.id !== bot.id));
  };

  // Function to remove a bot from the main bot list
  const dischargeBot = (botId) => {
    setBots(bots.filter((b) => b.id !== botId));
  };

  return (
    <div className="App">
      <BotsPage
        bots={bots}
        yourBotArmy={yourBotArmy}
        enlistBot={enlistBot}
        removeBot={removeBot}
        dischargeBot={dischargeBot}
      />
    </div>
  );
}

export default App;
