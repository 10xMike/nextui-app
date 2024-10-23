export const Hero = () => {
    return (
        <section className="relative w-full min-h-[60vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/cruise.jpeg)' }}>
            <div className="relative flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-50">
                <h1 className="text-4xl font-bold text-white md:text-5xl">Benvenuto!</h1>
                <p className="mt-4 text-lg text-white md:text-xl">Esplora nuove destinazioni con noi.</p>
                <button className="p-4 mt-6 text-lg font-semibold text-white bg-orange-500 rounded hover:bg-orange-600">Scopri di più</button>
            </div>
        </section>
    );
}


