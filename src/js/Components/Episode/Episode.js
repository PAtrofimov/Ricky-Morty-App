import Component from "../../framework/Component";
import { getData } from "../../api/api";

export default class Episode extends Component {

    constructor(host, props) {
        super(host, props);
        this.episodeId = props.id;
        this.getEpisode();
    }

    getEpisode() {
        getData(`episode/${this.episodeId}`).then(res => {
            this.updateState({episode: res});
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
            const { episode } = this.state;
            return [
                {
                    tag: 'p',
                    content: episode.name,
                    classList: ['header-text'],
                },
                {
                    tag: 'p',
                    content: `Air_date: ${episode.air_date}`,
                    classList: ['info-text'],
                },
                {
                    tag: 'p',
                    content: `Url: ${episode.url}`,
                    classList: ['info-text'],
                },
                {
                    tag: 'p',
                    content: `Created: ${episode.created}`,
                    classList: ['info-text'],
                }
            ]
        }

    }
}