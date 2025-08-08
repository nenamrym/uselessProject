function predict() {
    let name = document.getElementById("nameInput").value;
    
    let identities = [
        "lesbian",
        "straight",
        "gay",
        "bisexual",
        "transgender",
        "asexual",
        
    
    ];
    
    let randomIndex = Math.floor(Math.random() * identities.length);
    let result = identities[randomIndex];
    
    document.getElementById("result").innerText = name + ", you are " + result + "!";
}