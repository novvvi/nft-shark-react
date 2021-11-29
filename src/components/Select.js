import React from 'react';

export default class Select extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        console.log(this.props)

        const planItems = this.props.servers.map((server) =>
            <option value={server._id} key={server._id}>
                {server.proxyServers[0].k} {server.totalMB / 1000}GB | Order #{server.password}
            </option>
        );

        return (
            <div className="col-4">
                <div className="card generate h-370">
                    <p>Proxy Selection</p>
                    <form className="gen-form">
                        <select name="plan">
                            <option selected disabled>Select Plan</option>
                            {planItems}
                        </select>
                        <button className="btn">Generate</button>
                    </form>
                </div>
            </div>
        );
    };

};