const Header = () => {
  return (
    <header className='flex flex-col items-center justify-center bg-header-background bg-cover h-36 text-white lg:h-72'>
      <h1 className='font-semibold text-2xl'>¡Pizzería Mamma Mia!</h1>
      <p className='text-[10px]'>
        ¡Tenemos las mejores pizzas que podrás encontrar!
      </p>
      <hr className='w-4/5 border-gray-400 opacity-30' />
    </header>
  )
}

export default Header
