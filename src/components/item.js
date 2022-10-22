import Button from './Button'
import React from 'react'
import './item.css';

const item = ({title, desce, backgroundImg, rightBtnTxt, rightBtnLink, leftBtnTxt, leftBtnLink, twoButtons, first}) => {
  return (
    <div className='item' style={{
         backgroundImage: `url(${backgroundImg})`
    }}>
        <div className='item__container'>
            <div className='item__text'>
                <p>{title}</p>
                <div className="item__textDesc">
                    <p>{desce}</p>
                </div>
            </div>
            <div className='item__lowerThird'>
                <div className='item__buttons'>
                    <Button imp='primary' text={leftBtnTxt} link={leftBtnLink}/>
                    {twoButtons && (
                        <Button imp="secondary" text={rightBtnTxt} link={rightBtnLink} />
                    )}
                    
                </div>
                {first && (
                    <div className='item__expand'>
                        <img src="../assets/expand_more.svg" alt="expand more" />                        
                    </div>

                )}

            </div>
        </div>
    </div>
  )
}

export default item