const CardPizza = ({ pizza }) => {
  const { name, price, ingredients, imgUrl } = pizza

  ingredients.map((ingredient) => {
    ingredient.split(',')
  })

  return (
    <section className='text-center p-2 max-w-80 rounded-md'>
      <img
        src={imgUrl}
        alt={`Pizza ${name}`}
        className='w-80 h-48 object-cover rounded-t-md'
      />
      <h2 className='text-left p-2 text-md bg-slate-200'>Pizza {name}</h2>
      <p className='text-xl py-2 text-gray-600'>Ingredientes</p>
      <li className='list-none mb-2'>🍕 {ingredients.join(' ,')}</li>
      <p className='font-bold text-xl'>Precio: ${price}</p>
      <div className='flex justify-between p-2 items-center'>
        <button className='border border-slate-950 rounded-md p-1 active:bg-slate-800 active:text-white'>
          👀 Ver más
        </button>
        <button className=' border border-slate-950 rounded-md p-1 text-white bg-slate-800 active:text-black active:bg-white'>
          🛒 Añadir
        </button>
      </div>
    </section>
  )
}

export default CardPizza
