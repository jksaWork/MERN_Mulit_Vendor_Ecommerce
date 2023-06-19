import React, { useState } from "react";
import { useSelector } from "react-redux";
import { serverUrl } from "../../static";
import { MdCamera } from "react-icons/md";
import { Formik, Form, Field } from "formik";
import { RegisterValidator } from "../../static/validator";
import CustomFiled from "../CustomFiled";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from "../../styles";

function EditProfile() {
  const [Avatar, setAvatar] = useState();
  const handleFileInputChange = (e) => {
    setAvatar(e.target.files[0]);
  };

  const { user } = useSelector((s) => s.usersReducer);
  const [visible, setVisible] = useState(true);
  console.log(user);
  const handleSubmit = (el) => console.log("Hello World");
  return (
    <div className="pt-10 p-4 bg-white shadow-lg">
      <div className="w-full flex justify-center">
        {/* Image Containner  */}
        <div className="md:w-[200px] md:h-[200px] h-[100px]  w-[100px] relative  ">
          <img
            alt=""
            src={`${serverUrl}/${user.avatar}`}
            className="w-full h-full rounded-full shadow-md overflow-hidden"
          />
          <label>
            <div className="absolute flex items-center cursor-pointer justify-center w-[40px] h-[40px] rounded-full bg-[gray] bottom-0 left-[80%]">
              {" "}
              <MdCamera size={30} color="white" />
            </div>
            <input type="file" className="sr-only" />
          </label>

          <div className="bg-white  shadow sm:rounded-lg sm:px-10"></div>
        </div>
      </div>
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
              <Form className="">
                <div className=" grid md:grid-cols-2 gap-2 my-3">
                  <Field
                    lable="Full Name"
                    type="text"
                    name="fullname"
                    required
                    component={CustomFiled}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                  <div>
                    <div className="">
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
                  <div className="">
                    <Field
                      lable="Phone Number"
                      type="email"
                      name="phone"
                      autoComplete="email"
                      required
                      component={CustomFiled}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                  <div className="">
                    <Field
                      lable="ZIP code"
                      type="email"
                      name="zipcode"
                      autoComplete="email"
                      required
                      component={CustomFiled}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                  <div className="">
                    <Field
                      lable="Address"
                      type="text"
                      name="addrees[]"
                      required
                      component={CustomFiled}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                  <div className="">
                    <Field
                      lable="Address 2 "
                      type="text"
                      name="addrees[]"
                      required
                      component={CustomFiled}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                  >
                    Update
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}

export default EditProfile;
