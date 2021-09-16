import React, { useState } from 'react';
import Counter from './counter';

const Counters = () => {
  const initialState = [
    {value: 0, id: 1, name: 'Ложка'},
    {value: 0, id: 2, name: 'Вилка'},
    {value: 0, id: 3, name: 'Тарелка'},
    {value: 0, id: 4, name: 'Набор минималиста'},
    {value: 0, id: 5, name: 'Ненужный предмет'}
  ];
  const [counters, setCounters] = useState(initialState);

  const handlerDelete = (counterId) => {
    setCounters(prev => prev.filter(c => c.id !== counterId))
  }

  const handlerIncrement = (counterId) => {
    const newcounters = [...counters];
    newcounters.map(c => {
      if(c.id === counterId) {
        c.value += 1;
      }
      return c
    })
    setCounters(newcounters);
  }

  const handlerDecrement = (counterId) => {
    const newcounters = [...counters];
    newcounters.map(c => {
      if(c.id === counterId) {
        if(c.value > 0) {
          c.value -= 1;
        }
      }
      return c
    })
    setCounters(newcounters);
  }

  const handleReset = (state) => {
    setCounters(state);
  }

  return (
    <>
    <button className="btn btn-danger btn-sm p-2" onClick={() => handleReset(initialState)}>Сброс</button>
    {counters.map(counter => 
      <Counter
        {...counter}
        key={counter.id}
        onIncrement={handlerIncrement}
        onDecrement={handlerDecrement}
        onDelete={handlerDelete}
      />  
    )}
    </>
  );
}
 
export default Counters;