import '../../App.css';

const SwollenPartOne = ({page, setPage, formData, setFormData}) => {
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
                <p className="h5">Questions Part 1/2</p>
                </div>
                {/* Q1 */}
                <div className="row mt-5 mb-5">
                <div className="col-sm-6 text-start">
                    <p>
                    Is the swelling unilateral or bilateral?&nbsp;
                    <i 
                        className="bi bi-question-circle ml-3" 
                        data-toggle="tooltip fade" 
                        title="unilateral: affect only one side of the leg/arm. bilateral: affect both sides of leg/arm"
                        onMouseOver={tooltipOnHover}
                        onMouseLeave={tooltipOnLeave}
                    />
                    </p>
                </div>
                <div className="col-sm-3 btn-group" role="group" aria-label="Swelling Lateral Options">
                    <input 
                    type="radio" 
                    className="btn-check"
                    name="lateral"
                    id="lateral1"
                    value={Math.floor(Math.random()*5)} 
                    onChange={(e) => 
                        {
                        // setFormData({...formData, lump_amount: e.target.value});
                        toggleButton("lateral1-label", "lateral2-label");
                        }
                    }
                    />
                    <label 
                    className="btn btn-secondary"
                    id="lateral1-label"
                    style={{ 
                        backgroundColor: "rgb(101,66,56)", 
                    }} 
                    htmlFor="lateral1"
                    >
                    Unilateral
                    </label>
                </div>
                <div className="col-sm-3 btn-group" role="group" aria-label="Swelling Lateral Options">
                    <input 
                    type="radio" 
                    className="btn-check" 
                    name="lateral"
                    id="lateral2"
                    value={6 + Math.floor(Math.random()*5)} 
                    onChange={(e) => 
                        {
                        // setFormData({...formData, lump_amount: e.target.value})
                        toggleButton("lateral2-label", "lateral1-label");
                        }
                    }
                    />
                    <label 
                    className="btn btn-secondary" 
                    id="lateral2-label"
                    style={{ 
                        backgroundColor: "rgb(101,66,56)", 
                    }} 
                    htmlFor="lateral2"
                    >
                    Bilateral
                    </label>
                </div>
                </div>

                {/* Q2 */}
                <div className="row mt-5 mb-5">
                <div className="col-sm-6 text-start">
                    <p>Is the swelling hard or soft?&nbsp;
                    </p>
                </div>
                <div className="col-sm-3 btn-group" role="group" aria-label="Hardness Options">
                    <input 
                    type="radio" 
                    className="btn-check"
                    name="hardness"
                    id="hardness1"
                    value={Math.floor(Math.random()*5)} 
                    onChange={(e) => 
                        {
                        // setFormData({...formData, lump_hardness: e.target.value});
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
                    Hard
                    </label>
                </div>
                <div className="col-sm-3 btn-group" role="group" aria-label="Hardness Options">
                    <input 
                    type="radio" 
                    className="btn-check"
                    name="hardness" 
                    id="hardness2"
                    value={6 + Math.floor(Math.random()*5)} 
                    onChange={(e) => 
                        {
                        // setFormData({...formData, lump_hardness: e.target.value})
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
                    Soft
                    </label>
                </div>
                </div>

                {/* Q3 */}
                <div className="row mt-5 mb-5">
                <div className="col-sm-6 text-start">
                    <p>Does it change after lying down overnight?&nbsp;
                        {/* <i 
                        className="bi bi-question-circle ml-3" 
                        data-toggle="tooltip fade" 
                        title="i.e. any traumatic events or experiences that might have occurred before the development of the ulcer"
                        onMouseOver={tooltipOnHover}
                        onMouseLeave={tooltipOnLeave}
                        /> */}
                    </p>
                </div>
                <div className="col-sm-3 btn-group" role="group" aria-label="Q3 Options">
                    <input 
                    type="radio" 
                    className="btn-check"
                    name="overnight"
                    id="overnight1"
                    value={Math.floor(Math.random()*5)} 
                    onChange={(e) => 
                        {
                        // setFormData({...formData, lump_surface: e.target.value});
                        toggleButton("overnight1-label", "overnight2-label");
                        }
                    }
                    />
                    <label 
                    className="btn btn-secondary" 
                    id="overnight1-label"
                    style={{ 
                        backgroundColor: "rgb(101,66,56)", 
                    }} 
                    htmlFor="overnight1"
                    >
                    Yes
                    </label>  
                </div>
                <div className="col-sm-3 btn-group" role="group" aria-label="Q3 Options">
                    <input 
                    type="radio" 
                    className="btn-check" 
                    name="overnight"
                    id="overnight2"
                    value={6 + Math.floor(Math.random()*5)} 
                    onChange={(e) => 
                        {
                        // setFormData({...formData, lump_surface: e.target.value});
                        toggleButton("overnight2-label", "overnight1-label");
                        }
                    }
                    />
                    <label 
                    className="btn btn-secondary" 
                    id="overnight2-label"
                    style={{ 
                        backgroundColor: "rgb(101,66,56)", 
                    }} 
                    htmlFor="overnight2"
                    >
                    No
                    </label>
                </div>
                </div>

                {/* Q4 */}
                <div className="row mt-5 mb-5">
                <div className="col-sm-6 text-start">
                    <p>Where are the swellings?&nbsp;
                        <i 
                        className="bi bi-question-circle ml-3" 
                        data-toggle="tooltip fade" 
                        title="localised: in one body region. widespread: widely scattered over the body"
                        onMouseOver={tooltipOnHover}
                        onMouseLeave={tooltipOnLeave}
                        />
                    </p>
                </div>
                <div className="col-sm-3 btn-group" role="group" aria-label="Q4 Options">
                    <input 
                    type="radio" 
                    className="btn-check"
                    name="location"
                    id="location1"
                    value={Math.floor(Math.random()*5)} 
                    onChange={(e) => 
                        {
                        // setFormData({...formData, lump_location: e.target.value});
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
                    Localized
                    </label>
                </div>
                <div className="col-sm-3 btn-group" role="group" aria-label="Q4 Options">
                    <input 
                    type="radio" 
                    className="btn-check" 
                    name="location"
                    id="location2"
                    value={6 + Math.floor(Math.random()*5)} 
                    onChange={(e) => 
                        {
                        // setFormData({...formData, lump_location: e.target.value});
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

                {/* Q5 */}
                <div className="row mt-5 mb-5">
                <div className="col-sm-6 text-start">
                    <p>Does the limb feel heavy and difficult to lift?&nbsp;
                    </p>
                </div>
                <div className="col-sm-3 btn-group" role="group" aria-label="Q5 Options">
                    <input 
                    type="radio" 
                    className="btn-check"
                    name="weight"
                    id="weight1"
                    value={Math.floor(Math.random()*5)} 
                    onChange={(e) => 
                        {
                        // setFormData({...formData, lump_location: e.target.value});
                        toggleButton("weight1-label", "weight2-label");
                        } 
                    }
                    />
                    <label 
                    className="btn btn-secondary" 
                    id="weight1-label"
                    style={{ 
                        backgroundColor: "rgb(101,66,56)", 
                    }} 
                    htmlFor="weight1"
                    >
                    Yes
                    </label>
                </div>
                <div className="col-sm-3 btn-group" role="group" aria-label="Q5 Options">
                    <input 
                    type="radio" 
                    className="btn-check" 
                    name="weight"
                    id="weight2"
                    value={6 + Math.floor(Math.random()*5)} 
                    onChange={(e) => 
                        {
                        // setFormData({...formData, lump_location: e.target.value});
                        toggleButton("weight2-label", "weight1-label");
    
                        }
                    }
                    />
                    <label 
                    className="btn btn-secondary" 
                    id="weight2-label"
                    style={{ 
                        backgroundColor: "rgb(101,66,56)", 
                    }} 
                    htmlFor="weight2"
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

export default SwollenPartOne;