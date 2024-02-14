import { Form } from "react-bootstrap";
import Swal from "sweetalert2";

const Products = () => {

    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const image = form.image.value;
        const name = form.name.value;
        const brand = form.brand.value;
        const category = form.category.value;
        const price = form.price.value;
        const description = form.description.value;

        const newProduct = {image,name,brand,category,price,description};

        fetch('http://localhost:5000/items',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                Swal.fire({
                    title: 'Success',
                    text: 'Product has been added',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
            }
            form.reset();
        })
    }

    return (
        <div>
            <h3 className="text-center my-4 fw-semibold text-decoration-underline">Add Product</h3>
            <Form onSubmit={handleSubmit}>
                <div className="w-75 mx-auto">
                    <div className="d-flex gap-3 px-4 pt-2">
                        <Form.Group className="mb-3 w-100" controlId="formBasicPhoto">
                            <Form.Label className="fw-semibold ms-2">Image URL</Form.Label>
                            <Form.Control type="text" name="image" placeholder="Enter Image URL" />
                        </Form.Group>
                        <Form.Group className="mb-3 w-100" controlId="formBasicName">
                            <Form.Label className="fw-semibold ms-2">Name</Form.Label>
                            <Form.Control type="text" name="name" placeholder="Enter Name" required />
                        </Form.Group>
                    </div>
                    <div className="d-flex gap-3 px-4 pt-2">
                        <Form.Group className="mb-3 w-100" controlId="formBasicBrand">
                            <Form.Label className="fw-semibold ms-2">Brnad Name</Form.Label>
                            <Form.Control type="text" name="brand" placeholder="Enter Brand Name" required />
                        </Form.Group>
                        <Form.Group className="w-100" controlId="formBasicName">
                            <Form.Label className="fw-semibold ms-2">Category</Form.Label>
                            <Form.Select name="category" aria-label="Default select example">
                                <option>Select type</option>
                                <option value="Mobile">Mobile</option>
                                <option value="Computer">Computer</option>
                                <option value="Headphone">Headphone</option>
                            </Form.Select>
                        </Form.Group>
                    </div>
                    <div className="d-flex gap-3 px-4 pt-2">
                        <Form.Group className="mb-3 w-100" controlId="formBasicPrice">
                            <Form.Label className="fw-semibold ms-2">Price</Form.Label>
                            <Form.Control type="text" name="price" placeholder="Enter Amount $" required />
                        </Form.Group>
                        <Form.Group className="mb-3 w-100" controlId="formBasicDes">
                            <Form.Label className="fw-semibold ms-2">Description</Form.Label>
                            <Form.Control type="text" name="description" placeholder="Enter Short Description" />
                        </Form.Group>
                    </div>
                    <div className="text-center">
                        <input type="submit" className="btn btn-primary" value="submit" />
                    </div>
                </div>
            </Form>
        </div>
    );
};

export default Products;