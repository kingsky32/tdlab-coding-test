import styled from "styled-components";
import GlobalStyles from "../Styles/GlobalStyles";
import Uploader from "./Uploader";

const RootWrapper = styled.div``;

const Wrapper = styled.div`
  width: 120rem;
  margin: 0 auto;
`;

const App = () => {
  return (
    <RootWrapper>
      <GlobalStyles />
      <Wrapper>
        <Uploader />
      </Wrapper>
    </RootWrapper>
  );
};

export default App;
