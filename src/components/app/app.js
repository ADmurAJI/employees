import Info from '../info/info';
import SearchPanel from '../searchPanel/searchPanel';
import Filter from '../filter/filter';
import EmployersList from '../employersList/employersList';
import EmployersAddForms from '../employersAddForm/employersAddForm';
import './app.css';

function App() {
  const data = [
    { name: 'Jhon C.', salary: 850, increase: false, id: 1 },
    { name: 'Dima S.', salary: 1000, increase: true, id: 2 },
    { name: 'Alex Z.', salary: 1250, increase: false, id: 3 },
    { name: 'Mary L.', salary: 1450, increase: false, id: 4 },
  ];

  return (
    <div className="app">
      <Info />
      <div className="search-panel">
        <SearchPanel />
        <Filter />
      </div>
      <EmployersList data={data} />
      <EmployersAddForms />
    </div>
  );
}

export default App;
