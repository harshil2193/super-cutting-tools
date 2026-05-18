import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div
      style={{
        background: "#1f1f1f",
        color: "white",
        padding: "40px 20px",
        marginTop: "60px"
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "30px"
        }}
      >

        {/* Company — logo on top, name below */}
        <div style={{ textAlign: "center" }}>
          <img
            src="/logo.png"
            alt="logo"
            style={{ width: "150px", height: "100px", objectFit: "contain", marginBottom: "10px" }}
          />
          <h2 style={{ fontSize: "25px", marginBottom: "10px", color: "white", textAlign: "center" }}>
            <span className="red">Super</span> <span className="blue">Cutting Tools</span>
          </h2>
          <p className="footer-dec" style={{textAlign: "center"}}>
            Supplier of carbon tools and metal solutions used in brass
            manufacturing industries.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="footer-title">Quick Links</h2>
          <NavLink to="/" style={{ display: "block", color: "#ccc", textDecoration: "none", marginBottom: "8px", textAlign: "center" }}>Home</NavLink>
          <NavLink to="/about" style={{ display: "block", color: "#ccc", textDecoration: "none", marginBottom: "8px", textAlign: "center" }}>About</NavLink>
          <NavLink to="/products" style={{ display: "block", color: "#ccc", textDecoration: "none", marginBottom: "8px", textAlign: "center" }}>Products</NavLink>
          <NavLink to="/quality" style={{ display: "block", color: "#ccc", textDecoration: "none", marginBottom: "8px", textAlign: "center" }}>Quality</NavLink>
          <NavLink to="/contact" style={{ display: "block", color: "#ccc", textDecoration: "none", marginBottom: "8px", textAlign: "center" }}>Contact</NavLink>
        </div>

        {/* Contact */}
        <div>
          <h2 className="footer-title">Contact</h2>
          <p className="footer-dec">
            Shade no. 330, Vishal Chowk,<br />
            Opp. V-Transport, Phase-II,<br />
            Dared, Jamnagar, Gujarat, India
          </p>
          <p className="footer-dec" style={{ marginTop: "10px" }}>
            Phone: +91 94272 24008<br />
            Phone: +91 94293 35336
          </p>
        </div>

      </div>

      <div
        style={{
          textAlign: "center",
          marginTop: "30px",
          borderTop: "1px solid #444",
          paddingTop: "20px",
          color: "#aaa",
          fontSize: "14px"
        }}
      >
        © {new Date().getFullYear()} <span className="red">Super</span> <span className="blue">Cutting Tools</span>. All Rights Reserved
      </div>
    </div>
  );
}

export default Footer;