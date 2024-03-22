import React from 'react';
import { useForm } from 'react-hook-form';

const Formulario = ({ onSubmit}) => {
  const { register, handleSubmit, formState: { errors } } = useForm();


  return (
    <div>
      <h2 className="text-2xl font-bold mt-4 mb-4">Formulário de Reserva</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4 w-1/3">
          <label htmlFor="nome" className="block text-gray-700">Nome:</label>
          <input type="text" id="nome" {...register("nome", { required: true })} className="border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full" />
          {errors.nome && <span className="text-red-500">Por favor, insira seu nome.</span>}
        </div>
        <div className="mb-4 w-1/3">
          <label htmlFor="email" className="block text-gray-700">Email:</label>
          <input type="email" id="email" {...register("email", { required: true })} className="border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full" />
          {errors.email && <span className="text-red-500">Por favor, insira um email válido.</span>}
        </div>
        <div className="mb-4 w-1/3">
          <label htmlFor="cpf" className="block text-gray-700">CPF:</label>
          <input type="text" id="cpf" {...register("cpf", { required: true, pattern: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/ })} className="border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full" />
          {errors.cpf && <span className="text-red-500">Por favor, insira um CPF válido (formato: xxx.xxx.xxx-xx).</span>}
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Fazer Reserva</button>
      </form>
    </div>
  );
};

export default Formulario;
