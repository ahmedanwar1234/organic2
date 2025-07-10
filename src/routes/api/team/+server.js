




import { json } from '@sveltejs/kit';
/** @type {import('./$types').RequestHandler} */
export function GET({ request }) {
  const peopleTeam=  [

        {
    
            image:"/src/lib/images/about/abteam1.jpg",
            name:'Giovani Bacardo',
            job:"Farmer",
            
    
        },
        {
    
            image:"/src/lib/images/about/team2.jpg",
            name:'Giovani Bacardo',
            job:"Farmer",
            
    
        },
        {
    
            image:"/src/lib/images/about/team3.jpg",
            name:'Giovani Bacardo',
            job:"Farmer",
            
    
        },
     

    ]    // create a JSON Response using a header we received

  const  teams=[
        {
    
            image:"/src/lib/images/about/abteam1.jpg",
            name:'Giovani Bacardo',
            job:"Farmer",
            
    
        },
        {
    
            image:"/src/lib/images/about/team2.jpg",
            name:'Giovani Bacardo',
            job:"Farmer",
            
    
        },
        {
    
            image:"/src/lib/images/about/team3.jpg",
            name:'Giovani Bacardo',
            job:"Farmer",
            
    
        },
        {
    
            image:"/src/lib/images/about/team4.jpg",
            name:'Giovani Bacardo',
            job:"Farmer",
            
    
        },
        {
    
            image:"/src/lib/images/about/team5.jpg",
            name:'Giovani Bacardo',
            job:"Farmer",
            
    
        },
        {
    
            image:"/src/lib/images/about/team6.jpg",
            name:'Giovani Bacardo',
            job:"Farmer",
            
    
        },
     
    ]

	return json({peopleTeam,teams});
}


