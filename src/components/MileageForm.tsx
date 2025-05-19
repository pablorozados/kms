import React, { useState } from "react";

type MileageFormProps = {
  onSubmit: (mileage: number) => void;
};

const MileageForm: React.FC<MileageFormProps> = ({ onSubmit }) => {
  const [mileage, setMileage] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const value = parseFloat(mileage.replace(",", "."));
    if (!isNaN(value) && value >= 0) {
      onSubmit(value);
      setMileage("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Digite a quilometragem do seu carro:
        <input
          type="number"
          value={mileage}
          onChange={(e) => setMileage(e.target.value)}
          placeholder="Ex: 50000"
          min="0"
          required
        />
      </label>
      <button type="submit">Calcular</button>
    </form>
  );
};

export default MileageForm;