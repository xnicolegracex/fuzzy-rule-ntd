const PatchPartOne = ({page, setPage, formData, setFormData}) => {
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
                <p className="h5">Questions Part 1/2</p>
                </div>
                {/* Q1 */}
                <div className="row mt-5 mb-5">
                <div className="col-sm-6 text-start">
                    <p>
                    Are the patches single or multiple?&nbsp;
                    </p>
                </div>
                <div className="col-sm-3 btn-group" role="group" aria-label="Q1 Options">
                    <input 
                    type="radio" 
                    className="btn-check"
                    name="amount"
                    id="amount1"
                    value={Math.floor(Math.random()*5)} 
                    onChange={(e) => 
                        {
                        // setFormData({...formData, lump_amount: e.target.value});
                        toggleButton("amount1-label", "amount2-label");
                        }
                    }
                    />
                    <label 
                    className="btn btn-secondary"
                    id="amount1-label"
                    style={{ 
                        backgroundColor: "rgb(101,66,56)", 
                    }} 
                    htmlFor="amount1"
                    >
                    Single
                    </label>
                </div>
                <div className="col-sm-3 btn-group" role="group" aria-label="Q2 Options">
                    <input 
                    type="radio" 
                    className="btn-check" 
                    name="amount"
                    id="amount2"
                    value={6 + Math.floor(Math.random()*5)} 
                    onChange={(e) => 
                        {
                        // setFormData({...formData, lump_amount: e.target.value})
                        toggleButton("amount2-label", "amount1-label");
                        }
                    }
                    />
                    <label 
                    className="btn btn-secondary" 
                    id="amount2-label"
                    style={{ 
                        backgroundColor: "rgb(101,66,56)", 
                    }} 
                    htmlFor="amount2"
                    >
                    Multiple
                    </label>
                </div>
                </div>

                {/* Q2 */}
                <div className="row mt-5 mb-5">
                <div className="col-sm-6 text-start">
                    <p>Is the surface raised?&nbsp;
                    </p>
                </div>
                <div className="col-sm-3 btn-group" role="group" aria-label="Q2 Options">
                    <input 
                    type="radio" 
                    className="btn-check"
                    name="surface"
                    id="surface1"
                    value={Math.floor(Math.random()*5)} 
                    onChange={(e) => 
                        {
                        // setFormData({...formData, lump_hardness: e.target.value});
                        toggleButton("surface1-label", "surface2-label");
                        }
                    }
                    />
                    <label 
                    className="btn btn-secondary" 
                    id="surface1-label"
                    style={{ 
                        backgroundColor: "rgb(101,66,56)",  
                    }} 
                    htmlFor="surface1"
                    >
                    Yes
                    </label>
                </div>
                <div className="col-sm-3 btn-group" role="group" aria-label="Q2 Options">
                    <input 
                    type="radio" 
                    className="btn-check"
                    name="surface" 
                    id="surface2"
                    value={6 + Math.floor(Math.random()*5)} 
                    onChange={(e) => 
                        {
                        // setFormData({...formData, lump_hardness: e.target.value})
                        toggleButton("surface2-label", "surface1-label");
                        }
                    }
                    />
                    <label 
                    className="btn btn-secondary" 
                    id="surface2-label"
                    style={{ 
                        backgroundColor: "rgb(101,66,56)", 
                    }} 
                    htmlFor="surface2"
                    >
                    No
                    </label>
                </div>
                </div>

                {/* Q3 */}
                <div className="row mt-5 mb-5">
                <div className="col-sm-6 text-start">
                    <p>Does the patch itch?&nbsp;
                    </p>
                </div>
                <div className="col-sm-3 btn-group" role="group" aria-label="Q3 Options">
                    <input 
                    type="radio" 
                    className="btn-check"
                    name="itch"
                    id="itch1"
                    value={Math.floor(Math.random()*5)} 
                    onChange={(e) => 
                        {
                        // setFormData({...formData, lump_surface: e.target.value});
                        toggleButton("itch1-label", "itch2-label");
                        }
                    }
                    />
                    <label 
                    className="btn btn-secondary" 
                    id="itch1-label"
                    style={{ 
                        backgroundColor: "rgb(101,66,56)", 
                    }} 
                    htmlFor="itch1"
                    >
                    Yes
                    </label>  
                </div>
                <div className="col-sm-3 btn-group" role="group" aria-label="Q3 Options">
                    <input 
                    type="radio" 
                    className="btn-check" 
                    name="itch"
                    id="itch2"
                    value={6 + Math.floor(Math.random()*5)} 
                    onChange={(e) => 
                        {
                        // setFormData({...formData, lump_surface: e.target.value});
                        toggleButton("itch2-label", "itch1-label");
                        }
                    }
                    />
                    <label 
                    className="btn btn-secondary" 
                    id="itch2-label"
                    style={{ 
                        backgroundColor: "rgb(101,66,56)", 
                    }} 
                    htmlFor="itch2"
                    >
                    No
                    </label>
                </div>
                </div>

                {/* Q4 */}
                <div className="row mt-5 mb-5">
                <div className="col-sm-6 text-start">
                    <p>Is there any change in sensation on the lesions?&nbsp;
                        {/* <i 
                        className="bi bi-question-circle ml-3" 
                        data-toggle="tooltip fade" 
                        title="i.e. within a few days"
                        onMouseOver={tooltipOnHover}
                        onMouseLeave={tooltipOnLeave}
                        /> */}
                    </p>
                </div>
                <div className="col-sm-3 btn-group" role="group" aria-label="Q4 Options">
                    <input 
                    type="radio" 
                    className="btn-check"
                    name="sensation"
                    id="sensation1"
                    value={Math.floor(Math.random()*5)} 
                    onChange={(e) => 
                        {
                        // setFormData({...formData, lump_location: e.target.value});
                        toggleButton("sensation1-label", "sensation2-label");
                        } 
                    }
                    />
                    <label 
                    className="btn btn-secondary" 
                    id="sensation1-label"
                    style={{ 
                        backgroundColor: "rgb(101,66,56)", 
                    }} 
                    htmlFor="sensation1"
                    >
                    Yes
                    </label>
                </div>
                <div className="col-sm-3 btn-group" role="group" aria-label="Q4 Options">
                    <input 
                    type="radio" 
                    className="btn-check" 
                    name="sensation"
                    id="sensation2"
                    value={6 + Math.floor(Math.random()*5)} 
                    onChange={(e) => 
                        {
                        // setFormData({...formData, lump_location: e.target.value});
                        toggleButton("sensation2-label", "sensation1-label");
    
                        }
                    }
                    />
                    <label 
                    className="btn btn-secondary" 
                    id="sensation2-label"
                    style={{ 
                        backgroundColor: "rgb(101,66,56)", 
                    }} 
                    htmlFor="sensation2"
                    >
                    No
                    </label>
                </div>
                </div>

                {/* Q5 */}
                <div className="row mt-5 mb-5">
                <div className="col-sm-6 text-start">
                    <p>Is there any loss of pigmentation?&nbsp;
                    </p>
                </div>
                <div className="col-sm-3 btn-group" role="group" aria-label="Q5 Options">
                    <input 
                    type="radio" 
                    className="btn-check"
                    name="pigment"
                    id="pigment1"
                    value={Math.floor(Math.random()*5)} 
                    onChange={(e) => 
                        {
                        // setFormData({...formData, lump_location: e.target.value});
                        toggleButton("pigment1-label", "pigment2-label");
                        } 
                    }
                    />
                    <label 
                    className="btn btn-secondary" 
                    id="pigment1-label"
                    style={{ 
                        backgroundColor: "rgb(101,66,56)", 
                    }} 
                    htmlFor="pigment1"
                    >
                    Yes
                    </label>
                </div>
                <div className="col-sm-3 btn-group" role="group" aria-label="Q5 Options">
                    <input 
                    type="radio" 
                    className="btn-check" 
                    name="pigment"
                    id="pigment2"
                    value={6 + Math.floor(Math.random()*5)} 
                    onChange={(e) => 
                        {
                        // setFormData({...formData, lump_location: e.target.value});
                        toggleButton("pigment2-label", "pigment1-label");
    
                        }
                    }
                    />
                    <label 
                    className="btn btn-secondary" 
                    id="pigment2-label"
                    style={{ 
                        backgroundColor: "rgb(101,66,56)", 
                    }} 
                    htmlFor="pigment2"
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

export default PatchPartOne;