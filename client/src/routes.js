import React from 'react'
import {Switch,Route} from 'react-router-dom'
import {LinksPage} from './pages/LinksPage'
import {MainPage} from './pages/MainPage'
import {DetailPage} from './pages/DetailPage'

export const useRoutes = () => {
	return (
	<Switch>
	<Route path='/links' exact><LinksPage /></Route>
	<Route path='/main' exact><MainPage /></Route>
	<Route path='/detail'exact><DetailPage /></Route>
	</Switch>
	)
	
}