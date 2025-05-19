import React, { useState } from "react";

interface MileageFormProps {
  onSubmit: (mileage: number) => void;
}

const MileageForm: React.FC<MileageFormProps> = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const num = Number(value.replace(",", "."));
    if (!isNaN(num) && num >= 0) {
      onSubmit(num);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="mileage-input">
        Quantos quilômetros seu carro tem atualmente:
      </label>
      <input
        id="mileage-input"
        type="number"
        min="0"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Ex: 123456"
        required
      />
      <button type="submit">Calcular</button>
    </form>
  );
};

export default MileageForm;