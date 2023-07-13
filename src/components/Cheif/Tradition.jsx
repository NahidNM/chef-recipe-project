

const Tradition = () => {
    return (
        <div className="mx-5 mt-10">
             <h2 className='text-4xl font-bold text-center mb-14'>Most traditional food</h2>
            <div className="mb-32 shadow-xl card card-side bg-base-100">
                <figure><img src="https://upload.wikimedia.org/wikipedia/commons/e/e6/Panta_Ilish.jpg" alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="mb-6 text-3xl font-bold card-title">Panta Ilish</h2>
                    <p className='text-xl grow-0 mb-18'>Panta ilish is a dish from Bangladesh that combines a bowl of panta bhat—cooked and soaked rice—with fried ilish fish. </p>
                    <ul className='ml-8 text-xl list-disc'>
                        <li>Panta Vat</li>
                        <li>Fish Fry</li>
                        <li>Mash potato</li>
                        <li>Green Chili</li>
                        <li>Onion</li>
                    </ul>
                    <div className='justify-end mt-12 card-actions'>
                        <button className='p-4 text-lg font-bold text-white bg-black rounded-xl '>View Recipe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tradition;