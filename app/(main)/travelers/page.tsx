import Image from "next/image";
import React from "react";

const TravelersPage = () => {
  return (
    <div>
      <Image
        src="https://picsum.photos/200/300"
        alt=""
        width={300}
        height={200}
      />
    </div>
  );
};

export default TravelersPage;
