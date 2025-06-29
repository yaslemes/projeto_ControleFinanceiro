import React, { useState } from "react";

export default function ItemDespesa({ despesa, aoEditar, aoExcluir }) {
  const [modoEdicao, setModoEdicao] = useState(false);
  const [form, setForm] = useState({ ...despesa });

  const handleSalvar = () => {
    // Pode validar se quiser
    aoEditar(form);
    setModoEdicao(false);
  };

  const handleCancelar = () => {
    setForm({ ...despesa });
    setModoEdicao(false);
  };

  const inputStyle = { marginBottom: 8, display: "block", width: "100%" };

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
            placeholder="Descrição"
            style={inputStyle}
          />
          <input
            type="number"
            value={form.valor}
            onChange={(e) =>
              setForm({ ...form, valor: parseFloat(e.target.value) || 0 })
            }
            placeholder="Valor"
            style={inputStyle}
          />
          <input
            type="date"
            value={form.data}
            onChange={(e) => setForm({ ...form, data: e.target.value })}
            style={inputStyle}
          />
          <select
            value={form.categoria}
            onChange={(e) => setForm({ ...form, categoria: e.target.value })}
            style={inputStyle}
          >
            <option value="">Selecione Categoria</option>
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Transporte">Transporte</option>
            <option value="Educação">Educação</option>
          </select>
          <select
            value={form.tipo}
            onChange={(e) => setForm({ ...form, tipo: e.target.value })}
            style={inputStyle}
          >
            <option value="">Selecione Tipo</option>
            <option value="Fixa">Fixa</option>
            <option value="Variável">Variável</option>
          </select>
          <button onClick={handleSalvar} style={{ marginRight: 8 }}>
            Salvar
          </button>
          <button onClick={handleCancelar}>Cancelar</button>
        </>
      ) : (
        <>
          <strong>{despesa.descricao}</strong>
          <p>
            R$ {despesa.valor.toFixed(2)} — {despesa.categoria} — {despesa.tipo}
          </p>
          <p>{despesa.data}</p>
          <button onClick={() => setModoEdicao(true)} style={{ marginRight: 8 }}>
            Editar
          </button>
          <button onClick={aoExcluir} style={{ color: "red" }}>
            Excluir
          </button>
        </>
      )}
    </li>
  );
}
