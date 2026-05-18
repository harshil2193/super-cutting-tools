
// function WhatsAppButton(){

// const phone="919999999999"

// return(
// <a className="whatsapp"
// href={`https://wa.me/${phone}`}
// target="_blank">

// WhatsApp

// </a>
// )
// }

// export default WhatsAppButton



import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  const phone = "919427224008";

  return (
    <a
      className="whatsapp-btn"
      href={`https://wa.me/${phone}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp />
    </a>
  );
}

export default WhatsAppButton;