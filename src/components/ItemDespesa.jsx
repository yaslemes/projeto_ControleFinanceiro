import React from "react";

export default function ItemDespesa({ despesa, aoEditar, aoExcluir }) {
  return (
    <li
      style={{
        border: "1px solid #ccc",
        borderRadius: 8,
        padding: 10,
        marginBottom: 10,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <strong>{despesa.descricao}</strong>
        <br />
        R$ {Number(despesa.valor).toFixed(2)} — {despesa.categoria} —{" "}
        {despesa.tipo === "fixa" ? "Fixa" : "Variável"}
        <br />
        <small>{despesa.data}</small>
      </div>
      <div>
        <button onClick={aoEditar} style={{ marginRight: 8 }}>
          Editar
        </button>
        <button onClick={aoExcluir} style={{ color: "red" }}>
          Excluir
        </button>
      </div>
    </li>
  );
}
