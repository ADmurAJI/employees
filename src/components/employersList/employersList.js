import EmployersListItem from '../employersListItem/employersListItem';
import './employersList.css';

function EmployersList({ data }) {
  const elements = data.map((item) => {
    const { id, ...itemProps } = item;
    return <EmployersListItem key={id} {...itemProps} />;
  });

  return <ul className="app-list list-group">{elements}</ul>;
}

export default EmployersList;
