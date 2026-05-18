import HeroSlider from "../components/HeroSlider";
import { FaTools, FaIndustry, FaCogs, FaCheckCircle } from "react-icons/fa";


function Home() {

  return (
    <>

      <HeroSlider />



{/* ABOUT SECTION */}

<div
style={{
padding: "60px 20px",
maxWidth: "1100px",
margin: "auto"
}}
>

<h2 style={{textAlign:"center", marginBottom:"40px"}}>
About <span className="red">Super</span> <span className="blue">Cutting Tools</span>
</h2>

<div
style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",
gap:"40px",
alignItems:"center"
}}
>

{/* IMAGE SIDE */}

<div>

<img
src="/machine.jpg"
alt="Cutting Tools Machine"
style={{
width:"100%",
borderRadius:"8px"
}}
/>

</div>

{/* TEXT SIDE */}

<div>

<p className="about-dec">

<span className="red">Super</span> <span className="blue">Cutting Tools</span> is a trusted supplier of high-quality carbon tools
and metal solutions used in brass product manufacturing industries.

</p><br />

<p className="about-dec">

Located in Jamnagar, Gujarat the brass hub of India we provide
durable cutting tools designed for precision machining and long
service life.

</p><br />


<p className="about-dec">

Our tools are widely used by brass manufacturers for drilling,
cutting and shaping brass components with high accuracy.

</p>

</div>

</div>

</div>







{/* WHY CHOOSE US */}

<div
style={{
    padding: "60px 20px",
    background: "#f5f5f5",
  }}
>
  <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
    Why Choose Us
  </h2>

  <div
  className="why-cards-grid"
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
      gap: "25px",
      maxWidth: "1100px",
      margin: "auto",
    }}
>

{/* CARD 1 */}

<div className="why-card active">
      <FaTools size={40} color="#666361" />

      <h3 style={{ margin: "20px 0px" }}>
        High Precision Tools
      </h3>

      <p className="why-choose-dec">
        Industrial grade cutting tools designed for accurate brass machining.
      </p>

</div>


{/* CARD 2 */}

 <div className="why-card">
      <FaIndustry size={40} color="#666361" />

      <h3 style={{ margin: "20px 0px" }}>
        Reliable Supply
      </h3>

      <p className="why-choose-dec">
        Trusted supplier for Jamnagar brass manufacturing industries.
      </p>

</div>


{/* CARD 3 */}

<div className="why-card">
      <FaCogs size={40} color="#666361" />

      <h3 style={{ margin: "20px 0px" }}>
        Durable Materials
      </h3>

      <p className="why-choose-dec">
        Carbon steel and carbide materials ensure long tool life.
      </p>

</div>


{/* CARD 4 */}

<div className="why-card">
      <FaCheckCircle size={40} color="#666361" />

      <h3 style={{ margin: "20px 0px" }}>
        Industry Experience
      </h3>

      <p className="why-choose-dec">
        Serving brass manufacturers with reliable machining tools.
      </p>

</div>

</div>

</div>



    </>
  )

}

export default Home


