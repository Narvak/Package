export default function Footer() {
    return(
        <footer
            style={{
                backgroundColor: "#8779B7",
                flexDirection: "row",
                width: "100%",
                height: "144px",
            }}
        >

            <div>
                
                <button
                    style={{
                        maxWidth: "144px",
                        minWidth: "55px",
                        maxHeight: "144px",
                        minHeight: "55px",
                    }}
                >
                    home
                </button>

                <button
                    style={{
                        maxWidth: "144px",
                        minWidth: "55px",
                        maxHeight: "144px",
                        minHeight: "55px",
                    }}
                >
                    search
                </button>

                <button
                    style={{
                        maxWidth: "233px",
                        minWidth: "89px",
                        maxHeight: "233px",
                        minHeight: "89px",
                        borderRadius: "100%",
                    }}
                >
                    profil
                </button>


                <button
                    style={{
                        maxWidth: "144px",
                        minWidth: "55px",
                        maxHeight: "144px",
                        minHeight: "55px",
                    }}
                >
                    bookMark
                </button>
                
                <button
                    style={{
                        maxWidth: "144px",
                        minWidth: "55px",
                        maxHeight: "144px",
                        minHeight: "55px",
                    }}
                >
                    Setings
                </button>
            </div>





        </footer>
    )
}