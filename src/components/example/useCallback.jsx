import React, { useCallback, useMemo, useState } from 'react';

const ChildComponent = React.memo(({ onClick }) => {
  console.log('ChildComponent rendering');
  return <button onClick={onClick}>Click me</button>;
});

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  // const handleClick = () => {
  //   console.log('Button clicked');
  //   setCount(prevCount => prevCount + 1);
  // };

  const handleClick = useCallback(() => {
    console.log('Button clicked');
    setCount((prevCount) => prevCount + 1);
  }, []);

  // const expensiveResult = () => {
  //   console.log('Đang tính expensiveResult');
  //   let result = 0;
  //   for (let i = 0; i < 10000; i++) {
  //     result += i;
  //   }
  //   return result;
  // };

  const expensiveResult = useMemo(() => {
    console.log('Đang tính expensiveResult');
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += i;
    }
    return result;
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
      <ChildComponent onClick={handleClick} />
      <h1>Kết quả tốn kém: {expensiveResult}</h1>
    </div>
  );
};

export default ParentComponent;
