import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 60rem;
  background-color: rgba(255, 255, 255, 0.25);
  display: flex;
  justify-content: center;
  overflow: hidden;
  align-items: center;
`;

const NoImage = styled.div`
  font-size: 3rem;
  color: #000000;
  font-weight: 400;
`;

const Thumb = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ThumbNail = ({ thumb, className }) => {
  return (
    <Container className={className}>
      {thumb && thumb.length > 0 ? <Thumb src={thumb} alt={thumb} /> : <NoImage>No Image</NoImage>}
    </Container>
  );
};

export default ThumbNail;
