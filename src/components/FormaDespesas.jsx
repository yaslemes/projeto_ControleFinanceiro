import React, { useState, useEffect } from 'react';

const categorias = [
  'Alimentação',
  'Transporte',
  'Moradia',
  'Saúde',
  'Lazer',
  'Educação',
  'Outros'
];

export default function FormaDespesas({ onAdd, onUpdate, editingExpense, onCancel, tipo }) {
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [categoria, setCategoria] = useState('Alimentação');
  const [data, setData] = useState('');

  useEffect(() => {
    if (editingExpense) {
      setDescricao(editingExpense.descricao);
      setValor(editingExpense.valor);
      setCategoria(editingExpense.categoria);
      setData(editingExpense.data);
    } else {
      limparFormulario();
    }
  }, [editingExpense]);

  const limparFormulario = () => {
    setDescricao('');
    setValor('');
    setCategoria('Alimentação');
    setData('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const novaDespesa = {
      descricao,
      valor,
      categoria,
      data,
      tipo
    };

    if (editingExpense) {
      onUpdate({ ...novaDespesa, id: editingExpense.id });
    } else {
      onAdd(novaDespesa);
    }

    limparFormulario();
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
      <h3>{tipo === 'fixa' ? 'Despesa Fixa' : 'Despesa Variável'}</h3>
      <input
        type="text"
        placeholder="Descrição do gasto"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Valor (R$)"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
        required
      />
      <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
        {categorias.map((cat, i) => (
          <option key={i} value={cat}>{cat}</option>
        ))}
      </select>
      <input
        type="date"
        value={data}
        onChange={(e) => setData(e.target.value)}
        required
      />
      <button type="submit">
        {editingExpense ? 'Atualizar Gasto' : 'Adicionar Gasto'}
      </button>
      {editingExpense && (
        <button type="button" onClick={onCancel} style={{ marginLeft: 10 }}>
          Cancelar
        </button>
      )}
    </form>
  );
}
