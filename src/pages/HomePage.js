import OrdersTable from "../components/home/OrdersTable";
import Loader from "../components/Loader";
import { useCallback, useState, useEffect } from "react";
import { getAxios } from "../api/adminApi";

function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  const getOrders = useCallback(async () => {
    const data = await getAxios("orders");
    setData(data);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    getOrders();
  }, [getOrders]);

  return (
    <div className="container">
      {isLoading ? <Loader /> : <OrdersTable orders={data} />}
    </div>
  );
}

export default HomePage;
