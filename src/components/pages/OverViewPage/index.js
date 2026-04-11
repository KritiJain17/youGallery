import React from "react";
import { PageLayout } from "../Pagelayout";
import Box from "../../atoms/box.atom";
import { FlatList } from "react-native/types_generated/index";
import { OverViewPageContainer } from "./styles.overview";
import { numValues } from "../../../constants/constantValues";

export const OverView = ({ imageData = [] }) => {
  const IMAGE_SIZE = 100 / numValues?.NUM_COLS;
  return (
    <OverViewPageContainer>
      {imageData?.length > 0 ? (
        <Box>
          {imageData?.map((image) => {
            return (
              <ImageGridBox
                height={IMAGE_SIZE}
                width={IMAGE_SIZE}
                source={{ uri: image }}
              />
            );
          })}
        </Box>
      ) : (
        <></>
      )}
    </OverViewPageContainer>
  );
};
