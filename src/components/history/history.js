import React from 'react';
import { render } from 'enzyme';
import validateFormData from 'react-jsonschema-form/lib/validate';

const history = () => {
    let get = getProduts();
    if(get.length > 0){
        const result = get.map((val, idx) => {
            return (
                <li className="mm" key={idx}>
                    <span className={`method ${val.method}`}>{val.method}</span>
                    <span className="url">{val.url}</span>
                    <button>Re-Run</button>
                </li>
            );
        });
        return (
            <div className="list">
                {result}
            </div>
        );
    }else{
        return(
            <div>
            </div>
        )
    }
}
const getProduts = () => {
    let history = localStorage.getItem('history');
    if (history) {
        let result = JSON.parse(history);
        return result;
    }
}
export default history;