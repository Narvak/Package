export default function Header() {
    let user = "Nans";




    return(
        <header>
            <h1
                style={{
                    backgroundColor: "transparent",
                    fontSize: "34pt",
                }}
            >Bonjour
            </h1>

            <h2 
            style={{
                    fontSize: "55pt",
                }}>
                {user}
            </h2>
        </header>
    )
}