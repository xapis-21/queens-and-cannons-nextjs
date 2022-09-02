import React, { useState } from "react";
import { FormGroup, SelectCountry } from "./";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { send } from "@emailjs/browser";

const Checkout = ({ price, type, title, country }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [nop, setNop] = useState("");
  const [origin, setOrigin] = useState("");
  const [street, setStreet] = useState("");
  const [serviceDate, setServiceDate] = useState("");
  const [total, setTotal] = useState(price);
  const [payType, setPayType] = useState("Full Payment");

  const fullPaymentConfig = {
    public_key: process.env.NEXT_PUBLIC_FLUTTER_KEY,
    tx_ref: Date.now(),
    amount: total,
    currency: "USD",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: email,
      phonenumber: contact,
      name: name,
    },
    customizations: {
      title: "Queens and Canons Safaris",
      description: title,
      logo: "https://github.com/xapis-21/portfolio_images/raw/main/portifolio-images/favicon.png",
    },
  };

  const fortyPaymentConfig = {
    public_key: process.env.NEXT_PUBLIC_FLUTTER_KEY,
    tx_ref: Date.now(),
    amount: total * 0.4,
    currency: "USD",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: email,
      phonenumber: contact,
      name: name,
    },
    customizations: {
      title: "Queens and Canons Safaris",
      description: title,
      logo: "https://github.com/xapis-21/portfolio_images/raw/main/portifolio-images/favicon.png",
    },
  };

  const templateParams = {
    from_name: "queensandcanonsafaris.com",
    name: name
      .toLowerCase()
      .split(" ")
      .map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" "),
    paid: `${payType} of ${type}`,
    amount: total,
    country_of_origin: origin,
    street_address: street,
    service: title,
    date_of_service: serviceDate,
    number_of_people: nop,
    phone: contact,
  };

  const sendEmail = () => {
    send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_KEY,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_KEY,
      templateParams,
      process.env.NEXT_PUBLIC_EMAILJS_KEY
    )
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handlefullFlutterPayment = useFlutterwave(fullPaymentConfig);
  const handlefortyFlutterPayment = useFlutterwave(fortyPaymentConfig);

  const handleFullPayment = (e) => {
    e.preventDefault();
    handlefullFlutterPayment({
      callback: (response) => {
        sendEmail();
        console.log(response);
        closePaymentModal(); // this will close the modal programmatically
      },
      onClose: () => {},
    });
  };

  const handleFortyPayment = (e) => {
    e.preventDefault();
    setPayType("40% Deposit");
    setTotal(total * 0.4);
    handlefortyFlutterPayment({
      callback: (response) => {
        sendEmail();
        console.log(response);
        closePaymentModal(); // this will close the modal programmatically
      },
      onClose: () => {},
    });
  };

  return (
    <div className="w-screen">
      <div className="w-full max-w-[1000px] mx-auto flex flex-col-reverse items-center lg:items-start lg:flex-row lg:justify-between">
        <form
          action=""
          className="w-full px-2 mx-2 lg:mr-8 grid lg:grid-cols-2 grid-cols-1 gap-2 bg-white card-shadow md:px-4 rounded-2xl py-8"
        >
          <h2 className="font-[500] text-2xl py-2 mb-8">
            Personal Information
          </h2>
          <FormGroup
            label={"Name"}
            isrequired
            addCss={"col-span-2"}
            holder={"Enter full name"}
            type="text"
            handleChange={(e) => {
              setName(e.target.value);
            }}
          />
          <FormGroup
            label={"Email Address"}
            isrequired
            type={"email"}
            addCss={"col-span-2"}
            holder={"Enter email Address"}
            handleChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <FormGroup
            label={"Contact"}
            isrequired
            type={"tel"}
            holder={"phone number"}
            addCss={"col-span-2 lg:col-span-1"}
            handleChange={(e) => {
              setContact(e.target.value);
            }}
          />
          <FormGroup
            label={"Number of people"}
            type={"number"}
            min={1}
            isrequired
            holder={"Number of people"}
            addCss={"col-span-2 lg:col-span-1"}
            handleChange={(e) => {
              setNop(e.target.value);
              console.log(parseInt(price), parseInt(e.target.value));
              setTotal(
                parseInt(e.target.value) > 0 &&
                  parseInt(price) * parseInt(e.target.value)
              );
            }}
          />
          <SelectCountry
            isrequired
            handleChange={(e) => {
              setOrigin(e.target.value);
            }}
          />
          <FormGroup
            label={"Street Address"}
            isrequired
            type={"text"}
            holder={"street address"}
            addCss={"col-span-2 lg:col-span-1"}
            handleChange={(e) => {
              setStreet(e.target.value);
            }}
          />

          <FormGroup
            label={"Date of service"}
            type={"date"}
            holder={"Date of travel"}
            addCss={"col-span-2 lg:col-span-1"}
            handleChange={(e) => {
              setServiceDate(e.target.value);
            }}
          />

          <button
            type="button"
            onClick={handleFullPayment}
            className="bg-green-light col-span-2 lg:col-span-1 h-[50px] rounded-lg text-white hover:brightness-110 duration-300"
          >
            FULL PAYMENT
          </button>
          <strong className="grid place-items-center lg:hidden">OR</strong>
          <button
            type="button"
            onClick={handleFortyPayment}
            className="bg-black col-span-2 lg:col-span-1 h-[50px] rounded-lg text-white hover:text-green-light duration-300"
          >
            40% DEPOSIT
          </button>
        </form>
        <div className=" w-full max-w-[300px] flex flex-col justify-between py-8 h-fit bg-white card-shadow px-4 rounded-2xl mb-10 lg:mb-0">
          <div className="w-full">
            <h2 className="font-[500] text-2xl py-2 mb-4">Order Summary</h2>
            <p className="text-green-dark font-bold py-2">{type}</p>
            <h1>{title}</h1>
            <p className="text-green-dark font-[600] py-2 text-[12px]">
              {country}
            </p>
          </div>
          <div className="w-full flex flex-col justify-center items-start mt-8">
            <span className="text-green-dark/80  font-bold">Total</span>
            <span className="text-4xl font-[500] text-green-light">
              USD {total}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
