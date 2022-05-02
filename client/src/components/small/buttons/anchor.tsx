// Package imports
import React from 'react';

interface Props {
  children: React.ReactNode;
  href: string;
}

const Anchor: React.FC<Props> = ({ children, href }) => {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
};

export default Anchor;
