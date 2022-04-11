import React, { useContext, useMemo, useState } from 'react';
import { motion } from 'framer-motion';

import { Context } from './Provider';
import { DropdownSection } from './Section';

const refDuration = 0.22;

export function DropdownRoot() {

  const { options, cacheId, getOptionById, targetId } = useContext(Context);

  const cacheOption = useMemo(() => {getOptionById(cacheId)}, [cacheId, getOptionById]);

  let [width, height, x] = [0, 0, 0];

  if(cacheOption){
    const { optionCenterX, contentDimensions } = cacheOption;

    width = contentDimensions?.width;
    height = contentDimensions?.height;
    x = optionCenterX - width / 2;
  }

  const [hovering, setHovering] = useState(false);

  const isActive = targetId !== null || hovering;

  // First interaction
  const [hasInterected, setHasInterected] = useState(false);
  const isFirstInteraction = isActive && !hasInterected;

  if(isFirstInteraction){
    setTimeout(() => {
      if(!hasInterected) setHasInterected(true);
    }, 15);
  }

  return (
    <div className="dropdown-root">
      <motion.div 
        className="dropdown-container"
        animate={{
          x,
          width,
          height,
          pointerEvents: isActive ? 'unset' : 'none',
        }}
        transitio={{
          ease: 'easeOut',
          x: isFirstInteraction ? { duration: 0 } : refDuration,
          width: { duration: isFirstInteraction ? 0 : refDuration * 0.93 },
          height: { duration: isFirstInteraction ? 0 : refDuration * 0.93 },
          pointerEvents: { dalay: 0.05 },
        }}
        onHoverStart={() => setHovering(true)}
        onHoverEnd={() => setHovering(false)}
      >
        <motion.div
          animate={{
            x: -x,
          }}
          trasition={{
            x: isFirstInteraction ? { duration: 0 } : undefined,
          }}
        >
          {options.map(item => <DropdownSection key={item.id} option={item} />)}
        </motion.div>
      </motion.div>
    </div>
  );
}