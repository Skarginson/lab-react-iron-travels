import TravelPlan from "../src/assets/travel-plans.json";
import { useState } from "react";

function TravelList() {
  const [TravelIdeas, setTravelIdeas] = useState(TravelPlan);

  return (
    <div>
      <h2>Travel List</h2>
      {TravelPlan.map((TravelIdeas) => {
        return qsd;
      })}
    </div>
  );
}

export default TravelList;
