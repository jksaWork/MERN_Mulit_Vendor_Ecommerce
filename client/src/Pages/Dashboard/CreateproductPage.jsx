import React from "react";
import { DashboardLayout } from "../../components/Dashboard";
import { Breadcrumbs, CustomFiled, Loader } from "../../components";
import { Productlinks } from "../../static";
import { Formik, Field, Form } from "formik";
import { ProductValidation } from "../../static/validator";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CreateProductAction } from "../../redux/actions/ProductsAction";
import { toast } from "react-toastify";
import { useEffect } from "react";
// import  from "../../components/CustomFiled";
function CreateproductPage() {
  const [images, setImages] = useState();
  const dispatch = useDispatch();
  const [Loading, setLoading] = useState(true);
  const { shop } = useSelector((s) => s.shop);

  const SaveProduct = (values) => {
    values.images = images;
    console.log(values);
    dispatch(CreateProductAction(values)).then(() => {
      toast.success("The Items Add Scueess Fuly");
    });
  };
  const handleFileInputChange = (e) => {
    //     setImages(e.target.files);
    setImages([...e.target.files]);
  };
  useEffect(() => {
    // console.log("Hello World");
    if (shop != null) {
      setLoading(true);
    }
  }, [shop]);
  return !Loading ? (
    <Loader />
  ) : (
    <DashboardLayout>
      <Breadcrumbs
        links={[
          ...Productlinks,
          {
            name: "Create product",
            route: "/dashboard/products/creat e",
          },
        ]}
      />
      <div className=" bg-white rounded-md p-3">
        <h2 className="text-2xl capitalize "> create Product</h2>

        <div className="bg-white py-8 px-4  sm:rounded-lg sm:px-10">
          <Formik
            initialValues={{
              name: "",
              category: "",
              description: "",
              originalPrice: "",
              discountPrice: "",
              stock: "",
              shopId: shop?._id,
            }}
            validationSchema={ProductValidation}
            onSubmit={SaveProduct}
          >
            {() => {
              return (
                <Form className="">
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="mt-1">
                      <Field
                        lable="name"
                        type="text"
                        name="name"
                        required
                        component={CustomFiled}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    </div>
                    <div className="mt-1">
                      <Field
                        lable="Categories"
                        type="text"
                        name="category"
                        required
                        component={CustomFiled}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    </div>
                    <div className="mt-1">
                      <Field
                        lable="description"
                        type="text"
                        name="description"
                        required
                        component={CustomFiled}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    </div>
                    <div className="mt-1">
                      <Field
                        lable="original Price"
                        type="number"
                        name="originalPrice"
                        required
                        component={CustomFiled}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    </div>
                    <div className="mt-1">
                      <Field
                        lable="discount Price"
                        type="number"
                        name="discountPrice"
                        required
                        component={CustomFiled}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    </div>
                    <div className="mt-1">
                      <Field
                        lable="Stock"
                        type="number"
                        name="stock"
                        required
                        component={CustomFiled}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <label
                    htmlFor="file-input"
                    className="ml-5 flex items-center justify-center  border  m-5 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                  >
                    <div className="mt-2 relative flex items-center border-dashed border-[3px] border-indigo-600  h-[160px] w-full">
                      <span className="flex h-[100%] w-[100%]  overflow-hidden">
                        {images &&
                          images.map((el, i) => (
                            <img
                              key={i}
                              src={URL.createObjectURL(el)}
                              alt="avatar"
                              className="h-[160] w-[160]  object-contain"
                            />
                          ))}
                      </span>

                      <span className="z-[10] absolute top-[50%] left-[50%] text-[red] translate-y-[-50%] translate-x-[-50%]">
                        Upload a file
                      </span>
                      <input
                        type="file"
                        name="avatar"
                        id="file-input"
                        accept=".jpg,.jpeg,.png"
                        multiple
                        onChange={handleFileInputChange}
                        className="sr-only"
                      />
                    </div>
                  </label>

                  <div>
                    <button
                      type="submit"
                      className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                    >
                      Submit
                    </button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default CreateproductPage;
