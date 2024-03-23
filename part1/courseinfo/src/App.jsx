const Header = (props) => {
  return <h1>{props.title}</h1>;
};

const Part = (props) => {
  return <p>{props.name} {props.exercises.toString()}</p>;
};

const Content = () => {
  return (
    <div>
      <Part name='Fundamentals of React' exercises={10} />
      <Part name='Using props to pass data' exercises={7} />
      <Part name='State of a component' exercises={14} />
    </div>
  );
};

const Total = (props) => {
  let total = props.exercises.reduce((acc, val) => acc + val);
  return <p>Number of exercises {total.toString()}</p>;
};

const App = () => {
  return (
    <div>
      <Header title='Half Stack application development' />
      <Content />
      <Total exercises={[10, 7, 14]} />
    </div>
  );
};

export default App;