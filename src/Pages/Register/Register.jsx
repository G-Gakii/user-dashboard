import "./Register.css";
import Socials from "../../Components/Socials/Socials";
import Navbar from "../../Components/Navbar/Navbar";
import Form from "../../Components/Form/AuthForm";
import AuthForm from "../../Components/Form/AuthForm";

const Register = () => {
  return (
    <div className="container">
      <Navbar />
      <Socials />
      <p className="container__para">or register with email</p>
      <AuthForm />

      <div className="form__checkbox">
        <div></div> <span>Send me news and promotions</span>
      </div>
      <p className="container__terms">
        By continuing i agree with the{" "}
        <a href="">
          terms & conditions <br /> privacy policy
        </a>
      </p>
    </div>
  );
};

export default Register;
