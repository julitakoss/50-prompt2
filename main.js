function dalejciezko() {
    let liczba = prompt("Wpisz pierwszą liczbę ");
    let liczba2 = prompt("Wpisz drugą liczbę ");
    if (liczba != null && liczba2 !=null ) {
        document.getElementById('p_1').innerHTML =
        "Liczba 1 to " + liczba ; 
        document.getElementById('p_2').innerHTML =
        "Liczba 2 to " + liczba2 ;       
    }
}