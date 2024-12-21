import Template from "../component/Template";
import loginImg from "../assets/login.png";


function Login({ setUserLogin }) {
  return (
    <Template
      title="Welcome Back"
      desc1="Build skills for today, tomorrow, and beyond."
      desc2="Education to future-proof your career."
      image={loginImg}
      formType="login"
      setUserLogin={setUserLogin}
    />
  );
}

export default Login;
