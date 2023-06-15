import { Field } from "formik";
import { useState } from "react";

function CustomFiled({ field, form: { errors, touched }, ...props }) {
  const [dirty, setDirty] = useState(false);
  // console.log(errors, touched);
  // const dirty;
  const { onChange, name } = field;
  const { lable, className } = props;
  const ErrorClass =
    "bg-red-50  border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg  focus:border-none dark:bg-gray-700  block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500";

  return (
    <>
      <div className="relative w-full  group ">
        <label
          htmlFor={lable}
          className="block text-sm font-medium text-gray-700"
        >
          {"  "}
          {props.lable + " :"}
        </label>
        <input
          {...field}
          {...props}
          className={errors[name] && touched[name] ? ErrorClass : className}
          onClick={() => {
            setDirty(true);
          }}
        />
      </div>
      {errors[name] && touched[name] ? (
        <div className="mt-2 text-sm text-red-600 dark:text-red-500">
          {errors[name]}
        </div>
      ) : null}
    </>
  );
}

export default CustomFiled;
