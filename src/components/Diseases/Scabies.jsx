import { useEffect } from "react";

const Scabies = ({page, setPage, sidebarRef}) => {

    useEffect(() => {
        sidebarRef.current.parentElement.classList.remove("align-items-center")
        // console.log(sidebarRef.current.parentElement)
        sidebarRef.current.innerHTML = `
            <div id="diagnosis-content" class="text-start mt-4 px-3">
                <p class="h4 mb-5">Treatment Plan:</p>
                <p class="h5 pt-2">Investigation:</p>
                <p class="fs-5 mb-5" id="investigation">Clinical diagnosis, dermoscopy, videomicroscopy</p>
                
                <p class="h5">Laboratory tests:</p>
                <p class="fs-5 mb-5" id="laboratory_tests">Presence of mites scraping</p>
                
                <p class="h5">Medical treatment:</p>
                <p class="fs-5 mb-5" id="medicine_treatment">Permethrin cream, sulphur (4%), ointment 15%, benzyl benzoate, oral ivermectin</p>
                
                <p class="h5">Supportive care:</p>
                <p class="fs-5" id="supportive_care">Treat family and contacts</p>
            </div>
        `;
    }, []);
    
    return (
        <div className="container">
          <div style={{ height: "75vh" }}>
            <div className="text-start mb-5 mt-3">
              <p className="h1"><b>Diagnosis: Scabies<span id="diagnosis_result"></span> </b></p>
            </div> 
            <div 
              className="row"
              // style={{ height: "65vh", overflow: "scroll" }}
              style={{ height: "65vh" }}
            >
              <div id="diagnosis-content" className="text-start">
                {/* <div className="row">
                  <div className="col-sm-8"> */}
                    <p className="h4">Description:</p>
                    <p className="fs-5" id="description">
                    Scabies is a very itchy infection caused by the human itch mite. It is common and endemic in many communities in resource-poor settings and is associated with household overcrowding. The infection is transmitted by human to human contact and although it can affect all age groups, it is particularly common in infants and children. The skin in certain areas is covered with small lumps, some containing pus as well as small squiggly lines where the mites burrow into the skin. Hands, feet, external genitalia, buttocks and shoulders are all commonly affected and usually other members of the household are infected and itch. Secondary bacterial (streptococcal) infection of scabies may cause kidney inflammation or nephritis, an immunological reaction to the bacteria, in children."
                     </p>
                  {/* </div>
                  <div className="col-sm-4">
                    <p className="h4">Treatment Plan</p>
                    <p className="h5">Investigation:</p>
                    <p className="fs-5" id="investigation"></p>
                    
                    <p className="h5">Laboratory tests:</p>
                    <p className="fs-5" id="laboratory_tests"></p>
                    
                    <p className="h5">Medical treatment:</p>
                    <p className="fs-5" id="medicine_treatment"></p>
                    
                    <p className="h5">Supportive care:</p>
                    <p className="fs-5" id="supportive_care"></p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>

          {/* <!-- Modal --> */}
          <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
              <div style={{ backgroundColor: "#F8F3F2" }} className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">Pictures of Scabies<span id="picture-modal-title"></span></h1>
                  {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
                </div>
                <div className="modal-body">
                  <div className="container">
                    <img id="modal-pic" src="/scabies.png" />
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" style={{ backgroundColor: "#9F6AB0" }} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="position-relative">
            <div ref={arrowRef} className="position-absolute top-50 start-50 translate-middle-x">
              <p className="mb-0">Scroll down for more details</p>
              <i className="fs-2 bi bi-caret-down"></i>
            </div>
          </div> */}
          <div className="row">
            <div className="col-sm-4">
              <button
                type="button"
                className="btn btn-lg mt-5 mb-5 rounded-pill"
                style={{ 
                  height: "60px", 
                  width: "140px",
                  backgroundColor: "#9F6AB0", 
                  color: "white"
                }}
                data-bs-toggle="modal" data-bs-target="#exampleModal"
              >
                <i className="bi bi-camera"></i>
              </button>
            </div>
            <div className="col-sm-4">
              
            </div>
            <div className="col-sm-4">
              <button
                type="button"
                className="btn btn-lg mt-5 mb-5 w-75 rounded-pill"
                style={{ 
                  height: "60px", 
                  backgroundColor: "#9F6AB0", 
                  color: "white"
                }}
                onClick={() => {
                  setPage(18);
                }}>
                Back
              </button>
            </div>
          </div>
          
        </div>
    );
};

export default Scabies;