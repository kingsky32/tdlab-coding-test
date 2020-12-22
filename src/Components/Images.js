import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  overflow-x: auto;
`;

const Image = styled.img`
  width: 20rem;
  height: 13rem;
  flex: 0 0 20rem;
  cursor: pointer;
  object-fit: cover;
  margin-right: 1rem;
`;

const AddImage = styled.div`
  width: 20rem;
  height: 13rem;
  flex: 0 0 20rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ffffff;
  color: #ffffff;
  font-size: 2rem;
  input[type="file"] {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    opacity: 0;
    cursor: pointer;
  }
`;

const Images = ({ images, onAddImage, onChangeThumb }) => {
  return (
    <Container>
      {images &&
        images.map((img, idx) => <Image key={idx} src={img} onClick={() => onChangeThumb(img)} />)}
      <AddImage>
        <input type="file" onChange={onAddImage} />
        Add image
      </AddImage>
    </Container>
  );
};

export default Images;
