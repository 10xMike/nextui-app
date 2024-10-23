import React from 'react';
import { Input } from '@nextui-org/react';

interface ReturnInputProps {
  value: string;
  onChange: (value: string) => void;
}

const ReturnInput: React.FC<ReturnInputProps> = ({ value, onChange }) => {
  return (
    <Input
      label="Data di ritorno"
      type="date"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      required
    />
  );
};

export default ReturnInput;
