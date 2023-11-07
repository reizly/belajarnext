import Head from 'next/head';
import Navbar from './components/navbar';
import Image from 'next/image';

const Home = ({posts}) => {
  return (
    <>
      <Head>
        <title>Home | Belajar Next JS</title>
        <meta name="description" content="Belajar Next JS" />
      </Head>
      <Navbar />
      <Image src="/next.svg" alt="Logo Next JS" width={100} height={100} />
      <h1>Ini Halaman Home</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
        </div>
      ))}
    </>
  )
};

export default Home;

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
};