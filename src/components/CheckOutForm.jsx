import { useRef, useState } from "react";
import "../../sass/style.scss";
import React, { Component } from "react";
import { CountryDropdown, RegionDropdown, CountryRegionData } from "react-country-region-selector";
export default function CheckOutForm() {
  const ENDPOINT = "https://kea2semester-e216.restdb.io/rest/foofest";
  const KEY = "615d83068597142da1745455";
  const formEl = useRef(null);
  const [country, setCountry] = useState("");
  function selectCountry(val) {
    setCountry(val);
  }
  function createObject(e) {
    e.preventDefault();

    const ticketHolderObject = {
      firstname: formEl.current.elements.firstname.value,
      lastname: formEl.current.elements.lastname.value,
      email: formEl.current.elements.email.value,
      zipcode: formEl.current.elements.zipcode.value,
      street_address: formEl.current.elements.street_address.value,
      floor: formEl.current.elements.floor.value,
      door: formEl.current.elements.door.value,
    };
    submitted(ticketHolderObject);
  }

  function submitted(ticketHolder) {
    const postData = JSON.stringify(ticketHolder);
    fetch(ENDPOINT, {
      method: "post",
      headers: {
        "Content-type": "application/json",
        "x-apikey": KEY,
      },
      body: postData,
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }
  return (
    <>
      <h1>Booking</h1>
      <form ref={formEl} onSubmit={createObject}>
        <label htmlFor="firstname">Firstname</label>
        <input type="text" id="firstname" required />
        <label htmlFor="lastname">Lastname</label>
        <input type="text" id="lastname" required /> <label htmlFor="email">Email</label>
        <input type="email" id="email" required /> <label htmlFor="zipcode">Zipcode</label>
        <input type="number" id="zipcode" required /> <label htmlFor="street_address">Street address</label>
        <input type="text" id="street_address" required /> <label htmlFor="floor">Floor</label>
        <input type="number" id="floor" required /> <label htmlFor="door">Door</label>
        <input type="text" id="door" required />
        <CountryDropdown value={country} onChange={selectCountry} />{" "}
      </form>
    </>
  );
}
