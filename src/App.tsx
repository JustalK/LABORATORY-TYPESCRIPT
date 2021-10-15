import React, { Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Experiences from '@pages/index'

export default function App(): JSX.Element {
  return (
    <Router>
      <div className="navigation">
        <nav>
          <ul>
            {Object.keys(Experiences).map((e, index) => (
              <li key={e}>
                <a href={`/${index + 1}`}>{e}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="content">
        <Switch>
          {Object.keys(Experiences).map((e, index) => {
            // @ts-ignore:next-line
            const Type = Experiences[e]
            return (
              <Route key={e} path={`/${index + 1}`}>
                <Suspense fallback={<p>Loading...</p>}>
                  <Type />
                </Suspense>
              </Route>
            )
          })}
          <Route path="/">
            <span>Click on one of the experience on the left side</span>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
