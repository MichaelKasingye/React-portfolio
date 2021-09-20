import HomeIcon from '@material-ui/icons/Home';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import InfoIcon from '@material-ui/icons/Info';
import WorkIcon from '@material-ui/icons/Work';
import ContactsIcon from '@material-ui/icons/Contacts';
import BrushIcon from '@material-ui/icons/Brush';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import {  SiYoutube } from 'react-icons/si';

import {docs} from '../Data/data'


export const list =[
     {
    title:"Home",
    link:"/",
    icon:<HomeIcon />
},
{
    title:"About",
    link:"/about",
    icon:<InfoIcon />
},
{
    title:"Projects",
    link:"/projects",
    icon:<WorkIcon />
},

// {
//     title:"Skills",
//     link:"/skills",
//     icon:<BrushIcon />
// },
// {
//     title:"Career Journey",
//     link:"/journey",
//     icon:<TrendingUpIcon />
// },
{
    title:"Contact",
    link:"/contact",
    icon:<AccessibilityNewIcon />
},

]
export const externalLinks =[

{
    title:"Blogs",
    link:function srcl(){window.location.href = docs.Blogs},
    icon:<MenuBookIcon />
},
{
    title:"Certification",
    link:function srcl(){window.location.href = docs.certificates},
    icon:<VerifiedUserIcon />
},
{
    title:"Resume",
    link:function srcl(){window.location.href = docs.Resume},
    icon:<ContactsIcon />
},
{
    title:"You Tube",
    link:function srcl(){window.location.href = docs.youTube},
    icon:<SiYoutube />
},

]