




import { json } from '@sveltejs/kit';
/** @type {import('./$types').RequestHandler} */
export function GET({ request }) {
    const portfolio=[
        {
            id:1,
            title:'Green & Tasty Lemon',
            image:"/src/lib/images/portfolio/Photo1.png",
            describe:'framer'
           },

        {id:2,
            title:'Green & Tasty Lemon',
            image:"/src/lib/images/portfolio/Photo2.png",
            describe:'framer'   },
            
        {id:3,
            title:'Green & Tasty Lemon',
            image:"/src/lib/images/portfolio/Photo3.png",
            describe:'framer' },
        {id:4,
            title:'Green & Tasty Lemon',
            image:"/src/lib/images/portfolio/Photo4.png",
            describe:'framer'  },
        {id:5,
            title:'Green & Tasty Lemon',
            image:"/src/lib/images/portfolio/Photo5.png",
            describe:'framer'   },
        {id:6,
            title:'Green & Tasty Lemon',
            image:"/src/lib/images/portfolio/Photo6.png",
            describe:'framer'
        },
    ]


	return json(portfolio);
}


