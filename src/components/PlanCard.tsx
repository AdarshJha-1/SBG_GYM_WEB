interface PlanVal {
    plan: string;
    content: string[];
}

const PlanCard = ({plan, content}: PlanVal) => {
  return (
    <div className='w-[290px] h-[340px] text-white bg-black flex flex-col items-center pt-5 gap-10 rounded-lg'>
        <h1 className='text-3xl font-serif'>{plan}</h1>
        <ul className='w-4/5 flex flex-col gap-4'>
            {content.map((text, index) => (
                <li className='list-disc list-inside text-[17px] font-serif' key={index}>
                    {text}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default PlanCard