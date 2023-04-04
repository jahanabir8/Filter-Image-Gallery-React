// import React, {useState} from 'react'
// import './Menus.css'
// import { Menu } from './Menu';
// // import { Menu } from './Menu';
// // import Menu from './Menu'

// const Gallery = () => {

//     const [items, setItems] = useState(Menu);
    
//    const filterItem = (categItem) =>{
//     const updateItems = Menu.filter((curElem)=>{
//         return curElem.category === categItem
//     })

//     setItems(updateItems)
//    }

//     return (
//         <>
//             <h1 className="mt-5 text-center main-heading">Order Your Favourite Dish</h1>
//             <hr />
            
//             <div className="menu-tabs container">
//                 <div className="menu-tab d-flex justify-content-around">
//                     <button className="btn btn-warning" onClick={() =>filterItem('breakfast')}>Breakfast</button>
//                     <button className="btn btn-warning">Lunch</button>
//                     <button className="btn btn-warning">Evening</button>
//                     <button className="btn btn-warning">Dinner</button>
//                     <button className="btn btn-warning" onClick={() =>setItems(Menu)}>All</button>
//                 </div>
//             </div>

//             {/* my main items section  */}
//             <div className="menu-items container-fluid mt-5">
//                 <div className="row">
//                     <div className="col-11 mx-auto">
//                         <div className="row my-5">
//                             {
//                                 items&&items.length>0&& items?.map((props) => {
//                                     const {name} = props

//                                     return(
//                                         <h1>{name}</h1>
//                                     )
//                                 })
//                             }
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Gallery