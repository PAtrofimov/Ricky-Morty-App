import Component from "../../framework/Component";

export default class Nav extends Component {

    constructor(host, props) {
        super(host, props);
    }
    
    render() {
        return [
            {
                tag: 'a',
                attributes: [
                    {
                        name: 'href',
                        value: '#/characters'
                    },
                ],
                content: 'Characters'
            },
            {
                tag: 'a',
                attributes: [
                    {
                        name: 'href',
                        value: '#/episodes'
                    },
                ],
                content: 'Episodes'
            },
            {
                tag: 'a',
                attributes: [
                    {
                        name: 'href',
                        value: '#/locations'
                    },
                ],
                content: 'Locations'
            },
            // {
            //     tag: 'a',
            //     attributes: [
            //         {
            //             name: 'href',
            //             value: '#/login'
            //         },
            //     ],
            //     content: 'Login'
            // },
        ]
    }
}