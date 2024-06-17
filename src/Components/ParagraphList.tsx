import React from "react";

interface ParaParams {
  items: React.ReactNode[];
}

const ParagraphList: React.FC<ParaParams> = ({ items }) => {
  return (
    <>
      {items.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </>
  );
};

export default ParagraphList;
