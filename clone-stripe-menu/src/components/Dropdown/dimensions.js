import { useState, useCallback, useLayoutEffect } from 'react';

const getDimensions = element => element.getBoundingClientRect();

export function useDimensions(responsive = true){
  const [dimensions, setDismensions] = useState(null);
  const [element, setElement] = useState(null);

  const hook = useCallback(e => setElement(e), []);

  useLayoutEffect(() => {
    if(element) {
      const updateDimensions = () => {
        window.requestAnimationFrame(() => {
          setElement(getDimensions(element));
        })
      };

      updateDimensions();

      if(responsive) {
        window.addEventListener('resize', updateDimensions);

        return () => {
          window.removeEventListener('resize', updateDimensions);
        }
      }
    }
  }, [element, hook, responsive]);

  return [hook, dimensions, element];
}