import { Component } from 'react';

import Info from '../info/info';
import SearchPanel from '../searchPanel/searchPanel';
import Filter from '../filter/filter';
import EmployersList from '../employersList/employersList';
import EmployersAddForms from '../employersAddForm/employersAddForm';

import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: 'Jhon C.', salary: 850, increase: false, id: 1 },
        { name: 'Dima S.', salary: 1000, increase: false, id: 2 },
        { name: 'Alex Z.', salary: 1250, increase: false, id: 3 },
        { name: 'Mary L.', salary: 1450, increase: false, id: 4 },
      ],
    };
    this.maxId = 5;
  }

  // Удалить сотрудника

  deleteItem = (id) => {
    this.setState(({ data }) => {
      //const index = data.findIndex((element) => element.id === id);
      // const before = data.slice(0, index);
      // const after = data.slice(index + 1);
      // const newArr = [...before, ...after];
      return {
        // data: newArr,
        data: data.filter((item) => item.id !== id),
      };
    });
  };

  // Добавить сотрудника

  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      rise: false,
      id: this.maxId++,
    };
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      };
    });
  };

  // Премия

  onToggleIncrease = (id) => {
    this.setState(({ data }) => {
      const index = data.findIndex((element) => element.id === id);
      const oldItem = data[index];
      const newItem = { ...oldItem, increase: !oldItem.increase };
      const newArr = [
        ...data.slice(0, index),
        newItem,
        ...data.slice(index + 1),
      ];

      return {
        data: newArr,
      };
    });
  };

  // Повышение

  onToggleRise = (id) => {
    this.setState(({ data }) => {
      const index = data.findIndex((element) => element.id === id);
      const oldItem = data[index];
      const newItem = { ...oldItem, rise: !oldItem.rise };
      const newArr = [
        ...data.slice(0, index),
        newItem,
        ...data.slice(index + 1),
      ];

      return {
        data: newArr,
      };
    });
  };

  render() {
    // Общее число сотрудников
    const employees = this.state.data.length;
    // Число премированных
    const increased = this.state.data.filter((item) => item.increase).length;

    return (
      <div className="app">
        <Info employees={employees} increased={increased} />
        <div className="search-panel">
          <SearchPanel />
          <Filter />
        </div>
        <EmployersList
          data={this.state.data}
          onDelete={this.deleteItem}
          onToggleIncrease={this.onToggleIncrease}
          onToggleRise={this.onToggleRise}
        />
        <EmployersAddForms onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
