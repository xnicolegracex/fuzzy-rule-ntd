import { useEffect } from "react";

const Post = ({page, setPage, sidebarRef}) => {

    useEffect(() => {
        sidebarRef.current.parentElement.classList.remove("align-items-center")
        // console.log(sidebarRef.current.parentElement)
        sidebarRef.current.innerHTML = `
            <div id="diagnosis-content" class="text-start mt-4 px-3">
                <p class="h4 mb-5">Treatment Plan:</p>
                <p class="h5 pt-2">Investigation:</p>
                <p class="fs-5 mb-5" id="investigation">Slit skin smear or biopsy</p>
                
                <p class="h5">Laboratory tests:</p>
                <p class="fs-5 mb-5" id="laboratory_tests">Microscopy, PCR</p>
                
                <p class="h5">Medical treatment:</p>
                <p class="fs-5 mb-5" id="medicine_treatment">Miltefosine, amphotericin B</p>
                
                <p class="h5">Supportive care:</p>
                <p class="fs-5" id="supportive_care">-</p>
            </div>
        `;
    }, []);
    
    return (
        <div className="container">
          <div style={{ height: "75vh" }}>
            <div className="text-start mb-5 mt-3">
              <p className="h1"><b>Diagnosis: Post Kala Azar Dermal Leishmaniasis<span id="diagnosis_result"></span> </b></p>
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
                    Post kala-azar dermal leishmaniasis is a complication of systemic or visceral infection with Leishmania that is restricted to a few countries. Some 5–20% of patients who have visceral leishmaniasis develop skin lesions as a late complication of the internal infection. Although it is not completely clear whether these skin lesions are caused by the presence of viable organisms, they do contain a variable number of Leishmania parasites and are treated with anti-Leishmania medications. These lesions are usually either pale patches, or small or large lumps. This form of leishmaniasis may occur at any age but develops in around 10–30% of patients some 6–12 months after apparent resolution of visceral (internal) leishmaniasis. 
                            
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
                  <h1 className="modal-title fs-5" id="exampleModalLabel">Pictures of Post Kala Azar Dermal Leishmaniasis<span id="picture-modal-title"></span></h1>
                  {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
                </div>
                <div className="modal-body">
                  <div className="container">
                    <img id="modal-pic" src="/post.png" />
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

export default Post;