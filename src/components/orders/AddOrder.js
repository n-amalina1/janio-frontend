import React, { useState } from "react";
import { itemInit } from "./constantOrder";

function AddOrder() {
  const [length, setLength] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [status, setStatus] = useState("Pending");
  const [nameC, setNameC] = useState("");
  const [phoneC, setPhoneC] = useState("");
  const [countryC, setCountryC] = useState("");
  const [addressC, setAddressC] = useState("");
  const [postalC, setPostalC] = useState(0);
  const [emailC, setEmailC] = useState("");
  const [stateC, setStateC] = useState("");
  const [cityC, setCityC] = useState("");
  const [provinceC, setProvinceC] = useState("");
  const [nameP, setNameP] = useState("");
  const [phoneP, setPhoneP] = useState("");
  const [countryP, setCountryP] = useState("");
  const [addressP, setAddressP] = useState("");
  const [postalP, setPostalP] = useState(0);
  const [stateP, setStateP] = useState("");
  const [cityP, setCityP] = useState("");
  const [provinceP, setProvinceP] = "";
  const [items, setItems] = useState([]);
  const [addItem, setAddItem] = useState(false);

  const addNewItem = () => {
    setAddItem(true);
    setItems([...items, itemInit]);
  };
  const addNewOrder = () => {};

  return (
    <div className="container px-5">
      <div className="row my-5 pb-5">
        <h2 className="text-center mb-4">Add New Order</h2>
        <div className="col-md-10 offset-1">
          <h5 className="mb-4">Order Details</h5>

          <div className="row mb-4">
            <div className="form-group col-md-2">
              <label className="form-label">Length:</label>
              <input
                className="form-control mb-4 mb-md-0"
                type="number"
                name="length"
                value={length}
                onChange={(e) => setLength(e.target.value)}
              />
            </div>
            <div className="form-group col-md-2">
              <label className="form-label">Width:</label>
              <input
                className="form-control mb-4 mb-md-0"
                type="number"
                name="width"
                value={width}
                onChange={(e) => setWidth(e.target.value)}
              />
            </div>
            <div className="form-group col-md-2">
              <label className="form-label">Height:</label>
              <input
                className="form-control mb-4 mb-md-0"
                type="number"
                name="height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>
            <div className="form-group col-md-2">
              <label className="form-label">Weight:</label>
              <input
                className="form-control mb-4 mb-md-0"
                type="number"
                name="weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
            <div className="form-group col-md-2">
              <label className="form-label">Status:</label>
              <input
                className="form-control mb-4 mb-md-0"
                type="text"
                name="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              />
            </div>

            <div className="row mt-5">
              <div className="accordion" id="accordion">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="accordionConsignee">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseConsignee"
                      aria-expanded="true"
                      aria-controls="accordionConsignee"
                    >
                      <b>Consignee Details</b>
                    </button>
                  </h2>
                  <div
                    id="collapseConsignee"
                    className="accordion-collapse collapse show"
                    aria-labelledby="accordionConsignee"
                  >
                    <div className="accordion-body">
                      <div className="row my-4">
                        <div className="form-group col-md-4">
                          <label className="form-label">Name:</label>
                          <input
                            className="form-control mb-4 mb-md-0"
                            type="text"
                            name="nameC"
                            value={nameC}
                            onChange={(e) => setNameC(e.target.value)}
                          />
                        </div>

                        <div className="form-group col-md-3">
                          <label className="form-label">Phone Number:</label>
                          <input
                            className="form-control mb-4 mb-md-0"
                            type="text"
                            name="phoneC"
                            value={phoneC}
                            onChange={(e) => setPhoneC(e.target.value)}
                          />
                        </div>

                        <div className="form-group col-md-3">
                          <label className="form-label">Country:</label>
                          <input
                            className="form-control mb-4 mb-md-0"
                            type="text"
                            name="countryC"
                            value={countryC}
                            onChange={(e) => setCountryC(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="row mb-4">
                        <div className="form-group col-md-7">
                          <label className="form-label">Address:</label>
                          <input
                            className="form-control mb-4 mb-md-0"
                            type="text"
                            name="addressC"
                            value={addressC}
                            onChange={(e) => setAddressC(e.target.value)}
                          />
                        </div>

                        <div className="form-group col-md-2">
                          <label className="form-label">Postal:</label>
                          <input
                            className="form-control mb-4 mb-md-0"
                            type="text"
                            name="postalC"
                            value={postalC}
                            onChange={(e) => setPostalC(e.target.value)}
                          />
                        </div>

                        <div className="form-group col-md-3">
                          <label className="form-label">Email:</label>
                          <input
                            className="form-control mb-4 mb-md-0"
                            type="text"
                            name="emailC"
                            value={emailC}
                            onChange={(e) => setEmailC(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="row mb-4">
                        <div className="form-group col-md-3">
                          <label className="form-label">State:</label>
                          <input
                            className="form-control mb-4 mb-md-0"
                            type="text"
                            name="stateC"
                            value={stateC}
                            onChange={(e) => setStateC(e.target.value)}
                          />
                        </div>

                        <div className="form-group col-md-3">
                          <label className="form-label">City:</label>
                          <input
                            className="form-control mb-4 mb-md-0"
                            type="text"
                            name="cityC"
                            value={cityC}
                            onChange={(e) => setCityC(e.target.value)}
                          />
                        </div>

                        <div className="form-group col-md-3">
                          <label className="form-label">Province:</label>
                          <input
                            className="form-control mb-4 mb-md-0"
                            type="text"
                            name="provinceC"
                            value={provinceC}
                            onChange={(e) => setProvinceC(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="accordionPickup">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapsePickup"
                      aria-expanded="false"
                      aria-controls="accordionPickup"
                    >
                      <b>Pickup Details</b>
                    </button>
                  </h2>
                  <div
                    id="collapsePickup"
                    className="accordion-collapse collapse"
                    aria-labelledby="accordionPickup"
                  >
                    <div className="accordion-body">
                      <div className="row my-4">
                        <div className="form-group col-md-4">
                          <label className="form-label">Name:</label>
                          <input
                            className="form-control mb-4 mb-md-0"
                            type="text"
                            name="nameP"
                            value={nameP}
                            onChange={(e) => setNameP(e.target.value)}
                          />
                        </div>

                        <div className="form-group col-md-3">
                          <label className="form-label">Phone Number:</label>
                          <input
                            className="form-control mb-4 mb-md-0"
                            type="text"
                            name="phoneP"
                            value={phoneP}
                            onChange={(e) => setPhoneP(e.target.value)}
                          />
                        </div>

                        <div className="form-group col-md-3">
                          <label className="form-label">Country:</label>
                          <input
                            className="form-control mb-4 mb-md-0"
                            type="text"
                            name="countryP"
                            value={countryP}
                            onChange={(e) => setCountryP(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="row mb-4">
                        <div className="form-group col-md-7">
                          <label className="form-label">Address:</label>
                          <input
                            className="form-control mb-4 mb-md-0"
                            type="text"
                            name="addressP"
                            value={addressP}
                            onChange={(e) => setAddressP(e.target.value)}
                          />
                        </div>

                        <div className="form-group col-md-2">
                          <label className="form-label">Postal:</label>
                          <input
                            className="form-control mb-4 mb-md-0"
                            type="text"
                            name="postalP"
                            value={postalP}
                            onChange={(e) => setPostalP(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="row mb-4">
                        <div className="form-group col-md-3">
                          <label className="form-label">State:</label>
                          <input
                            className="form-control mb-4 mb-md-0"
                            type="text"
                            name="stateP"
                            value={stateP}
                            onChange={(e) => setStateP(e.target.value)}
                          />
                        </div>

                        <div className="form-group col-md-3">
                          <label className="form-label">City:</label>
                          <input
                            className="form-control mb-4 mb-md-0"
                            type="text"
                            name="cityP"
                            value={cityP}
                            onChange={(e) => setCityP(e.target.value)}
                          />
                        </div>

                        <div className="form-group col-md-3">
                          <label className="form-label">Province:</label>
                          <input
                            className="form-control mb-4 mb-md-0"
                            type="text"
                            name="provinceP"
                            value={provinceP}
                            onChange={(e) => setProvinceP(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {addItem > 0 && (
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="accordionItems">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseItems"
                        aria-expanded="false"
                        aria-controls="accordionItems"
                      >
                        <b>Items Details</b>
                      </button>
                    </h2>
                    <div
                      id="collapseItems"
                      className="accordion-collapse collapse"
                      aria-labelledby="accordionItems"
                    >
                      <div className="accordion-body">
                        {items.map((item, i) => {
                          return (
                            <div className="my-4" key={i}>
                              <div className="row mb-4">
                                <div className="form-group col-md-2">
                                  <label className="form-label">Item ID:</label>
                                  <input
                                    className="form-control mb-4 mb-md-0"
                                    type="number"
                                    name={`id${i}`}
                                    value={item.item_id}
                                    onChange={(e) =>
                                      setItems((items) => {
                                        items[i].item_id = e.target.value;

                                        return [...items];
                                      })
                                    }
                                  />
                                </div>
                                <div className="form-group col-md-6">
                                  <label className="form-label">
                                    Description:
                                  </label>
                                  <input
                                    className="form-control mb-4 mb-md-0"
                                    type="text"
                                    name={`desc${i}`}
                                    value={item.item_desc}
                                    onChange={(e) =>
                                      setItems((items) => {
                                        items[i].item_desc = e.target.value;
                                        return [...items];
                                      })
                                    }
                                  />
                                </div>
                                <div className="form-group col-md-3">
                                  <label className="form-label">
                                    Category:
                                  </label>
                                  <input
                                    className="form-control mb-4 mb-md-0"
                                    type="text"
                                    name={`category${i}`}
                                    value={item.item_category}
                                    onChange={(e) =>
                                      setItems((items) => {
                                        items[i].item_category = e.target.value;
                                        return [...items];
                                      })
                                    }
                                  />
                                </div>
                              </div>
                              <div className="row">
                                <div className="form-group col-md-3">
                                  <label className="form-label">Sku:</label>
                                  <input
                                    className="form-control mb-4 mb-md-0"
                                    type="text"
                                    name={`sku${i}`}
                                    value={item.item_sku}
                                    onChange={(e) =>
                                      setItems((items) => {
                                        items[i].item_sku = e.target.value;
                                        return [...items];
                                      })
                                    }
                                  />
                                </div>
                                <div className="form-group col-md-2">
                                  <label className="form-label">
                                    Quantity:
                                  </label>
                                  <input
                                    className="form-control mb-4 mb-md-0"
                                    type="number"
                                    name={`quantity${i}`}
                                    value={item.item_quantity}
                                    onChange={(e) =>
                                      setItems((items) => {
                                        items[i].item_quantity = e.target.value;

                                        return [...items];
                                      })
                                    }
                                  />
                                </div>
                                <div className="form-group col-md-2">
                                  <label className="form-label">Price:</label>
                                  <input
                                    className="form-control mb-4 mb-md-0"
                                    type="number"
                                    name={`price${i}`}
                                    value={parseFloat(item.item_price).toFixed(
                                      2
                                    )}
                                    onChange={(e) =>
                                      setItems((items) => {
                                        items[i].item_price = e.target.value;

                                        return [...items];
                                      })
                                    }
                                  />
                                </div>
                                <div className="form-group col-md-2">
                                  <label className="form-label">
                                    Currency:
                                  </label>
                                  <input
                                    className="form-control mb-4 mb-md-0"
                                    type="text"
                                    name={`currency${i}`}
                                    value={item.item_currency}
                                    onChange={(e) =>
                                      setItems((items) => {
                                        items[i].item_currency = e.target.value;
                                        return [...items];
                                      })
                                    }
                                  />
                                </div>
                              </div>
                              {i !== items.length - 1 && (
                                <hr className="my-5" />
                              )}
                            </div>
                          );
                        })}
                      </div>
                      <div className="text-center">
                        <button
                          type="button"
                          className="btn btn-danger px-3 mb-4"
                          onClick={addNewItem}
                        >
                          Add New Item
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          {!addItem && (
            <button
              type="button"
              className="btn btn-danger px-3 mb-4 mt-3"
              onClick={addNewItem}
            >
              Add New Item
            </button>
          )}
          <div className="text-center">
            <button
              type="button"
              className="btn btn-primary px-5 mt-4"
              onClick={addNewOrder}
            >
              Add New Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddOrder;
