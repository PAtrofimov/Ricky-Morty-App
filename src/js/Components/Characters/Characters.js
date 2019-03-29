import Component from "../../framework/Component";
import { getData } from "../../api/api";
import { Character } from "../Character";

export default class Characters extends Component {

    constructor(host, props) {
        super(host, props);
        this.getCharacters();
    }

    getCharacters() {
        getData('character').then(res => {
            debugger
            this.updateState({characters: res});
        }).catch(err => {
            this.error = err;
            this.render();
        });
    }

    render() {
        if(!this.state) {
            return [
                {
                    tag: 'p',
                    content: 'Loading....'
                }
             ]   
        } else {
            return this.state.characters.results.map(character => {
               return {
                   tag: 'p',
                   classList: ['list-item'],
                   children: [
                       {
                            tag: 'a',
                            classList: ['ref-item'],
                            attributes: [
                                {
                                   name: 'href',
                                   value: `#/character/${character.id}`
                               }
                            ],
                            children: [
                               { tag: 'img',
                                attributes: [
                                    {
                                       name: 'src',
                                       value: `${character.image}`
                                   }
                                ],

                                classList: ['img-item-small'],


                            }      
                            ],
                           
                        }
                   ],

                   content: character.name,
               };
           });
        }

    }
}