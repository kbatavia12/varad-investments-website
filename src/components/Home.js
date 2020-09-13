import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://www.thestreet.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cg_faces:center%2Cq_auto:good%2Cw_768/MTY4NjUyODQ5NDg2ODMzMjg3/12-investment-ideas-for-beginners.png"
          className="home__image"
        />
      </div>
      <div className="home__column">
        <Product
          title={"Open a demat account"}
          image={
            "https://www.indiainfoline.com/mfincludes/images/Features-of-Demat-Account.png"
          }
          description = {"Open a demat account with Varad Investments today!agiElfihqwaef;hohfoAFHEO;WQAFDEHFVOWQ;LIHVOIEDFHawdcfbhf"}
        />
        
        <Product
          title={"Invest in Mutual Funds"}
          image={
            "https://www.indiainfoline.com/mfincludes/images/Features-of-Demat-Account.png"
          }
          description = {"Invest in Mutual Funds with Varad Investments today!agfo;aihfoihfoah;fvcaodshnfvai;osdfhaoivfhdvb kadhvoi;jh"}
          flex = "row-reverse"
        />
        
        <Product
          title={"Invest in Mutual Funds"}
          image={
            "https://www.indiainfoline.com/mfincludes/images/Features-of-Demat-Account.png"
          }
          description = {"Invest in Mutual Funds with Varad Investments today!agfo;aihfoihfoah;fvcaodshnfvai;osdfhaoivfhdvb kadhvoi;jh"}
        />
        <Product
          title={"Invest in Mutual Funds"}
          image={
            "https://www.indiainfoline.com/mfincludes/images/Features-of-Demat-Account.png"
          }
          description = {"Invest in Mutual Funds with Varad Investments today!agfo;aihfoihfoah;fvcaodshnfvai;osdfhaoivfhdvb kadhvoi;jh"}
          flex = "row-reverse"
        />
        
        <Product
          title={"Invest in Mutual Funds"}
          image={
            "https://www.indiainfoline.com/mfincludes/images/Features-of-Demat-Account.png"
          }
          description = {"Invest in Mutual Funds with Varad Investments today!agfo;aihfoihfoah;fvcaodshnfvai;osdfhaoivfhdvb kadhvoi;jh"}
        />
      </div>
    </div>
  );
};

export default Home;
