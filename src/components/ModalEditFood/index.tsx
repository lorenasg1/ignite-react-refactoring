import { Component, createRef, useRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';
import { FormHandles, SubmitHandler } from '@unform/core';

interface Food {
  name: string;
  description: string;
  price: number;
  image: string;
}

interface ModalEditFood {
  isOpen: boolean;
  editingFood: Food;
  setIsOpen: () => void;
  handleUpdateFood: (food: Food) => Promise<void>;
}

interface FormData {
  name: string;
  description: string;
  price: number;
  image: string;
}

const ModalEditFood = ({
  isOpen,
  editingFood,
  setIsOpen,
  handleUpdateFood,
}: ModalEditFood) => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler<FormData> = (data) => {
    handleUpdateFood(data);
    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
        <h1>Editar Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />

        <button type="submit" data-testid="edit-food-button">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};
// };

export default ModalEditFood;
