import React, { useState } from "react";
import { Indicator } from "../components/Indicator";
import { Header } from "../components/Header";
import { AppInput } from "../components/AppInput";
import { AppButton } from "../components/AppButton";

const StepOne = ({ onGoNextPage }) => {
  const [userAns, setUserAns] = useState(null)

  const btnActive = !userAns

  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">
          <Indicator />
          <div className="question">
            <Header type="h2" headerText="1. Занимательный вопрос" />
            <AppInput
              isRequired={true}
              type="text"
              name="answer"
              placeholder="Ваш ответ"
              errorText="Введите номер в правильном формате например"
              onChange={(e) => setUserAns(e.target.value)}
            />
            <AppButton 
              isDisabled={btnActive}
              type="submit"
              id="next-btn"
              buttonText="Далее"
              onClick={() => onGoNextPage()}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default StepOne;
