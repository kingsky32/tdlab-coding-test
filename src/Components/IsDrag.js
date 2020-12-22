import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  color: #ffffff;
  pointer-events: none;
`;

const IsDrag = () => {
  return <Container>Drag & Drop Image</Container>;
};

export default IsDrag;
