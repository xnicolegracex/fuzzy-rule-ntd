const PatchInfo = ({page, setPage}) => {
    return (
        <div className="container">
            <div style={{height: "75vh"}}>
                <div className="text-start mb-5 mt-3">
                    <p className="h1"><b>Patches</b></p>
                    <p className="h5">
                    A patch is a distinctive area of skin that is either raised above the skin surface or is 
different in colour or to feel (texture) compared with the surrounding skin; for example, it may feel rough to the touch. Raised patches vary in height above the skin surface from a few millimetres to one centimetre or more. The ability to recognize changes in skin colour associated with skin lesions largely depends on whether the skin is naturally dark. Darkening or lightening of skin colour is more noticeable in darker skin types.
                    </p>
                </div> 
                <div className="row">
                    <div className="col-sm-6">
                        <img 
                        src="/patches/patch-1.png" 
                        alt="" 
                        style={{ width: "300px", height: "200px" }}
                        />
                    </div>
                    <div className="col-sm-6">
                        <img 
                        src="/patches/patch-2.png" 
                        alt="" 
                        style={{ width: "300px", height: "200px" }}
                        />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-sm-6">
                        <img 
                        src="/patches/patch-3.png" 
                        alt="" 
                        style={{ width: "300px", height: "200px" }}
                        />
                    </div>
                    <div className="col-sm-6">
                        <img 
                        src="/patches/patch-4.png" 
                        alt="" 
                        style={{ width: "300px", height: "200px" }}
                        />
                    </div>
                </div>
                
            </div>
            <div className="row">
                <div className="col-sm-8"></div>
                <div className="col-sm-4">
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

export default PatchInfo;