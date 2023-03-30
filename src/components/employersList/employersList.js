import EmployersListItem from '../employersListItem/employersListItem';
import './employersList.css';

function EmployersList() {
  return (
    <ul className="app-list list-group">
      <EmployersListItem />
      <EmployersListItem />
      <EmployersListItem />
    </ul>
  );
}

export default EmployersList;
