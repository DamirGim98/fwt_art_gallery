import { useEffect, MutableRefObject } from 'react';

const useLazyLoading = (
  ref: MutableRefObject<HTMLElement | null>,
  cb: () => void,
  rootMargin = '0px',
) => {
  useEffect(() => {
    if (!ref?.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          cb();
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin,
      },
    );
    observer.observe(ref.current);
  }, [ref]);
};

export default useLazyLoading;
