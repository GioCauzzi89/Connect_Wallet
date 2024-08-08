import { useEffect } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  const { isConnected } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();

  useEffect(() => {
    if (!isConnected) {
      // Se non è connesso, tentare di connettere il primo wallet disponibile
      if (connectors.length > 0) {
        connect(connectors[0]); // Connetti al primo wallet disponibile
      }
    }
  }, [isConnected, connectors, connect]);

  return (
    <div className={styles.container}>
      <Head>
        <title>RainbowKit Demo</title>
        <meta
          name="description"
          content="Demo app part of a tutorial on adding RainbowKit to a React application"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title} style={{ marginBottom: '4rem' }}>
          Welcome to this demo of <a href="https://www.rainbowkit.com/">RainbowKit</a>
        </h1>

        {/* Puoi mantenere il pulsante se desideri permettere la connessione/disconnessione manuale */}
        <ConnectButton />
      </main>
    </div>
  );
}
