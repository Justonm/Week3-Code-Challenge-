import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ bots, removeBot }) {
  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {bots.length > 0 ? (
            bots.map((bot) => (
              <BotCard
                key={bot.id}
                bot={bot}
                handleClick={removeBot}
                handleDelete={removeBot}
              />
            ))
          ) : (
            <div>Your Bot Army is Empty</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
