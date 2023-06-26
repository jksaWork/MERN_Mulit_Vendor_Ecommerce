import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DashboardLayout } from "../../components/Dashboard";
import { Breadcrumbs, Loader } from "../../components";
import { Productlinks } from "../../static";
import { useEffect } from "react";
import { getAllProductsActions } from "../../redux/actions/ProductsAction";
import { toast } from "react-toastify";
import { useMemo } from "react";
import { MaterialReactTable } from "material-react-table";
import { BsFillPenFill, BsTrash2 } from "react-icons/bs";
import ProductTablepption from "../../components/Dashboard/Products/ProductTablepption";

function DashBoardProductsPage() {
  const { products, isLoading, error } = useSelector((s) => s.products);
  const { shop } = useSelector((s) => s.shop);
  console.log(products, isLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    if (shop && !products) dispatch(getAllProductsActions(shop._id));
    if (error) toast.success(error);
    console.log(products, "Products");
  }, [dispatch, shop, products]);

  const columns = useMemo(
    () => [
      {
        accessorKey: "_id", //access nested data with dot notation
        header: "ID",
        size: 150,
      },
      {
        accessorKey: "name", //access nested data with dot notation
        header: "Product Nmae",
        size: 150,
      },
      {
        accessorKey: "description",
        header: "description",
        size: 150,
      },
      {
        accessorKey: "category", //normal accessorKey
        header: "category",
        size: 200,
        Cell: ({ row }) => (
          <ProductTablepption key={row.original.id} data={row.original} />
        ),
      },
      {
        accessorKey: "originalPrice",
        header: "Original Price",
        size: 150,

        //    cell: () => (
        //      <div className="">
        //        <div className="badge badge-neutral">neutral</div>
        //        <div className="badge badge-primary">primary</div>
        //        <div className="badge badge-secondary">secondary</div>
        //        <div className="badge badge-accent">accent</div>
        //      </div>
        //    ),
      },
      {
        accessorKey: "discountPrice",
        header: "Discount Price",
        size: 150,
      },
      {
        accessorKey: "stock",
        header: "Stock Count",
        size: 150,
      },
      {
        accessorKey: "_id", //normal accessorKey
        header: "id",
        size: 200,
        Cell: ({ cell }) => (
          <div className="flex gap-2" key={cell.getValue()}>
            <span className="w-[30px] h-[30px] items-center cursor-pointer text-white  rounded-md flex justify-center">
              <BsTrash2 size={20} color="red" />
            </span>
            <span className="w-[30px] h-[30px]  cursor-pointer items-center text-white rounded-md flex justify-center">
              <BsFillPenFill size={20} color="black" />
            </span>
          </div>
        ),
      },
    ],
    []
  );
  return (
    <DashboardLayout>
      <Breadcrumbs links={[...Productlinks]} />
      <div className=" bg-white rounded-md p-3">
        {isLoading ? (
          <Loader />
        ) : (
          products && (
            <MaterialReactTable
              className="p-12"
              columns={columns}
              data={products}
            />
          )
        )}
      </div>
    </DashboardLayout>
  );
}

export default DashBoardProductsPage;
