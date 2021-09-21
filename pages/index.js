import CardList from '../components/CardList'
import styles from '../styles/Home.module.css'

export default function Home( {data} ) {


  const pokemon = data.results;
  console.log(pokemon)
  return (
    <div className={styles.container}>
      <h1>Home</h1>
      
      {/* if there is data, display the card list */}
      { data && <CardList pokemon={pokemon}/>}

    </div>
  )
}

export async function getStaticProps(context){

    
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon`);
    const data = await response.json();

  return {
    props: {
      data
    }
  }
}