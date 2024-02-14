import { Button, Card, CardGroup, ListGroup, Modal } from "react-bootstrap";
import './Item.css'
import { useState } from "react";

const Item = ({ item }) => {

    const { image, name, brand, category, price, description } = item

    const [showModal, setShowModal] = useState(false);

    const handleDetailsClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <CardGroup>
            <Card>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title className="fw-bold fs-4">{name}</Card.Title>
                    <ListGroup.Item className="fw-semibold fs-5">Brand: {brand}</ListGroup.Item>
                    <ListGroup.Item className="fw-semibold fs-5">Type: {category}</ListGroup.Item>
                    <ListGroup.Item className="fw-semibold fs-5">Price: ${price}</ListGroup.Item>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-center gap-4">
                    <Button onClick={handleDetailsClick} variant="primary">Details</Button>
                    <Button variant="success">Add to cart</Button>
                </Card.Footer>
            </Card>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title className="fw-bold">{name} Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{description}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleCloseModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </CardGroup>
    );
};

export default Item;