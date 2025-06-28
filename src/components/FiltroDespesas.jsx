import React from "react";

const categorias = [
  "Alimentação",
  "Transporte",
  "Moradia",
  "Saúde",
  "Lazer",
  "Educação",
  "Outros",
];

const tipos = ["fixa", "variavel"];

export default function FiltroDespesas({
  categoriaSelecionada,
  tipoSelecionado,
  aoMudarCategoria,
  aoMudarTipo,
}) {
  return (
    <div style={{ marginBottom: 20 }}>
      <label>
        Categoria:{" "}
        <select
          value={categoriaSelecionada}
          onChange={(e) => aoMudarCategoria(e.target.value)}
        >
          <option value="">Todas as Categorias</option>
          {categorias.map((cat, i) => (
            <option key={i} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </label>

      <label style={{ marginLeft: 20 }}>
        Tipo:{" "}
        <select
          value={tipoSelecionado}
          onChange={(e) => aoMudarTipo(e.target.value)}
        >
          <option value="">Todos os Tipos</option>
          {tipos.map((t, i) => (
            <option key={i} value={t}>
              {t === "fixa" ? "Fixa" : "Variável"}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}
