const Header = ({course}) => {
  return <h1>{course.name}</h1>;
};

const Part = ({name, exercises}) => {
  return <p>{name} {exercises.toString()}</p>;
};

const Content = ({course}) => {
  const [part1, part2, part3] = course.parts;
  return (
    <div>
      <Part name={part1.name} exercises={part1.exercises} />
      <Part name={part2.name} exercises={part2.exercises} />
      <Part name={part3.name} exercises={part3.exercises} />
    </div>
  );
};

const Total = ({course}) => {
  const vals = course.parts.map((part) => part.exercises);
  const total = vals.reduce((acc, val) => acc + val);
  return <p>Number of exercises {total.toString()}</p>;
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
    ]
  };

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};

export default App;