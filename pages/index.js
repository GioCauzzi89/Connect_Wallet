import { useEffect } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  const { isConnected } = useAccount();

  useEffect(() => {
    // Se non connesso, apri la finestra di collegamento
    if (!isConnected) {
      const button = document.querySelector('button[data-rainbowkit-button]');
      if (button) button.click(); // Simula il clic sul pulsante Connect Wallet
    }
  }, [isConnected]);

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

        <ConnectButton />
      </main>
    </div>
  );
}
