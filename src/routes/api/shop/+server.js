


import { json } from '@sveltejs/kit';
/** @type {import('./$types').RequestHandler} */
export function GET({ request }) {
    
  const products=  [

        {
            id:1,
            name:'Vegetable',
            image:"/src/lib/images/landing4/Photo1.png",
            title:"Calabrese Broccoli",
            offer:520.00,
            price:13.00,
            describe:'Health'
    
        },
        {
            id:2,
            name:'Fresh',
            image:"/src/lib/images/landing4/Photo2.png",
            title:"Calabrese Broccoli",
            offer:520.00,
            price:13.00,
            describe:'Health'
    
        },
        {
            id:3,
            name:'Health',
            image:"/src/lib/images/landing4/Photo3.png",
            title:"Calabrese Broccoli",
            offer:520.00,
            price:13.00,
            describe:'Health'
    
        },
        {
            id:4,
            name:'Nuts',
            image:"/src/lib/images/landing4/Photo4.png",
            title:"Calabrese Broccoli",
            offer:520.00,
            price:13.00,
            describe:'Health'
    
        },
        {
            id:5,
            name:'fresh',
            image:"/src/lib/images/landing4/Photo5.png",
            title:"Calabrese Broccoli",
            offer:520.00,
            price:13.00,
            describe:'Health'
    
        },
        {
            id:6,
            name:'fresh',
            image:"/src/lib/images/landing4/Photo6.png",
            title:"Calabrese Broccoli",
            offer:520.00,
            price:13.00,
            describe:'Health'
    
        },
        {
            id:7,
            name:'Vegetable',
            image:"/src/lib/images/landing4/Photo7.png",
            title:"Calabrese Broccoli",
            offer:520.00,
            price:13.00,
            describe:'Health'
    
        },
        {
            id:8,
            name:'Vegetable',
            image:"/src/lib/images/landing4/Photo8.png",
            title:"Calabrese Broccoli",
            offer:520.00,
            price:13.00,
            describe:'Health'
    
        },
        {
            id:9,
            name:'Vegetable',
            image:"/src/lib/images/landing4/Photo9.png",
            title:"Calabrese Broccoli",
            offer:520.00,
            price:13.00,
            describe:'Health'
    
        },
        {
            id:10,
            name:'Vegetable',
            image:"/src/lib/images/landing4/Photo10.png",
            title:"Calabrese Broccoli",
            offer:520.00,
            price:13.00,
            describe:'Health'
    
        },
        {
            id:11,
            name:'Vegetable',
            image:"/src/lib/images/landing4/Photo11.png",
            title:"Calabrese Broccoli",
            offer:520.00,
            price:13.00,
            describe:'Health'
    
        },
        {
            id:12,
            name:'Vegetable',
            image:"/src/lib/images/landing4/Photo12.png",
            title:"Calabrese Broccoli",
            offer:520.00,
            price:13.00,
            describe:'Health'
    
        },
    ]    // create a JSON Response using a header we received

	return json({products});
}


