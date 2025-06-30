import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>My Love Anime List</title>
      </Head>
      <main style={{ background: '#fff', color: '#000', textAlign: 'center', padding: '50px' }}>
        <h1 style={{ fontSize: '2.5em' }}>🖤 My Love Anime List</h1>
        <p style={{ fontSize: '1.2em' }}>あきらめないのがおれのまほうだ</p>
        <img src="https://upload.wikimedia.org/wikipedia/en/0/03/Asta_Black_Clover.png" alt="Asta" width="200" />
        <ul style={{ marginTop: '30px', fontSize: '1.1em' }}>
          <li>Black Clover</li>
          <li>Tambah anime lain nanti ya bro 💪</li>
        </ul>
      </main>
    </>
  );
}
