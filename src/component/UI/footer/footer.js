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
                        width: "144px",
                        height: "144px",
                    }}
                >
                    home
                </button>

                <button
                    style={{
                        width: "144px",
                        height: "144px",
                    }}
                >
                    search
                </button>

                <button
                    style={{
                        width: "233px",
                        height: "233px",
                        borderRadius: "100%",
                    }}
                >
                    profil
                </button>


                <button
                    style={{
                        width: "144px",
                        height: "144px",
                    }}
                >
                    bookMark
                </button>
                
                <button
                    style={{
                        width: "144px",
                        height: "144px",
                    }}
                >
                    Setings
                </button>
            </div>





        </footer>
    )
}