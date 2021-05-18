import "./App.css";

const x = 10;
const y = 5;
const z = 100;

const f = (props) => <Test {...props} />;
const Test = ({ a }) => <div>{a}</div>;

const withDefaultA = (cb, obj) =>
  function kkk(props) {
    const p = Object.keys(props).length ? props : obj;
    return cb(p);
  };

const decorator = (Story) => (
  <div className="App">
    <Story a={x} />
    {/* {Story({ a: x })} */}
  </div>
);
const App = ({ a }) => {
  const renderFunc = withDefaultA(App2, { a });
  return decorator(renderFunc, { a });
};

const decorator2 = (Story) => (
  <div className="App2">
    <Story a={y} />
    {/* {Story({ a: y })} */}
  </div>
);
const App2 = ({ a }) => {
  const renderFunc = withDefaultA(App3, { a });
  return decorator2(renderFunc, { a });
};

const decorator3 = (Story) => (
  <div className="App3">
    <Story a={z} />
  </div>
);
const App3 = ({ a }) => {
  const renderFunc = withDefaultA(f, { a });
  return decorator3(renderFunc, { a });
};

export default App;
