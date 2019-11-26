const initState = {
  cdeA: [
    {
      nCde: 141596,
      fournisseur: "la banane joyeuse",
      reference: [
        {
          id: 1,
          ref: 1010101010,
          denomination: "Banane eco",
          qte: 2,
          unité: "pal"
        },
        {
          id: 2,
          ref: 1212121010,
          denomination: "Banane plantain",
          qte: 2,
          unité: "pal"
        }
      ],
      dateCde: "2019-10-17",
      dateLiv: "2019-10-27",
      observation: ""
    },
    {
      nCde: "141597",
      fournisseur: "Le primeur d'autrefois",
      reference: [
        {
          id: 1,
          ref: 1010101313,
          denomination: "Pomme de terre",
          qte: 5,
          unité: "pal"
        },
        {
          id: 2,
          ref: 1212121414,
          denomination: "Pomme de terre premium",
          qte: 1,
          unité: "pal"
        }
      ],
      dateCde: "2019-10-20",
      dateLiv: "2019-10-22",
      observation: "Urgent rupture"
    }
  ],
  cdeC: [
    {
      nCde: "242417",
      client: "Hyper Market",
      reference: [
        {
          id: 1,
          ref: 1010101010,
          denomination: "Banane eco",
          qte: 1,
          unité: "pal"
        },
        {
          id: 2,
          ref: 1212121010,
          denomination: "Banane plantain",
          qte: 1,
          unité: "pal"
        }
      ],
      dateCde: "2019-10-31",
      dateLiv: "2019-11-10",
      observation: "Livraison avant 12h"
    },
    {
      nCde: "242418",
      client: "Resto Plateforme",
      reference: [
        {
          id: 1,
          ref: 1010101313,
          denomination: "Pomme de terre",
          qte: 3,
          unité: "pal"
        }
      ],
      dateCde: "2019-10-25",
      dateLiv: "2019-10-31",
      observation: "Commande regulière"
    }
  ],
  client: [
    {
      id: 1,
      societe: "Hyper Market",
      nom: "Servaes",
      prenom: "Jean-luc",
      fonction: "Approvisionneur",
      telephone: "01 07 04 04 02",
      mobile: "06 07 04 04 02",
      email: "jean-luc@market.com"
    },
    {
      id: 2,
      societe: "Hyper Market",
      nom: "De sousa",
      prenom: "Louis",
      fonction: "Directeur de site",
      telephone: "01 07 77 04 02",
      mobile: "06 07 04 77 02",
      email: "louis@market.com"
    },
    {
      id: 3,
      societe: "Resto plateforme",
      nom: "Etchebest",
      prenom: "Bruno",
      fonction: "Responsable Approvisionnement",
      telephone: "01 07 77 04 02",
      mobile: "06 07 04 77 02",
      email: "etchebest@platresto.com"
    },
    {
      id: 4,
      societe: "Resto plateforme",
      nom: "Lignac",
      prenom: "Patrick",
      fonction: "PDG",
      telephone: "01 07 77 04 02",
      mobile: "06 07 04 77 02",
      email: "lignac@platresto.com"
    }
  ],
  fournisseur: [
    {
      id: "1",
      societe: "la banane joyeuse ",
      nom: " Banane",
      prenom: " Bertrand",
      fonction: "PDG",
      telephone: "01 07 04 04 02",
      mobile: "06 07 04 04 02",
      email: "bb@banane.com"
    },
    {
      id: "2",
      societe: "la banane joyeuse ",
      nom: " Rey",
      prenom: " Jean",
      fonction: "Responsable logistique",
      telephone: "01 07 04 04 02",
      mobile: "06 07 04 04 02",
      email: "rj@banane.com"
    },
    {
      id: "3",
      societe: "Le primeur d’autrefois ",
      nom: "Robert",
      prenom: " Loïc",
      fonction: "Responsable de site",
      telephone: "01 07 66 66 02",
      mobile: "06 07 66 66 02",
      email: "r.loic@autrefois.com"
    },
    {
      id: "4",
      societe: "Le primeur d’autrefois ",
      nom: "Philippe",
      prenom: " François",
      fonction: "Responsable Stock",
      telephone: "01 07 77 66 02",
      mobile: "06 07 66 77 02",
      email: "p.francois@autrefois.com"
    }
  ],
  emplacement: [
    "A11",
    "A12",
    "A13",
    "A21",
    "A22",
    "A23",
    "A31",
    "A32",
    "A33",
    "B11",
    "B12",
    "B13",
    "B21",
    "B22",
    "B23",
    "B31",
    "B32",
    "B33"
  ],
  stock: [
    {
      id: "1",
      ref: "1010101010",
      denomination: "Banane eco",
      qte: "2",
      unite: "pal",
      emplacement: "A33"
    }
  ],

  cache: []
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_CLIENT":
      return { ...state, client: [...state.client, action] };

    case "ADD_FOURNISSEUR":
      return { ...state, fournisseur: [...state.fournisseur, action] };

    case "DELETE_CLIENT":
      return {
        ...state,
        client: state.client.filter(item => {
          return action.id !== item.id;
        })
      };

    case "DELETE_FOURNISSEUR":
      return {
        ...state,
        fournisseur: state.fournisseur.filter(item => {
          return action.id !== item.id;
        })
      };

    case "UPDATE_CLIENT":
      return {
        ...state,
        client: state.client.map(item => {
          return item.id === action.id
            ? {
                id: action.id,
                societe: action.societe,
                nom: action.nom,
                prenom: action.prenom,
                fonction: action.fonction,
                telephone: action.telephone,
                mobile: action.mobile,
                email: action.email
              }
            : item;
        })
      };

    case "UPDATE_FOURNISSEUR":
      return {
        ...state,
        fournisseur: state.fournisseur.map(item => {
          return item.id === action.id
            ? {
                id: action.id,
                societe: action.societe,
                nom: action.nom,
                prenom: action.prenom,
                fonction: action.fonction,
                telephone: action.telephone,
                mobile: action.mobile,
                email: action.email
              }
            : item;
        })
      };

    case "ADD_CDEA":
      return {
        ...state,
        cdeA: [
          ...state.cdeA,
          {
            nCde:
              state.cdeA.reduce((maxId, cde) => Math.max(cde.nCde, maxId), -1) +
              1,
            fournisseur: action.fournisseur,
            reference: action.reference,
            dateCde: action.dateCde,
            dateLiv: action.dateLiv,
            observation: action.observation
          }
        ]
      };

    case "ADD_CDEC":
      return {
        ...state,
        cdeC: [
          ...state.cdeC,
          {
            nCde:
              state.cdeC.reduce((maxId, cde) => Math.max(cde.nCde, maxId), -1) +
              1,
            client: action.client,
            reference: action.reference,
            dateCde: action.dateCde,
            dateLiv: action.dateLiv,
            observation: action.observation
          }
        ]
      };

    case "UPDATE_CDEA":
      return {
        ...state,
        cdeA: state.cdeA.map(item => {
          return item.nCde === action.nCde
            ? {
                nCde: action.nCde,
                fournisseur: action.fournisseur,
                reference: action.reference,
                dateCde: action.dateCde,
                dateLiv: action.dateLiv,
                observation: action.observation
              }
            : item;
        })
      };

    case "UPDATE_CDEC":
      return {
        ...state,
        cdeC: state.cdeC.map(item => {
          return item.nCde === action.nCde
            ? {
                nCde: action.nCde,
                client: action.client,
                reference: action.reference,
                dateCde: action.dateCde,
                dateLiv: action.dateLiv,
                observation: action.observation
              }
            : item;
        })
      };

    case "DELETE_CDEA":
      return {
        ...state,
        cdeA: state.cdeA.filter(item => {
          return action.nCde !== item.nCde;
        })
      };

    case "DELETE_CDEC":
      return {
        ...state,
        cdeC: state.cdeC.filter(item => {
          return action.nCde !== item.nCde;
        })
      };

    case "ADD_RECEPT":
      return {
        ...state,
        stock: [
          ...state.stock,
          {
            id:
              state.stock.reduce(
                (maxId, item) => Math.max(item.id, maxId),
                -1
              ) + 1,
            ref: action.ref,
            denomination: action.denomination,
            qte: action.qte,
            unite: action.unite,
            emplacement: action.emplacement
          }
        ]
      };

    case "UPDATE_RECEPT":
      return {
        ...state,
        cdeA: state.cdeA.map(item => {
          return item.nCde === action.nCde
            ? {
                nCde: item.nCde,
                dateCde: item.dateCde,
                dateLiv: item.dateLiv,
                reference: item.reference.map(ligne => {
                  return ligne.id === action.id
                    ? {
                        id: ligne.id,
                        ref: ligne.ref,
                        denomination: ligne.denomination,
                        qte: ligne.qte - action.qte,
                        unité: ligne.unité
                      }
                    : ligne;
                }),
                observation: item.observation
              }
            : item;
        })
      };

    default:
      return state;
  }
};

export default rootReducer;
