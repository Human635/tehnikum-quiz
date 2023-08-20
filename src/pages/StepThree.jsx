import React from "react";
import { Indicator } from "../components/Indicator";
import { Header } from "../components/Header";
import { ListedAnswerEmoji } from "../components/ListedAnswerEmoji";
import { AppButton } from "../components/AppButton";

const StepThree = ({ onGoNextPage }) => {
  const id  = [
    {
      id: 'variant-1',
      src: "./img/laugh.png",
      alt: "laugh",
      text: 'Ваш ответ 1'
    },
    {
      id: 'variant-2',
      src: "./img/hearts.png",
      alt: "hearts",
      text: 'Ваш ответ 2'
    },
    {
      id: 'variant-3',
      src: "./img/smirk.png",
      alt: "smirk",
      text: 'Ваш ответ 3'
    },
    {
      id: 'variant-4',
      src: "./img/fright.png",
      alt: "fright",
      text: 'Ваш ответ 4'
    }
  ]

  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
        <Indicator />  
          <div className="question">
          <Header type="h2" headerText="3. Занимательный вопрос" />
            <ul className="emoji-variants">
              {
                id.map(answerItem => (
                  <ListedAnswerEmoji 
                    key={answerItem.id}
                    id={answerItem.id}
                    src={answerItem.src}
                    alt={answerItem.alt}
                    PPP={answerItem.text} 
                    />
                    ))
                  }
            </ul>
            <AppButton 
              isDisabled={true} 
              id="next-btn"
              buttonText="Далее"
              type="submit"
              onClick={() => onGoNextPage()}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default StepThree;
