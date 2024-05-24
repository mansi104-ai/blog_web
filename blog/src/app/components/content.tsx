// components/home/Content.js

// components/home/Content.tsx

import React, { ReactNode } from 'react';

interface ContentProps {
  children: ReactNode;
}

const Content: React.FC<ContentProps> = ({ children }) => {
  return (
    <div className="container mx-auto px-4">
      {children}
    </div>
  );
};

export default Content;
