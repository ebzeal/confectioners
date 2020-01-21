const INITIAL_STATE = {
  vendors: [
    {
      name: "Cherry Cakes",
      imageUrl:
        "https://res.cloudinary.com/dxehksqg1/image/upload/v1579209528/confectioners/Vendors/P1010180__71599.1429012214_pjcoz9.webp",
      id: 1,
      linkUrl: "shop/cherry-cakes"
    },
    {
      name: "Freddy Fingers",
      imageUrl:
        "https://res.cloudinary.com/dxehksqg1/image/upload/v1579209587/confectioners/Vendors/phuket-cafe_z6wjny.jpg",
      id: 2,
      linkUrl: "shop/freddy-fingers"
    },
    {
      name: "Modley Bakes",
      imageUrl:
        "https://res.cloudinary.com/dxehksqg1/image/upload/v1579209567/confectioners/Vendors/cake-shop-business_inxluu.jpg",
      id: 3,
      linkUrl: "shop/modley-bakes"
    },
    {
      name: "Butter Cuppleys",
      imageUrl:
        "https://res.cloudinary.com/dxehksqg1/image/upload/v1579209587/confectioners/Vendors/phuket-cafe_z6wjny.jpg",
      size: "large",
      id: 4,
      linkUrl: "shop/butter-cuppleys"
    },

    {
      name: "Blaise Butters",
      imageUrl:
        "https://res.cloudinary.com/dxehksqg1/image/upload/v1579209522/confectioners/Vendors/cropped-bakery_numlji.jpg",
      size: "large",
      id: 4,
      linkUrl: "shop/blaise-butters"
    },

    {
      name: "Pink Foods",
      imageUrl:
        "https://res.cloudinary.com/dxehksqg1/image/upload/v1579209582/confectioners/Vendors/a686ac0d4d77c645e6dc9fb40ca8bad9_jkqe8o.jpg",
      size: "large",
      id: 5,
      linkUrl: "shop/pink-foods"
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
