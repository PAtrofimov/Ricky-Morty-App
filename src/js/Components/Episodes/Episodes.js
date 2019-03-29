import Component from "../../framework/Component";
import { getData } from "../../api/api";

export default class Episodes extends Component {

    constructor(host, props) {
        super(host, props);
        this.getEpisodes();
    }

    getEpisodes() {
        getData('episode').then(res => {
            this.updateState({episodes: res});
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
           return this.state.episodes.results.map(episode => {
               return {
                   tag: 'p',
                   children: [
                       {
                            tag: 'a',
                            attributes: [
                                {
                                   name: 'href',
                                   value: `#/episode/${episode.id}`
                               }
                            ],
                            content: episode.name
                        }
                   ]
               }
           });
        }

    }
}