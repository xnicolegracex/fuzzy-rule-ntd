import '../../App.css';

const LumpPartTwo = ({page, setPage, formData, setFormData}) => {
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
                <p className="h5">Questions Part 2/2</p>
                </div>
                {/* Q6 */}
                <div className="row mt-5 mb-5">
                <div className="col-sm-6 text-start">
                    <p>
                    Are they painful or warm when they are touched?&nbsp;
                    </p>
                </div>
                <div className="col-sm-3 btn-group" role="group" aria-label="Q6 Options">
                    <input 
                    type="radio" 
                    className="btn-check"
                    name="pain"
                    id="pain1"
                    value={Math.floor(Math.random()*5)} 
                    onChange={(e) => 
                        {
                        // setFormData({...formData, lump_amount: e.target.value});
                        toggleButton("pain1-label", "pain2-label");
                        }
                    }
                    />
                    <label 
                    className="btn btn-secondary"
                    id="pain1-label"
                    style={{ 
                        backgroundColor: "rgb(101,66,56)", 
                    }} 
                    htmlFor="pain1"
                    >
                    Yes
                    </label>
                </div>
                <div className="col-sm-3 btn-group" role="group" aria-label="Q6 Options">
                    <input 
                    type="radio" 
                    className="btn-check" 
                    name="pain"
                    id="pain2"
                    value={6 + Math.floor(Math.random()*5)} 
                    onChange={(e) => 
                        {
                        // setFormData({...formData, lump_amount: e.target.value})
                        toggleButton("pain2-label", "pain1-label");
                        }
                    }
                    />
                    <label 
                    className="btn btn-secondary" 
                    id="pain2-label"
                    style={{ 
                        backgroundColor: "rgb(101,66,56)", 
                    }} 
                    htmlFor="pain2"
                    >
                    No
                    </label>
                </div>
                </div>

                {/* Q7 */}
                <div className="row mt-5 mb-5">
                <div className="col-sm-6 text-start">
                    <p>Are they itchy?&nbsp;
                    </p>
                </div>
                <div className="col" role="group" aria-label="Itch Options">
                  <div className="row">
                    <div className="col">
                    <input 
                      type="range" 
                      className="w-100" 
                      min="0" 
                      max="10" 
                      id="itchRange"
                      onChange={(e) => {
                        document.getElementById('rangeval').innerText = document.getElementById('itchRange').value
                        // setFormData({...formData, lump_itch: e.target.value})
                        }
                      }
                    /> 
                    </div>
                    <div className="col-sm-2">
                    <span id="rangeval">10</span>

                    </div>
                    
                  </div>
                  <div className="row">
                    <div className="col">
                      <label htmlFor="Not itchy" className="pull-left">Not itchy</label>
                    </div>
                    <div className="col">
                      <label htmlFor="Slightly itchy" className="pull-left">Slightly itchy</label>
                    </div>
                    <div className="col">
                      <label htmlFor="Very itchy" className="pull-left">Very itchy</label>
                    </div>
                    <div className="col-sm-2">
                    </div>
                  </div>
               

                {/* <input 
                  type="radio" 
                  className="btn-check"
                  name="itch"
                  id="itch1"
                  value={6 + Math.floor(Math.random()*5)} 
                  onChange={(e) => 
                    setFormData({...formData, lump_itch: e.target.value})
                  }
                />
                <label className="btn btn-secondary" htmlFor="option1">Yes</label>
                <input 
                  type="radio" 
                  // className="btn-check" 
                  name="itch"
                  value={Math.floor(Math.random()*5)} 
                  onChange={(e) => 
                    setFormData({...formData, lump_itch: e.target.value})
                  }
                />
                <label className="btn btn-secondary" htmlFor="option2">No</label> */}
              </div>
            </div>

                {/* Q8 */}
                <div className="row mt-5 mb-5">
                <div className="col-sm-6 text-start">
                    <p>Is the surface smooth or bumpy?&nbsp;
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
                    name="surface"
                    id="surface1"
                    value={Math.floor(Math.random()*5)} 
                    onChange={(e) => 
                        {
                        // setFormData({...formData, lump_surface: e.target.value});
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
                    Smooth
                    </label>  
                </div>
                <div className="col-sm-3 btn-group" role="group" aria-label="Q3 Options">
                    <input 
                    type="radio" 
                    className="btn-check" 
                    name="surface"
                    id="surface2"
                    value={6 + Math.floor(Math.random()*5)} 
                    onChange={(e) => 
                        {
                        // setFormData({...formData, lump_surface: e.target.value});
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
                    Bumpy
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

export default LumpPartTwo;