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
  &.active {
    border: 2px solid #3192b0;
  }
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

const Images = ({ images, onAddImage, onChangeThumb, index }) => {
  return (
    <Container>
      {images &&
        images.map((img, idx) => (
          <Image
            key={idx}
            data-index={idx}
            className={parseInt(index) === idx && "active"}
            src={img}
            onClick={onChangeThumb}
          />
        ))}
      <AddImage>
        <input type="file" onChange={onAddImage} />
        Add image
      </AddImage>
    </Container>
  );
};

export default Images;
