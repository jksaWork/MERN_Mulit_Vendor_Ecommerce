import { Field } from "formik";
import { useState } from "react";

function CustomFiled({ field, form: { errors, touched }, ...props }) {
  const [dirty, setDirty] = useState(false);
  console.log(errors, touched);
  // const dirty;
  const { onChange, name } = field;
  const { lable } = props;
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
          onClick={() => {
            setDirty(true);
          }}
        />
      </div>
      {errors[name] && touched[name] ? (
        <div className="text-[#e11d48]">{errors[name]}</div>
      ) : null}
    </>
  );
}

export default CustomFiled;
