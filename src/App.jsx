import React, { useState } from "react";
import Greetings from "./components/Greeter";
import { useEffect } from "react";

const App = () => {
  const [username, setUsername] = useState("");

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      console.log("effective code in progress!");
    }, 3000);
  }, [loaded]);

  const toggle = () => {
    setLoaded(!loaded);
  };

  if (loaded === false) {
    return <button onClick={toggle}>'Toggle with a Website loading...'</button>;
  }

  return (
    <section>
      <h1>React to React</h1>
      <br />
      <br />
      <Greetings phrase="Hello there" name="TK" />
      <Greetings phrase="Hello there" name="Cap" />
      <Greetings phrase="Hello there" name="Grace" />

      <br />
      <br />

      <input
        type="password"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <p>You are logging in as {username}</p>

      <br />
      <button onClick={toggle}>'Toggle with a Website loaded...'</button>
    </section>
  );
};

export default App;
