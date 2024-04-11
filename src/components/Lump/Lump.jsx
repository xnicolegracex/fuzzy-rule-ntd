import '../../App.css';

const Lump = ({page, setPage, formData, setFormData}) => {

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
          <div style={{ height: "75vh" }}>
          <div className="text-start mb-5 mt-3">
              <p className="h1"><b>Lump</b></p>
            </div>
            {/* lump amount */}
            <div className="row mt-5 mb-5">
              <div className="col-sm-6 text-start">
                <p>
                  Lump amount&nbsp;
                  <i 
                    className="bi bi-question-circle ml-3" 
                    data-toggle="tooltip fade" 
                    title="The number of lumps on your skin"
                    onMouseOver={tooltipOnHover}
                    onMouseLeave={tooltipOnLeave}
                  />
                </p>
              </div>
              <div className="col-sm-3 btn-group" role="group" aria-label="Amount Options">
                <input 
                  type="radio" 
                  className="btn-check"
                  name="amount"
                  id="amount1"
                  value={Math.floor(Math.random()*5)} 
                  onChange={(e) => 
                    {
                      setFormData({...formData, lump_amount: e.target.value});
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
              <div className="col-sm-3 btn-group" role="group" aria-label="Amount Options">
                <input 
                  type="radio" 
                  className="btn-check" 
                  name="amount"
                  id="amount2"
                  value={6 + Math.floor(Math.random()*5)} 
                  onChange={(e) => 
                    {
                      setFormData({...formData, lump_amount: e.target.value})
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

            {/* lump hardness */}
            <div className="row mt-5 mb-5">
              <div className="col-sm-6 text-start">
                  <p>Lump hardness&nbsp;
                    <i 
                      className="bi bi-question-circle ml-3" 
                      data-toggle="tooltip fade" 
                      title="The number of lumps on your skin"
                      onMouseOver={tooltipOnHover}
                      onMouseLeave={tooltipOnLeave}
                    />
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
                      setFormData({...formData, lump_hardness: e.target.value});
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
                  Solid
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
                      setFormData({...formData, lump_hardness: e.target.value})
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

            {/* lump texture */}
            <div className="row mt-5 mb-5">
              <div className="col-sm-6 text-start">
                  <p>Lump surface&nbsp;
                    <i 
                      className="bi bi-question-circle ml-3" 
                      data-toggle="tooltip fade" 
                      title="The number of lumps on your skin"
                      onMouseOver={tooltipOnHover}
                      onMouseLeave={tooltipOnLeave}
                    />
                  </p>
              </div>
              <div className="col-sm-3 btn-group" role="group" aria-label="Texture Options">
                <input 
                  type="radio" 
                  className="btn-check"
                  name="texture"
                  id="texture1"
                  value={Math.floor(Math.random()*5)} 
                  onChange={(e) => 
                    {
                      setFormData({...formData, lump_surface: e.target.value});
                      toggleButton("texture1-label", "texture2-label");
                    }
                  }
                />
                <label 
                  className="btn btn-secondary" 
                  id="texture1-label"
                  style={{ 
                    backgroundColor: "rgb(101,66,56)", 
                  }} 
                  htmlFor="texture1"
                >
                  Smooth
                </label>  
              </div>
              <div className="col-sm-3 btn-group" role="group" aria-label="Texture Options">
                <input 
                  type="radio" 
                  className="btn-check" 
                  name="texture"
                  id="texture2"
                  value={6 + Math.floor(Math.random()*5)} 
                  onChange={(e) => 
                    {
                      setFormData({...formData, lump_surface: e.target.value});
                      toggleButton("texture2-label", "texture1-label");
                    }
                  }
                />
                <label 
                  className="btn btn-secondary" 
                  id="texture2-label"
                  style={{ 
                    backgroundColor: "rgb(101,66,56)", 
                  }} 
                  htmlFor="texture2"
                >
                  Bumpy
                </label>
              </div>
            </div>

            {/* lump size */}
            <div className="row mt-5 mb-5">
              <div className="col-sm-6 text-start">
                  <p>Lump size&nbsp;
                    <i 
                      className="bi bi-question-circle ml-3" 
                      data-toggle="tooltip fade" 
                      title="The number of lumps on your skin"
                      onMouseOver={tooltipOnHover}
                      onMouseLeave={tooltipOnLeave}
                    />
                  </p>
              </div>
              <div className="col-sm-3 btn-group" role="group" aria-label="Size Options">
                <input 
                  type="radio" 
                  className="btn-check"
                  name="size"
                  id="size1"
                  value={Math.floor(Math.random()*5)} 
                  onChange={(e) => 
                    {
                      setFormData({...formData, lump_location: e.target.value});
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
                  Localized
                </label>
              </div>
              <div className="col-sm-3 btn-group" role="group" aria-label="Size Options">
                <input 
                  type="radio" 
                  className="btn-check" 
                  name="size"
                  id="size2"
                  value={6 + Math.floor(Math.random()*5)} 
                  onChange={(e) => 
                    {
                      setFormData({...formData, lump_location: e.target.value});
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
                  Widespread
                </label>
              </div>
            </div>

            {/* lump itch */}
            <div className="row mt-5 mb-5">
              <div className="col text-start">
                  <p>Is it itchy?&nbsp;
                    <i 
                      className="bi bi-question-circle ml-3" 
                      data-toggle="tooltip fade" 
                      title="The number of lumps on your skin"
                      onMouseOver={tooltipOnHover}
                      onMouseLeave={tooltipOnLeave}
                    />
                  </p>
              </div>
              <div className="col" role="group" aria-label="Itch Options">
                  <div className="row">
                    <div className="col">
                    <input 
                      type="range" 
                      class="w-100" 
                      min="0" 
                      max="10" 
                      id="itchRange"
                      onChange={(e) => {
                        document.getElementById('rangeval').innerText = document.getElementById('itchRange').value
                        setFormData({...formData, lump_itch: e.target.value})
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
                      <label for="Not itchy" class="pull-left">Not itchy</label>
                    </div>
                    <div className="col">
                      <label for="Slightly itchy" class="pull-left">Slightly itchy</label>
                    </div>
                    <div className="col">
                      <label for="Very itchy" class="pull-left">Very itchy</label>
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
            
            
        </div>


    );

};

export default Lump;