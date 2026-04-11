import React from "react";
import {
  MainContentContainer,
  MenuContainer,
  PageLayoutContainer,
} from "./styles.pagelayout";

export const PageLayout = () => {
  return (
    <PageLayoutContainer>
      <MainContentContainer></MainContentContainer>
      <MenuContainer></MenuContainer>
    </PageLayoutContainer>
  );
};
