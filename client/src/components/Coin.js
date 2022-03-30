import React from 'react'
import { useState } from 'react';
import frontImg from "./front.png";
import backImg from "./back.png";

export const Coin = () => {
    //set state for img
    const [imgUrl, setImgUrl] = useState(null);
    const [score, setScore] = useState(0);

    function flipCoin() {
        let randomNum = Math.round(Math.random() * (2-1) + 1);
        console.log('either 1 or 2', randomNum);

        if(randomNum === 1) {
            setImgUrl(frontImg);
            console.log('one: front');
        } else if (randomNum === 2) {
            setImgUrl(backImg);
            console.log('two: back');
        }
        // console.log('random num',randomNum);
        // return randomNum;

        const currentScore = score + 1;
        setScore(currentScore);
        console.log('current score', currentScore);
        
    };

    


    //have each button point to the same increment count
    // const handleScoreButtonClick = () => {
    //     // const currentScore = score + 1;
    //     // setScore(currentScore);
    // }

    let coinImg = <img width="200px" src={imgUrl}/>;

  return (
    <div>
        <button onClick={() => flipCoin()}>Flip</button>
        <button onClick={() => setImgUrl(null)}>Reset</button>
        {coinImg}
    </div>
  );
};
