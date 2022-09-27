import { useState, useEffect } from 'react';

const useScrollLock = () => {
  const bodyStyle = document.body.style;

  const [isLocked, setIsLocked] = useState<boolean>(bodyStyle.overflowY === 'hidden');

  useEffect(() => {
    bodyStyle.overflowY = isLocked ? 'hidden' : 'auto';
  }, [isLocked, bodyStyle]);

  return () => setIsLocked(!isLocked);
};

export default useScrollLock;
