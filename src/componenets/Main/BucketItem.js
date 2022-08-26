import BucketInfoForm from "./NewBucketForm";
import { useState } from "react";
import Bucket from "./Bucket";

const BucketItems = () => {
  const [buckets, setBuckets] = useState([
    {
      title: "Youtube",
      amount: 200,
    },
  ]);

  const addBucket = (bucket) => {
    if (!bucket.text || /^\s*$/.test(bucket.text)) {
      return;
    }
    console.log(bucket);
    const newBuckets = [bucket, ...buckets];

    setBuckets(newBuckets);
    // console.log(...buckets);
  };
  return (
    <div>
      <Bucket buckets={buckets} />
      <BucketInfoForm onSubmit={addBucket} />
    </div>
  );
};

export default BucketItems;
