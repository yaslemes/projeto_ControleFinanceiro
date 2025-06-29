import React from "react";

export default function Resumo({ despesas }) {
  const totalGeral = despesas.reduce((acc, item) => acc + item.valor, 0);
  const totalFixa = despesas
    .filter((d) => d.tipo === "Fixa")
    .reduce((acc, item) => acc + item.valor, 0);
  const totalVariavel = despesas
    .filter((d) => d.tipo === "Variável")
    .reduce((acc, item) => acc + item.valor, 0);

  const caixaStyle = {
    flex: 1,
    padding: "15px",
    margin: "0 10px",
    borderRadius: "8px",
    backgroundColor: "#e0f7fa",
    textAlign: "center",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between", margin: "20px 0" }}>
      <div style={caixaStyle}>
        <h4>Fixas</h4>
        <p>R$ {totalFixa.toFixed(2)}</p>
      </div>
      <div style={caixaStyle}>
        <h4>Variáveis</h4>
        <p>R$ {totalVariavel.toFixed(2)}</p>
      </div>
      <div style={caixaStyle}>
        <h4>Total</h4>
        <p>R$ {totalGeral.toFixed(2)}</p>
      </div>
    </div>
  );
}
