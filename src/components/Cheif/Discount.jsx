

const Discount = () => {
    return (
        <div className='px-2 mx-10 mt-5 bg-accent'>
        <div className='justify-between py-16 max-w lg:flex'>
          <div>
            <h3 className='text-6xl font-bold text-primary'>Get 10% off your order!</h3>
            <p className='text-xl text-white'>Enter your email and receive a 20% discount on your next order!</p>
          </div>
          <div className="relative">
            <input type="email" placeholder="Enter Your Email" className="input input-bordered input-primary bg-transparent lg:w-[35rem] text-white mt-4" />
            <button className="absolute btn btn-primary top-4 right-5 lg:right-0">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    );
};

export default Discount;