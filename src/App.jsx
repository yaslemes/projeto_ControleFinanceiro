import React, { useState } from "react";
import Header from "./components/Header/Header";
import CadastroDespesas from "./components/CadastroDespesas/CadastroDespesas";
import ExpenseList from "./components/ListaDespesas";
import ExpenseFilter from "./components/FiltroDespesas";
import Resumo from "./components/Resumo/Resumo";

export default function App() {
  const [despesas, setDespesas] = useState([]);
  const [filtroCategoria, setFiltroCategoria] = useState("");
  const [filtroTipo, setFiltroTipo] = useState("");

  const adicionarDespesa = (novaDespesa) => {
    setDespesas((prev) => [...prev, novaDespesa]);
  };

  const editarDespesa = (despesaAtualizada) => {
    setDespesas((prev) =>
      prev.map((d) => (d.id === despesaAtualizada.id ? despesaAtualizada : d))
    );
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
      <Header />

      <Resumo despesas={despesasFiltradas} />

      <CadastroDespesas tipo="Fixa" onAddDespesa={adicionarDespesa} />
      <CadastroDespesas tipo="Variável" onAddDespesa={adicionarDespesa} />

      <ExpenseFilter
        categoria={filtroCategoria}
        tipo={filtroTipo}
        onCategoriaChange={setFiltroCategoria}
        onTipoChange={setFiltroTipo}
      />

      <ExpenseList
        despesas={despesasFiltradas}
        aoEditar={editarDespesa}
        aoExcluir={excluirDespesa}
      />
    </div>
  );
}
