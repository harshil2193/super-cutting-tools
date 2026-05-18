function ProductCard({ name, image, desc }) {

  const phone = "919999999999";

  const link = `https://wa.me/${phone}?text=Hello, I want details about ${name}`;

  return (
    <div className="product-card">

      <div className="image-box">
        <img src={image} alt={name} />
      </div>

      <div className="card-content">
        <h3>{name}</h3>
        <p>{desc}</p>

        <a href={link} target="_blank" rel="noreferrer" className="btn">
          Enquire Now
        </a>
      </div>

    </div>
  );
}

export default ProductCard;