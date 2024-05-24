function Banner(){
    return <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
      <div>
        <h1>Mansi's techy Blog</h1>
        <h2 className="mt-5 md:mt-0">
            {" "}
            <span className="underline decoration-4 decoration - [#db4437]">
                Developing is fun(),,
            </span>{" "}
            Welcome to the fun-o-zone
        </h2>
    
      </div>
      <p className="mt-5 md:mt-2 text-gray-500 max-w-sm">
        MLOps | Cyber Security | Data Analysis | debugging && more
      </p>
    </div>;
}

export default Banner;