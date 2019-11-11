import ADD_CLIENT from "./actionType";

let incrementId = 5;

const addClient = (
  societe,
  nom,
  prenom,
  fonction,
  telephone,
  mobile,
  email
) => ({
  type: ADD_CLIENT,
  id: incrementId++,
  societe,
  nom,
  prenom,
  fonction,
  telephone,
  mobile,
  email
});

export default addClient;
