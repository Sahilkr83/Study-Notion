import Template from "../component/Template";
import signupImg from "../assets/signup.png";

function Signup({ setUserLogin }) {
  return (
    <Template
      title="Join the millions learning to code with StudyNotion for free"
      desc1="Build skills for today, tomorrow, and beyond."
      desc2="Education to future-proof your career."
      image={signupImg}
      formType="signup"
      setUserLogin={setUserLogin}
    />
  );
}

export default Signup;
