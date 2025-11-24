import React from "react";

const LikeButtonComponent = () => {
  const [liked, setLiked] = React.useState<boolean>(false);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setLiked(event.target.checked);
  }

  return (
    <div>
      <h2>Example boolean - useState / checkbox</h2>
      <label>
        <input type="checkbox" checked={liked} onChange={handleChange} />I like
        this 💣
      </label>
      <p>You {liked ? "liked this" : "did not like this"}</p>
    </div>
  );
};

export default LikeButtonComponent;
