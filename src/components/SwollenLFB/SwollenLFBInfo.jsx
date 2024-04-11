const SwollenLFBInfo = ({page, setPage}) => {
    return (
      <div className="container">
        <div style={{ height: "75vh" }}>
        <div className="text-start mb-5 mt-3">
            <p className="h1"><b>Swollen limbs, face, body</b></p>
            <p className="h5">
            Swelling of the skin often occurs when it contains too much fluid. Any 
            swelling that appears as an increase in the circumference of an arm or 
            leg is often best seen when comparing one side with the other. Swollen 
            limbs may be hard to touch or soft. leading to a dent on the skin surface
            where pressed gently but firmly with a finger. Patients will often say that 
            the limb is more swollen by the end of the day and it may reduce when they 
            lie down.
            </p>
          </div> 
          <div className="row">
            <div className="col-sm-6">
              <img 
                src="/lfb/lfb-1.png" 
                alt="" 
                style={{ width: "300px", height: "200px" }}
              />
            </div>
            <div className="col-sm-6">
              <img 
                src="/lfb/lfb-2.png" 
                alt="" 
                style={{ width: "300px", height: "200px" }}
              />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-sm-6">
              <img 
                src="/lfb/lfb-3.png" 
                alt="" 
                style={{ width: "300px", height: "200px" }}
              />
            </div>
            <div className="col-sm-6">
              <img 
                src="/lfb/lfb-4.png" 
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

export default SwollenLFBInfo;