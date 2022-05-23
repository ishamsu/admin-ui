import { useEffect, useState } from 'react';

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);
  useEffect(() => {
    if(isShowing){
      document.body.style.overflow = 'hidden';

    }
    else{
      document.body.style.overflow = 'unset';

    }
  },[isShowing]);

  function toggle() {
    setIsShowing(!isShowing);
  }

  return {
    isShowing,
    toggle,
  }
};

export default useModal;