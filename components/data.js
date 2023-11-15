// import icons
import {
    IoLogoYoutube,
    IoLogoFacebook,
    IoLogoGithub,
    IoLogoInstagram,
    IoMdAddCircle,
    IoIosCheckmarkCircle,
    IoIosArrowRoundForward,
  } from 'react-icons/io';
  
  export const products = {
    title: 'All Products',
    subtitle:
      'The products we provide only for you as our service are selected from the best products with number 1 quality in the world',
    pages: [
      {
        productList: [
          {
            image: './appartment1.jpg',
            icon: <IoMdAddCircle />,
            name: 'Ceiling Light',
            price: 75,
            oldPrice: 82,
          },
          {
            image:'./appartment1.jpg',
            icon: <IoMdAddCircle />,
            name: 'Wood Chair',
            price: 50,
            oldPrice: 70,
          },
          {
            image: './appartment1.jpg',
            icon: <IoMdAddCircle />,
            name: 'Papper Cupboard',
            price: 105,
            oldPrice: 120,
          },
        ],
      },
      {
      },
    ],
  };
  
  
  export const navigation = [
    {
      name: 'Home',
      href: 'home',
      link: './'
    },
    {
      name: 'About',
      href: 'about',
      link: '/about'
    },
    {
      name: 'Appartments',
      href: 'Appartments',
      link: '/appartments'
    },
    {
      name: 'Projects',
      href: 'contact',
      link: '/project'
    },
    {
      name: 'Gallery',
      href: 'contact',
      link: '/gallery'
    },
    {
      name: 'Contact',
      href: 'contact',
      link: '/contact'
    },
  ];
  
  export const newInStore = {
    title: 'Similar Appartments',
    subtitle: 'Tour our latest appartments',
    link: 'Check all',
    icon: <IoIosArrowRoundForward />,
    products: [
      {
        name: '3 Bedroom Story, Appapa Lagos',
        image: '/appartment1.jpg',
      },
      {
        name: 'Duplex, Oshogbo Osun State',
        image: '/appartment2.jpg',
      },
      {
        name: 'Bungalow, Edo State',
        image: '/appartment3.jpg',
      },
      {
        name: '40 Rooms, Storey Buidling, Zamfara',
        image:'/appartment4.jpg',
      },
    ],
  };
  
  
