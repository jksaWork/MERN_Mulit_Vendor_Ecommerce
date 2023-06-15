import { React, useState, useEffect } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { RxAvatar } from "react-icons/rx";
import { server } from "../../static/index";
import verfied from "../../assets/verfied.svg";
import verifed_worng from "../../assets/verifed_worng.svg";
import { HashLoader } from "react-spinners";
import { useDispatch } from "react-redux";
import { StoreUser } from "../../redux/actions/usersAction";
const Activation = () => {
  const { activation_token } = useParams();
  const [AcountActivated, setAcountActivated] = useState(null);
  // console.log();
  const dispactch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (activation_token) {
      const token = activation_token.replaceAll("-", ".");
      axios
        .get(`${server}/users/activation/${token}`)
        .then((res) => {
          console.log(res);
          setAcountActivated(true);
          toast.success(res.data.message);
          dispactch(StoreUser(res.data, navigate));
        })
        .catch((err) => {
          setAcountActivated(false);
        });
    }
  }, [activation_token]);
  if (AcountActivated == null) return;
  <HashLoader color="#36d7b7" />;
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        {AcountActivated == true ? (
          <div className="flex flex-col items-center">
            <img src={verfied} className="w-[200px]" />
            <h2 className="mt-6 text-center capitalize text-2xl  text-gray-900">
              Your Acoount Is verfied Sccuess
            </h2>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <img src={verifed_worng} className="w-[200px]" />
            <h2 className="mt-6 text-center capitalize text-2xl  text-gray-900">
              Expired token Try Again
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Activation;
