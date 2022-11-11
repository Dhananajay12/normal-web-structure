import { useEffect, useState } from "react";
import "./App.css";
import logo from "./Image/logo.png";
import logo2 from "./Image/logo-small.png";
import banner from "./Image/banner.jpg";
import cl from "./Image/cl-1.png";
import longcloud from "./Image/LOWER-CLOUD.png";
import b1 from "./Image/b1.jpeg";
import b2 from "./Image/b2.jpeg";
import b3 from "./Image/b3.jpeg";
import b4 from "./Image/b4.jpeg";
import img5 from "./Image/5.jpg";
import img6 from "./Image/6.jpg";
import img7 from "./Image/7.jpeg";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { RiShoppingCartFill } from "react-icons/ri";
import {
  AiOutlineInstagram,
  AiOutlineSkype,
  AiFillGithub,
  AiOutlineGoogle,
} from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css"; //
import { GiHamburgerMenu } from "react-icons/gi";
import {
  AiOutlineArrowDown,
  AiOutlineArrowUp,
  AiOutlineClose,
} from "react-icons/ai";
import { MdArrowDropDown } from "react-icons/md";
import { RiArrowDropRightFill } from "react-icons/ri";
import { CgArrowLeftO } from "react-icons/cg";
import { BsBuilding } from "react-icons/bs";
import { BiBuilding, BiBuildings } from "react-icons/bi";
import { AiFillCheckCircle } from "react-icons/ai";

function App() {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const [showComponent, setshowComponent] = useState("start");

  const [color, setColor] = useState(false);
  const [show, setShow] = useState(false);
  const [visa, setVisa] = useState(false);
  // useEffect(() => {
  //   setshowComponent("start");
  // }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  const changeColor = () => {
    if (window.scrollY >= 50) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  return (
    <>
      <section className="header ">
        <a href="/" className="">
          <img src={logo} alt="error" className="logo" />
        </a>

        <nav className={showMediaIcons ? "navbar active" : "navbar"}>
          <ul className="menu">
            <li>
              <div className="dropdown">
                <a href="/" className="dropbtn">
                  Business-Guide <MdArrowDropDown />
                </a>
                <div className="dropdown-content">
                  <li>
                    <a href="/">Where</a>{" "}
                  </li>
                  <li>
                    <a href="/">How</a>{" "}
                  </li>
                  <li>
                    <a href="/">May</a>{" "}
                  </li>
                </div>
              </div>
            </li>

            <li>
              <div className="dropdown">
                <a href="/" className="dropbtn">
                  Licensing <MdArrowDropDown />
                </a>
                <div className="dropdown-content">
                  <li className="dropdown2">
                    <a href="/" className="d-flex">
                      Mainland License{" "}
                      <RiArrowDropRightFill fontSize="20px" className="mt-1 " />{" "}
                    </a>
                    <ul className="dropdown-content2">
                      <li>
                        <a href="/">Professional</a>{" "}
                      </li>
                      <li>
                        <a href="/">Commercial License</a>{" "}
                      </li>
                      <li>
                        <a href="/">Industrial License</a>{" "}
                      </li>
                      <li>
                        <a href="/">Tourism License</a>{" "}
                      </li>
                      <li>
                        <a href="/">E Trader Lincense</a>{" "}
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="/">Free zone License</a>{" "}
                  </li>
                  <li>
                    <a href="/">Offshore License</a>{" "}
                  </li>
                </div>
              </div>
            </li>
            <li>
              <div className="dropdown">
                <a href="/" className="dropbtn">
                  Visa <MdArrowDropDown />
                </a>
                <div className="dropdown-content">
                  <li>
                    <a href="/">Dubai-Business visa</a>{" "}
                  </li>
                  <li>
                    <a href="/">Dubai-Investi visa</a>{" "}
                  </li>
                </div>
              </div>
            </li>
            <li>
              <a href="/">About US </a>{" "}
            </li>
            <li>
              <a href="/">Blog </a>{" "}
            </li>
          </ul>

          <AiOutlineClose
            className="display  mx-3"
            onClick={() => setShowMediaIcons(false)}
          />
        </nav>
        <div className="hamburger-menu mt-1">
          <button
            className="icons"
            onClick={() => setShowMediaIcons(!showMediaIcons)}
          >
            <GiHamburgerMenu className="icons" />
          </button>
        </div>
      </section>
      <div>
        <div className="sky1 img-fluid">
          <img height="50px" className="cloud-1" src={cl} alt="error"></img>
          <img height="50px" className="cloud-5" src={cl} alt="error"></img>
          <img height="50px" className="cloud-4" src={cl} alt="error"></img>
          <img height="50px" className="cloud-3" src={cl} alt="error"></img>
          <img height="50px" className="cloud-2" src={cl} alt="error"></img>
        </div>
        <div style={{ marginTop: "-11rem" }}>
          <img className="cloud-10" src={longcloud} alt="error"></img>
          <img className="cloud-6" src={longcloud} alt="error"></img>
          <img className="cloud-8" src={longcloud} alt="error"></img>
          <img className="cloud-7" src={longcloud} alt="error"></img>
          <img className="cloud-9" src={longcloud} alt="error"></img>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="center">
        <p className="color2 h1 bold-text">Business Set Up Services</p>
        <p className="padding-1 mt-4">
          Are you looking to set up a business in Dubai? Starting a business in
          Dubai is easy with help from the right professionals. Kiltons offers
          the best and economical business setup services
        </p>
        <p className="bold-text h4 mt-4 text-secondary">
          Choose your business need in Dubai or UAE to continue
        </p>
      </div>
      <br />
      <br />
      <br />
      <div>
        {showComponent === "start" && (
          <>
            <div className="container">
              <div className="row">
                <div
                  className="col-md-4 mt-2"
                  data-aos="fade-up-right"
                  data-aos-duration="3000"
                >
                  <div
                    onClick={() => setshowComponent("add-trip")}
                    className="card-small card color"
                  >
                    <p>I WANT TO START A COMPANY</p>

                    <div className="go-corner" href="#">
                      <div className="go-arrow">→</div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-4 mt-2"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <div
                    onClick={() => setshowComponent("company")}
                    className=" card-small  card color"
                  >
                    <p>I ALREADY HAVE A COMPANY</p>
                    <div className="go-corner" href="#">
                      <div className="go-arrow">→</div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-4 mt-2"
                  data-aos="fade-up-left"
                  data-aos-duration="3000"
                >
                  <div
                    onClick={() => setshowComponent("third")}
                    className=" card-small card color"
                  >
                    <p>TALK TO OUR EXPERT</p>
                    <div className="go-corner" href="#">
                      <div className="go-arrow">→</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {showComponent === "add-trip" && (
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-4">
                <div
                  onClick={() => setshowComponent("third")}
                  className="card-small card color"
                >
                  {" "}
                  <p>MAINLAND</p>
                  <div className="go-corner" href="#">
                    <div className="go-arrow">→</div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div
                  onClick={() => setshowComponent("third")}
                  className=" card-small card color"
                >
                  {" "}
                  <p>FREEZONE</p>
                  <div className="go-corner" href="#">
                    <div className="go-arrow">→</div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div
                  onClick={() => setshowComponent("third")}
                  className="card-small card color"
                >
                  {" "}
                  <p>OFFSHORE</p>
                  <div className="go-corner" href="#">
                    <div className="go-arrow">→</div>
                  </div>
                </div>
              </div>
            </div>
            <br></br>
            <div className="row">
              <div className="div-icons">
                <CgArrowLeftO
                  className="icons "
                  onClick={() => setshowComponent("start")}
                />
              </div>
              <center>
                <div className="col-md-6 col-lg-4">
                  <div
                    onClick={() => setshowComponent("third")}
                    className="card-small card color"
                  >
                    {" "}
                    <p>TALK TO OUR EXPERT</p>
                    <div className="go-corner" href="#">
                      <div className="go-arrow">→</div>
                    </div>
                  </div>
                </div>
              </center>
            </div>
          </div>
        )}
        {showComponent === "company" && (
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-4">
                <div
                  onClick={() => setshowComponent("third")}
                  className="card color"
                >
                  {" "}
                  <p>I WANT TO RENEW MY LICENSE</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div
                  onClick={() => setshowComponent("third")}
                  className="card color"
                >
                  {" "}
                  <p>I NEED TO MAKE CHANGES IN MY LICENSE</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div
                  onClick={() => setshowComponent("third")}
                  className="card color"
                >
                  {" "}
                  <p>I WNAT TO SELL MY LICENSE</p>
                </div>
              </div>
            </div>
            <br></br>
            <center>
              <button
                className="button"
                onClick={() => setshowComponent("start")}
              >
                BACK TO HOME
              </button>
            </center>
            <br></br>
          </div>
        )}
        {showComponent === "third" && (
          <div className="container">
            <div className="row">
              <div className="div-icons">
                <CgArrowLeftO
                  className="icons"
                  onClick={() => setshowComponent("start")}
                />
              </div>
              <center>
                <div className="col-md-3">
                  <div
                    onClick={() => setshowComponent("start")}
                    className="card color"
                  >
                    {" "}
                    <p>GET EXPERTS ADVICE NOW</p>
                  </div>
                </div>
                <br></br>
                <button
                  className="button"
                  onClick={() => setshowComponent("start")}
                >
                  BACK TO HOME
                </button>
              </center>
            </div>
          </div>
        )}
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="container-fluid">
        <div className="row center color4">
          <div className="padding">
            <h1 className="text-white">That is why we’re here.</h1>
            <br></br>
            <h5 className="text-white">
              We make it simpler and easier for you. Before you do anything,
              <br></br>
              talk to one of our Company Formation Specialists.
            </h5>
            <br></br>
            <button className="white-button  bold-text">Get in Touch</button>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="container">
        <div className="center">
          <p className="color2 h1 bold-text">What Services We Offers</p>
          <p className="padding-1 mt-4">
            Are you looking to set up a business in Dubai? Starting a business
            in Dubai is easy with help from the right professionals. Kiltons
            offers the best and economical business setup services
          </p>
          <p className="bold-text h4 mt-4 text-secondary">
            Choose your business need in Dubai or UAE to continue
          </p>
        </div>
        <br></br>
        <br></br>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="box">
              <div className="imgBox">
                <img src={b1} alt="" />
              </div>
              <div className="content shadow">
                <h2>
                  <BsBuilding fontSize="40px" className="mx-2" color="purple" />
                  FREEZONE LICENSE
                  <br />
                  {/* <span>Graphic Designer</span> */}
                </h2>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="box">
              <div className="imgBox">
                <img src={b2} alt="" />
              </div>
              <div className="content shadow">
                <h2>
                  <BiBuildings
                    fontSize="40px"
                    className="mx-2"
                    color="purple"
                  />
                  MAINLAND LICENSE
                  <br />
                  {/* <span>Graphic Designer</span> */}
                </h2>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="box">
              <div className="imgBox">
                <img src={b3} alt="" />
              </div>
              <div className="content shadow">
                <h2>
                  <BiBuilding fontSize="40px" className="mx-2" color="purple" />{" "}
                  OFFSHORE LICENSE
                  <br />
                  {/* <span className="">Graphic Designer</span> */}
                </h2>
              </div>
            </div>
          </div>

          <br></br>
          <br></br>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <br></br>

      <div className="container">
        <div className="row">
          <div
            className="col-lg-6 col-md-6"
            data-aos="fade-up-right"
            data-aos-duration="3000"
          >
            <h1 className="color2" style={{ fontWeight: "bold" }}>
              Start a Business in Dubai & UAE with Kiltons
            </h1>
            <p>
              Kiltons provide a wide range of business setup services in Dubai
              and UAE for startups, medium enterprises and large business
              concerns. An amalgamation of trust and quality is the trademark of
              our Business setup services. And this is not just a marketing
              gimmick, but our proven growth-formula to be precise. Kiltons
              offer business setup services related to Mainland, Free zone and
              Offshore business set up right from the very basics to Licensing,
              License renewal and a lot more. We consider the success and growth
              of the clients as the greatest reward. We serve as a helping hand
              for our esteemed clients and provide prompt recommendations and
              support. Finding a UAE national sponsor is one of our prestigious
              services. Other services that we offer are Brand Protection, Bank
              account opening, PRO Services, Company liquidation and many more.
            </p>
            <button className="button2">Know More </button>
          </div>
          <div
            className="col-lg-6 col-md-6"
            data-aos="fade-up-left"
            data-aos-duration="3000"
          >
            <img src={b4} className="img-fluid rounded" />
          </div>
        </div>
      </div>
      <br></br>
      <br></br>

      <br></br>
      <br></br>

      <br></br>

      <div
        className="container-fluid"
        data-aos="fade-up"
        data-aos-duration="3000"
        style={{
          background: "linear-gradient(to right, #0033cc 11%, #ff6699 91%)",
        }}
      >
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="row">
          <div className="col-lg-4 col-md-4" style={{ padding: "0px" }}>
            <img src={img5} alt="errror" className="img-fluid" />
          </div>
          <div className="col-lg-4 col-md-4" style={{ padding: "0px" }}>
            <img src={img7} alt="errror" className="img-fluid" />
          </div>
          <div className="col-lg-4 col-md-4" style={{ padding: "0px" }}>
            <img src={img7} alt="errror" className="img-fluid" />
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
      <br></br>
      <br></br>
      <br></br>

      <div className="container">
        <div className="row">
          <div
            className="col-lg-6"
            data-aos="fade-up-right"
            data-aos-duration="3000"
          >
            <br></br>
            <img src={b4} alt="error" className="img-fluid rounded" />
          </div>
          <div
            className="col-lg-6"
            data-aos="fade-up-left"
            data-aos-duration="3000"
          >
            <h1 className="color2 bold-text">Office Spaces</h1>
            <p>
              Starting a business in Dubai or anywhere in UAE with Kiltons in
              simple and time-saving. We help you set up a company in a free
              zone, on mainland or offshore. “According to the data revealed by
              the BRL sector Dubai, more than 9500 new licenses were granted
              during the first 4 months of the year 2019.” People have their own
              perspectives and perceptions of Dubai particularly when it comes
              to business setup and getting an office space. But it is necessary
              to have the right advice from the right source before you set up a
              business in Dubai. To start a business in Dubai and UAE, you are
              supposed to seek advice only from an individual who works 24* 7 in
              the field of business setup, as the subject deals with legal
              issues and complicated norms. Kiltons Business Set Up Consultants
              have a proven track record in providing expert suggestions when it
              comes to business set up in Dubai and UAE. Our highly experienced
              Business Set Up specialistes give you the support and services to
              help you with company formation in Dubai and other related
              services across the Emirates.
            </p>
            <button className="button2">Know More</button>
          </div>
        </div>
      </div>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <footer style={{ marginBottom: "-2rem" }} className="mt-5">
        <div
          className="background5"
          style={{ background: " #8D3DAF", opacity: "" }}
        >
          <div className="transbox5">
            <div className="container-fluid ">
              <div className="row padding2">
                <div className="col-sm-6 col-md-4 center2 mt-5 mb-5">
                  <ul>
                    <h3 className="text-white mt-4">
                      <RiShoppingCartFill /> RazeEcom.{" "}
                    </h3>
                    <hr className="color-hr"></hr>

                    <p className="mt-3 text-white">
                      {" "}
                      If You Would Like To Experience The Best Of Online
                      Shopping For Men, Women And Kids In India, You Are At The
                      Right Place. RAZEECOM. Is The Ultimate Destination For
                      Fashion And Lifestyle, Being Host To A Wide Array Of
                      Merchandise Including Clothing, Footwear, Accessories,
                      Jewellery, Personal Care Products And More. It Is Time To
                      Redefine Your Style Statement With Our Treasure-Trove Of
                      Trendy Items. Our Online Store Brings You The Latest In
                      Designer Products Straight Out Of Fashion Houses. You Can
                      Shop Online At RAZEECOM.
                    </p>
                    <button className="button-effect  button-effect2 fill">
                      Know more
                    </button>
                  </ul>
                </div>

                <div className="col-sm-6 col-md-2 mt-5 mb-5 ">
                  <div className="center2">
                    <ul>
                      <br />
                      <h3 className="text-white ">Quick a</h3>
                      <hr className="color-hr"></hr>
                      <li className="zoom marginFooter">
                        <a href="/contact" className="text-white color mt-1">
                          {" "}
                          <i
                            className="fa fa-angle-right"
                            aria-hidden="true"
                          ></i>{" "}
                          Contact Us
                        </a>
                      </li>
                      <li className="zoom marginFooter">
                        {" "}
                        <a href="/about" className="text-white  color ">
                          {" "}
                          <i
                            className="fa fa-angle-right"
                            aria-hidden="true"
                          ></i>{" "}
                          About Us
                        </a>
                      </li>
                      <li className="zoom marginFooter">
                        <a href="/product" className="text-white  color ">
                          <i
                            className="fa fa-angle-right"
                            aria-hidden="true"
                          ></i>{" "}
                          Product
                        </a>
                      </li>
                      <li className="zoom marginFooter">
                        {" "}
                        <a href="/" className="text-white color  ">
                          {" "}
                          <i
                            className="fa fa-angle-right"
                            aria-hidden="true"
                          ></i>{" "}
                          as
                        </a>
                      </li>
                      <li className="zoom marginFooter">
                        {" "}
                        <a href="/" className="text-white color  ">
                          {" "}
                          <i
                            className="fa fa-angle-right"
                            aria-hidden="true"
                          ></i>{" "}
                          as
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-6 col-md-2 mt-5 mb-5">
                  <ul>
                    <br />
                    <h3 className="text-white ">Blog</h3>
                    <hr className="color-hr"></hr>
                    <li className="zoom marginFooter">
                      <a href="/" className="text-white color mt-1">
                        {" "}
                        <i
                          className="fa fa-angle-right"
                          aria-hidden="true"
                        ></i>{" "}
                        Contact Us
                      </a>
                    </li>
                    <li className="zoom marginFooter">
                      {" "}
                      <a href="/" className="text-white  color ">
                        {" "}
                        <i
                          className="fa fa-angle-right"
                          aria-hidden="true"
                        ></i>{" "}
                        About Us
                      </a>
                    </li>
                    <li className="zoom marginFooter">
                      <a href="/" className="text-white  color ">
                        <i className="fa fa-angle-right" aria-hidden="true"></i>{" "}
                        as
                      </a>
                    </li>
                    <li className="zoom marginFooter">
                      {" "}
                      <a href="/" className="text-white color  ">
                        {" "}
                        <i
                          className="fa fa-angle-right"
                          aria-hidden="true"
                        ></i>{" "}
                        as
                      </a>
                    </li>
                    <li className="zoom marginFooter">
                      {" "}
                      <a href="/" className="text-white color  ">
                        {" "}
                        <i
                          className="fa fa-angle-right"
                          aria-hidden="true"
                        ></i>{" "}
                        as
                      </a>
                    </li>
                  </ul>
                </div>

                <div
                  className="col-sm-6 col-md-4 mt-5 mb-5"
                  style={{ fontFamily: "Poppins" }}
                >
                  <ul>
                    <br />
                    <h3 className="text-white ">Contact</h3>
                    <hr className="color-hr"></hr>

                    <li className="text-white d-flex">
                      {" "}
                      <i className="fa fa-phone-square"></i>{" "}
                      +945545454545/94513454282/9137319282
                    </li>
                    <br />
                    <li className="text-white d-flex">
                      {" "}
                      <i className="fa fa-phone-square"></i>
                      <span className="mx-1">+91545450 48830</span>{" "}
                    </li>
                    <br />

                    <li className="text-white">
                      {" "}
                      <i className="fa fa-envelope"></i>{" "}
                      dhananjayavare786@gmail.com
                    </li>
                    <br />
                    <li className="text-white">
                      <i className="fa fa-map-marker"></i> kalyan , Thane ,
                      Mumbai{" "}
                    </li>
                    <br />
                  </ul>
                </div>
              </div>
              <hr className="color-hr"></hr>
              <div className="row">
                <div className="register-free  ">
                  <h3 className="mt-2 text-white ">
                    Know More About Lincensing
                  </h3>
                  <br></br>

                  <button className="button-effect  button-effect2 fill">
                    Fill In
                  </button>
                </div>
              </div>
              <br></br>
              <hr className="color-hr"></hr>

              <br></br>
              <div className="icon-social">
                <FaFacebookF className="icons zoom" />
                <AiOutlineInstagram className="icons zoom" />
                <FaTwitter className="icons zoom" />
                <AiOutlineSkype className="icons zoom" />
                <FaLinkedinIn className="icons zoom" />
                <AiFillGithub className="icons zoom" />
                <AiOutlineGoogle className="icons zoom" />
              </div>
              <br></br>
              <div className="icon-social color5">
                <h5 className="padding text-white">
                  @ 2022 Copyright:Razer.c53.com
                </h5>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
