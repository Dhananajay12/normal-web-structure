import { useEffect, useState } from "react";
import "./App.css";
import logo from "./Image/logo.png";
import banner from "./Image/banner.jpg";
import cl from "./Image/cl-1.png";
import longcloud from "./Image/LOWER-CLOUD.png";

import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { MdArrowDropDown } from "react-icons/md";
import { RiArrowDropRightFill } from "react-icons/ri";

function App() {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const [showComponent, setshowComponent] = useState("start");

  const [color, setColor] = useState(false);

  useEffect(() => {
    setshowComponent("start");
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
      {/* <nav className={showMediaIcons ? "navbars active" : "navbars"}>
        <a href="/" className="">
          <img src={logo} alt="error" className="logo" />
        </a>
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
        <button
          className="display  mx-3"
          onClick={() => setShowMediaIcons(false)}
        />
      </nav>
      <div className="hamburger-menu mt-1">
        <a href="/" onClick={() => setShowMediaIcons(!showMediaIcons)}>
          <button className="icons" />
        </a>
      </div> */}

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
      <br></br>
      <br></br>
      <br></br>
      <div>
        <h1>heyy</h1>
      </div>
      <div>
        {showComponent === "start" && (
          <>
            <div onClick={() => setshowComponent("add-trip")} className="">
              <h1>John Doe</h1>
              <p>
                Some example text some example text. John Doe is an architect
                and engineer
              </p>
            </div>
            <div onClick={() => setshowComponent("third")} className="">
              <h1>John Doe2</h1>
              <p>
                22 Some example text some example text. John Doe is an architect
                and engineer2
              </p>
            </div>
          </>
        )}

        {showComponent === "add-trip" && (
          <div onClick={() => setshowComponent("third")} className="fade">
            {" "}
            <h1>John Doe3</h1>
            <p>
              Some example text some example text. John Doe is an architect and
              engineer3
            </p>
          </div>
        )}
        {showComponent === "third" && (
          <div onClick={() => setshowComponent("start")} className="fade">
            {" "}
            <h1>John Doe4</h1>
            <p>
              Some example text some example text. John Doe is an architect and
              engineer4
            </p>
          </div>
        )}
      </div>

      {/* <div className="mt-5">
        <p>
          orem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum. Why do we use it? It is a long
          established fact that a reader will be distracted by the readable
          content of a page when looking at its layout. The point of using Lorem
          Ipsum is that it has a more-or-less normal distribution of letters, as
          opposed to using 'Content here, content here', making it look like
          readable English. Many desktop publishing packages and web page
          editors now use Lorem Ipsum as their default model text, and a search
          for 'lorem ipsum' will uncover many web sites still in their infancy.
          Various versions have evolved over the years, sometimes by accident,
          sometimes on purpose (injected humour and the like). orem Ipsum is
          simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum. Why do we use it? It is a long established
          fact that a reader will be distracted by the readable content of a
          page when looking at its layout. The point of using Lorem Ipsum is
          that it has a more-or-less normal distribution of letters, as opposed
          to using 'Content here, content here', making it look like readable
          English. Many desktop publishing packages and web page editors now use
          Lorem Ipsum as their default model text, and a search for 'lorem
          ipsum' will uncover many web sites still in their infancy. Various
          versions have evolved over the years, sometimes by accident, sometimes
          on purpose (injected humour and the like). orem Ipsum is simply dummy
          text of the printing and typesetting industry. Lorem Ipsum has been
          the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries, but also the
          leap into electronic typesetting, remaining essentially unchanged. It
          was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum. Why do we use it? It is a long established fact that a reader
          orem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum. Why do we use it? It is a long
          established fact that a reader will be distracted by the readable
          content of a page when looking at its layout. The point of using Lorem
          Ipsum is that it has a more-or-less normal distribution of letters, as
          opposed to using 'Content here, content here', making it look like
          readable English. Many desktop publishing packages and web page
          editors now use Lorem Ipsum as their default model text, and a search
          for 'lorem ipsum' will uncover many web sites still in their infancy.
          Various versions have evolved over the years, sometimes by accident,
          sometimes on purpose (injected humour and the like). will be orem
          Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          orem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum. Why do we use it? It is a long
          established fact that a reader will be distracted by the readable
          content of a page when looking at its layout. The point of using Lorem
          Ipsum is that it has a more-or-less normal distribution of letters, as
          opposed to using 'Content here, content here', making it look like
          readable English. Many desktop publishing packages and web page
          editors now use Lorem Ipsum as their default model text, and a search
          for 'lorem ipsum' will uncover many web sites still in their infancy.
          Various versions have evolved over the years, sometimes by accident,
          sometimes on purpose (injected humour and the like). but also the leap
          into electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum. Why do we use it? It is a long established fact that a reader
          will be distracted by the readable content of a page when looking at
          its layout. The point of using Lorem Ipsum is that it has a
          more-or-less normal distribution of letters, as opposed to using
          'Content here, content here', making it look like readable English.
          Many desktop publishing packages and web page editors now use Lorem
          Ipsum as their default model text, and a search for 'lorem ipsum' will
          uncover many web sites still in their infancy. Various versions have
          evolved over the years, sometimes by accident, sometimes on purpose
          (injected humour and the like). orem Ipsum is simply dummy text of the
          printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has
          survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum. Why do we use it?
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
          distracted by the readable content of a page when looking at its
          layout. The point of using Lorem Ipsum is that it has a more-or-less
          normal distribution of letters, as opposed to using 'Content here,
          content here', making it look like readable English. Many desktop
          publishing packages and web page editors now use Lorem Ipsum as their
          default model text, and a search for 'lorem ipsum' will uncover many
          web sites still in their infancy. Various versions have evolved over
          the years, sometimes by accident, sometimes on purpose (injected
          humour and the like). orem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum. Why do we use it?
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
      </div> */}
    </>
  );
}

export default App;
