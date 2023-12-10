


import { json } from '@sveltejs/kit';
/** @type {import('./$types').RequestHandler} */
export function GET({ request }) {
    const news=[
        {
            id:1,
            title:'The Benefits of Vitamin D & How to Get It',
            image:"bg-[url(/src/lib/images/Landing9/Photo1.png)]"    },
        {id:2,
            title:'The Benefits of Vitamin D & How to Get It',
            image:"bg-[url(/src/lib/images/Landing9/Photo2.png)]"    },
        {id:3,
            title:'The Benefits of Vitamin D & How to Get It',
            image:"bg-[url(/src/lib/images/Landing9/Photo3.png)]"    },
        {id:4,
            title:'The Benefits of Vitamin D & How to Get It',
            image:"bg-[url(/src/lib/images/Landing9/Photo4.png)]"    },
        {id:5,
            title:'The Benefits of Vitamin D & How to Get It',
            image:"bg-[url(/src/lib/images/Landing9/Photo5.png)]"    },
        {id:6,
            title:'The Benefits of Vitamin D & How to Get It',
            image:"bg-[url(/src/lib/images/Landing9/Photo6.png)]"
        },
    ]


	return json(news);
}


