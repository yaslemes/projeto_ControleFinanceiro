import React, { useState } from "react";

export default function ItemDespesa({ despesa, aoEditar, aoExcluir }) {
  const [modoEdicao, setModoEdicao] = useState(false);
  const [form, setForm] = useState({ ...despesa });

  const handleSalvar = () => {
    aoEditar(form);
    setModoEdicao(false);
  };

  const handleCancelar = () => {
    setForm({ ...despesa });
    setModoEdicao(false);
  };

  return (
    <li
      style={{
        border: "1px solid #ccc",
        borderRadius: 8,
        padding: 10,
        marginBottom: 10,
      }}
    >
      {modoEdicao ? (
        <>
          <input
            type="text"
            value={form.descricao}
            onChange={(e) => setForm({ ...form, descricao: e.target.value })}
          />
          <input
            type="number"
            value={form.valor}
            onChange={(e) =>
              setForm({ ...form, valor: parseFloat(e.target.value) || 0 })
            }
          />
          <input
            type="date"
            value={form.data}
            onChange={(e) => setForm({ ...form, data: e.target.value })}
          />
          <select
            value={form.categoria}
            onChange={(e) => setForm({ ...form, categoria: e.target.value })}
          >
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Transporte</option>
            <option>Educação</option>
          </select>
          <select
            value={form.tipo}
            onChange={(e) => setForm({ ...form, tipo: e.target.value })}
          >
            <option>Fixa</option>
            <option>Variável</option>
          </select>
          <br />
          <button onClick={handleSalvar}>Salvar</button>
          <button onClick={handleCancelar}>Cancelar</button>
        </>
      ) : (
        <>
          <strong>{despesa.descricao}</strong>
          <p>
            R$ {despesa.valor.toFixed(2)} — {despesa.categoria} — {despesa.tipo}
          </p>
          <p>{despesa.data}</p>
          <button onClick={() => setModoEdicao(true)}>Editar</button>
          <button onClick={aoExcluir} style={{ color: "red" }}>
            Excluir
          </button>
        </>
      )}
    </li>
  );
}
