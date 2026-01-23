import Korisnik from './data/korisnik.json';

/* Funkcija za prikaz korisnika*/
const Profil = () => {


  //ovo je Javascript objekt

const KorisnikObjekt = {
    "ime": "Antonia",            // STRING
    "prezime" : "Majdandžić",      // STRING
    "godine" : 46,                 // NUMBER
    "vozacka" : true,             // BOOLEAN
    "vjestine" : ["HTML",       
    "CSS",
    "JavaScript",         
    "React"
    ],                              //NIZ
    "adresa" : {
    "ulica" : "Pirinova 23",
    "grad" : "Zagreb",
    "pbroj" : 10040,
    "drzava" : {
    "naziv" : "Hrvatska",
    "oznaka" : "HR",
    "valuta" : "EUR" 
      }                              // OBJEKT
    }
}

//ovo je JSON format, tekstualni oblik, string
const KorisnikJSON = '{  "ime": "Antonia", "prezime" : "Majdandžić", "godine" : 46, "vozacka" : true, "vjestine" : ["HTML", "CSS", "JavaScript",  "React" ], "adresa" : {  "ulica" : "Pirinova 23", "grad" : "Zagreb", "pbroj" : 10040 }}'

//pomoću JSON.parse ga pretvaramo u JavaScript objekt 
const Korisnik = JSON.parse(KorisnikJSON);


          // Ova komponenta vraća informacije o korisniku
  return(
    <div className="container">

      {KorisnikObjekt.adresa.drzava.valuta} 
      
        <h1>Profil korisnika</h1>
        <p>Ime: {Korisnik.ime}</p>
        <p>Prezime :{Korisnik.prezime}</p>
        <p>Godine .{Korisnik.godine}</p>
 
          <div>
            Vještine:
            <ul>
            
              {
                          //Map koristimo za prolazak kroz niz (i ispisivanje vrijednosti u ovom slučaju)
                Korisnik.vjestine.map(
                  (vjestina,index) => (
                      <ol>{index+1}. {vjestina}</ol>
                  )
                )
              }
              
       
            </ul>
          </div>

        <p>Vozačka : {Korisnik.vozacka}</p>
        <p>Ulica : {Korisnik.adresa.ulica}</p>
        <p>Grad :{Korisnik.adresa.grad}</p>
        <p>Poštanski broj :{Korisnik.adresa.pbroj}</p>
    </div>

    )
};
export default Profil;

 



