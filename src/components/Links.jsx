import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

export const Links = () => {
    return (
        <div className='p-4'>
            <Switch>
                <Route exact path='/'>
                    <Redirect to="/search" />
                </Route>
            </Switch>
        </div>
    )
}
