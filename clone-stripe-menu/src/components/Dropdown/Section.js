import React, { useContext } from 'react';
import { motion } from 'framer-motion';

import { Context } from './Provider';

export function DropdownSection({ option }) {

  const { cacheId} = useContext(Context);

  const {id, optionCenterX, contentDimensios} = option;

  const contentWidth = contentDimensios?.width || 0;
  const x = optionCenterX - contentWidth / 2;

  const isActive = cacheId === id;

  return (
    <div 
      className="dropdown-section"
      initial={{
        x,
      }}
      animate={{
        x,
        opacity: isActive ? 1 : 0, 
        pointerEvents: isActive ? 'unset' : 'none',
      }}
      transition={{
        ease: 'easeOut',
        opacity: { duration: 0.2},
      }}
    >
      <option.WrapperContent />
    </div>
  )
}