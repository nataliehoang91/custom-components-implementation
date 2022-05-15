import React from "react";
import "./App.css";

import styled from "styled-components";

import Button from "./components/Button/Button";

const Wrapper = styled.div`
  margin: 12px;
`;
const FlexWrapper = styled.div`
  display: flex;
  margin: 12px;
`;
const Container = styled.div`
  padding: 48px;
`;

const ComponentTitle = styled.h2`
  margin-bottom: 8px;
`;

const SectionTitle = styled.h4`
  margin-bottom: 8px;
`;

function App() {
  return (
    <Container>
      <ComponentTitle>Button</ComponentTitle>
      <SectionTitle>Filled</SectionTitle>
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
      <SectionTitle>Outline</SectionTitle>
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
      <SectionTitle>Link</SectionTitle>
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
      <SectionTitle>Disabled State</SectionTitle>
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
      <SectionTitle>Loading State</SectionTitle>
      <FlexWrapper>
        <Wrapper>
          <Button
            text="Filled Basic"
            variant="basic"
            onClick={() => console.log("clicked")}
            loading
          />
        </Wrapper>
        <Wrapper>
          <Button
            text="Filled Primary"
            variant="primary"
            onClick={() => console.log("clicked")}
            loading
          />
        </Wrapper>
        <Wrapper>
          <Button
            text="Filled Success"
            variant="success"
            onClick={() => console.log("clicked")}
            loading
          />
        </Wrapper>
        <Wrapper>
          <Button
            text="Filled Error"
            variant="error"
            onClick={() => console.log("clicked")}
            loading
          />
        </Wrapper>
      </FlexWrapper>
      <FlexWrapper>
        <Wrapper>
          <Button
            text="Outline Basic"
            variant="basic"
            onClick={() => console.log("clicked")}
            loading
            btnType="outline"
          />
        </Wrapper>
        <Wrapper>
          <Button
            text="Outline Primary"
            variant="primary"
            onClick={() => console.log("clicked")}
            loading
            btnType="outline"
          />
        </Wrapper>
        <Wrapper>
          <Button
            text="Outline Success"
            variant="success"
            onClick={() => console.log("clicked")}
            loading
            btnType="outline"
          />
        </Wrapper>
        <Wrapper>
          <Button
            text="Outline Error"
            variant="error"
            onClick={() => console.log("clicked")}
            loading
            btnType="outline"
          />
        </Wrapper>
      </FlexWrapper>
      <FlexWrapper>
        <Wrapper>
          <Button
            btnType="link"
            text="Basic Link"
            href="#"
            loading
            onClick={() => console.log("clicked")}
          />
        </Wrapper>
        <Wrapper>
          <Button
            btnType="link"
            text="Primary Link"
            variant="primary"
            href="#"
            loading
            onClick={() => console.log("clicked")}
          />
        </Wrapper>
        <Wrapper>
          <Button
            btnType="link"
            text="Success Link"
            variant="success"
            href="#"
            loading
            onClick={() => console.log("clicked")}
          />
        </Wrapper>
        <Wrapper>
          <Button
            btnType="link"
            text="Error Link"
            variant="error"
            href="#"
            loading
            onClick={() => console.log("clicked")}
          />
        </Wrapper>
      </FlexWrapper>
    </Container>
  );
}

export default App;
