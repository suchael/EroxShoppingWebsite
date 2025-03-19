import { ProductType } from "../components/ProductCart";

 
 export type CategoryType = {
    id: string | number,
    name: string,
    desc?: string,
    description? : string,
    
  };

  export type Slide = {
    id: number,
    image : string,
    text: string,
  }
  
  export const apiSlidesInfo = [
    { url: '/img/slider3.jpg', alt: 'Banner 1', text: 'Text Slide 1' },
    { url: '/img/slider5.jpg', alt: 'Banner 2', text: 'Text Slide 2' },
    { url: '/img/slider6.jpg', alt: 'Banner 3', text: 'Text Slide 3' },
    { url: '/img/slider4.jpg', alt: 'Banner 3', text: 'Text Slide 4' },
  ];
  
  export const blogInfo = [
    {blod_id: 1, date : '10 Mar 2025', img : '/img/blog/1.jpg', title : 'How to manage your e-commerce shopify account ?', content : "Lorem ipsum dolor sit amet consectetur adipisicing elit ...", authorName : 'Elfried KIDJE', authorImg : '/img/author.jpg'},
    {blod_id: 2, date : '18 Feb 2025', img : '/img/blog/2.jpg', title : 'How to manage your e-commerce shopify account ?', content : "Lorem ipsum dolor sit amet consectetur adipisicing elit ...", authorName : 'Elfried KIDJE', authorImg : '/img/author.jpg'},
    {blod_id: 3, date : '21 Jan 2025', img : '/img/blog/3.jpg', title : 'How to manage your e-commerce shopify account ?', content : "Lorem ipsum dolor sit amet consectetur adipisicing elit ...", authorName : 'Elfried KIDJE', authorImg : '/img/author.jpg'}
  
  ];
  
  export const testimonialInfo = [
    {authorImg : '/img/1.png', text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed earum nemo, officia maiores corporis eveniet ...", authorName : 'Elfried KIDJE', rating : 5},
    {authorImg : '/img/1.png', text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed earum nemo, officia maiores corporis eveniet ...", authorName : 'Elfried Karl', rating : 5}
  
  ];
  
  export const productsTest = [
    
    {id : 1, img : '/img/product/1.png', reviews : 4, name: 'Product Name 1', price : 90, oldPrice : 100, desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sequi magnam nisi earum, nihil consequuntur harum hic molestias nulla quasi voluptas quae dolor soluta, iusto explicabo, voluptatibus est exercitationem sit.' },
    {id : 2, img : '/img/product/2.png', reviews : 4, name: 'Product Name 2', price : 100, oldPrice : 150, reduction: '-33%', desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sequi magnam nisi earum, nihil consequuntur harum hic molestias nulla quasi voluptas quae dolor soluta, iusto explicabo, voluptatibus est exercitationem sit.'},
    {id : 3, img : '/img/product/3.png', reviews : 4, name: 'Product Name 3', price : 120, oldPrice : 200, desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sequi magnam nisi earum, nihil consequuntur harum hic molestias nulla quasi voluptas quae dolor soluta, iusto explicabo, voluptatibus est exercitationem sit.'},
    {id : 4, img : '/img/product/4.png', reviews : 4, name: 'Product Name 4', price : 120, oldPrice : 200, desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sequi magnam nisi earum, nihil consequuntur harum hic molestias nulla quasi voluptas quae dolor soluta, iusto explicabo, voluptatibus est exercitationem sit.'},
    {id : 5, img : '/img/product/5.png', reviews : 4, name: 'Product Name 5', price : 120, oldPrice : 200, desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sequi magnam nisi earum, nihil consequuntur harum hic molestias nulla quasi voluptas quae dolor soluta, iusto explicabo, voluptatibus est exercitationem sit.'},
    {id : 6, img : '/img/product/6.png', reviews : 4, name: 'Product Name 6', price : 120, oldPrice : 200, desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sequi magnam nisi earum, nihil consequuntur harum hic molestias nulla quasi voluptas quae dolor soluta, iusto explicabo, voluptatibus est exercitationem sit.'},
    {id : 7, img : '/img/product/7.png', reviews : 4, name: 'Product Name 7', price : 120, oldPrice : 200, desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sequi magnam nisi earum, nihil consequuntur harum hic molestias nulla quasi voluptas quae dolor soluta, iusto explicabo, voluptatibus est exercitationem sit.'},
    {id : 8, img : '/img/product/8.png', reviews : 4, name: 'Product Name 8', price : 120, oldPrice : 200, desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sequi magnam nisi earum, nihil consequuntur harum hic molestias nulla quasi voluptas quae dolor soluta, iusto explicabo, voluptatibus est exercitationem sit.'},
  
  ]
  
  export const dailyTest = { id: 1, img : '/img/product/1.png', reviews : 4, name: 'Product Name 1', price : 90, old_price : 100, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed earum nemo, officia maiores corporis eveniet ratione magnam facere voluptates consequuntur cumque.", total_quantity: 3
  }
  
  
  
  export const sortProduct = [
    
    {id : 1, img : '/img/product/8.png', reviews : 4, name: 'Fresh Red Seedless 1', price : 90, oldPrice : 100 },
    {id : 2, img : '/img/product/2.png', reviews : 4, name: 'Fresh Red Seedless 2', price : 100, oldPrice : 150, reduction: '-33%'},
    {id : 3, img : '/img/product/7.png', reviews : 4, name: 'Fresh Red Seedless 3', price : 120, oldPrice : 200 },
    {id : 4, img : '/img/product/4.png', reviews : 4, name: 'Fresh Red Seedless 4', price : 120, oldPrice : 200 },
    {id : 5, img : '/img/product/5.png', reviews : 4, name: 'Fresh Red Seedless 5', price : 120, oldPrice : 200 },
  
  ]
  
  export const apiCategory = [
    { id: 1, name: 'Vegetals And Fruits', description : 'lorem' },
    { id: 2, name: 'Fruits', description : 'lorem' },
    { id: 3, name: 'Oil And Vinegar', description : 'lorem' },
    { id: 4, name: 'Apple Juice', description : 'lorem' },
    { id: 5, name: 'Océan Food', description : 'lorem' },
    { id: 6, name: 'Butter & Eggs', description : 'lorem' },
    { id: 7, name: 'Fresh Meat', description : 'lorem' },
  ]
  
  export const archives = [
    
    { archive_id: 1, date: 'September 2021' },
    { archive_id: 2, date: 'October 2020' },
    { archive_id: 3, date: 'July 2019' },
    { archive_id: 4, date: 'September 2021' },
    { archive_id: 5, date: 'October 2020' },
    { archive_id: 6, date: 'July 2019' },

  ]

  export const tags = [
    
    { tag_id: 1, name: 'PASTA' },
    { tag_id: 2, name: 'RICE' },
    { tag_id: 3, name: 'JUICE' },
    { tag_id: 4, name: 'NATURAL' },
    { tag_id: 5, name: 'FOOD' },
    { tag_id: 6, name: 'GRADE' },
    { tag_id: 7, name: 'NATURAL' },
    { tag_id: 8, name: 'FOOD' },
    { tag_id: 9, name: 'GRADE' },

  ]

  export const teams = [
    {team_id : 1, img : '/img/team/1.jpg', name: 'Fortunatus KIDJE', role : 'Web Developer'},
    {team_id : 2, img : '/img/team/2.jpg', name: 'Fortunatus KIDJE', role : 'Designer'},
    {team_id : 3, img : '/img/team/3.jpg', name: 'Fortunatus KIDJE', role : 'Frontend Developer'},
    {team_id : 4, img : '/img/team/4.jpg', name: 'Fortunatus KIDJE', role : 'Backend Developer'},
    {team_id : 5, img : '/img/team/5.jpg', name: 'Fortunatus KIDJE', role : 'Project Manager'},
    {team_id : 6, img : '/img/team/6.jpg', name: 'Fortunatus KIDJE', role : 'DevOps'},
  ]

  export const searchData = [
    {search_id : 1, name : 'Food'},
    {search_id : 2, name : 'Glocery'},
    {search_id : 3, name : 'Heatlth'},
    {search_id : 4, name : 'Orange'},
    {search_id : 5, name : 'Junk'},
    {search_id : 6, name : 'Shopping'},
    {search_id : 7, name : 'Snack'},
  ]

  export const customers = [
    {lastname : 'John', firstname : 'Doe', email : 'john@doe.com', address : '123 Main Street'},
    {lastname : 'John', firstname : 'Doe', email : 'john@doe.com', address : '123 Main Street'},
    {lastname : 'John', firstname : 'Doe', email : 'john@doe.com', address : '123 Main Street'},
    {lastname : 'John', firstname : 'Doe', email : 'john@doe.com', address : '123 Main Street'},
    {lastname : 'John', firstname : 'Doe', email : 'john@doe.com', address : '123 Main Street'},
  ]






  
  export type ProductList = {
    message: string;
    data: ProductType[];
  };
  
 export const data_productList: ProductList = {
    message: "List of products",
    data: [
      {
        id: 2,
        name: "Product Name 1",
        img: "https://www.100daysofrealfood.com/wp-content/uploads/2023/09/shutterstock_301752452-800x659.jpg",
        price: 123,
        old_price: 200,
        reviews: 5,
        desc: "desc",
        reduction: 0,
        created_at: "2023-05-07T12:48:52.000000Z",
        updated_at: "2023-05-07T12:59:32.000000Z",
        total_quantity: 99,
        categorie_id: 3
      },
      {
        id: 3,
        name: "Product Name 5",
        img: "https://cdn.pixabay.com/photo/2017/05/07/19/32/strawberry-2293337_640.jpg",
        price: 200,
        old_price: 230,
        reviews: 5,
        desc: "Desc",
        reduction: 0,
        created_at: "2023-05-22T15:37:12.000000Z",
        updated_at: "2023-05-22T15:37:12.000000Z",
        total_quantity: 120,
        categorie_id: 2
      },
      {
        id: 4,
        name: "Product Name 4",
        img: "https://images.pexels.com/photos/1313267/pexels-photo-1313267.jpeg?cs=srgb&dl=pexels-brian-van-den-heuvel-339534-1313267.jpg&fm=jpg",
        price: 150,
        old_price: 200,
        reviews: 5,
        desc: "Desc",
        reduction: 0,
        created_at: "2023-05-30T11:27:14.000000Z",
        updated_at: "2023-05-30T11:27:14.000000Z",
        total_quantity: 145,
        categorie_id: 3
      },
      {
        id: 5,
        name: "Product Name 6",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Orange-Fruit-Pieces.jpg/2560px-Orange-Fruit-Pieces.jpg",
        price: 200,
        old_price: 250,
        reviews: 5,
        desc: "lorem",
        reduction: 0,
        created_at: "2023-05-30T11:37:19.000000Z",
        updated_at: "2023-05-30T11:37:19.000000Z",
        total_quantity: 100,
        categorie_id: 3
      },
      {
        id: 6,
        name: "Product Name",
        img: "https://img.freepik.com/free-photo/high-angle-tasty-fruits-arrangement_23-2148545917.jpg?semt=ais_hybrid",
        price: 200,
        old_price: 250,
        reviews: 5,
        desc: "Product description",
        reduction: 0,
        created_at: "2023-07-27T08:51:23.000000Z",
        updated_at: "2023-07-27T08:51:23.000000Z",
        total_quantity: 100,
        categorie_id: 2
      },
      {
        id: 7,
        name: "Product Name",
        img: "https://247foods.ng/storage/2025/03/Avocado-Fruit-One-Piece.jpg",
        price: 200,
        old_price: 250,
        reviews: 5,
        desc: "Product description",
        reduction: 0,
        created_at: "2023-07-27T08:51:58.000000Z",
        updated_at: "2023-07-27T08:51:58.000000Z",
        total_quantity: 100,
        categorie_id: 2
      },
      {
        id: 8,
        name: "Product Name",
        img: "https://img.freepik.com/free-photo/strawberry-berry-levitating-white-background_485709-57.jpg",
        price: 200,
        old_price: 250,
        reviews: 5,
        desc: "Product description",
        reduction: 0,
        created_at: "2023-07-27T08:52:16.000000Z",
        updated_at: "2023-07-27T08:52:16.000000Z",
        total_quantity: 100,
        categorie_id: 2
      },
      {
        id: 9,
        name: "Product Name",
        img: "https://guardian.ng/wp-content/uploads/2022/01/Soursop-fruits-e1643024964180.jpg",
        price: 200,
        old_price: 250,
        reviews: 5,
        desc: "Product description ipsum",
        reduction: 0,
        created_at: "2023-07-27T08:52:53.000000Z",
        updated_at: "2023-10-04T15:39:01.000000Z",
        total_quantity: 100,
        categorie_id: 2
      }
    ]
  };
  
  