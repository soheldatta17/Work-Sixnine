import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "./components/LoadingScreen";
import Mobile from "./Mobile";
import Desktop from "./Desktop";
import Tablet from "./Tablet";

type DeviceType = "mobile" | "tablet" | "desktop" | null;

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [deviceType, setDeviceType] = useState<DeviceType>(null);

  useEffect(() => {
    const checkDeviceType = () => {
      const width = window.innerWidth;
      console.log("Current window width:", width);
      if (width <= 640) {
        setDeviceType("mobile");
      } else if (width <= 930) {
        setDeviceType("tablet");
      } else {
        setDeviceType("desktop");
      }
    };

    // Initial check
    checkDeviceType();

    // On resize
    window.addEventListener("resize", checkDeviceType);
    return () => window.removeEventListener("resize", checkDeviceType);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {(isLoading || deviceType === null) && (
          <LoadingScreen key="loading" onComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>

      {!isLoading && deviceType && (
        <>
          {deviceType === "mobile" && <Mobile />}
          {deviceType === "tablet" && <Tablet />}
          {deviceType === "desktop" && <Desktop />}
        </>
      )}
    </>
  );
}

export default App;
