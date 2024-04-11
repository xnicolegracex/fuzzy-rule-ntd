import '../../App.css';

const UlcerPartOne = ({page, setPage, formData, setFormData}) => {
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
                <p className="h1"><b>Ulcers</b></p>
                <p className="h5">Questions Part 1/2</p>
                </div>
                {/* Q1 */}
                <div className="row mt-5 mb-5">
                <div className="col-sm-6 text-start">
                    <p>
                    Are the ulcers single or multiple?&nbsp;
                    <i 
                        className="bi bi-question-circle ml-3" 
                        data-toggle="tooltip fade" 
                        title="Group them into (i) 1 and up to 3 or (ii) more than 3"
                        onMouseOver={tooltipOnHover}
                        onMouseLeave={tooltipOnLeave}
                    />
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
                    1-3
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
                    &gt; 3
                    </label>
                </div>
                </div>

                {/* Q2 */}
                <div className="row mt-5 mb-5">
                <div className="col-sm-6 text-start">
                    <p>Where are the ulcers?&nbsp;
                    <i 
                    className="bi bi-question-circle ml-3" 
                    data-toggle="tooltip fade" 
                    title="localised: in one body region such as on the arms or legs. widespread: widely scattered over the body"
                    onMouseOver={tooltipOnHover}
                    onMouseLeave={tooltipOnLeave}
                    />
                    </p>
                </div>
                <div className="col-sm-3 btn-group" role="group" aria-label="Q2 Options">
                    <input 
                    type="radio" 
                    className="btn-check"
                    name="location"
                    id="location1"
                    value={Math.floor(Math.random()*5)} 
                    onChange={(e) => 
                        {
                        // setFormData({...formData, lump_hardness: e.target.value});
                        toggleButton("location1-label", "location2-label");
                        }
                    }
                    />
                    <label 
                    className="btn btn-secondary" 
                    id="location1-label"
                    style={{ 
                        backgroundColor: "rgb(101,66,56)",  
                    }} 
                    htmlFor="location1"
                    >
                    Localised
                    </label>
                </div>
                <div className="col-sm-3 btn-group" role="group" aria-label="Q2 Options">
                    <input 
                    type="radio" 
                    className="btn-check"
                    name="location" 
                    id="location2"
                    value={6 + Math.floor(Math.random()*5)} 
                    onChange={(e) => 
                        {
                        // setFormData({...formData, lump_hardness: e.target.value})
                        toggleButton("location2-label", "location1-label");
                        }
                    }
                    />
                    <label 
                    className="btn btn-secondary" 
                    id="location2-label"
                    style={{ 
                        backgroundColor: "rgb(101,66,56)", 
                    }} 
                    htmlFor="location2"
                    >
                    Widespread
                    </label>
                </div>
                </div>

                {/* Q3 */}
                <div className="row mt-5 mb-5">
                <div className="col-sm-6 text-start">
                    <p>Was there any preceding trauma?&nbsp;
                        <i 
                        className="bi bi-question-circle ml-3" 
                        data-toggle="tooltip fade" 
                        title="i.e. any traumatic events or experiences that might have occurred before the development of the ulcer"
                        onMouseOver={tooltipOnHover}
                        onMouseLeave={tooltipOnLeave}
                        />
                    </p>
                </div>
                <div className="col-sm-3 btn-group" role="group" aria-label="Q3 Options">
                    <input 
                    type="radio" 
                    className="btn-check"
                    name="trauma"
                    id="trauma1"
                    value={Math.floor(Math.random()*5)} 
                    onChange={(e) => 
                        {
                        // setFormData({...formData, lump_surface: e.target.value});
                        toggleButton("trauma1-label", "trauma2-label");
                        }
                    }
                    />
                    <label 
                    className="btn btn-secondary" 
                    id="trauma1-label"
                    style={{ 
                        backgroundColor: "rgb(101,66,56)", 
                    }} 
                    htmlFor="trauma1"
                    >
                    Yes
                    </label>  
                </div>
                <div className="col-sm-3 btn-group" role="group" aria-label="Q3 Options">
                    <input 
                    type="radio" 
                    className="btn-check" 
                    name="trauma"
                    id="trauma2"
                    value={6 + Math.floor(Math.random()*5)} 
                    onChange={(e) => 
                        {
                        // setFormData({...formData, lump_surface: e.target.value});
                        toggleButton("trauma2-label", "trauma1-label");
                        }
                    }
                    />
                    <label 
                    className="btn btn-secondary" 
                    id="trauma2-label"
                    style={{ 
                        backgroundColor: "rgb(101,66,56)", 
                    }} 
                    htmlFor="trauma2"
                    >
                    No
                    </label>
                </div>
                </div>

                {/* Q4 */}
                <div className="row mt-5 mb-5">
                <div className="col-sm-6 text-start">
                    <p>Have they appeared slowly or rapidly?&nbsp;
                        <i 
                        className="bi bi-question-circle ml-3" 
                        data-toggle="tooltip fade" 
                        title="i.e. within a few days"
                        onMouseOver={tooltipOnHover}
                        onMouseLeave={tooltipOnLeave}
                        />
                    </p>
                </div>
                <div className="col-sm-3 btn-group" role="group" aria-label="Q4 Options">
                    <input 
                    type="radio" 
                    className="btn-check"
                    name="speed"
                    id="speed1"
                    value={Math.floor(Math.random()*5)} 
                    onChange={(e) => 
                        {
                        // setFormData({...formData, lump_location: e.target.value});
                        toggleButton("speed1-label", "speed2-label");
                        } 
                    }
                    />
                    <label 
                    className="btn btn-secondary" 
                    id="speed1-label"
                    style={{ 
                        backgroundColor: "rgb(101,66,56)", 
                    }} 
                    htmlFor="speed1"
                    >
                    Slowly
                    </label>
                </div>
                <div className="col-sm-3 btn-group" role="group" aria-label="Q4 Options">
                    <input 
                    type="radio" 
                    className="btn-check" 
                    name="speed"
                    id="speed2"
                    value={6 + Math.floor(Math.random()*5)} 
                    onChange={(e) => 
                        {
                        // setFormData({...formData, lump_location: e.target.value});
                        toggleButton("speed2-label", "speed1-label");
    
                        }
                    }
                    />
                    <label 
                    className="btn btn-secondary" 
                    id="speed2-label"
                    style={{ 
                        backgroundColor: "rgb(101,66,56)", 
                    }} 
                    htmlFor="speed2"
                    >
                    Rapidly
                    </label>
                </div>
                </div>

                {/* Q5 */}
                <div className="row mt-5 mb-5">
                <div className="col-sm-6 text-start">
                    <p>Are the edges undermined?&nbsp;
                        <i 
                        className="bi bi-question-circle ml-3" 
                        data-toggle="tooltip fade" 
                        title="i.e. can you insert a probe under the edge of the ulcer?"
                        onMouseOver={tooltipOnHover}
                        onMouseLeave={tooltipOnLeave}
                        />
                    </p>
                </div>
                <div className="col-sm-3 btn-group" role="group" aria-label="Q5 Options">
                    <input 
                    type="radio" 
                    className="btn-check"
                    name="edge"
                    id="edge1"
                    value={Math.floor(Math.random()*5)} 
                    onChange={(e) => 
                        {
                        // setFormData({...formData, lump_location: e.target.value});
                        toggleButton("edge1-label", "edge2-label");
                        } 
                    }
                    />
                    <label 
                    className="btn btn-secondary" 
                    id="edge1-label"
                    style={{ 
                        backgroundColor: "rgb(101,66,56)", 
                    }} 
                    htmlFor="edge1"
                    >
                    Yes
                    </label>
                </div>
                <div className="col-sm-3 btn-group" role="group" aria-label="Q5 Options">
                    <input 
                    type="radio" 
                    className="btn-check" 
                    name="edge"
                    id="edge2"
                    value={6 + Math.floor(Math.random()*5)} 
                    onChange={(e) => 
                        {
                        // setFormData({...formData, lump_location: e.target.value});
                        toggleButton("edge2-label", "edge1-label");
    
                        }
                    }
                    />
                    <label 
                    className="btn btn-secondary" 
                    id="edge2-label"
                    style={{ 
                        backgroundColor: "rgb(101,66,56)", 
                    }} 
                    htmlFor="edge2"
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

export default UlcerPartOne;