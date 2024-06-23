import React from 'react'
import Button from './Button'

const ButtonList = () => {
    const list =[
      {
        id:1,
      ButtonName:"All"
    },{
      id:2,
      ButtonName:"Gaming"
    },{
      id:3,
      ButtonName:"Songs"
    },{
      id:4,
      ButtonName:"Live"
    },{
      id:5,
      ButtonName:"Soccers"
    },{
      id:6,
      ButtonName:"Cricket"
    },{
      id:7,
      ButtonName:"News"
    },{
      id:8,
      ButtonName:"Cooking"
    },{
      id:9,
      ButtonName:"Valentines"
    }
  ]
    
  return (
    <div className='flex'>
           {/* <Button name="All"/>
           <Button name="Gaming"/>
           <Button name="Songs"/>
           <Button name="Live"/>
           <Button name="Spccers"/>
           <Button name="Cricket"/>
           <Button name="News"/>
           <Button name="Cooking"/>
           <Button name="Valantines"/> */}
           {
            list.map((item)=>{
                return(
                    <Button key={item.id}name={item.ButtonName}/>
                )
            })
           }
    </div>

   
  )
}

export default ButtonList