import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DashboardLayout } from "../../components/Dashboard";
import { Breadcrumbs, Loader } from "../../components";
import { Evnetlinks, Productlinks } from "../../static";
import { useEffect } from "react";
// import { getAllProductsActions,  } from "../../redux/actions/ProductsAction";
import { toast } from "react-toastify";
import { useMemo } from "react";
import { MaterialReactTable } from "material-react-table";
import { BsFillPenFill, BsTrash2 } from "react-icons/bs";
import { getAllEventsActions } from "../../redux/actions/EventAction";
import ProductTablepption from "../../components/Dashboard/Products/ProductTablepption";
import EventTableOption from "../../components/Dashboard/Events/EventTableOption";
function DashBoardProductsPage() {
  const { events, isLoading, error } = useSelector((s) => s.events);
  const { shop } = useSelector((s) => s.shop);
  console.log(events, isLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    if (shop && !events) {
      dispatch(getAllEventsActions(shop._id))
        .then(() => {})
        .catch((err) => {
          toast.error(err.message);
        });
    }
    // if (error) ;
    console.log(events, "events");
  }, [dispatch, shop]);

  const columns = useMemo(
    () => [
      {
        accessorKey: "_id", //access nested data with dot notation
        header: "ID",
        size: 150,
      },
      {
        accessorKey: "status", //access nested data with dot notation
        header: "Status",
        size: 150,
        Cell: ({ cell }) => (
          <div
            className={`text-white w-[60px] rounded-md flex justify-center ${
              cell.getValue() == "active" ? "bg-green-500" : "bg-red-400"
            }  `}
          >
            {cell.getValue()}
          </div>
        ),
      },
      {
        accessorKey: "start_date", //access nested data with dot notation
        header: "start_date",
        size: 150,
      },
      {
        accessorKey: "end_date", //access nested data with dot notation
        header: "end_date",
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
        Cell: ({ cell }) => (
          <div className=" badge-accent  text-white w-[40px] rounded-md flex justify-center">
            {cell.getValue()}
          </div>
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
        accessorKey: "_id", //normal accessorKey
        header: "id",
        // accessorFn: (row) => row,
        size: 200,
        Cell: ({ cell, row }) => {
          // const row = cell;
          // console.log(, "rowwwww");
          return <EventTableOption data={row.original} />;
        },
      },
    ],
    []
  );
  return (
    <DashboardLayout>
      <Breadcrumbs links={[...Evnetlinks]} />
      <div className=" bg-white rounded-md p-3">
        {isLoading ? (
          <Loader />
        ) : (
          events && (
            <MaterialReactTable
              className="p-12"
              columns={columns}
              data={events}
            />
          )
        )}
      </div>
    </DashboardLayout>
  );
}

export default DashBoardProductsPage;
