import Component from "../../framework/Component";
import { getData } from "../../api/api";

export default class Character extends Component {

    constructor(host, props) {
        super(host, props);
        this.characterId = props.id;
        this.getCharacter();
    }

    getCharacter() {
        getData(`character/${this.characterId}`).then(res => {
            this.updateState({character: res});
        }).catch(err => {
            this.error = err;
            this.render();
        });
    }

    prevCharacter() {
        if (this.characterId && this.characterId > 1) {
            this.characterId--;
            this.getCharacter(); 
            
        }
        
    }

    nextCharacter() {
        if (this.characterId) 
        {
            this.characterId++;
            this.getCharacter(); 
            
        }

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
            const { character } = this.state;
            return [
                {
                    tag: 'div',
                    classList: ['wrapper-item'],
                             
                children: [
                    
                    {
                        tag: 'p',
                        classList: ['header-text'],
                        content: character.name
                    },
                    {
                    tag: 'img',
                    classList: ['img-item'],
                    attributes: [{
                        name: 'src',
                        value: `${character.image}`,
                    }],
                },
                {
                    tag: 'p',
                    classList: ['info-text'],
                    content: `Status: ${character.status}`,
                },
                {
                    tag: 'p',
                    classList: ['info-text'],
                    content: `Species: ${character.species}`,
                },
                {
                    tag: 'p',
                    classList: ['info-text'],
                    content: `Gender: ${character.gender}`,
                },
            
            
            ],

                           
            },

            {
                tag: 'div',
                classList: ['page-btn'],
                children: [
                    
                    {
                        tag: 'button',
                        classList: ['prev-btn', 'btn'],
                        content: 'PREV',
                        eventHandlers: {
                            click: this.prevCharacter.bind(this),
                        },
                    },

                    {
                        tag: 'button',
                        classList: ['next-btn', 'btn'],
                        content: 'NEXT',
                        eventHandlers: {
                            click: this.nextCharacter.bind(this),
                        },
                    },
                ]
            }
                
                
            ]
        }

    }
}