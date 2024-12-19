
import { CDN_URL } from "../utils/constants"
import { addItem } from "../utils/cartSlice";
import { removeItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
const ItemList = (props) => {
    //console.log(props);
   // console.log(props.items);
    //if (!props.items) return null;

    const dispatch = useDispatch(); // Initialize dispatch
    const handleAddItem = (item)=>{
      dispatch(addItem(item))
      console.log("Added to cart:", item.card.info.name);
    }
    
    const handleRemoveItem = (item) => {
      //dispatch the action
      dispatch(removeItem(item));
    }
  
    // return (
    //   <div>
    //     <ul>
    //       {props.items.map((item) => (
    //         <div key={item.card.info.id} className="p-4 border-b border-gray-200 flex justify-between items-start">
    //           <div className="w-9/12">
    //             <div className="flex justify-between mb-2">
    //               <span className="text-lg font-medium text-gray-600">{item.card.info.name}</span>
    //               <span className="font-medium">
    //                 ₹{item.card.info.price ?
    //                   item.card.info.price / 100
    //                   :
    //                   item.card.info.defaultPrice / 100}
    //               </span>
    //             </div>
    //             <p className="text-sm text-gray-950">{item.card.info.description}</p>
    //           </div>
    //           <div className="w-3/12 relative pl-4">
    //             <div className="relative">
    //               <button className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 px-4 py-2 bg-white text-green-600 font-medium border border-gray-300 rounded-lg shadow-md hover:bg-green-600 hover:text-white transition-colors">Add +</button>
    //             </div>
    //             <img src={CDN_URL + item.card.info.imageId} className="w-full h-24 object-cover rounded-lg" />
    //           </div>
    //         </div>
    //       )
    //       )}
    //     </ul>
    //   </div>
    // )

    return (
        <div className="w-full px-4 pb-4">
          <div className="bg-gray-50">
            {props.items.map((item) => (
              <div 
                key={item?.card?.info?.id} 
                className="p-6 mb-4 border border-gray-200 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start gap-4">
                  <div className="w-9/12">
                    <div className="flex justify-between mb-3">
                      <h3 className="text-lg font-medium text-gray-700">
                        {item?.card?.info?.name}
                      </h3>
                      <span className="font-medium">
                        ₹
                        {item?.card?.info?.price 
                          ? (item?.card?.info?.price / 100)
                          : (item?.card?.info?.defaultPrice / 100)
                        }
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {item?.card?.info?.description}
                    </p>
                  </div>
                  
                  <div className="w-3/12 relative pl-4">
                    {item?.card?.info?.imageId && (
                      <div className="relative">
                        <img 
                          src={CDN_URL + item?.card?.info?.imageId} 
                          alt={item?.card?.info?.name}
                          className="w-full h-28 object-cover rounded-lg"
                        />
 <div className="flex flex-col items-center gap-2 mt-2">
        <button 
          className="px-6 py-2 bg-white text-green-600 font-medium border border-gray-300 rounded-lg shadow-md hover:bg-green-600 hover:text-white transition-all duration-200" 
          onClick={() => handleAddItem(item)}
        >
          Add +
        </button>
        
        <button 
          className="px-6 py-2 bg-white text-red-600 font-medium border border-gray-300 rounded-lg shadow-md hover:bg-red-600 hover:text-white transition-all duration-200" 
          onClick={() => handleRemoveItem(item)}
        >
          Del -
        </button>
      </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
  }
  
  export default ItemList