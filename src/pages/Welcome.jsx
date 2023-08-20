import React, { useState } from "react";
import { Header } from "../components/Header";
import { AppButton } from "../components/AppButton";
import { AppInput } from "../components/AppInput";

const Welcome = ({ onGoNextPage }) => {
  const [userName, setUsername] = useState(null)
  const [userPhone, setUserPhone] = useState(null)

  const isNextButtonDisabled = !userName || !userPhone

  return (
      <div className="container">
        <div className="wrapper">
          <div className="welcome">
            <Header type="h1" headerText="Добро пожаловать в квиз от лучшего учебного центра"/>
            <form className="welcome__form">
              <AppInput 
                id="username"
                isRequired={true}
                name="username"
                type="text"
                labelText="Ваше имя"
                placeholderText="Ваш ответ"
                errorText="Введите номер в правильном формате например"
                onChange={(e) => setUsername(e.target.value)}
              />
              <AppInput    
                id="phone"
                isRequired={true}
                name="phone"
                type="tel"
                labelText="Ваш номер"
                placeholderText="+998 9- --- -- -- "
                pattern="^(?:\+998)?(?:\d{2})?(?:\d{7})$"
                errorText="Введите номер в правильном формате"
                onChange={(e) => setUserPhone(e.target.value)}
              />
              <AppButton 
                isDisabled={isNextButtonDisabled}
                type="submit"
                id="next-btn"
                buttonText="Далее"
                onClick={() => onGoNextPage()}                

              />
            </form>
          </div>
        </div>
      </div>
  )
}

export default Welcome;
