import { useRef, useState } from "react";
import "../../sass/style.scss";
import React, { Component } from "react";
/* import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector"; */
import generalStyles from "/sass/modules/_General.module.scss";
import billing from "/sass/modules/_Billing.module.scss";
import step3 from "/img/step3.svg";
import CountrySelector from "./form_components/CountrySelector";

export default function CheckOutForm(props) {
  const formEl = useRef(null);
  const [country, setCountry] = useState("");
  const [fullname, setFullname] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [streetaddress, setStreetaddress] = useState("");
  const [apartment, setApartment] = useState("");
  const [city, setCity] = useState("");

  const ticketHolderObject = {
    name: fullname,
    street_address: streetaddress,
    apartment: apartment,
    city: city,
    postalcode: zipcode,
    country: country,
  };

  function exportInfo(e) {
    props.setTicketholderdata(ticketHolderObject);
    props.setShowContent(1);
  }
  function createObject(e) {
    e.preventDefault();
    setFullname(formEl.current.elements.name.value);
    setStreetaddress(formEl.current.elements.street_address.value);
    setApartment(formEl.current.elements.apartment.value);
    setCity(formEl.current.elements.city.value);
    setZipcode(formEl.current.elements.postalcode.value);
    setCountry(formEl.current.elements.country.value);
  }
  const ticketholderdata = props.ticketholderdata;
  // console.log(ticketholderdata.apartment);

  return (
    <>
      {" "}
      <img src={step3} alt="" />
      <h4 className={billing.billing_h4}>BILLING INFORMATION</h4>
      <form ref={formEl} onChange={createObject} className={billing.billing_form} onSubmit={exportInfo}>
        <fieldset>
          <div>
            <aside>
              {" "}
              <label htmlFor="name">Name as on card</label>
              {/* <span>Lasse Tihoonen Fiaschi</span> */}
            </aside>

            <input type="text" id="name" required />
          </div>
        </fieldset>

        <fieldset>
          <div>
            <label htmlFor="street_address">Street address</label>
            {/* <span> Guldbergsgade 420</span> */}
            <input type="text" id="street_address" required />{" "}
          </div>
          <div>
            <label htmlFor="apartment">Apartment</label>
            {/* <span>69 TV</span> */}
            <input type="text" id="apartment" required />
          </div>
        </fieldset>
        <fieldset>
          <div>
            <label htmlFor="city">City</label>
            {/* <span>Haderslev</span> */}
            <input type="text" id="city" required />
          </div>
          <div>
            <label htmlFor="postalcode">Postal Code</label>
            {/* <span>6100</span> */}
            <input type="number" id="postalcode" required />
          </div>{" "}
        </fieldset>
        <fieldset>
          <label htmlFor="country">Country</label>
          <CountrySelector id="country" />
        </fieldset>
        <div className={generalStyles.buttonWrapper}>
          <button className={generalStyles.secondaryButton}>Back</button>
          <button className={generalStyles.primaryButton}>Next</button>
        </div>
      </form>
    </>
  );
}
