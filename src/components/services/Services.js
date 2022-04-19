import React from 'react';
import useService from '../../hooks/useService';
import Service from './service/Service';

const Services = () => {
    const [services, setServices] = useService()
    return (
        <div className='container-fluid'>
            <div className="container">
                <h1 className='text-center my-5'>Our Services</h1>
                <div className="row mb-4">
                    {
                        services.map(service => <Service key={service.id} service={service}></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;