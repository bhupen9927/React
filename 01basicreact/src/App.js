import React, { useState, useEffect } from "react";
import DisclaimerPopup from "./components/DisclaimerPopup/DisclaimerPopup";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <div>
      <DisclaimerPopup isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}

export default App;
