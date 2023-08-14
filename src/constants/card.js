import visa from "../assets/visa.png";
import mastercard from "../assets/mastercard.png";

const cards = [
  {
    id: 1,
    type: "Visa ending in 1234",
    expiry: "12/24",
    img: visa,
  },

  {
    id: 2,
    type: "Mastercard ending in 5678",
    expiry: "12/24",
    img: mastercard,
  },
];

export default cards;
