export const Header = () => {
    return (

        <div className="container relative ">
           <div className="px-40">
           <h1 className="text-gray-100 antialiased text-shadow-xl text-5xl uppercase font-semibold grid mx-64 bottom-20  absolute text-center ">CIRCULO MAGICO 
           <span className="text-4xl antialiased uppercase italic mt-3 tracking-widest text-red-800">Escuela de Magia e Ilusionismo</span></h1>
               <picture className="">
                 <source srcSet="/img/slides/cartas.avif" type="image/avif" />
                 <source srcSet="/img/slides/cartas.webp" type="image/webp" />
                 <img loading="lazy" src="/img/slides/cartas.jpg" alt="Escuela de Magia e Ilusionismo"  />
              </picture>
            </div>
        </div>
    )
}


export default Header


