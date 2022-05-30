export default function GreenCamping({ basket, setBasket }) {
  const updateBasket = () => {
    const product = { product: "Green Camping", price: 249, id: 666 };

// checks to see if item is already in basket; removes if it is
    {
      basket.find((item) => item.id === product.id)
        ? setBasket((prevState) => prevState.filter((item) => item.id !== product.id))
        : setBasket((old) => [...old, product]);
    }
  };

  return (
    <div className="formItem">
      <input type="checkbox" id="greenCamping" name="greenCamping" onChange={updateBasket} />
      <div className="text_content">
        <label htmlFor="greenCamping">Green camping </label>
        <p className="subtext">
          Includes re-usable dishes, eco-friendly toiletries, and solar power rather than burning whale oil
        </p>
      </div>
      <p className="price">+249 DKK</p>
    </div>
  );
}
