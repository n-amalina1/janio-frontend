import { useOutletContext, useParams } from "react-router-dom";
import React, { useState } from "react";
import { formatToPostOrder } from "../../api/formatApi";
import { putAxios } from "../../api/adminApi";

function EditOrder() {
  const { orders } = useOutletContext();
  let { id } = useParams();
  const order = orders.filter((o) => o.order_id === parseInt(id))[0];

  const [length, setLength] = useState(order.order_length);
  const [width, setWidth] = useState(order.order_width);
  const [height, setHeight] = useState(order.order_height);
  const [weight, setWeight] = useState(order.order_weight);
  const [nameC, setNameC] = useState(order.consignee.consignee_name);
  const [phoneC, setPhoneC] = useState(order.consignee.consignee_phone_number);
  const [countryC, setCountryC] = useState(order.consignee.consignee_country);
  const [addressC, setAddressC] = useState(order.consignee.consignee_address);
  const [postalC, setPostalC] = useState(order.consignee.consignee_postal);
  const [emailC, setEmailC] = useState(order.consignee.consignee_email);
  const [stateC, setStateC] = useState(order.consignee.consignee_state);
  const [cityC, setCityC] = useState(order.consignee.consignee_city);
  const [provinceC, setProvinceC] = useState(
    order.consignee.consignee_province
  );
  const [nameP, setNameP] = useState(order.pickup.pickup_name);
  const [phoneP, setPhoneP] = useState(order.pickup.pickup_phone_number);
  const [countryP, setCountryP] = useState(order.pickup.pickup_country);
  const [addressP, setAddressP] = useState(order.pickup.pickup_address);
  const [postalP, setPostalP] = useState(order.pickup.pickup_postal);
  const [stateP, setStateP] = useState(order.pickup.pickup_state);
  const [cityP, setCityP] = useState(order.pickup.pickup_city);
  const [provinceP, setProvinceP] = useState(order.pickup.pickup_province);
  const [items, setItems] = useState(order.items);

  const updateOrder = async () => {
    const updatedOrder = formatToPostOrder(
      id,
      length,
      width,
      height,
      weight,
      "Pending",
      order.consignee.consignee_id,
      nameC,
      phoneC,
      countryC,
      addressC,
      postalC,
      stateC,
      cityC,
      provinceC,
      emailC,
      order.pickup.pickup_id,
      nameP,
      phoneP,
      countryP,
      addressP,
      postalP,
      stateP,
      cityP,
      provinceP
    );

    console.log(updatedOrder);

    const resp = await putAxios("order", updatedOrder);
    console.log(resp);
  };

  return (
    <div className="container px-5">
      <div className="row my-5 pb-5">
        <h2 className="text-center mb-4">Update Order</h2>
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

            <div className="row mt-5 mb-4">
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
                                <label className="form-label">Category:</label>
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
                            </div>
                            <div className="row">
                              <div className="form-group col-md-2">
                                <label className="form-label">Quantity:</label>
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
                                  value={item.item_price}
                                  onChange={(e) =>
                                    setItems((items) => {
                                      items[i].item_price = parseInt(
                                        e.target.value
                                      ).toFixed;
                                      return [...items];
                                    })
                                  }
                                />
                              </div>
                              <div className="form-group col-md-2">
                                <label className="form-label">Currency:</label>
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
                            {i !== items.length - 1 && <hr className="my-4" />}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <button
              type="button"
              className="btn btn-primary px-5"
              onClick={updateOrder}
            >
              Edit Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditOrder;
