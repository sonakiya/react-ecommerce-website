import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "../components/Modal.css";
import { useLocation, useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const [show, setShow] = useState(false);
  const [activeTab, setActiveTab] = useState("visa");

  // Handle tab change
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  //when order is confirmed direct to home page
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname ||"/"

  const handleOrderConfirm=()=>{
    alert("Your Order is placed successfully!")
    localStorage.removeItem("cart");
    navigate(from,{replace:true})
  }

  return (
    <div className="modalCard">
      <Button variant="primary" className="py-2" onClick={handleShow}>
        Proceed to Checkout
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        animation={false}
        className="modal fade"
        centered
      >
        <div className="modal-dialog">
          <h5 className="px-3 mb-3">Select Your Payment Method</h5>
          <div className="modal-content">
            <div className="modal-body">
              <div className="tabs mt-3">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <a
                      href="#visa"
                      className={`nav-link ${
                        activeTab === "visa" ? "show active" : ""
                      }`}
                      id="visa-tab"
                      data-toggle="tab"
                      role="tab"
                      aria-controls="visa"
                      aria-selected={activeTab === "visa"}
                      onClick={() => handleTabChange("visa")}
                    >
                      <img
                        src="../visa-removebg-preview.png"
                        alt=""
                        width={90}
                      />
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      href="#paypal"
                      className={`nav-link ${
                        activeTab === "paypal" ? "show active" : ""
                      }`}
                      id="paypal-tab"
                      data-toggle="tab"
                      role="tab"
                      aria-controls="paypal"
                      aria-selected={activeTab === "paypal"}
                      onClick={() => handleTabChange("paypal")}
                    >
                      <img
                        src="../visa-removebg-preview.png"
                        alt=""
                        width={90}
                      />
                    </a>
                  </li>
                </ul>

                {/* Tab content */}
                <div className="tab-content" id="myTabContent">
                  {/* Visa content */}
                  <div
                    className={`tab-pane fade ${
                      activeTab === "visa" ? "show active" : ""
                    }`}
                    id="visa"
                    role="tabpanel"
                    aria-labelledby="visa-tab"
                  >
                    {/* Visa tab content */}
                    <div className="mt-4 mx-4"> 
                      <div className="text-center">
                        <h5>Credit Card</h5>
                      </div>

                      <div className="form mt-3">
                        <div className="inputbox">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            className="form-control"
                            required
                          />
                          <span>Cardholder Name</span>
                        </div>
                        <div className="inputbox">
                          <input
                            type="text"
                            name="number"
                            id="number"
                            className="form-control"
                            required
                          />
                          <span>Card Number</span>
                        </div>
                        <div className="d-flex flex-row">
                          <div className="inputbox">
                            <input
                              type="text"
                              name="expiration"
                              id="expiration"
                              className="form-control"
                              required
                            />
                            <span>Expiration Date</span>
                          </div>
                          <div className="inputbox">
                            <input
                              type="text"
                              name="cvv"
                              id="cvv"
                              className="form-control"
                              required
                            />
                            <span>CVV</span>
                          </div>
                        </div>

                        <div className="px-5 pay">
                          <button className="btn btn-success btn-block" onClick={handleOrderConfirm}>
                            Order Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* PayPal content */}
                  <div
                    className={`tab-pane fade ${
                      activeTab === "paypal" ? "show active" : ""
                    }`}
                    id="paypal"
                    role="tabpanel"
                    aria-labelledby="paypal-tab"
                  >
                    <div className="mt-4 mx-4"> 
                      <div className="text-center">
                        <h5>Paypal Account Info</h5> 
                      </div>

                      <div className="form mt-3">
                        <div className="inputbox">
                          <input
                            type="text"
                            name="email"
                            id="email"
                            className="form-control"
                            required
                          />
                          <span>Enter Your Email</span>
                        </div>
                        <div className="inputbox">
                          <input
                            type="text"
                            name="name"
                            id="paypalName"
                            className="form-control"
                            required
                          />
                          <span>Your Name</span>
                        </div>

                        {/* Removed unnecessary row to simplify layout */}
                        <div className="inputbox">
                          <input
                            type="text"
                            name="extraInfo"
                            id="extraInfo"
                            className="form-control"
                            required
                          />
                          <span>Extra Info</span> 
                        </div>

                        <div className="px-5 pay">
                          <button className="btn btn-success btn-block" onClick={handleOrderConfirm}>
                            Add Paypal
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                 
                </div>
                {/* paypal desclamier */}
                <p className="mt-3 px-4 p-Disclaimer"><em>Payment Disclaimer</em>In no event shall payment or partial payment by Owner for any material or service</p>
              </div>


            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CheckoutPage;
