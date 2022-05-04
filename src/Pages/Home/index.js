import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addReserveRequest } from "../../store/modules/reserve/actions";
import api from "../../services/api";
import "./styles.css";

export default function Home({ history }) {
  const dispatch = useDispatch();
  const [trips, setStrips] = useState([]);

  useEffect(() => {
    async function loadApi() {
      const response = await api.get("trips");
      setStrips(response.data);
    }

    loadApi();
  }, []);

  function handleAdd(id) {
    dispatch(addReserveRequest(id));
    //retirar depois
    history.push("/reservas");
  }

  return (
    <div className="box">
      {trips.map((item) => (
        <li key={item.id}>
          <img src={item.image} alt={item.title} />
          <strong>{item.title}</strong>
          <span>Status: {item.status ? "Disponível" : "Indisponível"}</span>

          <button type="button" onClick={() => handleAdd(item.id)}>
            Solicitar reserva
          </button>
        </li>
      ))}
    </div>
  );
}
