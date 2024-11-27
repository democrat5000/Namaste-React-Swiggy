

const Body = ()=> {
  return(
  <div className="masterContainer h-1/4 border-b-2 border-black">
    <div className="filterContainer flex justify-between h-48 ">

      <div className="filter ">
        <button className="filterBtn border-2 border-black">Top Rated Restaurants</button>
      </div>

      <div className="searchContainer ">
        <input type="text" placeholder="Top Rated Restaurants" className="searchBox border-2 border-black" />
        <button className="searchButton border-2 border-black">Search</button>
      </div>

    </div>
  </div>
  );
}

export default Body;