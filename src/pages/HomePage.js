import OrdersTable from "../components/home/OrdersTable";
import { NavLink } from "react-router-dom";

function HomePage() {
  return (
    <div className="container">
      <OrdersTable />
      <div className="text-end">
        <button type="button" className="btn btn-primary px-3 me-5 mt-4">
          <NavLink className="text-light" to="order/new">
            Add New Order
          </NavLink>
        </button>
      </div>
    </div>
  );
}
export default HomePage;
