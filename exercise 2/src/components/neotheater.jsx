import React from 'react';

export default function Neotheater() {
    return (
        <div className="card border-info w-75 mb-3 mx-auto">
            <div className="row g-0">
                <div className="col-md-4 d-flex align-items-center p">
                    <img
                        src="https://m.media-amazon.com/images/I/81x7Allw9SL._UF1000,1000_QL80_.jpg"
                        className="img-fluid rounded-start"
                        alt="neotheater"
                    />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h1 className="card-title">NeoTheater</h1>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item custom-list-item">Next Up Forever</li>
                            <li className="list-group-item custom-list-item">Birthday Party</li>
                            <li className="list-group-item custom-list-item">100 bad days</li>
                            <li className="list-group-item custom-list-item">Don't Throw Out My Legos</li>
                            <li className="list-group-item custom-list-item">Break My Face</li>
                            <li className="list-group-item custom-list-item">Turning Out Pt.ii</li>
                            <li className="list-group-item custom-list-item">The Entertainment's Here</li>
                            <li className="list-group-item custom-list-item">Karma</li>
                            <li className="list-group-item custom-list-item">Beats</li>
                            <li className="list-group-item custom-list-item">Wow, I'm Not Crazy</li>
                            <li className="list-group-item custom-list-item">Dear Winter</li>
                            <li className="list-group-item custom-list-item">Finale (Can't Wait To See What you do Next)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}