import { useRef, useState } from "react";
import "../../sass/style.scss";
import React, { Component } from "react";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";
import generalStyles from "/sass/modules/_General.module.scss";

import billing from "/sass/modules/_Billing.module.scss";
export default function CheckOutForm(props) {
  const formEl = useRef(null);
  const [country, setCountry] = useState("");
  const [fullname, setFullname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
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
  function selectCountry(val) {
    setCountry(val);
  }
  function sendTickeholder(e) {
    e.preventDefault();
    console.log(props.setTicketholderdata);
    props.setTicketholderdata(ticketHolderObject);
  }
  function createObject(e) {
    e.preventDefault();
    setFullname(formEl.current.elements.name.value);
    setZipcode(formEl.current.elements.postalcode.value);
    setStreetaddress(formEl.current.elements.street_address.value);
    setApartment(formEl.current.elements.apartment.value);
    setCountry(formEl.current.elements.country.value);
    setCity(formEl.current.elements.city.value);
  }

  return (
    <>
      <h4 className={billing.h4}>BILLING INFORMATION</h4>
      <form ref={formEl} onChange={createObject} className={billing}>
        <label htmlFor="name">Name as on card</label>
        <input type="text" id="name" required />
        <section>
          <div>
            <label htmlFor="street_address">Street address</label>
            <input type="text" id="street_address" required />{" "}
          </div>
          <div>
            <label htmlFor="apartment">Apartment</label>
            <input type="text" id="apartment" required />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="city">City</label>
            <input type="text" id="city" required />
          </div>
          <div>
            <label htmlFor="postalcode">Postal Code</label>
            <input type="number" id="postalcode" required />
          </div>{" "}
        </section>
        {/*  <label htmlFor="lastname">Lastname</label>
        <input type="text" id="lastname" required />{" "} */}
        {/*   <label htmlFor="email">Email</label>
        <input type="email" id="email" required />{" "} */}
        <CountryDropdown
          id="country"
          className={billing}
          value={country}
          onChange={selectCountry}
        />{" "}
        <section className={generalStyles.next_back_buttons}>
          <button>Back</button>
          <button onClick={sendTickeholder}>Next</button>
        </section>
      </form>
    </>
  );
}
