import Info from '../info/info';
import SearchPanel from '../searchPanel/searchPanel';
import Filter from '../filter/filter';
import EmployersList from '../employersList/employersList';
import EmployersAddForms from '../employersAddForm/employersAddForm';
import './app.css';

function App() {
  return (
    <div className="app">
      <Info />

      <div className="search-panel">
        <SearchPanel />
        <Filter />
      </div>
      <EmployersList />
      <EmployersAddForms />
    </div>
  );
}

export default App;
