import Head from "next/head";
import HomeScreen from "../Components/HomeScreen";
import Brigde from "../Components/Bridge";
import Results from "../Components/Results";
import Requests from "../Utils/Requests";

export default function Home({ data }) {
  return (
    <div className="">
      <Head>
        <title>Hulu 2.0</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeScreen />
      <Brigde />
      <Results data={data}></Results>
    </div>
  );
}

// This gets called on every request
export async function getServerSideProps(context) {
  // Fetch data from external API
  const genre = context.query.genre;

  const res = await fetch(
    `https://api.themoviedb.org/3${
      Requests[genre]?.url || Requests["fetchTrending"].url
    }`
  );
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
