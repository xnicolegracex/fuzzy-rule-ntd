const Start = ({page, setPage}) => {
    return (
        <div className="container">
          <p className="h5">FUZZY RULE BASED EXPERT SYSTEM</p>
          <p className="display-5 mt-3">Diagnosis of SKIN NTDs</p>
          <img src="/lab-start.png" alt="" />
          <br />
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
            START
          </button>
        </div>
    );
};

export default Start;