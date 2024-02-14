import { useLoaderData } from "react-router-dom";
import Item from "../Item/Item";

const Items = () => {

    const items = useLoaderData();

    return (
        <div className="m-4">
            <div className="row row-cols-1 row-cols-md-3 g-4">
            {
                items.map(item=><Item
                    key={item._id}
                    item={item}
                ></Item>)
            }
            </div>
        </div>
    );
};

export default Items;