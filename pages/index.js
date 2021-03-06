import CardList from '../components/CardList'
import HeadMeta from '../components/HeadMeta';
import homeStyles from '../styles/Home.module.css'

export default function Home( {pokemon} ) {

  return (
    <>
    <HeadMeta title="Home" />
    <div className={homeStyles.container}>
      <h1>Home</h1>
      <p>Static Site Generation - NextJS</p>
      
      {/* if there is data, display the card list */}
      { pokemon && <CardList pokemon={pokemon}/>}

    </div>
    </>
  )
}

export async function getStaticProps(context){

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20`);
    const data = await response.json();
    const results = data.results;

    const IMAGE_API_URL = `https://assets.pokemon.com/assets/cms2/img/pokedex/full`;
    const pokemon = results.map ( (pokemon, index) => {
        const paddedIndex = ('00' + (index + 1)).slice(-3);
        const imageUrl = `${IMAGE_API_URL}/${paddedIndex}.png`;

         return{
            ...pokemon,
           image: imageUrl,
        }
       });

  return {
    props: {
      pokemon,
    }
  }
}