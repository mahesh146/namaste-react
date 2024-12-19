import React,{useState} from 'react'
import ItemList from './ItemList';
const RestaurantCategory = ({data,showItems,setShowIndex}) => {

    console.log("restaurant category",data);
    const handleClick = () => {
        //when RestaurantCategory is a uncontrolled component 👑
        // setShowItems(!showItems);  //if showItems is true make it false and if showItems is false make it true //dropdown toggle feature
    
        //when RestaurantCategory is a controlled component 🧎‍♂️
        setShowIndex();
      }
      if (!data) return null;
//   return (
   
    
//         <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg rounded-lg overflow-hidden">
//         {/**Header */}

//         <div className="p-4 flex justify-between items-center cursor-pointer bg-white" onClick={handleClick}>
//           <h3 className="font-bold text-lg text-gray-700">{data.title} ({data.itemCards.length}) </h3>
//           <span className={`transform transition-transform duration-200 ${showItems ? 'rotate-180' : ''}`}>⮛</span>
//         </div>


//         <div className={`transition-all duration-200 ${showItems ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
//         {/**Accordion Body */}     
//         { showItems && <ItemList items={data.itemCards} />} 
//         </div>
//         </div>

//   )


return (
    <div className="w-6/12 mx-auto my-6 bg-gray-50 shadow-lg rounded-lg overflow-hidden">
      <div 
        className="p-5 flex justify-between items-center cursor-pointer bg-white border-b border-gray-200"
        onClick={setShowIndex}
      >
        <h3 className="font-bold text-lg text-gray-700">
          {data?.title} ({data?.itemCards?.length || 0})
        </h3>
        <span className={`text-2xl transform transition-transform duration-200 ${showItems ? 'rotate-180' : ''}`}>
          ⌄
        </span>
      </div>
      
      <div className={`transition-all duration-300 ease-in-out ${
        showItems 
          ? 'max-h-[2000px] opacity-100 py-4' 
          : 'max-h-0 opacity-0 overflow-hidden py-0'
      }`}>
        {showItems && <ItemList items={data?.itemCards} />}
      </div>
    </div>
  );
}

export default RestaurantCategory