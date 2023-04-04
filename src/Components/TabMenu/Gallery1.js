import React, { useState } from 'react';
import { Menu } from './Menu';
import './Menus.css'

const Gallery1 = () => {
    // const [items, setItems] = useState(Menu)
    // const filterItem = (itemsCategory) =>{
    //     const filtered = Menu.filter((currentElement)=>{
    //         return currentElement.category.toLowerCase() === itemsCategory.toLowerCase()
    //     })
    //     setItems(filtered)
    // }    
    // return (
    //     <div>
    //         <div className='nab-btn d-flex justify-content-center'>
    //             <button onClick={()=> setItems(Menu)}>All</button>
    //             <button className='mx-5' onClick={()=>filterItem('breakfast')}>BreakFast</button>
    //             <button className='mx-5' onClick={()=>filterItem('launch')}>Launch</button>
    //             <button onClick={()=>filterItem('dinner')}>Dinner</button>
    //         </div>
    //         <div className='items'>
    //             {
    //                 items.map((props) =>{
    //                     const {name, price, description} = props

    //                     return(
    //                         <div className='item'>
    //                             <h4>Name: {name}</h4>
    //                             <p>Price: {price}</p>
    //                             <p>Description: {description}</p>
    //                         </div>
    //                     )
    //                 })
    //             }
    //         </div>
    //     </div>
    // );


    const [items, setItems] = useState(Menu)

    const filterItem = (currentItem) =>{
        const updatedItem = Menu.filter((currentElement)=>{
            return currentElement.category === currentItem
        })
        setItems(updatedItem)
    }

    return(
        <div>
            <div className='d-flex justify-content-center mt-5 mb-4'>
                <button onClick={()=>setItems(Menu)}>All</button>
                <button onClick={()=>filterItem('Breakfast')} className='mx-5'>Breakfast</button>
                <button onClick={()=>filterItem('Launch')} className='me-5'>Launch</button>
                <button onClick={()=>filterItem('Dinner')}>Dinner</button>
            </div>

            <div className='items'>
            {
                items.map((props)=>{
                    const {name, price, description} = props
                    return(
                        <div className='item'> 
                            <h4>Name: {name}</h4>
                            <p>Price: {price}</p>
                            <p>Description: {description}</p>
                        </div>
                    )
                })
            }
        </div>
        </div>
    )

};

export default Gallery1;