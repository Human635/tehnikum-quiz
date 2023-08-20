import React, { useState } from "react";
import './styles/main.css';
import Welcome from './pages/Welcome';
import StepOne from './pages/StepOne'
import StepTwo from './pages/StepTwo';
import StepThree from "./pages/StepThree";
import StepFour from "./pages/StepFour";
import Thanks from "./pages/Thanks"

function App() {
  const [currentPage, setCurrentPage] = useState(0)

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 0:
        return<Welcome onGoNextPage={() => setCurrentPage(1)} />    
      case 1:
        return<StepOne onGoNextPage={() => setCurrentPage(2)} />    
      case 2:
        return<StepTwo onGoNextPage={() => setCurrentPage(3)} />    
      case 3:
        return<StepThree onGoNextPage={() => setCurrentPage(4)}/>    
      case 4:
        return<StepFour onGoNextPage={() => setCurrentPage(5)}/>   
      case 5:
        return<Thanks />   
      default:
        break;
    }
  }
    return (
      <div className="App">
        {renderCurrentPage()}
      </div>
    );
}

export default App;
