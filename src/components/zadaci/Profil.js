// Funkcija za prikaz korisnika
const Profil = () => {
  const Korisnik = {
    //Javascript objekt koji se sastoji od "key" : "value" parova
    ime: "Tomislav",
    prezime: "Suk",
    godine: "35",
    vozačka: true,
    vjestine: ["HTML", 
        "CSS", 
        "JavaScript", 
        "React"
    ],
    "adresa" : {
    ulica : "Sortina 1D",
    grad: "Zagreb",
    pbroj: 10040,
    }
  };

  // Ova komponenta vraća informacije o korisniku
  return <div>profil</div>;
};

export default profil;
