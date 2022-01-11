
const Principal = () => {
    return (
        <div className="container rounded-md px-28  my-10 bg-white grid grid-rows-1 grid-cols-2  gap-x-6 ">
            <div>
            <h3 className="text-gray-600 font-thin pt-10 text-5xl">Magia e Ilusionismo</h3>
            <p className="mt-12 text-xl text-gray-600">Desarrollá tu <b>comunicación.</b> Trabajarás tu capacidad de expresarte, tu vocabulario, gestualidad y aprenderás conceptos de psicología.</p>
            <p className="mt-4 text-xl text-gray-600 pb-10">Al ejercitar la coordinación de todos estos elementos conjuntamente, tu comunicación y oratoria mejorarán mientras te diviertes y entretienes al público.</p>
            </div>
            
            <picture className="w-16 md:w-32 lg:w-auto  ">
                 <source srcSet="" type="image/avif" />
                 <source srcSet="" type="image/webp" />
                 <img loading="lazy" src="/img/header1.jpg" alt="Curso de Magia"  />
              </picture>
        </div>
    )
}

export default Principal
