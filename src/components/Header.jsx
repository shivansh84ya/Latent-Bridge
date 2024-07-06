import React from "react";

function Header({ generateRandomPostId }) {
  return (
    <header className="App-header">
      <button onClick={generateRandomPostId}>Generate Random Post ID</button>
    </header>
  );
}

export default Header;
