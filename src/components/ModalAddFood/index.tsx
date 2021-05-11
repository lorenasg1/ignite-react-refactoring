import { Component, createRef, useCallback, useRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';
import { SubmitHandler, FormHandles } from '@unform/core';

interface Food {
  id: number;
  name: string;
  description: string;
  price: number;
  available: boolean;
  image: string;
}

interface ModalAddFood {
  isOpen: boolean;
  // children: ReactNode;
  setIsOpen: () => void;
  handleAddFood: (food: Food) => Promise<void>;
}

interface FormData {
  name: string;
  description: string;
  price: number;
  image: string;
}

const ModalAddFood = ({ isOpen, setIsOpen, handleAddFood }: ModalAddFood) => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler<Food> = (data) => {
    handleAddFood(data);
    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Novo Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />
        <button type="submit" data-testid="add-food-button">
          <p className="text">Adicionar Prato</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};
// };

export default ModalAddFood;
