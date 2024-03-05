import React, { useEffect } from "react";

function Github() {
  const [data, setData] = React.useState([]);
  useEffect(() => {
    fetch("https://github.com/Noob-Sanket")
      .then((Response) => Response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
  return (
    <div
      className="text-center m-4 bg-gray-600 text-white
   p-4 text-3xl"
    >
      Github
    </div>
  );
}

export default Github;
