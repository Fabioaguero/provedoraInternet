function consultarWpp(x) {

    const sap = ["32998044089", "32991815988", "32999354004", "32998329513", "32998354574", "32998291718", "32991415757"]
    const random = Math.floor(Math.random() * sap.length);
    const number = sap[random];
    const button = document.querySelector(".link"+x)
    console.log(button)
    button.href = `https://api.whatsapp.com/send?phone=+55${number}&text=Olá, gostaria de verificar a disponibilidade na minha área!`
}


function cards(tipo) {
    switch (tipo) {
        case 'I':
            document.getElementById("internet").style.display = "block";
            document.getElementById("internetgloboplay").style.display = "none";
            document.getElementById("internethbo").style.display = "none";
            document.getElementById("internetpremiere").style.display = "none";
            document.getElementById("internettelecine").style.display = "none";

            document.getElementById("tabI").style = "color:#6e2e87; border-bottom: .15rem solid #6e2e87;";
            document.getElementById('tabIG').style = "color:#a88ab4; border-bottom: .15rem solid #a88ab4;";
            document.getElementById('tabIH').style = "color:#a88ab4; border-bottom: .15rem solid #a88ab4;";
            document.getElementById('tabIP').style = "color:#a88ab4; border-bottom: .15rem solid #a88ab4;";
            document.getElementById('tabIT').style = "color:#a88ab4; border-bottom: .15rem solid #a88ab4;";

            break;
        case 'IG':
            document.getElementById("internet").style.display = "none";
            document.getElementById("internetgloboplay").style.display = "block";
            document.getElementById("internethbo").style.display = "none";
            document.getElementById("internetpremiere").style.display = "none";
            document.getElementById("internettelecine").style.display = "none";

            document.getElementById("tabI").style = "color:#a88ab4; border-bottom: .15rem solid #a88ab4;";
            document.getElementById('tabIG').style = "color:#6e2e87; border-bottom: .15rem solid #6e2e87;";
            document.getElementById('tabIH').style = "color:#a88ab4; border-bottom: .15rem solid #a88ab4;";
            document.getElementById('tabIP').style = "color:#a88ab4; border-bottom: .15rem solid #a88ab4;";
            document.getElementById('tabIT').style = "color:#a88ab4; border-bottom: .15rem solid #a88ab4;";


            break;
        case 'IH':
            document.getElementById("internet").style.display = "none";
            document.getElementById("internetgloboplay").style.display = "none";
            document.getElementById("internethbo").style.display = "block";
            document.getElementById("internetpremiere").style.display = "none";
            document.getElementById("internettelecine").style.display = "none";

            document.getElementById("tabI").style = "color:#a88ab4; border-bottom: .15rem solid #a88ab4;";
            document.getElementById('tabIG').style = "color:#a88ab4; border-bottom: .15rem solid #a88ab4;";
            document.getElementById('tabIH').style = "color:#6e2e87; border-bottom: .15rem solid #6e2e87;";
            document.getElementById('tabIP').style = "color:#a88ab4; border-bottom: .15rem solid #a88ab4;";
            document.getElementById('tabIT').style = "color:#a88ab4; border-bottom: .15rem solid #a88ab4;";

            break;
        case 'IP':
            document.getElementById("internet").style.display = "none";
            document.getElementById("internetgloboplay").style.display = "none";
            document.getElementById("internethbo").style.display = "none";
            document.getElementById("internetpremiere").style.display = "block";
            document.getElementById("internettelecine").style.display = "none";

            document.getElementById("tabI").style = "color:#a88ab4; border-bottom: .15rem solid #a88ab4;";
            document.getElementById('tabIG').style = "color:#a88ab4; border-bottom: .15rem solid #a88ab4;";
            document.getElementById('tabIH').style = "color:#a88ab4; border-bottom: .15rem solid #a88ab4;";
            document.getElementById('tabIP').style = "color:#6e2e87; border-bottom: .15rem solid #6e2e87;";
            document.getElementById('tabIT').style = "color:#a88ab4; border-bottom: .15rem solid #a88ab4;";


            break;
        case 'IT':
            document.getElementById("internet").style.display = "none";
            document.getElementById("internetgloboplay").style.display = "none";
            document.getElementById("internethbo").style.display = "none";
            document.getElementById("internetpremiere").style.display = "none";
            document.getElementById("internettelecine").style.display = "block";

            document.getElementById("tabI").style = "color:#a88ab4; border-bottom: .15rem solid #a88ab4;";
            document.getElementById('tabIG').style = "color:#a88ab4; border-bottom: .15rem solid #a88ab4;";
            document.getElementById('tabIH').style = "color:#a88ab4; border-bottom: .15rem solid #a88ab4;";
            document.getElementById('tabIP').style = "color:#a88ab4; border-bottom: .15rem solid #a88ab4;";
            document.getElementById('tabIT').style = "color:#6e2e87; border-bottom: .15rem solid #6e2e87;";

            break;
    }
}
