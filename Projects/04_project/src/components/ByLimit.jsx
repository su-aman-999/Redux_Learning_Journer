import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router";

function ByLimit() {
  const navigate = useNavigate();
  const [limit, setLimit] = useState(0);
  useEffect(() => {
    navigate(`limit/${limit}`);
  }, [limit]);
  return (
    <div style={{ marginTop: "100px" }}>
      <h2>ByLimit {limit}</h2>
      <label htmlFor="limit">Enter Limit </label>
      <input
        type="number"
        id="limit"
        value={limit}
        onChange={(e) => {
          if (e.target.value < 100 && e.target.value >= 1)
            setLimit(e.target.value);
        }}
        max={100}
      />

      <Outlet />
    </div>
  );
}

export default ByLimit;
