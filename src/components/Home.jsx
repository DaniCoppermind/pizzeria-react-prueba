import Header from 'components/Header'
import CardPizza from 'components/CardPizza'
import pizzas from 'data/db.json'

const Home = () => {
  return (
    <>
      <Header />
      <main className='grid justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-8 m-2 border border-red-300 rounded-lg shadow-md'>
        {pizzas.map((pizza, index) => (
          <CardPizza key={index} pizza={pizza} />
        ))}
      </main>
    </>
  )
}

export default Home
