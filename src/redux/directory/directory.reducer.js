const INITIAL_STATE = {
  vendors: [
    {
      name: "Cherry Cakes",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      id: 1,
      linkUrl: "vendor/cherry-cakes"
    },
    {
      name: "Freddy Fingers",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      id: 2,
      linkUrl: "vendor/freddy-fingers"
    },
    {
      name: "Modley Bakes",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      id: 3,
      linkUrl: "vendor/modley-bakes"
    },
    {
      name: "Butter Cuppleys",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      size: "large",
      id: 4,
      linkUrl: "vendor/butter-cuppleys"
    },
    {
      name: "Pink Foods",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      size: "large",
      id: 5,
      linkUrl: "vendor/pink-foods"
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
