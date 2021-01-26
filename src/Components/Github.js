import React, {Component} from 'react';
const code = "https://api.github.com/users/tbjargrim/repos"
class Github extends Component {
    constructor (props) {
        super(props);
        this.state={
            data:null
        };
    }
componentDidMount() {
    fetch(code)
    .then(response => response.json())
    .then(json => this.setState({data:json}));
}

render() {
    return (
        <div>
            {/* <a href={this.state.data ? this.state.data.html_url : null}>länk</a>
            <span>{this.state.data ? this.state.data.avatar_url : null}</span> */}
            {this.state.data ? this.state.data.id : null}
        </div>
    )
}
}

export default Github;