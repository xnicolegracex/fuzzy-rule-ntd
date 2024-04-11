import Diagnosis from './components/Diagnosis';
import logo from './logo.svg';
import Lump from './components/Lump/Lump'
import LumpInfo from './components/Lump/LumpInfo'
import LumpQuestion from './components/Lump/LumpQuestion'
import { useState, useRef, useEffect } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Start from './components/Start';
import SwollenLFBInfo from './components/SwollenLFB/SwollenLFBInfo';
import SwollenLFBQuestion from './components/SwollenLFB/SwollenLFBQuestion';
import UlcerInfo from './components/Ulcer/UlcerInfo';
import UlcerQuestion from './components/Ulcer/UlcerQuestion';
import UlcerPartOne from './components/Ulcer/UlcerPartOne';
import UlcerPartTwo from './components/Ulcer/UlcerPartTwo';
import SwollenPartOne from './components/SwollenLFB/SwollenPartOne';
import SwollenPartTwo from './components/SwollenLFB/SwollenPartTwo';
import PatchPartOne from './components/Patch/PatchPartOne';
import PatchPartTwo from './components/Patch/PatchPartTwo';
import LumpPartOne from './components/Lump/LumpPartOne';
import LumpPartTwo from './components/Lump/LumpPartTwo';
import PatchInfo from './components/Patch/PatchInfo';
import PatchQuestion from './components/Patch/PatchQuestion';
import Buruli from './components/Diseases/Buruli';
import MoreDiseases from './components/Diseases/MoreDiseases';
import Cutaneous from './components/Diseases/Cutaneous';
import Onchocerciasis from './components/Diseases/Onchocerciasis';
import Post from './components/Diseases/Post';
import Leprosy from './components/Diseases/Leprosy';
import Lymphatic from './components/Diseases/Lymphatic';
import Mycetoma from './components/Diseases/Mycetoma';
import Scabies from './components/Diseases/Scabies';
import Yaws from './components/Diseases/Yaws';

function App() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    lump_amount: "",
    lump_hardness: "",
    lump_location: "",
    lump_surface: "",
    lump_itch: ""
  });

  const sidebarRef = useRef();

  useEffect(() => {
    
    function toggleSidebar(index) {
      if (index === -1) {
        sidebarRef.current.parentElement.classList.add("align-items-center");
        for (var i = 0; i < 5; i++) {
          sidebarRef.current.children[i].style.display = "block";
        }
        sidebarRef.current.children[5].style.display = "none";
        let lastSidebarDiv = sidebarRef.current.children[3];
        // console.log(sidebarRef.current.children[5])
        lastSidebarDiv.children[0].style.backgroundColor = "transparent";
        lastSidebarDiv.children[0].classList.remove("shadow-sm", "rounded-pill");
      } else {
        for (var i = 0; i < 5; i++) {
          let sidebarDiv = sidebarRef.current.children[i];
          if (i === index) {
            sidebarDiv.children[0].style.backgroundColor = "rgb(235, 84, 68)";
            sidebarDiv.children[0].classList.add("shadow-sm", "rounded-pill");
          } else {
            sidebarDiv.children[0].style.backgroundColor = "transparent";
            sidebarDiv.children[0].classList.remove("shadow-sm", "rounded-pill");
          }
        }
      }
    }
    // console.log(sidebarRef.current.children[4].children[0])
    if (page === 0) toggleSidebar(-1)
    else if (page > 0 && page <= 4) toggleSidebar(0)
    else if (page >= 5 && page <= 8) toggleSidebar(1)
    else if (page >=9 && page <= 12) toggleSidebar(2)
    else if (page >=13 && page <= 16) toggleSidebar(3)
    // else if (page === 17) toggleSidebar(4)
  }, [page]);
  const componentList = [
    <Start
      page={page}
      setPage={setPage}
    />,
    <LumpInfo
      page={page}
      setPage={setPage}
    />,
    <LumpQuestion
      page={page}
      setPage={setPage}
    />,
    // <Lump
    //   formData={formData}
    //   setFormData={setFormData}
    //   page={page}
    //   setPage={setPage}
    // />,
    <LumpPartOne
      page={page}
      setPage={setPage}
      formData={formData}
      setFormData={setFormData}
    />,
    <LumpPartTwo //5
      page={page}
      setPage={setPage}
      formData={formData}
      setFormData={setFormData}
    />,
    <UlcerInfo
      page={page}
      setPage={setPage}
    />,
    <UlcerQuestion
      page={page}
      setPage={setPage}
    />,
    <UlcerPartOne
      page={page}
      setPage={setPage}
      formData={formData}
      setFormData={setFormData}
    />,
    <UlcerPartTwo
      page={page}
      setPage={setPage}
      formData={formData}
      setFormData={setFormData}
    />,
    <SwollenLFBInfo //10
      page={page}
      setPage={setPage}
    />,
    <SwollenLFBQuestion
      page={page}
      setPage={setPage}
    />,
    <SwollenPartOne
      page={page}
      setPage={setPage}
      formData={formData}
      setFormData={setFormData}
    />,
    <SwollenPartTwo
      page={page}
      setPage={setPage}
      formData={formData}
      setFormData={setFormData}
    />,
    <PatchInfo
      page={page}
      setPage={setPage}
    />,
    <PatchQuestion //15
      page={page}
      setPage={setPage}
    />,
    <PatchPartOne
      page={page}
      setPage={setPage}
      formData={formData}
      setFormData={setFormData}
    />,
    <PatchPartTwo
      page={page}
      setPage={setPage}
      formData={formData}
      setFormData={setFormData}
    />,
    <Diagnosis //18
      page={page}
      setPage={setPage}
      formData={formData}
      sidebarRef={sidebarRef}
    />,
    <MoreDiseases
      page={page}
      setPage={setPage}
      sidebarRef={sidebarRef}
    />,
    <Buruli //20
      page={page}
      setPage={setPage}
      sidebarRef={sidebarRef}
    />,
    <Cutaneous
      page={page}
      setPage={setPage}
      sidebarRef={sidebarRef}
    />,
    <Onchocerciasis
      page={page}
      setPage={setPage}
      sidebarRef={sidebarRef}
    />,
    <Post
      page={page}
      setPage={setPage}
      sidebarRef={sidebarRef}
    />,
    <Leprosy
      page={page}
      setPage={setPage}
      sidebarRef={sidebarRef}
    />,
    <Lymphatic //25
      page={page}
      setPage={setPage}
      sidebarRef={sidebarRef}
    />,
    <Mycetoma
      page={page}
      setPage={setPage}
      sidebarRef={sidebarRef}
    />,
    <Scabies
      page={page}
      setPage={setPage}
      sidebarRef={sidebarRef}
    />,
    <Yaws //28
      page={page}
      setPage={setPage}
      sidebarRef={sidebarRef}
    />,

  ];

  return (
    <div className="App">
      {/* <div className="container"> */}
        <div className="row">
          <div 
            className="col-sm-9"
          >
            {componentList[page]}
          </div>
          <div 
            className="col-sm-3 d-flex align-items-center justify-content-center"
            style={{ backgroundColor: "rgb(37,54,59)", color: "white", height: "100vh" }}
          >
            <div ref={sidebarRef} style={{ overflow: "scroll" }}>
              <div className="p-3">
                <p className="p-3">Lump</p>
              </div>
              
              <div className="p-3">
                <p className="p-3">Ulcers</p>
              </div>

              <div className="p-3">
                <p className="p-3">Swollen limbs, face, body</p>
              </div>

              <div className="p-3">
                <p className="p-3">Patches</p>
              </div>

              <div className="p-3">
                <p id="s6" className="p-3">Diagnosis result</p>
              </div>
              
              <div id="diagnosis-content" class="text-start mt-4 px-3" style={{ display: "none" }}>
                <p class="h4 mb-5">Treatment Plan:</p>
                <p class="h5 pt-2">Investigation:</p>
                <p class="fs-5 mb-5" id="investigation"></p>
                
                <p class="h5">Laboratory tests:</p>
                <p class="fs-5 mb-5" id="laboratory_tests"></p>
                
                <p class="h5">Medical treatment:</p>
                <p class="fs-5 mb-5" id="medicine_treatment"></p>
                
                <p class="h5">Supportive care:</p>
                <p class="fs-5 mb-5" id="supportive_care"></p>
              </div>
              {/* <div className="p-3">
                <p id="s7" className="p-3">More diseases</p>
              </div> */}
                
            </div>
              
            
            
          </div>
        </div>
      {/* </div> */}
    </div>
  );
}

export default App;
