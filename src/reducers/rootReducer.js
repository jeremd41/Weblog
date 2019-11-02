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
      dateCde: "17/10/2019",
      dateLiv: "27/10/2019",
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
      dateCde: "19/10/2019",
      dateLiv: "22/10/2019",
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
      dateCde: "28/10/2019",
      dateLiv: "31/10/2019",
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
      dateCde: "25/10/2019",
      dateLiv: "31/10/2019",
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
  ]
};

const rootReducer = (state = initState, action) => {
  return state;
};

export default rootReducer;
