import ProductCard from "../components/ProductCard";
import CountUp from "react-countup";

function Products() {

  const products = [
    {
      name: "Carbide Cutting Tool",
      image: "/carbide-cutting-tool1.png",
      desc: "High precision carbide tools for long life and superior cutting performance."
    },
    {
      name: "Carbide Steel Cutting Tool",
      image: "/carbide-cutting-tool2.png",
      desc: "Durable carbon steel tools ideal for industrial applications."
    },
    {
      name: "Carbide Cutting Tool",
      image: "/carbide-cutting-tool3.png",
      desc: "Heavy-duty cutting tools built for high efficiency and consistent performance."
    },
    {
      name: "Industrial Drill Tool",
      image: "/drill-tool.png",
      desc: "Reliable drilling tools designed for heavy industrial use and accuracy."
    },
    {
      name: "Thread Tool",
      image: "/thread-tool.png",
      desc: "Precision tools for creating accurate and smooth threads in various materials."
    },
    {
      name: "Customize Tool",
      image: "/customize-tool.png",
      desc: "Custom-designed tools tailored to meet specific industrial requirements."
    },
    {
      name: "Carbide Block",
      image: "/carbide-block.png",
      desc: "Designed for smooth and precise cutting, ideal for brass and metal applications."
    },
    {
      name: "Carbide Steel Block",
      image: "/carbide-steel-block.png",
      desc: "Strong and durable blocks suitable for heavy-duty industrial cutting work."
    },
    {
      name: "Carbide Titanium Block",
      image: "/carbide-titanium-block.png",
      desc: "Premium blocks offering excellent performance for advanced industrial applications."
    },
  ];

  return (
    <>


      {/* HERO SECTION */}
      {/* <div className="product-hero">
        <h1><span className="red">Super</span> <span className="blue">Cutting Tools</span></h1>
        <p>Engineered for Performance • Trusted by Industries</p>
      </div> */}

      <div className="product-hero">
 
        {/* VIDEO */}
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            minWidth: "100%",
            minHeight: "100%",
            objectFit: "cover",
            zIndex: 0
          }}
        >
          <source src="/mp_ (2).mp4" type="video/mp4" />
        </video>
 
        {/* DARK OVERLAY */}
        <div style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.55)",
          zIndex: 1
        }} />
 
        {/* TEXT */}
        <div style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
          <h1><span className="red">Super</span> <span className="blue">Cutting Tools</span></h1>
        <p>Engineered for Performance • Trusted by Industries</p>
        </div>
 
      </div>
 


      
   {/* STATS SECTION */}

<div className="stats">

  <div className="stat-card">

    <img src="/icons/client.png" className="stat-icon-img" />

    <h2>
      <CountUp end={1000} duration={3}/>+
    </h2>

    <p className="stat-title">Clients</p> 
    <p className="stat-desc"> Trusted by brass manufacturers across Jamnagar. </p>

  </div>


  <div className="stat-card">

    <img src="/icons/tools.png" className="stat-icon-img" />
    <h2>
      <CountUp end={15} duration={6}/>+
    </h2>

    <p className="stat-title">Years Experience</p> 
    <p className="stat-desc"> Expertise in supplying cutting tools for brass machining. </p>

  </div>


  <div className="stat-card">

    <img src="/icons/experience.png" className="stat-icon-img" />

    <h2>
      <CountUp end={10000} duration={3}/>+
    </h2>

    <p className="stat-title">Tools Supplied</p> 
    <p className="stat-desc"> Precision tools delivered to industries with high durability. </p>

  </div>

</div>




{/* product */}

      <div className="section">
        <h2>Our Products</h2>

        <p className="section-subtitle">
          We manufacture premium quality cutting tools designed for durability,
          precision, and high efficiency in brass industries.
        </p>

        <div className="product-grid">
          {products.map((p, i) => (
            <ProductCard key={i} {...p} />
          ))}
        </div>
      </div>


 {/* NOTE SECTION */}
      <div className="note-section">
 
        
 
        <p style={{  lineHeight: "30px", fontSize: "15px", textAlign: "justify" }}>
          We manufacture <strong>all types of precision cutting tools</strong> using advanced
          Wire-Cut CNC machines, tailored to your exact specifications — whether based on
          your preferred design, dimensions, or specific industrial application.
        </p>
 
        <p style={{  lineHeight: "30px", fontSize: "15px", marginTop: "12px", textAlign: "justify" }}>
          We also supply <strong>Carbide, Steel Carbide, and Titanium Coated Carbide blocks</strong> in a wide range
          of sizes, customized according to your requirements and industrial needs.
          Contact us to discuss your specific needs and get a tailored solution.
        </p>
 
      </div>
     
    </>
  );
}

export default Products;