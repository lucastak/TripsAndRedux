import React from "react";
import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import {
  removeReserve,
  updateAmountRequest,
} from "../../store/modules/reserve/actions";

export default function Reservas() {
  const dispatch = useDispatch();
  const reservas = useSelector((state) => state.reserve);
  console.log("Reservas: ", reservas);

  function handleDelete(id) {
    dispatch(removeReserve(id));
  }

  function handleDiscrement(item) {
    dispatch(updateAmountRequest(item.id, item.amount - 1));
  }

  function handleIncrement(item) {
    dispatch(updateAmountRequest(item.id, item.amount + 1));
  }

  return (
    <div>
      <h1 className="titulo-reservas">Suas Reservas: {reservas.length}</h1>
      {reservas.map((item) => {
        return (
          <div className="reservas" key={item.id}>
            <img src={item.image} alt={item.title} />
            <strong>{item.title}</strong>
            <div className="quantity-container">
              <button onClick={() => handleDiscrement(item)}>-</button>
              <span>Quantidade: {item.amount}</span>
              <button onClick={() => handleIncrement(item)}>+</button>
            </div>

            <button type="button" onClick={() => handleDelete(item.id)}>
              Excluir
            </button>
          </div>
        );
      })}

      <footer>
        {reservas.length > 0 && (
          <button type="button" className="button-reserva">
            Solicitar Reservas
          </button>
        )}
      </footer>
    </div>
  );
}
