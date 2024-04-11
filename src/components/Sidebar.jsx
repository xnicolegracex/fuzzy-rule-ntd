const Sidebar = (sidebarRef) => {
    return (
        <div ref={sidebarRef} className="container">
            <div id="s1">sidebar 1</div>
            <div id="s2">sidebar 2</div>
            <div id="s3">sidebar 3</div>
            <div id="s4">sidebar 4</div>
            <div id="s5">sidebar 5</div>
        </div>
    );
}

export default Sidebar;