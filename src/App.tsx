import React from "react";
import "./App.css";

import styled from "styled-components";

import Button from "./components/Button/Button";

const Wrapper = styled.div`
  margin: 12px;
`;
const FlexWrapper = styled.div`
  display: flex;
`;
const Container = styled.div`
  padding: 48px;
`;

function App() {
  return (
    <Container>
      <FlexWrapper>
        <Wrapper>
          <Button text="Filled Basic" onClick={() => console.log("clicked")} />
        </Wrapper>
        <Wrapper>
          <Button
            text="Filled Primary"
            variant="primary"
            onClick={() => console.log("clicked")}
          />
        </Wrapper>
        <Wrapper>
          <Button
            text="Filled Success"
            variant="success"
            onClick={() => console.log("clicked")}
          />
        </Wrapper>
        <Wrapper>
          <Button
            text="Filled Error"
            variant="error"
            onClick={() => console.log("clicked")}
          />
        </Wrapper>
      </FlexWrapper>
      <FlexWrapper>
        <Wrapper>
          <Button
            text="Outline Basic"
            btnType="outline"
            onClick={() => console.log("clicked")}
          />
        </Wrapper>
        <Wrapper>
          <Button
            text="Outline Primary"
            variant="primary"
            btnType="outline"
            onClick={() => console.log("clicked")}
          />
        </Wrapper>
        <Wrapper>
          <Button
            text="Outline Success"
            variant="success"
            btnType="outline"
            onClick={() => console.log("clicked")}
          />
        </Wrapper>
        <Wrapper>
          <Button
            text="Outline Error"
            variant="error"
            btnType="outline"
            onClick={() => console.log("clicked")}
          />
        </Wrapper>
      </FlexWrapper>
      <FlexWrapper>
        <Wrapper>
          <Button
            btnType="link"
            text="Basic Link"
            href="#"
            onClick={() => console.log("clicked")}
          />
        </Wrapper>
        <Wrapper>
          <Button
            btnType="link"
            text="Primary Link"
            variant="primary"
            href="#"
            onClick={() => console.log("clicked")}
          />
        </Wrapper>
        <Wrapper>
          <Button
            btnType="link"
            text="Success Link"
            variant="success"
            href="#"
            onClick={() => console.log("clicked")}
          />
        </Wrapper>
        <Wrapper>
          <Button
            btnType="link"
            text="Error Link"
            variant="error"
            href="#"
            onClick={() => console.log("clicked")}
          />
        </Wrapper>
      </FlexWrapper>
      <FlexWrapper>
        <Wrapper>
          <Button
            text="Filled (Disabled)"
            onClick={() => console.log("clicked")}
            disabled
          />
        </Wrapper>
        <Wrapper>
          <Button
            text="Outline (Disabled)"
            variant="primary"
            onClick={() => console.log("clicked")}
            disabled
            btnType="outline"
          />
        </Wrapper>
        <Wrapper>
          <Button
            text="Link (Disabled)"
            onClick={() => console.log("clicked")}
            disabled
            btnType="link"
          />
        </Wrapper>
      </FlexWrapper>
    </Container>
  );
}

export default App;
