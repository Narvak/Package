export default function Thirddiv() {
    //pense à faire un fichier .json ou il y a tous les mot ou groupe de mot des tableaux ci dessous.
    const fete = ["Noël ", "Aniversaire ", "Mariage ", "Jour de l'an "];
        console.log(fete)

    const kdo = ["Bracelet ", "PS5 ", "Collier ", "Manga ", "Livre ", "Téléphone ", "Jeux de PS5 "];
        console.log(kdo)

    const plus = ["Tuto ", "Tuto + Model ", "Model "];
        console.log(plus)




    return(
        <div
        style={{
            backgroundColor: "transparent",
            flexDirection: "row",
            width: "100%",
            height: "233px",
        }}
        >
            <div
                style={{
                    backgroundImage: "../../../img/firstImg.png",
                    width: "144px",
                    height: "233px",
                }}
            >
                <div
                    style={{
                        backgroundColor: "white",
                        width: "144px",
                        height: "144px",
                        borderRadius: "10px",
                    }}
                >
                    <p>
                        {fete} <br />
                        {kdo} <br />
                        {plus}
                    </p>
                </div>
            </div>

            <div
                style={{
                    backgroundImage: "../../../img/secondImg.png",
                    width: "144px",
                    height: "233px",
                }}
            >
                <div
                    style={{
                        backgroundColor: "white",
                        width: "144px",
                        height: "144px",
                        borderRadius: "10px",
                    }}
                >
                    <p>
                        {fete} <br />
                        {kdo} <br />
                        {plus}
                    </p>
                </div>
            </div>










        </div>
    )
}