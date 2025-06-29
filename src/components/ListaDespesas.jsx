import React from "react";
import ItemDespesa from "./ItemDespesa";

export default function ExpenseList({ despesas, aoEditar, aoExcluir }) {
  if (despesas.length === 0) {
    return <p style={{ textAlign: "center" }}>Nenhuma despesa encontrada.</p>;
  }

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {despesas.map((despesa) => (
        <ItemDespesa
          key={despesa.id}
          despesa={despesa}
          aoEditar={() => aoEditar(despesa)}
          aoExcluir={() => aoExcluir(despesa.id)}
        />
      ))}
    </ul>
  );
}
