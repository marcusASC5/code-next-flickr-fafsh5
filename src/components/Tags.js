import React from "react";
import './Tags.css';

const TAGS = [
  'flex',
  'Cheese BoRgoR',
  'comida',
  '음식',
  'cibo',
  'nourriture'
];

export const Tags = props => {
  const onClick = tag => () => {
    props.onClick(tag);
  }

  return (
    <div className="spaced">
      {TAGS.map(tag => (
        <span className="badge badge-primary" onClick={onClick(tag)}>{tag}</span>
      ))}
    </div>
  );
};