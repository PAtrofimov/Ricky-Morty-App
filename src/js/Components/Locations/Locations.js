import Component from "../../framework/Component";
import { getData } from "../../api/api";

export default class Locations extends Component {

    constructor(host, props) {
        super(host, props);
        this.getLocations();
    }

    getLocations() {
        getData('location').then(res => {
            this.updateState({locations: res});
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
           return this.state.locations.results.map(location => {
               return {
                   tag: 'p',
                   children: [
                       {
                            tag: 'a',
                            attributes: [
                                {
                                   name: 'href',
                                   value: `#/location/${location.id}`
                               }
                            ],
                            content: location.name
                        }
                   ]
               }
           });
        }

    }
}