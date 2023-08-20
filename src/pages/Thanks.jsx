import React from "react";
import { Header } from "../components/Header";
import { AppButton } from "../components/AppButton";
import { Paragraph } from "../components/Paragraph";

const Thanks = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="thanks">
          <img src="./img/bell.png" alt="bell" />
          <Header type="h1" headerText="Спасибо за прохождение опроса!" />
          <Paragraph ParagraphText="Получи свою скидку по ссылке ниже или другое блаблабла" />
          <AppButton id="get-link" buttonText="Получить ссылку" type="submit" />
        </div>
      </div>
    </div>
  )
}

export default Thanks
