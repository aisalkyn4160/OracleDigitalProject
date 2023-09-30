import OsOnline from "../../assets/imgs/OshOnline.jpg";
import Opop from "../../assets/imgs/OPOP.jpg";
import Batbat from "../../assets/imgs/Batbat.png";

export const projectsData = [
    {
      id: 1,
      img: `${OsOnline}`,
      category: "Мобильное приложение",
      projectName: 'Ош online',
      description: 'Maecenas ut magna netus purus enim. Et sit est arcu facilisi tortor ipsum sem.',
    },
    {
      id: 2,
      img: `${Opop}`,
      category: "Мобильное приложение",
      projectNameO: 'O',
      projectNameP: 'P',
      description: 'Maecenas ut magna netus purus enim. Et sit est arcu facilisi tortor ipsum sem.',
    },
    {
      id: 3,
      img: `${Batbat}`,
      category: "Мобильное приложение",
      projectName3: 'bat',
      description: 'Maecenas ut magna netus purus enim. Et sit est arcu facilisi tortor ipsum sem.',
    },
    {
      id: 4,
      img: 'https://53.fs1.hubspotusercontent-na1.net/hubfs/53/WSG%20(2).png',
      category: "Веб сайты",
      projectName: 'Ош online',
      description: 'Maecenas ut magna netus purus enim. Et sit est arcu facilisi tortor ipsum sem.',
    },
    {
      id: 5,
      img: 'https://53.fs1.hubspotusercontent-na1.net/hubfs/53/WSG%20(2).png',
      category: "Веб сайты",
      projectName: 'Ош online',
      description: 'Maecenas ut magna netus purus enim. Et sit est arcu facilisi tortor ipsum sem.',
    },
    {
      id: 6,
      img: 'https://53.fs1.hubspotusercontent-na1.net/hubfs/53/WSG%20(2).png',
      category: "Веб сайты",
      projectName: 'Ош online',
      description: 'Maecenas ut magna netus purus enim. Et sit est arcu facilisi tortor ipsum sem.',
    },
    {
      id: 7,
      img: `${Batbat}`,
      category: "Мобильное приложение",
      projectName3: 'bat',
      description: 'Maecenas ut magna netus purus enim. Et sit est arcu facilisi tortor ipsum sem.',
    },
    {
      id: 8,
      img: `${Batbat}`,
      category: "Мобильное приложение",
      projectName3: 'bat',
      description: 'Maecenas ut magna netus purus enim. Et sit est arcu facilisi tortor ipsum sem.',
    },
  ]

  export const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 800 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 1
    }
  };
  
  export const categories = ["Мобильное приложение", "Веб сайты", "Landing page", "CRM системы", "Веб ресурсы", "Интернет магазины"]