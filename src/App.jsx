import React, { useState } from "react";
import ExpenseList from "./components/ListaDespesas";
import ExpenseFilter from "./components/FiltroDespesas";

export default function App() {
  const [despesas, setDespesas] = useState([
    // Pode iniciar vazio ou com despesas de teste
  ]);
  const [filtroCategoria, setFiltroCategoria] = useState("");
  const [filtroTipo, setFiltroTipo] = useState("");

  const editarDespesa = (despesa) => {
    
  };

  const excluirDespesa = (id) => {
    setDespesas((prev) => prev.filter((d) => d.id !== id));
  };

  const despesasFiltradas = despesas.filter((d) => {
    return (
      (filtroCategoria ? d.categoria === filtroCategoria : true) &&
      (filtroTipo ? d.tipo === filtroTipo : true)
    );
  });

  return (
    <div style={{ maxWidth: 600, margin: "auto", padding: 20 }}>
      <h1>Lista de Despesas</h1>

      <ExpenseFilter
        categoria={filtroCategoria}
        tipo={filtroTipo}
        onCategoriaChange={setFiltroCategoria}
        onTipoChange={setFiltroTipo}
      />

      <ExpenseList
        despesas={despesasFiltradas}
        onEdit={editarDespesa}
        onDelete={excluirDespesa}
      />
    </div>
  );
}
