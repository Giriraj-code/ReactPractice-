import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Cards from "./components/Cards";
const App = () => {
  const [userData, setUserData] = useState([]);
  const [page, setPage] = useState(1);

  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${page}&limit=10`,
    );
    console.log(response);
    setUserData(response.data);
  };

  useEffect(
    function () {
      getData();
    },
    [page],
  );

  let printData = (
    <h1 className="text-gray-400  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      Loading....
    </h1>
  );
  if (userData.length > 0) {
    printData = userData.map(function (elem, idx) {
      return (
        <div key={idx}>
         <Cards elem={elem}/>
        </div>
      );
    });
  }

  return (
    <div className="bg-black overflow-auto h-screen p-20 text-white">
      {/* <button
        onClick={getData}
        className="bg-green-600 m-4 active:scale-95 text-white px-5 py-2 rounded"
      >
        Get Data
      </button> */}
      <div className="flex h-[120%] flex-wrap gap-4">{printData}</div>

      <div className="flex justify-center items-center gap-1">
        <button
        style={{opacity:page == 1 ?0.5 : 1}}
          onClick={() => {
            if (page > 1) {
              setPage(page - 1);
              setUserData([]);
            }
          }}
          className="bg-amber-500 m-4 active:scale-95 text-white px-5 py-2 rounded"
        >
          Prev
        </button>
        <h2>Page {page}</h2>
        <button 
          onClick={() => {
            setUserData([]);

            setPage(page + 1);
          }}
          className="bg-amber-500 m-4 active:scale-95 text-white px-5 py-2 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
