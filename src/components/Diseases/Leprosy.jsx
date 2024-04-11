import { useEffect } from "react";

const Leprosy = ({page, setPage, sidebarRef}) => {

    useEffect(() => {
        sidebarRef.current.parentElement.classList.remove("align-items-center")
        // console.log(sidebarRef.current.parentElement)
        sidebarRef.current.innerHTML = `
            <div id="diagnosis-content" class="text-start mt-4 px-3">
                <p class="h4 mb-5">Treatment Plan:</p>
                <p class="h5 pt-2">Investigation:</p>
                <p class="fs-5 mb-5" id="investigation">Slit skin smear or skin biopsy</p>
                
                <p class="h5">Laboratory tests:</p>
                <p class="fs-5 mb-5" id="laboratory_tests">Direct microscopy or histology</p>
                
                <p class="h5">Medical treatment:</p>
                <p class="fs-5 mb-5" id="medicine_treatment">Multidrug antibiotic therapy for 6 or 12 months. e.g. rifampicin, dapsone, clofazimine</p>
                
                <p class="h5">Supportive care:</p>
                <p class="fs-5" id="supportive_care">Care of insensitive areas (loss of feeling) plus regular wound inspection appropriate footwear, contact survey</p>
            </div>
        `;
    }, []);
    
    return (
        <div className="container">
          <div style={{ height: "75vh" }}>
            <div className="text-start mb-5 mt-3">
              <p className="h1"><b>Diagnosis: Leprosy<span id="diagnosis_result"></span> </b></p>
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
                    Leprosy is a systemic infection caused by the bacterium Mycobacterium leprae, which targets the skin and nerves. Although much of the damage caused by leprosy results from destruction of nerves, the skin is affected early in the course of the infection. This disease is transmitted directly through close contact over long periods. Leprosy is transmitted via droplets, from the nose and mouth, during close and frequent contacts with untreated cases. 

Infection can occur at any age. The first signs are usually skin patches of variable sizes that are usually dry and whose colour may be slightly paler than the rest of the skin. Another presentation of leprosy takes the form of multiple lumps, also in variable sizes. Leprosy destroys nerves, and it is easy to damage the skin because patients cannot feel hot objects or rubbing shoes, and ulcers form at these sites. If untreated, these ulcers (usually on the hands or on the feet), which are known as neuropathic ulcers, can proceed to destroy other structures in the area including bone. 
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
                  <h1 className="modal-title fs-5" id="exampleModalLabel">Pictures of Leprosy<span id="picture-modal-title"></span></h1>
                  {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
                </div>
                <div className="modal-body">
                  <div className="container">
                    <img id="modal-pic" src="/leprosy.png" />
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

export default Leprosy;