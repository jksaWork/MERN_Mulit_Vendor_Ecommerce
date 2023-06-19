import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo } from "react";
import { MaterialReactTable } from "material-react-table";
// DataGrid

const TrackOrder = () => {
  const { user } = useSelector((state) => state.usersReducer);
  //   const { orders } = useSelector((state) => state.order);
  const dispatch = useDispatch();
  // useSelector
  //   useDispatch;
  const orders = [
    {
      id: "hello World",
      status: "jksa Altigan",
      itemsQty: "21",
      total: 12,
      cart: ["Heelo", "world"],
    },
  ];
  useEffect(() => {
    //     dispatch(getAllOrdersOfUser(user._id));
  }, []);

  const columns = useMemo(
    () => [
      {
        accessorKey: "id", //access nested data with dot notation
        header: "order id",
        size: 150,
      },
      {
        accessorKey: "status",
        header: "status",
        size: 150,
      },
      {
        accessorKey: "itemsQty", //normal accessorKey
        header: "itemsQty",
        size: 200,
      },
      {
        accessorKey: "total",
        header: "total",
        size: 150,
      },
    ],
    []
  );
  const row = [];
  // useMemo
  orders &&
    orders.forEach((item) => {
      row.push({
        id: (Math.random() + 1).toString(36).substring(7),
        itemsQty: item.cart.length,
        total: "US$ " + item.totalPrice,
        status: item.status,
      });
    });

  return (
    <div className="pl-8 pt-1">
      <MaterialReactTable
        enableBottomToolbar={true}
        data={row}
        style={{ boxShadow: "none", borderRadius: 20, padding: 30 }}
        columns={columns}
        pageSize={10}
      />
    </div>
  );
};
export default TrackOrder;
