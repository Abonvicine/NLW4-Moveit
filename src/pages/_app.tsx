import '../styles/global.css';

import { ChallengesProvider } from '../contexts/challengesContexts'

import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  
  return (
        <Component {...pageProps} />
    )
}

export default MyApp
