import React from 'react';
import CsvForm from '../components/CsvForm';

const CsvFile = () => {
    return (
        <div className="container my-3">
            <div className="offset-md-3 col-md-6">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">File Upload Form</h5>
                        <CsvForm />
                        <ul className="list-group list-group-flush">
                            {/* {
                                todoObj && todoObj.map((itm, idx) => {
                                    return <li key={idx} className="list-group-item">{itm?.todo}</li>
                                })
                            } */}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CsvFile;
