const PatchPartTwo = ({page, setPage, formData, setFormData}) => {
    function toggleButton(toggle, toggled) {
        let one = document.getElementById(toggle);
        let two = document.getElementById(toggled);
        one.style.backgroundColor = "rgb(191,146,131)"
        two.style.backgroundColor = "rgb(101,66,56)"
    }

    function tooltipOnHover(e) {
        e.target.classList.remove("bi-question-circle");
        e.target.classList.add("bi-question-circle-fill")
    }

    function tooltipOnLeave(e) {
        e.target.classList.remove("bi-question-circle-fill");
        e.target.classList.add("bi-question-circle")
    }

    return (
        <div className="container">
            <div style={{height: "75vh"}}>
                <div className="text-start mb-5 mt-3">
                <p className="h1"><b>Patches</b></p>
                <p className="h5">Questions Part 2/2</p>
                </div>
                {/* Q6 */}
                <div className="row mt-5 mb-5">
                <div className="col-sm-6 text-start">
                    <p>
                    Is there any increase in pigmentation?&nbsp;
                    </p>
                </div>
                <div className="col-sm-3 btn-group" role="group" aria-label="Q6 Options">
                    <input 
                    type="radio" 
                    className="btn-check"
                    name="increase"
                    id="increase1"
                    value={Math.floor(Math.random()*5)} 
                    onChange={(e) => 
                        {
                        // setFormData({...formData, lump_amount: e.target.value});
                        toggleButton("increase1-label", "increase2-label");
                        }
                    }
                    />
                    <label 
                    className="btn btn-secondary"
                    id="increase1-label"
                    style={{ 
                        backgroundColor: "rgb(101,66,56)", 
                    }} 
                    htmlFor="increase1"
                    >
                    Yes
                    </label>
                </div>
                <div className="col-sm-3 btn-group" role="group" aria-label="Q6 Options">
                    <input 
                    type="radio" 
                    className="btn-check" 
                    name="increase"
                    id="increase2"
                    value={6 + Math.floor(Math.random()*5)} 
                    onChange={(e) => 
                        {
                        // setFormData({...formData, lump_amount: e.target.value})
                        toggleButton("increase2-label", "increase1-label");
                        }
                    }
                    />
                    <label 
                    className="btn btn-secondary" 
                    id="increase2-label"
                    style={{ 
                        backgroundColor: "rgb(101,66,56)", 
                    }} 
                    htmlFor="increase2"
                    >
                    No
                    </label>
                </div>
                </div>

                {/* Q7 */}
                <div className="row mt-5 mb-5">
                <div className="col-sm-6 text-start">
                    <p>Is the surface scaly?&nbsp;
                    </p>
                </div>
                <div className="col-sm-3 btn-group" role="group" aria-label="Q7 Options">
                    <input 
                    type="radio" 
                    className="btn-check"
                    name="scaly"
                    id="scaly1"
                    value={Math.floor(Math.random()*5)} 
                    onChange={(e) => 
                        {
                        // setFormData({...formData, lump_hardness: e.target.value});
                        toggleButton("scaly1-label", "scaly2-label");
                        }
                    }
                    />
                    <label 
                    className="btn btn-secondary" 
                    id="scaly1-label"
                    style={{ 
                        backgroundColor: "rgb(101,66,56)",  
                    }} 
                    htmlFor="scaly1"
                    >
                    Yes
                    </label>
                </div>
                <div className="col-sm-3 btn-group" role="group" aria-label="Q7 Options">
                    <input 
                    type="radio" 
                    className="btn-check"
                    name="scaly" 
                    id="scaly2"
                    value={6 + Math.floor(Math.random()*5)} 
                    onChange={(e) => 
                        {
                        // setFormData({...formData, lump_hardness: e.target.value})
                        toggleButton("scaly2-label", "scaly1-label");
                        }
                    }
                    />
                    <label 
                    className="btn btn-secondary" 
                    id="scaly2-label"
                    style={{ 
                        backgroundColor: "rgb(101,66,56)", 
                    }} 
                    htmlFor="scaly2"
                    >
                    No
                    </label>
                </div>
                </div>

            </div>

            <div 
              className="row"
            //   style={{ marginTop: "20vh"}}
            >
              <div className="col">
                <button
                  type="button"
                  className="btn btn-lg mt-5 w-75 rounded-pill"
                  style={{ 
                    height: "60px", 
                    backgroundColor: "#9F6AB0", 
                    color: "white"
                  }}
                  onClick={() => {
                    setPage(page - 1);
                  }}>
                  Back
                </button>
              </div>
              <div className="col">
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
}

export default PatchPartTwo;