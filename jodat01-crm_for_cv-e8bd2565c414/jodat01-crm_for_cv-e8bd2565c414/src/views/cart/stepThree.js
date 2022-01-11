import React, { useState } from 'react'
import { ReactComponent as IconEnvelope } from "bootstrap-icons/icons/envelope.svg";
import { ReactComponent as IconTruck } from "bootstrap-icons/icons/truck.svg";
import { ReactComponent as IconReceipt } from "bootstrap-icons/icons/receipt.svg";
import { ReactComponent as IconCreditCard2Front } from "bootstrap-icons/icons/credit-card-2-front.svg";
import { ReactComponent as IconCart3 } from "bootstrap-icons/icons/cart3.svg";


import {CardElement } from '@stripe/react-stripe-js';

export default () => {
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')

  return (
   
     <div className="card mb-3 border-info">
            <div className="card-header bg-info">
              <IconCreditCard2Front className="i-va" /> Payment Method
            </div>
            <div className="card-body">
              <div className="row g-3 mb-3 border-bottom">
                <div className="col-md-6">
                  <div className="form-check">
                    <input
                      id="credit"
                      name="paymentMethod"
                      type="radio"
                      className="form-check-input"
                      defaultChecked
                      required
                    />
                    <label className="form-check-label" htmlFor="credit">
                      Credit card
                      <img
                        src="../../images/payment/cards.webp"
                        alt="..."
                        className="ml-3"
                        height={26}
                      />
                    </label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-check">
                    <input
                      id="paypal"
                      name="paymentMethod"
                      type="radio"
                      className="form-check-input"
                      required
                    />
                    <label className="form-check-label" htmlFor="paypal">
                      PayPal
                      <img
                        src="../../images/payment/paypal_64.webp"
                        alt="..."
                        className="ml-3"
                        height={26}
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className="row g-3">
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name on card"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Card number"
                  />
                </div>
                <div className="col-md-4">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Expiration month"
                  />
                </div>
                <div className="col-md-4">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Expiration year"
                  />
                </div>
                <div className="col-md-4">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="CVV"
                  />
                </div>
              </div>
            </div>
           
            <div className="card-footer border-info">
              <button type="button" className="btn btn-block btn-info">
                Pay Now <strong>$162</strong>
              </button>
             
            </div>
          
          </div>
        
  )
}
