import { useEffect, useState } from "react";

function useCustomStyle() {
  const [shouldApplyCustomStyle, setShouldApplyCustomStyle] = useState(false);

  useEffect(() => {
    function handleResize() {
      setShouldApplyCustomStyle(window.innerWidth < 640);
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return shouldApplyCustomStyle;
}

export default useCustomStyle;
