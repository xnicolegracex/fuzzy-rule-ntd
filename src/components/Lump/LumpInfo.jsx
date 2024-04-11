const LumpInfo = ({page, setPage}) => {
    return (
        <div className="container">
          <div style={{ height: "75vh" }}>
            <div className="text-start mb-5 mt-3">
                <p className="h1"><b>Lump</b></p>
                <p className="h5">
                  A lump is a <b>small</b> or <b>large</b> raised bump that can occur at any site on the skin.
                  Sometimes lumps are hard but they may be soft to touch. which generally indicates 
                  that they contain fluid or pus. They can also have a smooth surface or appear rough 
                  and wart-like. Lumps may also be painful or itch.
                </p>
            </div> 
            <div className="row">
              <div className="col-sm-6">
                <img 
                  src="/lumps/lump-1.png" 
                  alt="" 
                  style={{ width: "300px", height: "200px" }}
                />
              </div>
              <div className="col-sm-6">
                <img 
                  src="/lumps/lump-2.png" 
                  alt="" 
                  style={{ width: "300px", height: "200px" }}
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-sm-6">
                <img 
                  src="/lumps/lump-3.png" 
                  alt="" 
                  style={{ width: "300px", height: "200px" }}
                />
              </div>
              <div className="col-sm-6">
                <img 
                  src="/lumps/lump-4.png" 
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

export default LumpInfo;