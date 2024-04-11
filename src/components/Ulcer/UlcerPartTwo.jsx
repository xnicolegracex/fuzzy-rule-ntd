import '../../App.css';

const UlcerPartTwo = ({page, setPage, formData, setFormData}) => {
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
              <p className="h5">Questions Part 2/2</p>
            </div>

            {/* Q6 */}
            <div className="row mt-5 mb-5">
              <div className="col-sm-6 text-start">
                  <p>Is there any swelling around the ulcer?&nbsp;
                  </p>
              </div>
              <div className="col-sm-3 btn-group" role="group" aria-label="Q6 Options">
                <input 
                  type="radio" 
                  className="btn-check"
                  name="swelling"
                  id="swelling1"
                  value={Math.floor(Math.random()*5)} 
                  onChange={(e) => 
                    {
                      // setFormData({...formData, lump_location: e.target.value});
                      toggleButton("swelling1-label", "swelling2-label");
                    } 
                  }
                />
                <label 
                  className="btn btn-secondary" 
                  id="swelling1-label"
                  style={{ 
                    backgroundColor: "rgb(101,66,56)", 
                  }} 
                  htmlFor="swelling1"
                >
                  Yes
                </label>
              </div>
              <div className="col-sm-3 btn-group" role="group" aria-label="Q6 Options">
                <input 
                  type="radio" 
                  className="btn-check" 
                  name="swelling"
                  id="swelling2"
                  value={6 + Math.floor(Math.random()*5)} 
                  onChange={(e) => 
                    {
                      // setFormData({...formData, lump_location: e.target.value});
                      toggleButton("swelling2-label", "swelling1-label");
  
                    }
                  }
                />
                <label 
                  className="btn btn-secondary" 
                  id="swelling2-label"
                  style={{ 
                    backgroundColor: "rgb(101,66,56)", 
                  }} 
                  htmlFor="swelling2"
                >
                  No
                </label>
              </div>
            </div>

            {/* Q7 */}
            <div className="row mt-5 mb-5">
              <div className="col-sm-6 text-start">
                  <p>What is the base colour of the ulcer?&nbsp;
                  </p>
              </div>
              <div className="col-sm-3 btn-group" role="group" aria-label="Q7 Options">
                <input 
                  type="radio" 
                  className="btn-check"
                  name="colour"
                  id="colour1"
                  value={Math.floor(Math.random()*5)} 
                  onChange={(e) => 
                    {
                      // setFormData({...formData, lump_location: e.target.value});
                      toggleButton("colour1-label", "colour2-label");
                    } 
                  }
                />
                <label 
                  className="btn btn-secondary" 
                  id="colour1-label"
                  style={{ 
                    backgroundColor: "rgb(101,66,56)", 
                  }} 
                  htmlFor="colour1"
                >
                  Red & clean
                </label>
              </div>
              <div className="col-sm-3 btn-group" role="group" aria-label="Q7 Options">
                <input 
                  type="radio" 
                  className="btn-check" 
                  name="colour"
                  id="colour2"
                  value={6 + Math.floor(Math.random()*5)} 
                  onChange={(e) => 
                    {
                      setFormData({...formData, lump_location: e.target.value});
                      toggleButton("colour2-label", "colour1-label");
  
                    }
                  }
                />
                <label 
                  className="btn btn-secondary" 
                  id="colour2-label"
                  style={{ 
                    backgroundColor: "rgb(101,66,56)", 
                  }} 
                  htmlFor="colour2"
                >
                  Coloured crust
                </label>
              </div>
            </div>

            {/* Q8 */}
            <div className="row mt-5 mb-5">
              <div className="col-sm-6 text-start">
                  <p>Was there a preceding lump at the same site?
                    <i 
                      className="bi bi-question-circle ml-3" 
                      data-toggle="tooltip fade" 
                      title="i.e. within a few days"
                      onMouseOver={tooltipOnHover}
                      onMouseLeave={tooltipOnLeave}
                    />
                  </p>
              </div>
              <div className="col-sm-3 btn-group" role="group" aria-label="Q8 Options">
                <input 
                  type="radio" 
                  className="btn-check"
                  name="preceding"
                  id="preceding1"
                  value={Math.floor(Math.random()*5)} 
                  onChange={(e) => 
                    {
                      // setFormData({...formData, lump_location: e.target.value});
                      toggleButton("preceding1-label", "preceding2-label");
                    } 
                  }
                />
                <label 
                  className="btn btn-secondary" 
                  id="preceding1-label"
                  style={{ 
                    backgroundColor: "rgb(101,66,56)", 
                  }} 
                  htmlFor="preceding1"
                >
                    Yes
                </label>
              </div>
              <div className="col-sm-3 btn-group" role="group" aria-label="Q8 Options">
                <input 
                  type="radio" 
                  className="btn-check" 
                  name="preceding"
                  id="preceding2"
                  value={6 + Math.floor(Math.random()*5)} 
                  onChange={(e) => 
                    {
                      // setFormData({...formData, lump_location: e.target.value});
                      toggleButton("preceding2-label", "preceding1-label");
  
                    }
                  }
                />
                <label 
                  className="btn btn-secondary" 
                  id="preceding2-label"
                  style={{ 
                    backgroundColor: "rgb(101,66,56)", 
                  }} 
                  htmlFor="preceding2"
                >
                  No
                </label>
              </div>
            </div>

            {/* Q9 */}
            <div className="row mt-5 mb-5">
              <div className="col-sm-6 text-start">
                  <p>Are they painful?
                  </p>
              </div>
              <div className="col-sm-3 btn-group" role="group" aria-label="Q9 Options">
                <input 
                  type="radio" 
                  className="btn-check"
                  name="pain"
                  id="pain1"
                  value={Math.floor(Math.random()*5)} 
                  onChange={(e) => 
                    {
                      // setFormData({...formData, lump_location: e.target.value});
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
              <div className="col-sm-3 btn-group" role="group" aria-label="Q9 Options">
                <input 
                  type="radio" 
                  className="btn-check" 
                  name="pain"
                  id="pain2"
                  value={6 + Math.floor(Math.random()*5)} 
                  onChange={(e) => 
                    {
                      // setFormData({...formData, lump_location: e.target.value});
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
            </div>
            
            

            <div 
              className="row"
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

export default UlcerPartTwo;