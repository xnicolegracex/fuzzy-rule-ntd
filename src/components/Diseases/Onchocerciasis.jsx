import { useEffect } from "react";

const Onchocerciasis = ({page, setPage, sidebarRef}) => {

    useEffect(() => {
        sidebarRef.current.parentElement.classList.remove("align-items-center")
        // console.log(sidebarRef.current.parentElement)
        sidebarRef.current.innerHTML = `
            <div id="diagnosis-content" class="text-start mt-4 px-3">
                <p class="h4 mb-5">Treatment Plan:</p>
                <p class="h5 pt-2">Investigation:</p>
                <p class="fs-5 mb-5" id="investigation">Skin snip biopsy</p>
                
                <p class="h5">Laboratory tests:</p>
                <p class="fs-5 mb-5" id="laboratory_tests">Microscopy, PCR</p>
                
                <p class="h5">Medical treatment:</p>
                <p class="fs-5 mb-5" id="medicine_treatment">Oral ivermectin, doxycycline in areas with Loiasis unless known to be low risk for adverse events</p>
                
                <p class="h5">Supportive care:</p>
                <p class="fs-5" id="supportive_care">Emollients</p>
            </div>
        `;
    }, []);
    
    return (
        <div className="container">
          <div style={{ height: "75vh" }}>
            <div className="text-start mb-5 mt-3">
              <p className="h1"><b>Diagnosis: Onchocerciasis<span id="diagnosis_result"></span> </b></p>
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
                    It is a systemic filarial infection that affects the skin and the eye. Infection may lead to blindness or debilitating skin disease. The filarial worm is transmitted by black flies that breed near fast running streams and rivers.  People are most likely to complain of troublesome itch. Symptomatic skin signs are produced by the inflammatory response to dying microfilaria (an early larval form of the parasite). Similarly, inflammation near the pupil of the eye, corneal scarring and retinal damage result from the inflammatory response to microfilariae. Many patients with onchocerciasis do not have marked skin symptoms, although as the disease progresses the skin becomes wrinkly and skin folds can enlarge and sag, for example in the groin (hanging groin), and visible depigmentation may occur (leopard skin). However, in many endemic areas, it is accompanied by small itchy lumps on the skin, often around the shoulders or waist and thighs; constant scratching is common. Sometimes, small itchy lumps appear more densely on one limb than the other and the skin of the affected limb becomes rough, chronically itchy and with thickened patches that are darker in colour than the rest of the skin; these patches are intensely itchy. Onchocerciasis can occur at all ages, although most cases are recognized in older children or adults. 
                         
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
                  <h1 className="modal-title fs-5" id="exampleModalLabel">Pictures of Onchocerciasis<span id="picture-modal-title"></span></h1>
                  {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
                </div>
                <div className="modal-body">
                  <div className="container">
                    <img id="modal-pic" src="/onchocerciasis.png" />
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

export default Onchocerciasis;