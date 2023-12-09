import { Link } from "react-router-dom";
import "./Authpage.scss";
import { BsGoogle } from "react-icons/bs";
import { IoLogoApple } from "react-icons/io5";
import Modal from "../../components/modal/Modal";
import { useState } from "react";
import { Day, Month } from "../../../src/fakeData/FakeData";
import { sweetalert, isValidEmail, isValidmobile } from "../../helpers/Helper";

// show twitter year

const Year = Array.from(
  { length: new Date().getFullYear() - 1902 },
  (_, i) => 1903 + i
).reverse();

const Authpage = () => {
  const [createAccount, setCreateAccount] = useState(false);
  const [signAccount, setSignAccount] = useState(false);

  const [createinput, setCreateInput] = useState({
    name: "",
    phnem: "",
    month: "",
    day: "",
    year: "",
  });

  const handlecreateinput = (e) => {
    setCreateInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const createinputSubmit = (e) => {
    e.preventDefault();

    if (
      !createinput.name ||
      !createinput.phnem ||
      !createinput.month ||
      !createinput.day ||
      !createinput.year
    ) {
      sweetalert("error", "Oops...", "All Fields Are Required");
    } else if (
      !isValidmobile(createinput.phnem) &&
      !isValidEmail(createinput.phnem)
    ) {
      sweetalert("error", "Oops...", "Please Input Valid Email or Phone No");
    } else {
      sweetalert(
        "success",
        "Congratulations",
        "Your Account Created Successfully"
      );
    }
  };

  return (
    <>
      {/* create account modal start */}

      {createAccount && (
        <Modal headertitle=" Step 1 of 5" hide={() => setCreateAccount(false)}>
          <div className="create-account-modal">
            <div className="title">
              <h1>Create your account</h1>
            </div>
            <form onSubmit={createinputSubmit}>
              <div className="scrolling-div">
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={createinput.name}
                  onChange={handlecreateinput}
                />
                <input
                  type="text"
                  placeholder="Phone"
                  name="phnem"
                  value={createinput.phnem}
                  onChange={handlecreateinput}
                />
                <p className="use-email">Use email instead</p>

                <div className="date-birth">
                  <h2>Date of birth</h2>
                  <p>
                    This will not be shown publicly. Confirm your own age, even
                    if this account is for a business, a pet, or something else.
                  </p>

                  <div className="date-select">
                    <select name="month" onChange={handlecreateinput}>
                      <option value="">Month</option>
                      {Month.map((item, index) => (
                        <option key={index} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                    <select name="day" onChange={handlecreateinput}>
                      <option value="">Day</option>
                      {Day.map((item, index) => (
                        <option key={index} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                    <select name="year" onChange={handlecreateinput}>
                      <option value="">Year</option>
                      {Year.map((item, index) => (
                        <option key={index} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="btn">
                <button className="next-btn" type="submit">
                  Next
                </button>
              </div>
            </form>
          </div>
        </Modal>
      )}
      {/* create account modal end */}

      {/* sign in modal start */}
      {signAccount && (
        <Modal headertitle=" x" hide={() => setSignAccount(false)}>
          <div className="sing-in-modal">
            <div className="title">
              <h1>Sign in to X</h1>
            </div>

            <div className="auto-signup">
              <Link className="google-link">
                <span>
                  <BsGoogle />
                </span>
                <p>Sign up with Google</p>
              </Link>
              <Link className="apple-link">
                <span className="apple-icon">
                  <IoLogoApple />
                </span>
                <p>Sign up with Apple</p>
              </Link>
            </div>

            <div className="divider">
              <div className="divider-one"></div>
              <div className="text">or</div>
              <div className="divider-one"></div>
            </div>
            <form>
              <input type="text" placeholder="Phone, Email or Username" />
              <button className="next-btn" type="submit">
                Next
              </button>
            </form>

            <button className="fotgot-password" type="submit">
              Forgot password
            </button>

            <p className="sign-in-link">
              Don't have an account? <Link>Sign up</Link>
            </p>
          </div>
        </Modal>
      )}
      {/* sign in modal end */}
      <div className="twitter-auth-container">
        <div className="auth-content-container">
          <div className="auth-left-content">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-18jsvk2 r-rxcuwo r-1777fci r-m327ed r-494qqr"
            >
              <g>
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </g>
            </svg>
          </div>
          <div className="auth-right-content">
            <h1 className="heading">Happening now</h1>

            <div className="right-fixed-width">
              <div className="heading-two">Join today.</div>

              <div className="auto-signup">
                <Link className="google-link">
                  <span>
                    <BsGoogle />
                  </span>
                  <p>Sign up with Google</p>
                </Link>
                <Link className="apple-link">
                  <span className="apple-icon">
                    <IoLogoApple />
                  </span>
                  <p>Sign up with Apple</p>
                </Link>
              </div>

              <div className="divider">
                <div className="divider-one"></div>
                <div className="text">or</div>
                <div className="divider-one"></div>
              </div>

              <div className="sign-up-button">
                <Link
                  onClick={() => setCreateAccount(true)}
                  className="sign-btn"
                >
                  Create account
                </Link>
              </div>

              <div className="terms-contidion">
                <p>
                  By signing up, you agree to the <Link>Terms of Service</Link>{" "}
                  and <Link>Privacy Policy</Link>, including{" "}
                  <Link>Cookie Use</Link>.
                </p>
              </div>

              <div className="have-account">
                <h1>Already have an account?</h1>
              </div>

              <div className="sign-in-button">
                <Link onClick={() => setSignAccount(true)} className="sign-btn">
                  Sign in
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <Link>About</Link>
          <Link>Download the X app</Link>
          <Link>Help Center</Link>
          <Link>Terms of Service</Link>
          <Link>Privacy Policy</Link>
          <Link>Cookie Policy</Link>
          <Link>Accessibility</Link>
          <Link>Ads info</Link>
          <Link>Blog</Link>
          <Link>Status</Link>
          <Link>Careers</Link>
          <Link>Brand Resources</Link>
          <Link>Advertising</Link>
          <Link>Marketing</Link>
        </div>
        <div className="footer footer-two">
          <Link>X for Business</Link>
          <Link>Developers</Link>
          <Link>Directory</Link>
          <Link>Settings</Link>
          <p>© 2023 X Corp.</p>
        </div>
      </div>
    </>
  );
};

export default Authpage;
