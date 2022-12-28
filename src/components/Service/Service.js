import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import DetailService from "../DetailService/DetailService";

const Service = () => {
  const { id } = useParams();

  const [service, setService] = useState([]);
  const [single, setSingle] = useState([]);

  useEffect(() => {
    fetch("https://api-pro-courier.vercel.app/services/")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [id]);

  useEffect(() => {
    const values = service.filter((s) => s._id == id);
    setSingle(values);
  }, [service]);

  return (
    <div className="container">
      {single.map((s) => (
        <DetailService key={s._id} s={s} />
      ))}
    </div>
  );
};

export default Service;
