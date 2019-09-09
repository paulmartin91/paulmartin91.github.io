//Projects
import TowerOfHanoi from './ProjectImages/TowerOfHanoi.png'
import Hangman from './ProjectImages/Hangman.png'
import StarfighterGame from './ProjectImages/StarfighterGame.png'
import Pong from './ProjectImages/Pong.png'
import WikiSearch from './ProjectImages/WikiSearch.png'
import MarkdownPreviewer from './ProjectImages/MarkdownPreviewer.png'


//Logos
import ReactLogo from './ProjectImages/Logos/ReactLogo.png';
import HTML5 from './ProjectImages/Logos/HTML5.png';
import CSS3 from './ProjectImages/Logos/CSS3.png';
import JS from './ProjectImages/Logos/JS.png';
import JQuery from './ProjectImages/Logos/JQuery.png';
import SASS from './ProjectImages/Logos/SASS.png';


const ProjectsInfo = 
        [
           {
               _id: "001",
               name: "Tower of Hanoi",
               description: "A recreation of the classic puzzle, built using just HTML/CSS and JavaScript. The game has 8 progressively challenging levels, a move counter and a formula that calculates the minimum number of moves for each level.",
               image: TowerOfHanoi,
               url: "https://github.com/paulmartin91/Tower-of-Hanoi",
               used: [HTML5, CSS3, JS]
           },
           {
               _id: "002",
               name: "Hangman",
               description: "",
               image: Hangman,
               url: "https://github.com/paulmartin91/Hangman",
               used: [HTML5, CSS3, JS, JQuery]
           },
           {
               _id: "003",
               name: "Starfighter Game",
               description: "",
               image: StarfighterGame,
               url: "https://github.com/paulmartin91/Starfighter-Game",
               used: [HTML5, CSS3, JS, JQuery]
           },
           {
                _id: "004",
                name: "Pong",
                description: "",
                image: Pong,
                url: "https://codepen.io/paulmartin91/pen/BGdmqe",
                used: [HTML5, CSS3, JS, JQuery]
           },
           {
                _id: "005",
                name: "WikiSearch",
                description: "",
                image: WikiSearch,
                url: "https://github.com/paulmartin91/WikiSearch",
                used: [HTML5, CSS3, JS, ReactLogo]
           },
           {
                _id: "006",
                name: "MarkdownPreviewer",
                description: "",
                image: MarkdownPreviewer,
                url: "https://paulmartin91.github.io/react-markdown-previewer/",
                used: [HTML5, CSS3, JS, ReactLogo]
            },
        //    {
        //        _id: "",
        //        image: "",
        //        url: "",
        //    },
        //    {
        //        _id: "",
        //        image: "",
        //        url: "",
        //    },
        //    {
        //        _id: "",
        //        image: "",
        //        url: "",
        //    },
        ]

export default ProjectsInfo