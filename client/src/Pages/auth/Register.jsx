import { React, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from "../../styles";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { Formik, Form, Field } from "formik";
import { RegisterValidator } from "../../static/validator";
import CustomFiled from "../../components/CustomFiled";
import { RxAvatar } from "react-icons/rx";
import { server } from "../../static/index";
const Register = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [Avatar, setAvatar] = useState();
  const handleFileInputChange = (e) => {
    // console.log("Hello World");
    setAvatar(e.target.files[0]);
  };

  const handleSubmit = async (values) => {
    const { password, fullname, email } = values;
    const data = new FormData();
    data.append("file", Avatar);
    data.append("password", password);
    data.append("email", email);
    data.append("fullname", fullname);
    const config = {
      headers: { "Content-Type": "multipart/form-data" },
    };

    await axios
      .post(`${server}/users/create`, data, config)
      .then((res) => {
        toast.success(res.data.message);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center capitalize text-3xl font-extrabold text-gray-900">
          Register As New User
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <Formik
            initialValues={{
              email: "",
              password: "",
              fullname: "",
            }}
            validationSchema={RegisterValidator}
            onSubmit={handleSubmit}
          >
            {() => {
              return (
                <Form className="space-y-6">
                  <div>
                    <div className="mt-1">
                      <Field
                        lable="Full Name"
                        type="text"
                        name="fullname"
                        required
                        component={CustomFiled}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    </div>
                    <div className="mt-3">
                      <Field
                        lable="Email address"
                        type="email"
                        name="email"
                        autoComplete="email"
                        required
                        component={CustomFiled}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>
                    <div className="mt-1 relative">
                      <Field
                        type={visible ? "text" : "password"}
                        name="password"
                        autoComplete="current-password"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                      {visible ? (
                        <AiOutlineEye
                          className="absolute right-2 top-2 cursor-pointer"
                          size={25}
                          onClick={() => setVisible(false)}
                        />
                      ) : (
                        <AiOutlineEyeInvisible
                          className="absolute right-2 top-2 cursor-pointer"
                          size={25}
                          onClick={() => setVisible(true)}
                        />
                      )}
                    </div>
                  </div>
                  <div className="mt-2 flex items-center">
                    <span className="inline-block h-8 w-8 rounded-full overflow-hidden">
                      {Avatar ? (
                        <img
                          src={URL.createObjectURL(Avatar)}
                          alt="avatar"
                          className="h-full w-full object-cover rounded-full"
                        />
                      ) : (
                        <RxAvatar className="h-8 w-8" />
                      )}
                    </span>
                    <label
                      htmlFor="file-input"
                      className="ml-5 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                    >
                      <span>Upload a file</span>
                      <input
                        type="file"
                        name="avatar"
                        id="file-input"
                        accept=".jpg,.jpeg,.png"
                        onChange={handleFileInputChange}
                        className="sr-only"
                      />
                    </label>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                    >
                      Submit
                    </button>
                  </div>
                  <div className={`${styles.noramlFlex} w-full`}>
                    <h4>Already have account?</h4>
                    <Link to="/login" className="text-blue-600 pl-2">
                      Login
                    </Link>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Register;
