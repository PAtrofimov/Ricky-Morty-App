import { Main } from "../Components/Main";
import { NotFound } from "../Components/NotFound";
import Users from "../Components/Users/Users";
import User from "../Components/User/User";
import Login from "../Components/Login/Login";
import Posts from "../Components/Posts/Posts";

import Characters from "../Components/Characters/Characters";
import Character from "../Components/Character/Character";

import Episodes from "../Components/Episodes/Episodes";
import Episode from "../Components/Episode/Episode";

import Locations from "../Components/Locations/Locations";
import Location from "../Components/Location/Location";



import { isLogged } from "../guards/guards";


export const routes = [
    {
        path: '',
        component: Main
    },
    {
        path: 'users',
        component: Users,
        // guards: [ isLogged ]
    },
    {
        path: 'user/:id',
        component: User
    },
    {
        path: 'login',
        component: Login
    },
    {
        path: 'posts',
        component: Posts,
        // guards: [ isLogged ]
    },
    {
        path: 'characters',
        component: Characters,
        // guards: [ isLogged ]
    },

    {
        path: 'character/:id',
        component: Character
    },
    {
        path: 'episodes',
        component: Episodes,
        // guards: [ isLogged ]
    },

    {
        path: 'episode/:id',
        component: Episode
    },

    {
        path: 'locations',
        component: Locations,
        // guards: [ isLogged ]
    },

    {
        path: 'location/:id',
        component: Location
    },


    {
        path: '**',
        component: NotFound
    }
];