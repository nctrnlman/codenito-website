import React, { useState } from "react";
import { ClipLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function Splash() {
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#ffffff");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <button onClick={() => setLoading(!loading)} className="mb-4">
          Toggle Loader
        </button>
        <input
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="Color of the loader"
          className="w-full p-2 border border-gray-300 rounded"
        />

        <ClipLoader
          color={color}
          loading={loading}
          css={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    </div>
  );
}

export default Splash;
