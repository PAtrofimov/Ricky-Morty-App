import Component from "../../framework/Component";
import { getData } from "../../api/api";

export default class Location extends Component {

    constructor(host, props) {
        super(host, props);
        this.locationId = props.id;
        this.getLocation();
    }

    getLocation() {
        getData(`location/${this.locationId}`).then(res => {
            this.updateState({location: res});
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
            const { location } = this.state;
            return [
                {
                    tag: 'p',
                    content: location.name,
                    classList: ['header-text'],
                },
                {
                    tag: 'p',
                    content: `Type: ${location.type}`,
                    classList: ['info-text'],
                },
                {
                    tag: 'p',
                    content: `Location: ${location.dimension}`,
                    classList: ['info-text'],
                },
                {
                    tag: 'p',
                    content: `Created: ${location.created}`,
                    classList: ['info-text'],
                }
            ]
        }

    }
}