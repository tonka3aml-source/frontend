import tecaj from "./data/tecaj.json";

const Tecaj = () => {
  return (

      <div className="container">
      <h2>Tečajna</h2>

      <table className="table">

  <thead>
    <tr>
      <th scope="col">Država</th>
      <th scope="col">Valuta</th>
      <th scope="col">Kupovni</th>
      <th scope="col">Srednj</th>
     <th scope="col">Prodajni</th>
     <th scope="col">Datum</th>
    </tr>
   </thead>

  <tbody>
    {
        tecaj.map((tecaj) => (
   
    <tr>
      <td>{tecaj.drzava}</td>
        <td>{tecaj.valuta}</td>
        <td>{tecaj.kupovni}</td>
        <td>{tecaj.srednji}</td>
        <td>{tecaj.prodajni_tecaj}</td>
        <td>{tecaj.datum_primjene}</td>
    </tr>
        ))}
    
   </tbody>

</table>

      </div>

  );
};

export default Tecaj;
