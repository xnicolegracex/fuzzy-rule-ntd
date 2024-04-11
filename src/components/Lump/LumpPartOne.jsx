import '../../App.css';

const LumpPartOne = ({page, setPage, formData, setFormData}) => {
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
                <p className="h1"><b>Lumps</b></p>
                <p className="h5">Questions Part 1/2</p>
                </div>
                {/* Q1 */}
                <div className="row mt-5 mb-5">
                <div className="col-sm-6 text-start">
                    <p>
                    Is it small or large?&nbsp;
                    <i 
                        className="bi bi-question-circle ml-3" 
                        data-toggle="tooltip fade" 
                        title="Small lesions 
                        measure under 0.5 cm in diameter, e.g. the diameter of a pencil."
                        onMouseOver={tooltipOnHover}
                        onMouseLeave={tooltipOnLeave}
                    />
                    </p>
                </div>
                <div className="col-sm-3 btn-group" role="group" aria-label="Q1 Lateral Options">
                    <input 
                    type="radio" 
                    className="btn-check"
                    name="size"
                    id="size1"
                    value={Math.floor(Math.random()*5)} 
                    onChange={(e) => 
                        {
                        // setFormData({...formData, lump_amount: e.target.value});
                        toggleButton("size1-label", "size2-label");
                        }
                    }
                    />
                    <label 
                    className="btn btn-secondary"
                    id="size1-label"
                    style={{ 
                        backgroundColor: "rgb(101,66,56)", 
                    }} 
                    htmlFor="size1"
                    >
                        Small
                    </label>
                </div>
                <div className="col-sm-3 btn-group" role="group" aria-label="Q2 Lateral Options">
                    <input 
                    type="radio" 
                    className="btn-check" 
                    name="size"
                    id="size2"
                    value={6 + Math.floor(Math.random()*5)} 
                    onChange={(e) => 
                        {
                        // setFormData({...formData, lump_amount: e.target.value})
                        toggleButton("size2-label", "size1-label");
                        }
                    }
                    />
                    <label 
                    className="btn btn-secondary" 
                    id="size2-label"
                    style={{ 
                        backgroundColor: "rgb(101,66,56)", 
                    }} 
                    htmlFor="size2"
                    >
                    Large
                    </label>
                </div>
                </div>

                {/* Q2 */}
                <div className="row mt-5 mb-5">
                <div className="col-sm-6 text-start">
                    <p>How many lumps are there?&nbsp;
                        <i 
                        className="bi bi-question-circle ml-3" 
                        data-toggle="tooltip fade" 
                        title="Group them into (i) 1 and up to 3 or (ii) more than 3"
                        onMouseOver={tooltipOnHover}
                        onMouseLeave={tooltipOnLeave}
                    />
                    </p>
                </div>
                <div className="col-sm-3 btn-group" role="group" aria-label="Hardness Options">
                    <input 
                    type="radio" 
                    className="btn-check"
                    name="amount"
                    id="amount1"
                    value={Math.floor(Math.random()*5)} 
                    onChange={(e) => 
                        {
                        // setFormData({...formData, lump_hardness: e.target.value});
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
                        // setFormData({...formData, lump_hardness: e.target.value})
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

                {/* Q3 */}
                <div className="row mt-5 mb-5">
                <div className="col-sm-6 text-start">
                    <p>Where are the lumps?&nbsp;
                        <i 
                        className="bi bi-question-circle ml-3" 
                        data-toggle="tooltip fade" 
                        title="localised: in one body region such as on the arms or legs. widespread: widely scattered over the body"
                        onMouseOver={tooltipOnHover}
                        onMouseLeave={tooltipOnLeave}
                        />
                    </p>
                </div>
                <div className="col-sm-3 btn-group" role="group" aria-label="Q3 Options">
                    <input 
                    type="radio" 
                    className="btn-check"
                    name="location"
                    id="location1"
                    value={Math.floor(Math.random()*5)} 
                    onChange={(e) => 
                        {
                        // setFormData({...formData, lump_surface: e.target.value});
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
                <div className="col-sm-3 btn-group" role="group" aria-label="Q3 Options">
                    <input 
                    type="radio" 
                    className="btn-check" 
                    name="location"
                    id="location2"
                    value={6 + Math.floor(Math.random()*5)} 
                    onChange={(e) => 
                        {
                        // setFormData({...formData, lump_surface: e.target.value});
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

                {/* Q4 */}
                <div className="row mt-5 mb-5">
                <div className="col-sm-6 text-start">
                    <p>Do they feel soft or hard?&nbsp;
                    </p>
                </div>
                <div className="col-sm-3 btn-group" role="group" aria-label="Q4 Options">
                    <input 
                    type="radio" 
                    className="btn-check"
                    name="hardness"
                    id="hardness1"
                    value={Math.floor(Math.random()*5)} 
                    onChange={(e) => 
                        {
                        // setFormData({...formData, lump_location: e.target.value});
                        toggleButton("hardness1-label", "hardness2-label");
                        } 
                    }
                    />
                    <label 
                    className="btn btn-secondary" 
                    id="hardness1-label"
                    style={{ 
                        backgroundColor: "rgb(101,66,56)", 
                    }} 
                    htmlFor="hardness1"
                    >
                    Soft
                    </label>
                </div>
                <div className="col-sm-3 btn-group" role="group" aria-label="Q4 Options">
                    <input 
                    type="radio" 
                    className="btn-check" 
                    name="hardness"
                    id="hardness2"
                    value={6 + Math.floor(Math.random()*5)} 
                    onChange={(e) => 
                        {
                        // setFormData({...formData, lump_hardness: e.target.value});
                        toggleButton("hardness2-label", "hardness1-label");
    
                        }
                    }
                    />
                    <label 
                    className="btn btn-secondary" 
                    id="hardness2-label"
                    style={{ 
                        backgroundColor: "rgb(101,66,56)", 
                    }} 
                    htmlFor="hardness2"
                    >
                    Hard
                    </label>
                </div>
                </div>

                {/* Q5 */}
                <div className="row mt-5 mb-5">
                <div className="col-sm-6 text-start">
                    <p>If soft, do they contain fluid or pus?&nbsp;
                    </p>
                </div>
                <div className="col-sm-3 btn-group" role="group" aria-label="Q5 Options">
                    <input 
                    type="radio" 
                    className="btn-check"
                    name="filling"
                    id="filling1"
                    value={Math.floor(Math.random()*5)} 
                    onChange={(e) => 
                        {
                        // setFormData({...formData, lump_location: e.target.value});
                        toggleButton("filling1-label", "filling2-label");
                        } 
                    }
                    />
                    <label 
                    className="btn btn-secondary" 
                    id="filling1-label"
                    style={{ 
                        backgroundColor: "rgb(101,66,56)", 
                    }} 
                    htmlFor="filling1"
                    >
                    Yes
                    </label>
                </div>
                <div className="col-sm-3 btn-group" role="group" aria-label="Q5 Options">
                    <input 
                    type="radio" 
                    className="btn-check" 
                    name="filling"
                    id="filling2"
                    value={6 + Math.floor(Math.random()*5)} 
                    onChange={(e) => 
                        {
                        // setFormData({...formData, lump_location: e.target.value});
                        toggleButton("filling2-label", "filling1-label");
    
                        }
                    }
                    />
                    <label 
                    className="btn btn-secondary" 
                    id="filling2-label"
                    style={{ 
                        backgroundColor: "rgb(101,66,56)", 
                    }} 
                    htmlFor="filling2"
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

export default LumpPartOne;