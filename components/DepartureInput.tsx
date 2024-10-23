import React from 'react';
import { Input } from '@nextui-org/react';

interface DepartureInputProps {
  value: string;
  onChange: (value: string) => void;
}

const DepartureInput: React.FC<DepartureInputProps> = ({ value, onChange }) => {
  return (
    <Input
      label="Data di partenza"
      type="date"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      required
    />
  );
};

export default DepartureInput;
