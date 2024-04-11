const UlcerInfo = ({page, setPage}) => {
    return (
      <div className="container">
        <div style={{ height: "75vh" }}>
        <div className="text-start mb-5 mt-3">
            <p className="h1"><b>Ulcers</b></p>
            <p className="h5">
              An ulcer occurs where there is a break in the surface of the skin. Ulcers are 
              usually round or oval in shape, but they may become irregular and are usually 
              more than 0.5 cm deep. On inspection, the base is often red and raw-looking or 
              it may be covered by dead tissu or a yellow surface crust. Ulceration is an 
              important feature of many skin NTDs.
            </p>
          </div> 
          <div className="row">
            <div className="col-sm-6">
              <img 
                src="/ulcers/ulcer-1.png" 
                alt="" 
                style={{ width: "300px", height: "200px" }}
              />
            </div>
            <div className="col-sm-6">
              <img 
                src="/ulcers/ulcer-2.png" 
                alt="" 
                style={{ width: "300px", height: "200px" }}
              />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-sm-6">
              <img 
                src="/ulcers/ulcer-3.png" 
                alt="" 
                style={{ width: "300px", height: "200px" }}
              />
            </div>
            <div className="col-sm-6">
              <img 
                src="/ulcers/ulcer-4.png" 
                alt="" 
                style={{ width: "300px", height: "200px" }}
              />
            </div>
          </div>
        </div>
          
        <div className="row">
          <div className="col-sm-8"></div>
          <div className="col-sm-4">
            <button
              type="button"
              className="btn btn-lg mt-5 w-75 rounded-pill"
              style={{ 
                height: "60px", 
                backgroundColor: "#9F6AB0", 
                color: "white"
              }}
              onClick={() => {
                setPage(page + 1);
              }}>
              Next
            </button>
          </div>
        </div>
      </div>
    );
};

export default UlcerInfo;