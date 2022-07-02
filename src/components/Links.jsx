import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Results } from './Results';

export const Links = () => {
    return (
        <div className='p-4'>
            <Switch>
                <Route exact path='/'>
                    <Redirect to="/search" />
                </Route>
                <Route exact path={['/search', '/images', '/videos', '/news']}>
                    <Results />
                </Route>
            </Switch>
        </div>
    )
}
