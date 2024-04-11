const SwollenPartTwo = ({page, setPage, formData, setFormData}) => {
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
                <p className="h1"><b>Swelling</b></p>
                <p className="h5">Questions Part 2/2</p>
                </div>
                {/* Q6 */}
                <div className="row mt-5 mb-5">
                <div className="col-sm-6 text-start">
                    <p>
                    Is the swelling uniform, with a smooth surface and soft to the touch?&nbsp;
                    </p>
                </div>
                <div className="col-sm-3 btn-group" role="group" aria-label="Q6 Options">
                    <input 
                    type="radio" 
                    className="btn-check"
                    name="uniform"
                    id="uniform1"
                    value={Math.floor(Math.random()*5)} 
                    onChange={(e) => 
                        {
                        // setFormData({...formData, lump_amount: e.target.value});
                        toggleButton("uniform1-label", "uniform2-label");
                        }
                    }
                    />
                    <label 
                    className="btn btn-secondary"
                    id="uniform1-label"
                    style={{ 
                        backgroundColor: "rgb(101,66,56)", 
                    }} 
                    htmlFor="uniform1"
                    >
                    Yes
                    </label>
                </div>
                <div className="col-sm-3 btn-group" role="group" aria-label="Q6 Options">
                    <input 
                    type="radio" 
                    className="btn-check" 
                    name="uniform"
                    id="uniform2"
                    value={6 + Math.floor(Math.random()*5)} 
                    onChange={(e) => 
                        {
                        // setFormData({...formData, lump_amount: e.target.value})
                        toggleButton("uniform2-label", "uniform1-label");
                        }
                    }
                    />
                    <label 
                    className="btn btn-secondary" 
                    id="uniform2-label"
                    style={{ 
                        backgroundColor: "rgb(101,66,56)", 
                    }} 
                    htmlFor="uniform2"
                    >
                    No
                    </label>
                </div>
                </div>

                {/* Q7 */}
                <div className="row mt-5 mb-5">
                <div className="col-sm-6 text-start">
                    <p>Is it tender (painful) to touch?&nbsp;
                    </p>
                </div>
                <div className="col-sm-3 btn-group" role="group" aria-label="Q7 Options">
                    <input 
                    type="radio" 
                    className="btn-check"
                    name="tender"
                    id="tender1"
                    value={Math.floor(Math.random()*5)} 
                    onChange={(e) => 
                        {
                        // setFormData({...formData, lump_hardness: e.target.value});
                        toggleButton("tender1-label", "tender2-label");
                        }
                    }
                    />
                    <label 
                    className="btn btn-secondary" 
                    id="tender1-label"
                    style={{ 
                        backgroundColor: "rgb(101,66,56)",  
                    }} 
                    htmlFor="tender1"
                    >
                    Yes
                    </label>
                </div>
                <div className="col-sm-3 btn-group" role="group" aria-label="Q7 Options">
                    <input 
                    type="radio" 
                    className="btn-check"
                    name="tender" 
                    id="tender2"
                    value={6 + Math.floor(Math.random()*5)} 
                    onChange={(e) => 
                        {
                        // setFormData({...formData, lump_hardness: e.target.value})
                        toggleButton("tender2-label", "tender1-label");
                        }
                    }
                    />
                    <label 
                    className="btn btn-secondary" 
                    id="tender2-label"
                    style={{ 
                        backgroundColor: "rgb(101,66,56)", 
                    }} 
                    htmlFor="tender2"
                    >
                    No
                    </label>
                </div>
                </div>

                {/* Q8 */}
                <div className="row mt-5 mb-5">
                <div className="col-sm-6 text-start">
                    <p>Are there small lumps which may contain pus in the swollen area?&nbsp;
                        {/* <i 
                        className="bi bi-question-circle ml-3" 
                        data-toggle="tooltip fade" 
                        title="i.e. any traumatic events or experiences that might have occurred before the development of the ulcer"
                        onMouseOver={tooltipOnHover}
                        onMouseLeave={tooltipOnLeave}
                        /> */}
                    </p>
                </div>
                <div className="col-sm-3 btn-group" role="group" aria-label="Q8 Options">
                    <input 
                    type="radio" 
                    className="btn-check"
                    name="pus"
                    id="pus1"
                    value={Math.floor(Math.random()*5)} 
                    onChange={(e) => 
                        {
                        // setFormData({...formData, lump_surface: e.target.value});
                        toggleButton("pus1-label", "pus2-label");
                        }
                    }
                    />
                    <label 
                    className="btn btn-secondary" 
                    id="pus1-label"
                    style={{ 
                        backgroundColor: "rgb(101,66,56)", 
                    }} 
                    htmlFor="pus1"
                    >
                    Yes
                    </label>  
                </div>
                <div className="col-sm-3 btn-group" role="group" aria-label="Q3 Options">
                    <input 
                    type="radio" 
                    className="btn-check" 
                    name="pus"
                    id="pus2"
                    value={6 + Math.floor(Math.random()*5)} 
                    onChange={(e) => 
                        {
                        // setFormData({...formData, lump_surface: e.target.value});
                        toggleButton("pus2-label", "pus1-label");
                        }
                    }
                    />
                    <label 
                    className="btn btn-secondary" 
                    id="pus2-label"
                    style={{ 
                        backgroundColor: "rgb(101,66,56)", 
                    }} 
                    htmlFor="pus2"
                    >
                    No
                    </label>
                </div>
                </div>

                {/* Q9 */}
                <div className="row mt-5 mb-5">
                <div className="col-sm-6 text-start">
                    <p>Is there any discharge from the surface of the swollen area?&nbsp;
                    </p>
                </div>
                <div className="col-sm-3 btn-group" role="group" aria-label="Q9 Options">
                    <input 
                    type="radio" 
                    className="btn-check"
                    name="discharge"
                    id="discharge1"
                    value={Math.floor(Math.random()*5)} 
                    onChange={(e) => 
                        {
                        // setFormData({...formData, lump_location: e.target.value});
                        toggleButton("discharge1-label", "discharge2-label");
                        } 
                    }
                    />
                    <label 
                    className="btn btn-secondary" 
                    id="discharge1-label"
                    style={{ 
                        backgroundColor: "rgb(101,66,56)", 
                    }} 
                    htmlFor="discharge1"
                    >
                    Yes
                    </label>
                </div>
                <div className="col-sm-3 btn-group" role="group" aria-label="Q9 Options">
                    <input 
                    type="radio" 
                    className="btn-check" 
                    name="discharge"
                    id="discharge2"
                    value={6 + Math.floor(Math.random()*5)} 
                    onChange={(e) => 
                        {
                        // setFormData({...formData, lump_location: e.target.value});
                        toggleButton("discharge2-label", "discharge1-label");
    
                        }
                    }
                    />
                    <label 
                    className="btn btn-secondary" 
                    id="discharge2-label"
                    style={{ 
                        backgroundColor: "rgb(101,66,56)", 
                    }} 
                    htmlFor="discharge2"
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

export default SwollenPartTwo;