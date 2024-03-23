const Header = ({title}) => {
  return <h1>{title}</h1>;
};

const Part = ({part}) => {
  return <p>{part.name} {part.exercises.toString()}</p>;
};

const Content = ({parts}) => {
  const [part1, part2, part3] = parts;
  return (
    <>
      <Part part={part1} />
      <Part part={part2} />
      <Part part={part3} />
    </>
  );
};

const Total = ({parts}) => {
  const numberOfExercises = parts.map((part) => part.exercises);
  const total = numberOfExercises.reduce((acc, val) => acc + val);
  return <p>Number of exercises {total.toString()}</p>;
};

const App = () => {
  const course = 'Half Stack application development';
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ];
  return (
    <div>
      <Header title={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

export default App;