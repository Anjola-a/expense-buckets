import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SetBalance = () => {
  const [income, updateIncome] = useState(0);
  const [savings, updateSavings] = useState(0);
  const [spend, updatespend] = useState(0);

  useEffect(() => {
    updatespend(() => income - savings);
  }, [income, savings]);

  return (
    <div>
      <form>
        <label>
          What was your income for this month?
          <input
            id="income"
            value={income}
            placeholder="0.00"
            onChange={(e) => updateIncome(e.target.value)}
          />
        </label>
        <label>
          How much would you like to save?
          <input
            id="savings"
            value={savings}
            placeholder="0.00"
            onChange={(e) => updateSavings(e.target.value)}
          />
        </label>
        <Link to={`/budget/${spend}`}>
          <button>Submit</button>
        </Link>
      </form>
    </div>
  );
};
export default SetBalance;
