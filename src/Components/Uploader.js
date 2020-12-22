import { useState } from "react";
import styled from "styled-components";
import Images from "./Images";
import IsDrag from "./IsDrag";
import ThumbNail from "./ThumbNail";

const Container = styled.div`
  width: 100%;
  position: relative;
`;

const EThumbNail = styled(ThumbNail)`
  margin-bottom: 0.5rem;
`;

const Uploader = () => {
  const [thumb, setThumb] = useState({
    index: 0,
    src: "",
  });
  const [images, setImages] = useState([]);
  const [isDrag, setIsdrag] = useState(false);
  const onAddImage = (event) => {
    const reader = new FileReader();
    const [file] = event.target.files;
    if (!file) return false;
    if (/\.(jpe?g|png|gif)$/i.test(file.name)) {
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        setImages([...images, e.target.result]);
      };
      event.target.value = "";
    } else {
      alert("Please upload the file in image format.");
    }
  };

  const onChangeThumb = (e) => {
    const src = e.target.src;
    const index = e.target.getAttribute("data-index");
    setThumb({ index, src });
  };

  const onDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsdrag(true);
  };

  const onDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsdrag(true);
  };

  const onDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsdrag(false);
  };

  const onDrop = (e) => {
    const reader = new FileReader();
    const [file] = e.dataTransfer.files;
    setIsdrag(false);
    if (!file) return false;
    if (/\.(jpe?g|png|gif)$/i.test(file.name)) {
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        setImages([...images, e.target.result]);
      };
    } else {
      alert("Please upload the file in image format.");
    }
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <Container
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      {isDrag && <IsDrag />}
      <EThumbNail thumb={thumb.src} />
      <Images
        images={images}
        index={thumb.index}
        onAddImage={onAddImage}
        onChangeThumb={onChangeThumb}
      />
    </Container>
  );
};

export default Uploader;
