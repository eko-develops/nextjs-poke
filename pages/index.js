import { useState, useEffect } from 'react'
import CardList from '../components/CardList'
import styles from '../styles/Home.module.css'

export default function Home( {data} ) {

  console.log(data)

  return (
    <div className={styles.container}>
      <h1>All Pokemon</h1>
      
      {data ? <CardList data={data} /> : "No Pokemon Found"}

    </div>
  )
}

export async function getStaticProps(context){

  const data = []

  for(let i = 0; i < 10; i++){
    const randomNumber = Math.floor(Math.random() * 150 ) + 1
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
    const theData = await response.json()
    data[i] = theData
  }

  return {
    props: {
      data
    }
  }
}