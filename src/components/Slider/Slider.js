import { Carousel } from "react-bootstrap";

const Slider = () => {
  return (
    <div>
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.chinatsfreight.com/wp-content/uploads/2013/09/Courier_Freight.jpg"
            alt="P2P"
          />
          <Carousel.Caption>
            <h5>Person 2 Person Delivery</h5>
            <p>
              In a generation where everything happens in an instant, delivery
              services.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://newtaxtaxis.co.uk/wp-content/uploads/2019/05/courier-delivery-service.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Merchant Delivery Service</h5>
            <p>
              Moving entrepreneurship and emotions through Merchant Delivery
              Services from eCourier
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://bonzabfs.com.au/wp-content/uploads/2019/01/shutterstock_299694302.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Air Parcel</h5>
            <p>
              Moving emotions with Speed through Air Parcel Services from
              eCourier
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
