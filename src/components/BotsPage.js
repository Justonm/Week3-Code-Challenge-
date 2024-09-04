import React from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage({ bots, yourBotArmy, enlistBot, removeBot, dischargeBot }) {
  return (
    <div>
      <YourBotArmy
        bots={yourBotArmy}
        removeBot={removeBot}
      />
      <BotCollection
        bots={bots}
        enlistBot={enlistBot}
        dischargeBot={dischargeBot}
      />
    </div>
  );
}

export default BotsPage;
