import React from "react";
import "./App.css";

import styled from "styled-components";

import Button from "./components/Button";

const Wrapper = styled.div`
  margin: 12px;
`;

function App() {
  return (
    <div style={{ padding: 50 }}>
      <Wrapper>
        <Button text="Basic" onClick={() => console.log("clicked")} />
      </Wrapper>
      <Wrapper>
        <Button
          text="Primary"
          variant="primary"
          onClick={() => console.log("clicked")}
        />
      </Wrapper>
      <Wrapper>
        <Button
          text="Success"
          variant="success"
          onClick={() => console.log("clicked")}
        />
      </Wrapper>
      <Wrapper>
        <Button
          text="Error"
          variant="error"
          onClick={() => console.log("clicked")}
        />
      </Wrapper>
    </div>
  );
}

export default App;
