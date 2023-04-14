import './info.css';

function Info({ increased, employees }) {
  return (
    <div className="info">
      <h1>Учёт сотрудников в ООО "Ивица"</h1>
      <h2>Общее число сотрудников: {employees}</h2>
      <h2>Премию получат: {increased} </h2>
    </div>
  );
}

export default Info;
