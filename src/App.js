import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Calendario from './components/calendar';
import Formulario from './components/form';

function App() {
  const [eventos, setEventos] = useState([]);

  const handleSlotSelect = (slotInfo) => {
    const { start, end } = slotInfo;
    const novoEvento = {
      title: 'Novo Evento',
      start,
      end,
    };
    setEventos([...eventos, novoEvento]);
    toast.success('Evento agendado com sucesso!');
  };

  return (
    <div className="container mx-auto py-8">
      <h3 className="text-2xl font-bold mb-12">Bem vindo ao sistema de agendamento do coworking da Softex/Porto Digital</h3>
      <Calendario eventos={eventos} onSlotSelect={handleSlotSelect} />
      <Formulario />
    </div>
  );
}

export default App;
