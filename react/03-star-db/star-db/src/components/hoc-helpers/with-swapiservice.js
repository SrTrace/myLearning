import React from 'react';
import {SwapiServiceCosumer} from "../swapi-service-contex";

const withSwapiService = (mapMethodsToProps => (Wrapped) => {

    return (props) => {
        return (
            <SwapiServiceCosumer>
                {
                    (swapiService) => {
                        const serviceProps = mapMethodsToProps(swapiService);
                        return (
                            <Wrapped {...props} {...serviceProps}/>
                        );
                    }
                }
            </SwapiServiceCosumer>
        );
    }
});

export default withSwapiService;