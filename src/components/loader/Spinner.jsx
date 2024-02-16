import React from 'react';
import { Spinner } from 'react-bootstrap';

export function CustomSpinner() {
  return (
    <div className="position-absolute top-50 start-50 translate-middle">
      <Spinner animation="border" variant="primary" className="border-8" style={{ height: '10rem', width: '10rem' }} />
    </div>
  );
}
