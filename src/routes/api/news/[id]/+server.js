



import { json } from '@sveltejs/kit';
/** @type {import('./$types').RequestHandler} */
export function GET({ request,params }) {
    const id=params.id;
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
            image:"bg-[url(/src/lib/images/svg.svg)]"    },
        {id:5,
            title:'The Benefits of Vitamin D & How to Get It',
            image:"bg-[url(/src/lib/images/Landing9/Photo5.png)]"    },
        {id:6,
            title:'The Benefits of Vitamin D & How to Get It',
            image:"bg-[url(/src/lib/images/Landing9/Photo6.png)]"
        },
    ]

    const neww=news.find((neww)=>neww.id==id)




	return json(neww);
}

