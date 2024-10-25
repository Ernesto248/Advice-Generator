import { useEffect, useState } from "react";
import AdviceCard from "./components/AdviceCard";
import { Slip } from "./type";

interface AdviceResponse {
  slip: Slip;
}

function App() {
  const [advice, setAdvice] = useState<Slip>({ id: "", advice: "" });

  const getSlip = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      if (!response.ok) {
        throw new Error("Response was not ok");
      }
      const data: AdviceResponse = await response.json();
      setAdvice(data.slip);
    } catch {
      console.error("Error getting the slip");
    }
  };

  useEffect(() => {
    getSlip();
  }, []);

  const handleButtonPressed = (): void => {
    getSlip();
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-screen bg-slate-900 mb-24">
        <AdviceCard slip={advice} onClick={handleButtonPressed} />
      </div>
    </>
  );
}

export default App;
