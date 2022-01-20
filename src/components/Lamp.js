import React, { useEffect, useState } from "react";

const Lamp = (props) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!props.lightId) return;
    setLoading(true);
    fetch(
      "https://192.168.178.29/api/bz9N-o8fL2Y1egtiCRtQfy7ClylfzY84512pzDef/lights/" + props.lightId
    )
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, [props.lightId]);

  if (loading) return <div>Loading....</div>;
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  if (!data) return null;

  if (data) {
    return (
      <div>
        <h1>{data.name}</h1>
        <button>{data.state.on.toString()}</button>
      </div>
    );
  }
};

export default Lamp;
