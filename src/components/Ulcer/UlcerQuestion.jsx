const UlcerQuestion = ({page, setPage}) => {
    return (
      <div className="container">
        <div style={{ height: "75vh" }}>
          <div className="text-start mb-5 mt-3">
              <p className="h1"><b>Ulcers</b></p>
          </div>
          <div 
            className="row"
            style={{ marginTop: "170px"}}
          >
            <p className="h5 text-middle">Does patient have ulcers on skin?</p>
            <div className="col">
              <button
                type="button"
                className="btn btn-lg mt-5 rounded-pill"
                style={{ 
                  height: "60px", 
                  width: "140px",
                  backgroundColor: "#9F6AB0", 
                  color: "white"
                }}
                onClick={() => {
                  setPage(page + 1);
                }}>
                Yes
              </button>
            </div>
            <div className="col">
              <button
                type="button"
                className="btn btn-lg mt-5 rounded-pill"
                style={{ 
                  height: "60px", 
                  width: "140px",
                  backgroundColor: "#9F6AB0", 
                  color: "white"
                }}
                onClick={() => {
                  setPage(page + 3);
                }}>
                No
              </button>
            </div>
          </div>
        </div>
        <div 
          className="row"
        >
          <div className="col-sm-4">
            <button
              type="button"
              className="btn btn-lg mt-5 w-75 rounded-pill"
              style={{ 
                height: "60px", 
                // width: "250px",
                backgroundColor: "#9F6AB0", 
                color: "white"
              }}
              onClick={() => {
                setPage(page - 1);
              }}>
              Back to description
            </button>
          </div>
          <div className="col-sm-4">

          </div>
        </div>
      </div>
    );
};

export default UlcerQuestion;