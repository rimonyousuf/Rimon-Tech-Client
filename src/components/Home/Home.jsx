import { Carousel } from "react-bootstrap";

const Home = () => {
    return (
        <Carousel className="mt-4" data-bs-theme="dark">
            <Carousel.Item>
                <img
                    className="mx-auto d-block w-50"
                    src="https://dam.which.co.uk/IC19565-0669-00-front-800x600.webp"
                    alt="First slide"
                />
                <Carousel.Caption className="text-center">
                    <h5>Acer Laptop</h5>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="mx-auto d-block w-50"
                    src="https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGUlMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D"
                    alt="Second slide"
                />
                <Carousel.Caption className="text-center">
                    <h5>Apple Laptop</h5>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="mx-auto d-block w-50"
                    src="https://m.media-amazon.com/images/I/412GnMmXyXL._AC_UF1000,1000_QL80_.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption className="text-center">
                    <h5>Sony Laptop</h5>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="mx-auto d-block w-50"
                    src="https://www.pcworld.com/wp-content/uploads/2023/04/dell_chromebook_11_lid_march_2014-100252464-orig-12.jpg?quality=50&strip=all"
                    alt="Third slide"
                />
                <Carousel.Caption className="text-center">
                    <h5>Chrome Laptop</h5>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="mx-auto d-block w-50"
                    src="https://images.indianexpress.com/2020/11/IntelNUC15_LAPTOP.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption className="text-center">
                    <h5>Intel Laptop</h5>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="mx-auto d-block w-50"
                    src="https://www.cnet.com/a/img/resize/3fe749f67da7744d6802a7001213a98887aebdda/hub/2017/07/11/8af0dca6-7aa3-4f02-9ae1-91fd81192340/samsung-notebook-9-2017-08.jpg?auto=webp&fit=crop&height=1200&width=1200"
                    alt="Third slide"
                />
                <Carousel.Caption className="text-center">
                    <h5>Samsung Laptop</h5>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Home;
