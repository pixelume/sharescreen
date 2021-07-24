import React from "react";
import { Section } from "../Layout";

const SubHeader = ({ children, style }) => {
  //Logic

  return (
    <Section
      position="relative"
      as="nav"
      backgroundColor="whitesmoke"
      justifyContent="center"
      padding="0px"
      margin="4px 0px 0px"
      height="auto"
      style={{ minHeight: "auto", maxHeight: 43 }}
    >
      {children}
    </Section>
  );
};

export default SubHeader;
