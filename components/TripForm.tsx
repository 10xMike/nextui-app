import React, { useState } from 'react';
import { Button } from '@nextui-org/react';
import DepartureInput from './DepartureInput';
import ReturnInput from './ReturnInput';

const TripForm: React.FC = () => {
  const [departureDate, setDepartureDate] = useState<string>('');
  const [returnDate, setReturnDate] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Departure Date:", departureDate);
    console.log("Return Date:", returnDate);
    // Puoi gestire il submit qui, ad esempio fare una chiamata API
  };

  return (
    <form onSubmit={handleSubmit}>
      <DepartureInput value={departureDate} onChange={setDepartureDate} />
      <ReturnInput value={returnDate} onChange={setReturnDate} />
      <Button type="submit">Prenota</Button>
    </form>
  );
};

export default TripForm;
