
function About() {
  return (
    <div className="about-section">

      <div className="about-container">

        {/* LEFT IMAGE */}
        <div className="about-image">
          <img
            src="/machine.jpg"
            alt="Brass Manufacturing Tools"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="about-content">
          <h2>About <span className="red">Super</span> <span className="blue">Cutting Tools</span></h2>

          <p>
            <strong><span className="red">Super</span> <span className="blue">Cutting Tools</span></strong> is a leading supplier of
            premium-quality carbon tools and industrial materials designed
            specifically for brass manufacturing industries.
          </p>

          <p>
            Located in <strong>Jamnagar, Gujarat</strong> widely known as the
            <strong> Brass Hub of India</strong> we understand the exact needs
            of brass component manufacturers and deliver tools that meet
            industry standards.
          </p>

          <p>
            Our product range includes precision cutting tools that ensure
            smooth machining, high durability, and consistent performance
            even in demanding industrial environments.
          </p>

          <p>
            With a strong focus on quality and customer satisfaction, we have
            built long-term relationships with local and national clients who
            rely on us for dependable supply and expert support.
          </p>

          {/* <p>
            We continuously improve our products and services to match the
            evolving requirements of modern manufacturing industries.
          </p> */}

          {/* HIGHLIGHTS */}
          <div className="about-highlights">
            <h4>Why Our Clients Trust Us:</h4>

            <ul>
              <li> High Precision & Accuracy</li>
              <li> Premium Quality Materials</li>
              <li> On-Time Delivery</li>
              {/* <li> Competitive Pricing</li> */}
              <li> Strong Industry Experience</li>
            </ul>
          </div>

          {/* MISSION */}
          <div className="about-mission">
            <h4>Our Mission:</h4>
            <p>
              To provide high-performance cutting tools and industrial solutions
              that help manufacturers achieve better productivity, efficiency,
              and product quality.
            </p>
          </div>

        </div>

      </div>





{/* OUR INFRASTRUCTURE */}

<div
style={{
padding:"60px 20px"
}}
>

<h2 style={{textAlign:"center", marginBottom:"40px"}}>
Our Infrastructure
</h2>

<div
style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
gap:"30px",
maxWidth:"1100px",
margin:"auto"
}}
>

{/* MACHINE 1 */}

<div
style={{
textAlign:"center"
}}
>

<img
src="/cnc.png"
alt="CNC Machine"
style={{
width:"100%",
borderRadius:"8px"
}}
/>

<h3 style={{marginTop:"10px"}}>
CNC Machines
</h3>

<p className="infracard-about">
High precision CNC machines used for brass component machining.
</p>
<ul className="machine-features">
    <li> High Accuracy & Precision</li>
    <li> Automated Operations</li>
    <li> Suitable for Mass Production</li>
  </ul>
</div>


{/* MACHINE 2 */}

<div
style={{
textAlign:"center"
}}
>

<img
src="/cutting.png"
alt="Cutting Machine"
style={{
width:"100%",
borderRadius:"8px"
}}
/>

<h3 style={{marginTop:"10px"}}>
Emery & Cutting Machine
</h3>

<p className="infracard-about">
Advanced cutting machines for accurate brass cutting operations.
</p>
<ul className="machine-features">
  <li> Smooth Cutting Finish</li>
  <li> High Speed Performance</li>
  <li> Durable Blade Quality</li>
  </ul>
</div>


{/* MACHINE 3 */}

<div
style={{
textAlign:"center"
}}
>

<img
src="/grinding.png"
alt="Drilling Machine"
style={{
width:"100%",
borderRadius:"8px"
}}
/>

<h3 style={{marginTop:"10px"}}>
Grinding Machines
</h3>

<p className="infracard-about">
Reliable grinding solutions for precision metal finishing and manufacturing industries.
</p>
<ul className="machine-features">
  <li> High Precision Grinding</li>
  <li> Durable & Long-Lasting</li>
  <li> Smooth & Efficient Operation</li>
</ul>

</div>

</div>

</div>










    </div>





  );
}








export default About;