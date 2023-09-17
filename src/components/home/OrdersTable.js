import { VscTrash, VscEdit } from "react-icons/vsc";
import { Link, useOutletContext } from "react-router-dom";

function OrdersTable() {
  const { orders } = useOutletContext();
  let renderedTable = orders.map((order) => {
    return (
      <tr key={order.order_id}>
        <td>{order.order_id}</td>
        <td>{order.order_length}</td>
        <td>{order.order_width}</td>
        <td>{order.order_height}</td>
        <td>{order.order_weight}</td>
        <td>{order.order_status}</td>
        <td>{order.consignee.consignee_country}</td>
        <td className="px-1">
          <Link to={`/order/edit/${order.order_id}`}>
            <VscEdit className="icon-brand-dark text-danger" />
          </Link>
        </td>
        <td className="ps-1">
          <VscTrash
            className="icon-brand-dark"
            data-bs-toggle="modal"
            data-bs-target="#deleteModal"
          />
        </td>
      </tr>
    );
  });

  return (
    <div className="container px-5">
      <h2 className="text-center mt-5 mb-4">Order List</h2>
      <table className="table table-striped table-hover">
        <thead className="table-dark text-center">
          <tr>
            <th scope="col">#ID</th>
            <th scope="col">Length</th>
            <th scope="col">Width</th>
            <th scope="col">Height</th>
            <th scope="col">Weight</th>
            <th scope="col">Status</th>
            <th scope="col">Network Assignment</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody className="text-center">{renderedTable}</tbody>
      </table>
    </div>
  );
}

export default OrdersTable;
