import { useParams } from "react-router";
import SpendingTotalHeader from "./SpendingTotalHeader";
// import Buckets from "./Buckets";
const Budget = () => {
  const { spend } = useParams();

  return (
    <div>
      <h2>hi! {spend}</h2>
      <SpendingTotalHeader total={spend} />
    </div>
  );
};

export default Budget;
