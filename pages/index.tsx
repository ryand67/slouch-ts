import { useState } from 'react'
import Head from 'next/head'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../util/firebase';
import Credentials from '../components/Crednetials/Credentials'
import ChatScreen from '../components/ChatScreenComps/ChatScreen';
import Loading from '../components/Loading';

export default function Home() {

  const [user, loading] = useAuthState(auth);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <Head>
        <title>Slouch | Hardly Working</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Yellowtail&display=swap" rel="stylesheet"></link>
      </Head>
      asdf
      {loading ? <Loading /> : !user ? <Credentials /> : <ChatScreen />}
    </div>
  )
}
