import { useEffect } from 'react';

const usePreventZoom = () => {
  useEffect(() => {
    const preventZoom = (event) => {
      if (event.ctrlKey || event.metaKey || event.touches?.length > 1) {
        event.preventDefault();
      }
    };

    document.addEventListener('wheel', preventZoom, { passive: false });
    document.addEventListener('keydown', preventZoom);
    document.addEventListener('touchstart', preventZoom, { passive: false });
    document.addEventListener('touchmove', preventZoom, { passive: false });

    return () => {
      document.removeEventListener('wheel', preventZoom);
      document.removeEventListener('keydown', preventZoom);
      document.removeEventListener('touchstart', preventZoom);
      document.removeEventListener('touchmove', preventZoom);
    };
  }, []);
};

export default usePreventZoom;