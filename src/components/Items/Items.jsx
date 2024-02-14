import { useLoaderData } from "react-router-dom";
import Item from "../Item/Item";
import { useState } from "react";
import Swal from "sweetalert2";

const Items = () => {

    const loadedItems = useLoaderData();
    const [items,setItems] = useState(loadedItems)

    const handleDeleteItem = id => {
        fetch(`http://localhost:5000/items/${id}`,{
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount>0){
                Swal.fire({
                    title: 'Deleted',
                    text: 'Product has been deleted',
                    icon: 'success'
                })
                const remaining = items.filter(item=>item._id!==id);
                setItems(remaining);
            }
        })
    }

    return (
        <div className="m-4">
            <div className="row row-cols-1 row-cols-md-3 g-4">
            {
                items.map(item=><Item
                    key={item._id}
                    item={item}
                    handleDeleteItem={handleDeleteItem}
                ></Item>)
            }
            </div>
        </div>
    );
};

export default Items;