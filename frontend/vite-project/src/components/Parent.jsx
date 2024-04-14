import React from 'react';
import Card from './Card';

function Parent() {
  return (
  <>
    <div className="flex mt-40 ml-3">
    <div className="border border-black p-2" style={{ width: "130px", height: "130px" }}>
    <b>06:45AM</b><br/>ends 08:45AM    </div>
      <Card id={1} />
      <Card id={2} />
      <Card id={3} />
      <Card id={4} />
      <Card id={5} />
      <Card id={6} />
      <Card id={7} />
    </div>
    </>
  );
}

export default Parent;
