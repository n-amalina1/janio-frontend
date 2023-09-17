import { VscTrash, VscEdit } from "react-icons/vsc";
import { Link } from "react-router-dom";

function OrdersTable() {
  return (
    <div className="container">
      <h2 className="text-center mt-5 mb-4">Order List</h2>
      <table class="table table-striped table-hover">
        <thead className="table-dark">
          <tr>
            <th scope="col">#ID</th>
            <th scope="col">Length</th>
            <th scope="col">Width</th>
            <th scope="col">Height</th>
            <th scope="col">Weight</th>
            <th scope="col">Network Assignment</th>
            <th scope="col">Status</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td className="px-0">
              <Link to="#">
                <VscEdit className="icon-brand-dark" />
              </Link>
            </td>
            <td className="ps-0">
              <VscTrash
                className="icon-brand-dark"
                data-bs-toggle="modal"
                data-bs-target="#deleteModal"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default OrdersTable;
