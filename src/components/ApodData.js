import React from "react";
import Img from "./Img";
import Video from "./Video";
import Details from "./Details";
import styled from "styled-components";

const ApodData = (props) => {
  const { apodData } = props;
  const ApodDiv = styled.div`
    text-align: right;
    width: 50%;
    margin: auto;
    padding: 3%;
    border: 5px solid black;
    &:hover {
      border: 2px solid red;
    }
  `;
  return (
    <ApodDiv>
      {apodData.media_type == "image" ? (
        <Img url={apodData.hdurl} />
      ) : (
        <Video url={apodData.url} />
      )}
      <Details apodData={apodData} />
    </ApodDiv>
  );
};

export default ApodData;
