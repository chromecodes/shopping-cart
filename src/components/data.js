export const Products = (() => {
  let data = [
    {
      type: "Lamp",
      id: "T1",
      name: "Spherical Lamp",
      img: "img/items/TL1.png",
      imgs: "img/items/LTL1.png",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero reiciendis necessitatibus quidem? Fugit ipsam aperiam labore officiis vel nihil eligendi nobis voluptate ex, inventore atque impedit quis, ratione quo. Quibusdam.",
      price: 29.9,
      amt: 1,
    },
    {
      id: "T2",
      type: "Lamp",
      name: "Vintage Wooden Lamp",
      img: "img/items/TL2.png",
      imgs: "img/items/LTL2.png",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero reiciendis necessitatibus quidem? Fugit ipsam aperiam labore officiis vel nihil eligendi nobis voluptate ex, inventore atque impedit quis, ratione quo. Quibusdam.",
      amt: 1,
      price: 39.9,
    },
    {
      id: "T3",
      type: "Lamp",
      name: "Cage Lamp",
      img: "img/items/TL3.png",
      imgs: "img/items/LTL3.png",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero reiciendis necessitatibus quidem? Fugit ipsam aperiam labore officiis vel nihil eligendi nobis voluptate ex, inventore atque impedit quis, ratione quo. Quibusdam.",
      amt: 1,
      price: 34.9,
    },
    {
      id: "T4",
      type: "Lamp",
      name: "Flower Vase Lamp",
      img: "img/items/TL4.png",
      imgs: "img/items/LTL4.png",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero reiciendis necessitatibus quidem? Fugit ipsam aperiam labore officiis vel nihil eligendi nobis voluptate ex, inventore atque impedit quis, ratione quo. Quibusdam.",
      amt: 1,
      price: 28.9,
    },
    {
      id: "TL5",
      type: "Lamp",
      name: "Box Lamp",
      img: "img/items/TL5.png",
      imgs: "img/items/LTL5.png",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero reiciendis necessitatibus quidem? Fugit ipsam aperiam labore officiis vel nihil eligendi nobis voluptate ex, inventore atque impedit quis, ratione quo. Quibusdam.",
      amt: 1,
      price: 29.9,
    },
    {
      id: "TL6",
      type: "Lamp",
      name: "Sci-fi Lamp",
      img: "img/items/TL6.png",
      imgs: "img/items/LTL6.png",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero reiciendis necessitatibus quidem? Fugit ipsam aperiam labore officiis vel nihil eligendi nobis voluptate ex, inventore atque impedit quis, ratione quo. Quibusdam.",
      amt: 1,
      price: 44.9,
    },
    {
      id: "TL7",
      type: "Lamp",
      name: "Tiny Decoration Lamp",
      img: "img/items/TL7.png",
      imgs: "img/items/LTL7.png",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero reiciendis necessitatibus quidem? Fugit ipsam aperiam labore officiis vel nihil eligendi nobis voluptate ex, inventore atque impedit quis, ratione quo. Quibusdam.",
      amt: 1,
      price: 21.9,
    },
    {
      id: "TL8",
      type: "Lamp",
      name: "Workshop Lamp",
      img: "img/items/TL8.png",
      imgs: "img/items/LTL8.png",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero reiciendis necessitatibus quidem? Fugit ipsam aperiam labore officiis vel nihil eligendi nobis voluptate ex, inventore atque impedit quis, ratione quo. Quibusdam.",
      amt: 1,
      price: 15.9,
    },
    {
      id: "TL9",
      type: "Lamp",
      name: "Crystal Salt Lamp",
      img: "img/items/TL9.png",
      imgs: "img/items/LTL9.png",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero reiciendis necessitatibus quidem? Fugit ipsam aperiam labore officiis vel nihil eligendi nobis voluptate ex, inventore atque impedit quis, ratione quo. Quibusdam.",
      amt: 1,
      price: 31.9,
    },
    {
      id: "LTL10",
      type: "Lamp",
      name: "Table Lamp",
      img: "img/items/TL10.png",
      imgs: "img/items/LTL10.png",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero reiciendis necessitatibus quidem? Fugit ipsam aperiam labore officiis vel nihil eligendi nobis voluptate ex, inventore atque impedit quis, ratione quo. Quibusdam.",
      amt: 1,
      price: 39.9,
    },
    {
      id: "LTL11",
      type: "Lamp",
      name: "Retro Lamp",
      img: "img/items/TL11.png",
      imgs: "img/items/LTL11.png",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero reiciendis necessitatibus quidem? Fugit ipsam aperiam labore officiis vel nihil eligendi nobis voluptate ex, inventore atque impedit quis, ratione quo. Quibusdam.",
      amt: 1,
      price: 39.9,
    },
    {
      id: "LTL12",
      type: "Lamp",
      name: "Traditional Lamp",
      img: "img/items/TL12.png",
      imgs: "img/items/LTL12.png",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero reiciendis necessitatibus quidem? Fugit ipsam aperiam labore officiis vel nihil eligendi nobis voluptate ex, inventore atque impedit quis, ratione quo. Quibusdam.",
      amt: 1,
      price: 42.9,
    },

    {
      id: "W1",
      type: "Light",
      name: "Wall Light",
      img: "img/items/WL1.png",
      imgs: "img/items/LWL1.png",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero reiciendis necessitatibus quidem? Fugit ipsam aperiam labore officiis vel nihil eligendi nobis voluptate ex, inventore atque impedit quis, ratione quo. Quibusdam.",
      amt: 1,
      price: 21.9,
    },
    {
      id: "W2",
      type: "Light",
      name: "Vintage Celling Light",
      img: "img/items/WL2.png",
      imgs: "img/items/LWL2.png",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero reiciendis necessitatibus quidem? Fugit ipsam aperiam labore officiis vel nihil eligendi nobis voluptate ex, inventore atque impedit quis, ratione quo. Quibusdam.",
      amt: 1,
      price: 24.9,
    },
    {
      id: "W3",
      type: "Light",
      name: "Shade Light",
      img: "img/items/WL3.png",
      imgs: "img/items/LWL3.png",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero reiciendis necessitatibus quidem? Fugit ipsam aperiam labore officiis vel nihil eligendi nobis voluptate ex, inventore atque impedit quis, ratione quo. Quibusdam.",
      amt: 1,
      price: 29.9,
    },
    {
      id: "W4",
      type: "Light",
      name: "Disc Light",
      img: "img/items/WL4.png",
      imgs: "img/items/LWL4.png",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero reiciendis necessitatibus quidem? Fugit ipsam aperiam labore officiis vel nihil eligendi nobis voluptate ex, inventore atque impedit quis, ratione quo. Quibusdam.",
      amt: 1,
      price: 35.9,
    },
    {
      id: "WL5",
      type: "Light",
      name: "Workshop Light",
      img: "img/items/WL5.png",
      imgs: "img/items/LWL5.png",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero reiciendis necessitatibus quidem? Fugit ipsam aperiam labore officiis vel nihil eligendi nobis voluptate ex, inventore atque impedit quis, ratione quo. Quibusdam.",
      amt: 1,
      price: 15.9,
    },
    {
      id: "WL6",
      type: "Light",
      name: "Sci-fi Light",
      img: "img/items/WL6.png",
      imgs: "img/items/LWL6.png",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero reiciendis necessitatibus quidem? Fugit ipsam aperiam labore officiis vel nihil eligendi nobis voluptate ex, inventore atque impedit quis, ratione quo. Quibusdam.",
      amt: 1,
      price: 44.9,
    },
    {
      id: "WL7",
      type: "Light",
      name: "Gold Decoration Light",
      img: "img/items/WL7.png",
      imgs: "img/items/LWL7.png",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero reiciendis necessitatibus quidem? Fugit ipsam aperiam labore officiis vel nihil eligendi nobis voluptate ex, inventore atque impedit quis, ratione quo. Quibusdam.",
      amt: 1,
      price: 42.9,
    },
    {
      id: "WL8",
      type: "Light",
      name: "Flower Light",
      img: "img/items/WL8.png",
      imgs: "img/items/LWL8.png",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero reiciendis necessitatibus quidem? Fugit ipsam aperiam labore officiis vel nihil eligendi nobis voluptate ex, inventore atque impedit quis, ratione quo. Quibusdam.",
      amt: 1,
      price: 46.9,
    },
    {
      id: "WL9",
      type: "Light",
      name: "Colored Mesh Light",
      img: "img/items/WL9.png",
      imgs: "img/items/LWL9.png",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero reiciendis necessitatibus quidem? Fugit ipsam aperiam labore officiis vel nihil eligendi nobis voluptate ex, inventore atque impedit quis, ratione quo. Quibusdam.",
      amt: 1,
      price: 28.9,
    },
    {
      id: "LWL10",
      type: "Light",
      name: "Cone Light",
      img: "img/items/WL10.png",
      imgs: "img/items/LWL10.png",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero reiciendis necessitatibus quidem? Fugit ipsam aperiam labore officiis vel nihil eligendi nobis voluptate ex, inventore atque impedit quis, ratione quo. Quibusdam.",
      amt: 1,
      price: 34.9,
    },
    {
      id: "LWL11",
      type: "Light",
      name: "Spherical Light",
      img: "img/items/WL11.png",
      imgs: "img/items/LWL11.png",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero reiciendis necessitatibus quidem? Fugit ipsam aperiam labore officiis vel nihil eligendi nobis voluptate ex, inventore atque impedit quis, ratione quo. Quibusdam.",
      amt: 1,
      price: 29.9,
    },
    {
      id: "LWL12",
      type: "Light",
      name: "Torch Light",
      img: "img/items/WL12.png",
      imgs: "img/items/LWL12.png",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero reiciendis necessitatibus quidem? Fugit ipsam aperiam labore officiis vel nihil eligendi nobis voluptate ex, inventore atque impedit quis, ratione quo. Quibusdam.",
      amt: 1,
      price: 34.9,
    },
  ];

  return data;
})();
