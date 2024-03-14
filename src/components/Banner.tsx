const Banner = ({text}: {text: string}) => {
  return (
    <div className='w-full h-60 bg-black text-white text-5xl font-serif font-medium flex text-center items-center justify-center'>
        {text}
    </div>
  )
}

export default Banner