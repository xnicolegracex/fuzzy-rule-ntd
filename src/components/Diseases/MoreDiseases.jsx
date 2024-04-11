import { useEffect } from "react";

const MoreDiseases = ({page, setPage, sidebarRef}) => {
    useEffect(() => {
        sidebarRef.current.parentElement.classList.remove("align-items-center");
        // console.log(sidebarRef.current.parentElement)
        sidebarRef.current.innerHTML = `
            <div id="diagnosis-content" class="text-start mt-4 px-3">
                <p class="h4 mb-5">Trivia:</p>
                <p class="fs-5 mb-5" id="investigation">Neglected Tropical Diseases (NTDs) are a group of diverse infectious diseases that primarily affect populations in tropical and subtropical regions of the world. These diseases are characterized by their prevalence among marginalized and socioeconomically disadvantaged communities, often lacking access to adequate healthcare, clean water, and sanitation.</p>
            </div>
        `;
    }, []);
    
    return (
        <div className="container">
          <div style={{ height: "75vh" }}>
            <div className="text-start mb-5 mt-3">
              <p className="h1"><b>More diseases: <span id="diagnosis_result"></span> </b></p>
            </div> 
            <div 
              className="row"
              // style={{ height: "65vh", overflow: "scroll" }}
              style={{ height: "65vh", overflow: "scroll" }}
            >
              <div id="diagnosis-content" className="text-start">
                <div className="row">
                    <div className="col">
                        <div class="card" style={{ height: "40vh" }}>
                            <img src="/lumps/lump-1.png" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Buruli Ulcer</h5>
                                <button
                                    type="button"
                                    className="btn mt-3 rounded-pill"
                                    style={{ 
                                        backgroundColor: "#9F6AB0", 
                                        color: "white"
                                    }}
                                    onClick={() => {
                                        setPage(page + 1);
                                    }}>
                                    More info
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div class="card" style={{ height: "40vh" }}>
                            <img src="/lumps/lump-2.png" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Cutaneous Leishmaniasis</h5>
                                <button
                                    type="button"
                                    className="btn mt-3 rounded-pill"
                                    style={{ 
                                        backgroundColor: "#9F6AB0", 
                                        color: "white"
                                    }}
                                    onClick={() => {
                                        setPage(page + 2);
                                    }}>
                                    More info
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div class="card" style={{ height: "40vh" }}>
                            <img src="/oncho-menu.png" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Onchocerciasis</h5>
                                <button
                                    type="button"
                                    className="btn mt-3 rounded-pill"
                                    style={{ 
                                        backgroundColor: "#9F6AB0", 
                                        color: "white"
                                    }}
                                    onClick={() => {
                                        setPage(page + 3);
                                    }}>
                                    More info
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 2nd row */}
                <div className="row mt-3">
                    <div className="col">
                        <div class="card" style={{ height: "40vh" }}>
                            <img src="/post-menu.png" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Post Kala Azar Dermal Leishmaniasis</h5>
                                <button
                                    type="button"
                                    className="btn mt-3 rounded-pill"
                                    style={{ 
                                        backgroundColor: "#9F6AB0", 
                                        color: "white"
                                    }}
                                    onClick={() => {
                                        setPage(page + 4);
                                    }}>
                                    More info
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div class="card" style={{ height: "40vh" }}>
                            <img src="/leprosy-menu.png" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Leprosy</h5>
                                <button
                                    type="button"
                                    className="btn mt-3 rounded-pill"
                                    style={{ 
                                        backgroundColor: "#9F6AB0", 
                                        color: "white"
                                    }}
                                    onClick={() => {
                                        setPage(23);
                                    }}>
                                    More info
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div class="card" style={{ height: "40vh" }}>
                            <img src="/lf-menu.png" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Lymphatic filiriasis</h5>
                                <button
                                    type="button"
                                    className="btn mt-3 rounded-pill"
                                    style={{ 
                                        backgroundColor: "#9F6AB0", 
                                        color: "white"
                                    }}
                                    onClick={() => {
                                        setPage(24);
                                    }}>
                                    More info
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 3rd row */}
                <div className="row mt-3">
                    <div className="col">
                        <div class="card" style={{ height: "40vh" }}>
                            <img src="/mycetoma-menu.png" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Mycetoma</h5>
                                <button
                                    type="button"
                                    className="btn mt-3 rounded-pill"
                                    style={{ 
                                        backgroundColor: "#9F6AB0", 
                                        color: "white"
                                    }}
                                    onClick={() => {
                                        setPage(25);
                                    }}>
                                    More info
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div class="card" style={{ height: "40vh" }}>
                            <img src="/scabies-menu.png" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Scabies</h5>
                                <button
                                    type="button"
                                    className="btn mt-3 rounded-pill"
                                    style={{ 
                                        backgroundColor: "#9F6AB0", 
                                        color: "white"
                                    }}
                                    onClick={() => {
                                        setPage(26);
                                    }}>
                                    More info
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div class="card" style={{ height: "40vh" }}>
                            <img src="/yaws-menu.png" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Yaws</h5>
                                <button
                                    type="button"
                                    className="btn mt-3 rounded-pill"
                                    style={{ 
                                        backgroundColor: "#9F6AB0", 
                                        color: "white"
                                    }}
                                    onClick={() => {
                                        setPage(27);
                                    }}>
                                    More info
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>

         
          <div className="row">
            <div className="col-sm-4">
              
            </div>
            <div className="col-sm-4">
              
            </div>
            <div className="col-sm-4">
              <button
                type="button"
                className="btn btn-lg mt-5 mb-5 rounded-pill"
                style={{ 
                  height: "60px", 
                  width: "200px",
                  backgroundColor: "#9F6AB0", 
                  color: "white"
                }}
                onClick={() => {
                  setPage(page - 1);
                }}>
                Back to diagnosis
              </button>
            </div>
          </div>
          
        </div>
    );
};

export default MoreDiseases;