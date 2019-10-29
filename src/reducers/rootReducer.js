const initState = {
  cdeA: [
    {
      nCde: "141596",
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
  cdeC: []
};

const rootReducer = (state = initState, action) => {
  return state;
};

export default rootReducer;