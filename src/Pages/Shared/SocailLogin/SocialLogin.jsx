import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="text-center">
      <div className="divider">OR</div>
      <button onClick={handleGoogleSignIn} className="btn btn-circle">
        G
      </button>
    </div>
  );
};

export default SocialLogin;
