import React from "react";

export const Subtitle = (props) => {
  const hasText = props.value.length > 0;
  return <h2>{hasText ? props.value : "No"} Pictures</h2>
}