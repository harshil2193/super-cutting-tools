import { FaCheckCircle, FaCogs, FaShieldAlt, FaTools, FaTruck, FaUsers } from "react-icons/fa";

function Quality() {
  return (
    <div className="section quality-page">

      <h2>Quality Assurance</h2>

      <p className="intro">
        At <strong><span className="red">Super</span> <span className="blue">Cutting Tools</span></strong>, quality is our commitment.
        We provide high-performance tools trusted by brass manufacturers.
      </p>

      {/* ✅ Stats Section */}
      <div className="stats">

        <div className="stat">
          <h3>100%</h3>
          <p>Tested Products</p>
        </div>

        <div className="stat">
          <h3>15+</h3>
          <p>Years Experience</p>
        </div>

        <div className="stat">
          <h3>10,000+</h3>
          <p>Happy Clients</p>
        </div>

      </div>

      {/* ✅ Features Section */}
      <div className="features">

        <div className="feature">
          <FaCheckCircle className="icon" />
          <h3 className="quality-card-title">Raw Material Inspection</h3>
          <p className="quality-card-dec">
            We carefully inspect carbon steel, carbide, and alloy materials 
            before processing to ensure superior strength, durability, 
            and consistency in every product.
          </p>
        </div>

        <div className="feature">
          <FaCogs className="icon" />
          <h3 className="quality-card-title">Precision Manufacturing</h3>
          <p className="quality-card-dec">
             Using advanced machining techniques, we manufacture cutting tools 
            with micron-level accuracy to ensure smooth and efficient 
            brass component production.
          </p>
        </div>

        <div className="feature">
          <FaShieldAlt className="icon" />
          <h3 className="quality-card-title">Strict Quality Control</h3>
          <p className="quality-card-dec">
            Every product goes through multiple quality checks during 
            production to maintain high standards and eliminate defects.
          </p>
        </div>

        <div className="feature">
          <FaTools className="icon" />
          <h3 className="quality-card-title">Performance Testing</h3>
          <p className="quality-card-dec">
           Tools are tested under real working conditions to evaluate 
            cutting efficiency, heat resistance, and long-term performance.
          </p>
        </div>

        <div className="feature">
          <FaTruck className="icon" />
          <h3 className="quality-card-title">Packaging & Delivery</h3>
          <p className="quality-card-dec">
           We ensure safe packaging and timely delivery so that our 
            customers receive products in perfect condition without delays.
          </p>
        </div>

        <div className="feature">
          <FaUsers className="icon" />
          <h3 className="quality-card-title">Customer Satisfaction</h3>
          <p className="quality-card-dec">
            Our focus is on building long-term relationships by providing 
            reliable tools that improve productivity and reduce downtime 
            for brass manufacturers.
          </p>
        </div>
      </div>



    <div className="quality-extra">
        <h3 className="quality-extra-title">Our Quality Promise</h3>
        <p className="quality-extra-dec">
          With years of experience in the brass industry, we understand 
          the importance of precision and consistency. Our quality-driven 
          approach ensures that every tool we supply meets industry 
          standards and exceeds customer expectations.
        </p>
      </div>
    </div>
  );
}

export default Quality;