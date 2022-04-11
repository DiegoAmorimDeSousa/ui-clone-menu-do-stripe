import React, { useRef, useState, useContext, useEffect } from 'react';
import { motion } from 'framer-motion';

import { useDimensions } from './dimensions';
import { Context } from './Provider';

let lastOptionId = 0;

export function DropdownOption({ name, content: Content, backgroundHeight }){

  const idRef = useRef(++lastOptionId);
  const id = idRef.current;

  const [optionsHook, optionDimensions] = useDimensions();
  const [registered, setRegistered] = useState(false);

  const {
    registerOption,
    updateOptionProps,
    deleteOptionById,
    setTargetId,
    targetId,
  } = useContext(Context);

  useEffect(() => {
    
  }, []);

  return (
    <motion.button className="dropdown-option">
      {name}
    </motion.button>
  )
}