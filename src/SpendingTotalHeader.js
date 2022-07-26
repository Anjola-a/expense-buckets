const SpendingTotalHeader = (props) => {
  //   const [total, updateTotal] = useState("");

  return (
    <div>
      <h1>
        Hey NewSpring Church, you have {props.total} in your spending account
      </h1>
      {/* i want to update total when the tatal get updated */}
    </div>
  );
};

export default SpendingTotalHeader;
