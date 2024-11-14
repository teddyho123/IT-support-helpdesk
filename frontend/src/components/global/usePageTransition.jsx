import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function usePageTransition() {
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navigate = useNavigate();

  // Handle initial page loading animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPageLoading(false);
    }, 1000); // Duration matches the BlackScreenIn animation

    return () => clearTimeout(timer); // Clean up timeout on component unmount
  }, []);

  // Function to handle navigation with transition
  const handleNavigate = (path) => {
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      navigate(path);
    }, 500); // Duration matches the BlackScreenOut animation

    return () => clearTimeout(timer); // Clean up timeout on component unmount
  };

  const handleBack = () => {
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      window.history.back();
    }, 500); // Delay matches the BlackScreenScaleOut animation

    return () => clearTimeout(timer);
  };

  return {
    isPageLoading,
    isTransitioning,
    handleNavigate,
    handleBack,
  };
}

export default usePageTransition;
