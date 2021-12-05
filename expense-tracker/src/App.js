import Expenses from "./components/expenses/Expenses";

function App() {
  const expenses = [
    {id: 'e1',title: "Car Insurance", amount: 256.35, date: new Date(2021, 3, 13)},
    {id: 'e2',title: "Course Purchase", amount: 99, date: new Date(2021, 7, 15)},
    {id: 'e3',title: "AirBnb", amount: 1003.35, date: new Date(2021, 11, 28)},
    {id: 'e4',title: "Plane Ticket", amount: 2546.35, date: new Date(2021, 7, 15)},
  ]
  return (
    <div className="App">
      <h1>lets get started</h1>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
