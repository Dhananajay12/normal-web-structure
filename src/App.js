import { useEffect, useState } from "react";
import "./App.css";
import logo from "./Image/logo.png";
import logo2 from "./Image/logo-small.png";
import banner from "./Image/banner.jpg";
import cl from "./Image/cl-1.png";
import longcloud from "./Image/LOWER-CLOUD.png";

import { GiHamburgerMenu } from "react-icons/gi";
import {
  AiOutlineArrowDown,
  AiOutlineArrowUp,
  AiOutlineClose,
} from "react-icons/ai";
import { MdArrowDropDown } from "react-icons/md";
import { RiArrowDropRightFill } from "react-icons/ri";
import { CgArrowLeftO } from "react-icons/cg";
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
        <p className="color h1 bold-text">Business Set Up Services</p>
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
                <div className="col-md-4 mt-2">
                  <div
                    onClick={() => setshowComponent("add-trip")}
                    className="card color"
                  >
                    <p>I WANT TO START A COMPANY</p>
                  </div>
                </div>
                <div className="col-md-4 mt-2">
                  <div
                    onClick={() => setshowComponent("company")}
                    className="card color"
                  >
                    <p>I ALREADY HAVE A COMPANY</p>
                  </div>
                </div>
                <div className="col-md-4 mt-2">
                  <div
                    onClick={() => setshowComponent("third")}
                    className="card color"
                  >
                    <p>TALK TO OUR EXPERT</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {showComponent === "add-trip" && (
          <div className="container">
            <div className="div-icons">
              <CgArrowLeftO
                className="icons "
                onClick={() => setshowComponent("start")}
              />
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-4">
                <div
                  onClick={() => setshowComponent("third")}
                  className="card color"
                >
                  {" "}
                  <p>MAINLAND</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div
                  onClick={() => setshowComponent("third")}
                  className="card color"
                >
                  {" "}
                  <p>FREEZONE</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div
                  onClick={() => setshowComponent("third")}
                  className="card color"
                >
                  {" "}
                  <p>OFFSHORE</p>
                </div>
              </div>
            </div>
            <br></br>
            <div className="row">
              <center>
                <div className="col-md-6 col-lg-4">
                  <div
                    onClick={() => setshowComponent("third")}
                    className="card color"
                  >
                    {" "}
                    <p>TALK TO OUR EXPERT</p>
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

      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className={visa ? "big-card  " : "big-card-active "}>
              <div className="d-flex space">
                <h2 className="mt-2">Shams freezone</h2>
                <img src={logo2} className="small-logo" />
              </div>

              <p onClick={() => setShow(!show)} style={{ cursor: "pointer" }}>
                View Detail{" "}
                {show ? <AiOutlineArrowDown /> : <AiOutlineArrowUp />}
              </p>
              <div style={{ display: show ? "" : "none" }} className="tran">
                Sharjah Media City (Shams) - A perfect Free Zone for your
                Business Setup in Sharjah, UAE. 100% foreign ownership
                permitted!
              </div>
              <hr></hr>
              <div className="d-flex margin ">
                <div
                  className={visa ? "radio-button " : " radio-button-active"}
                  onClick={() => setVisa(true)}
                >
                  <input
                    type="radio"
                    id="age1"
                    name="age"
                    value="30"
                    style={{ cursor: "pointer" }}
                  />
                  <label for="age1" className="mx-1">
                    Without Visa
                  </label>
                </div>
                <div
                  className={visa ? "radio-button-active " : "radio-button"}
                  onClick={() => setVisa(false)}
                >
                  <input
                    type="radio"
                    id="age1"
                    name="age"
                    value="30"
                    style={{ cursor: "pointer" }}
                  />
                  <label for="age1" className="mx-1">
                    With Visa
                  </label>
                </div>
              </div>
              {visa ? (
                <div className="d-flex space  margin mt-2">
                  <p className="mt-2 h5">
                    <s style={{ color: "red" }}>
                      <span className="text-dark">AED 5750 </span>
                    </s>{" "}
                  </p>
                  <button className="button2">AED 5650</button>
                </div>
              ) : (
                <div className="d-flex space  margin mt-2">
                  <p className="mt-2 h5">
                    <s style={{ color: "red" }}>
                      <span className={visa ? "text-dark" : "text-white"}>
                        AED 16,190{" "}
                      </span>
                    </s>{" "}
                  </p>
                  <button className="button-active">AED 16,190</button>
                </div>
              )}

              <hr></hr>
              <ul style={{ padding: "0px" }}>
                <li className="d-flex">
                  <AiFillCheckCircle
                    color="green"
                    className="mx-2"
                    fontSize="22px"
                  />
                  <p>100% Ownership</p>
                </li>
                <li className="d-flex">
                  {" "}
                  <AiFillCheckCircle
                    color="green"
                    className="mx-2"
                    fontSize="22px"
                  />
                  <p>0% Coroprate Or Personal Tax </p>
                </li>
                <li className="d-flex">
                  {" "}
                  <AiFillCheckCircle
                    color="green"
                    className="mx-2"
                    fontSize="22px"
                  />
                  <p>Multiple Shareholders</p>
                </li>

                <li className="d-flex">
                  <AiFillCheckCircle
                    color="green"
                    className="mx-2"
                    fontSize="22px"
                  />
                  <p>Companies Will Be Limited Liability</p>
                </li>
              </ul>
              <br></br>
              <div className="center">
                <button className="button3">Button {"->"}</button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className={visa ? "big-card  " : "big-card-active "}>
              <div className="d-flex space">
                <h2 className="mt-2">Shams freezone</h2>
                <img src={logo2} className="small-logo" />
              </div>

              <p onClick={() => setShow(!show)} style={{ cursor: "pointer" }}>
                View Detail{" "}
                {show ? <AiOutlineArrowDown /> : <AiOutlineArrowUp />}
              </p>
              <div style={{ display: show ? "" : "none" }} className="tran">
                Sharjah Media City (Shams) - A perfect Free Zone for your
                Business Setup in Sharjah, UAE. 100% foreign ownership
                permitted!
              </div>
              <hr></hr>
              <div className="d-flex margin ">
                <div
                  className={visa ? "radio-button " : " radio-button-active"}
                  onClick={() => setVisa(true)}
                >
                  <input
                    type="radio"
                    id="age1"
                    name="age"
                    value="30"
                    style={{ cursor: "pointer" }}
                  />
                  <label for="age1" className="mx-1">
                    Without Visa
                  </label>
                </div>
                <div
                  className={visa ? "radio-button-active " : "radio-button"}
                  onClick={() => setVisa(false)}
                >
                  <input
                    type="radio"
                    id="age1"
                    name="age"
                    value="30"
                    style={{ cursor: "pointer" }}
                  />
                  <label for="age1" className="mx-1">
                    With Visa
                  </label>
                </div>
              </div>
              {visa ? (
                <div className="d-flex space  margin mt-2">
                  <p className="mt-2 h5">
                    <s style={{ color: "red" }}>
                      <span className="text-dark">AED 5750 </span>
                    </s>{" "}
                  </p>
                  <button className="button2">AED 5650</button>
                </div>
              ) : (
                <div className="d-flex space  margin mt-2">
                  <p className="mt-2 h5">
                    <s style={{ color: "red" }}>
                      <span className={visa ? "text-dark" : "text-white"}>
                        AED 16,190{" "}
                      </span>
                    </s>{" "}
                  </p>
                  <button className="button-active">AED 16,190</button>
                </div>
              )}

              <hr></hr>
              <ul style={{ padding: "0px" }}>
                <li className="d-flex">
                  <AiFillCheckCircle
                    color="green"
                    className="mx-2"
                    fontSize="22px"
                  />
                  <p>100% Ownership</p>
                </li>
                <li className="d-flex">
                  {" "}
                  <AiFillCheckCircle
                    color="green"
                    className="mx-2"
                    fontSize="22px"
                  />
                  <p>0% Coroprate Or Personal Tax </p>
                </li>
                <li className="d-flex">
                  {" "}
                  <AiFillCheckCircle
                    color="green"
                    className="mx-2"
                    fontSize="22px"
                  />
                  <p>Multiple Shareholders</p>
                </li>

                <li className="d-flex">
                  <AiFillCheckCircle
                    color="green"
                    className="mx-2"
                    fontSize="22px"
                  />
                  <p>Companies Will Be Limited Liability</p>
                </li>
              </ul>
              <br></br>
              <div className="center">
                <button className="button3">Button {"->"}</button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className={visa ? "big-card  " : "big-card-active "}>
              <div className="d-flex space">
                <h2 className="mt-2">Shams freezone</h2>
                <img src={logo2} className="small-logo" />
              </div>

              <p onClick={() => setShow(!show)} style={{ cursor: "pointer" }}>
                View Detail{" "}
                {show ? <AiOutlineArrowDown /> : <AiOutlineArrowUp />}
              </p>
              <div style={{ display: show ? "" : "none" }} className="tran">
                Sharjah Media City (Shams) - A perfect Free Zone for your
                Business Setup in Sharjah, UAE. 100% foreign ownership
                permitted!
              </div>
              <hr></hr>
              <div className="d-flex margin ">
                <div
                  className={visa ? "radio-button " : " radio-button-active"}
                  onClick={() => setVisa(true)}
                >
                  <input
                    type="radio"
                    id="age1"
                    name="age"
                    value="30"
                    style={{ cursor: "pointer" }}
                  />
                  <label for="age1" className="mx-1">
                    Without Visa
                  </label>
                </div>
                <div
                  className={visa ? "radio-button-active " : "radio-button"}
                  onClick={() => setVisa(false)}
                >
                  <input
                    type="radio"
                    id="age1"
                    name="age"
                    value="30"
                    style={{ cursor: "pointer" }}
                  />
                  <label for="age1" className="mx-1">
                    With Visa
                  </label>
                </div>
              </div>
              {visa ? (
                <div className="d-flex space  margin mt-2">
                  <p className="mt-2 h5">
                    <s style={{ color: "red" }}>
                      <span className="text-dark">AED 5750 </span>
                    </s>{" "}
                  </p>
                  <button className="button2">AED 5650</button>
                </div>
              ) : (
                <div className="d-flex space  margin mt-2">
                  <p className="mt-2 h5">
                    <s style={{ color: "red" }}>
                      <span className={visa ? "text-dark" : "text-white"}>
                        AED 16,190{" "}
                      </span>
                    </s>{" "}
                  </p>
                  <button className="button-active">AED 16,190</button>
                </div>
              )}

              <hr></hr>
              <ul style={{ padding: "0px" }}>
                <li className="d-flex">
                  <AiFillCheckCircle
                    color="green"
                    className="mx-2"
                    fontSize="22px"
                  />
                  <p>100% Ownership</p>
                </li>
                <li className="d-flex">
                  {" "}
                  <AiFillCheckCircle
                    color="green"
                    className="mx-2"
                    fontSize="22px"
                  />
                  <p>0% Coroprate Or Personal Tax </p>
                </li>
                <li className="d-flex">
                  {" "}
                  <AiFillCheckCircle
                    color="green"
                    className="mx-2"
                    fontSize="22px"
                  />
                  <p>Multiple Shareholders</p>
                </li>

                <li className="d-flex">
                  <AiFillCheckCircle
                    color="green"
                    className="mx-2"
                    fontSize="22px"
                  />
                  <p>Companies Will Be Limited Liability</p>
                </li>
              </ul>
              <br></br>
              <div className="center">
                <button className="button3">Button {"->"}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </>
  );
}

export default App;
