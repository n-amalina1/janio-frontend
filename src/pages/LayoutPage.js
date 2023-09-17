import { Outlet } from "react-router-dom";
import React, { useCallback, useState, useEffect } from "react";
import Nav from "../components/Nav";
import { getAxios } from "../api/adminApi";
import Loader from "../components/Loader";

function LayoutPage() {
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
    <React.Fragment>
      <Nav />
      <main>{isLoading ? <Loader /> : <Outlet context={data} />}</main>
    </React.Fragment>
  );
}

export default LayoutPage;
