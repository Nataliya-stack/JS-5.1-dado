function dadoTire() {
            const dadoImage = document.getElementById("dado");
            const btn = document.getElementById("btn");

            btn.disabled = true;

            let counter = 0;
            const maxSpins = 10; 

            const interval = setInterval(() => {
            let tempRandom = Math.floor(Math.random() * 6) + 1;
            dadoImage.src = "img/dado" + tempRandom + ".png";
        
            counter++;
        
            if (counter >= maxSpins) {
            clearInterval(interval);
            
            let finalResult = Math.floor(Math.random() * 6) + 1;
            dadoImage.src = "img/dado" + finalResult + ".png";
            
            btn.disabled = false; 
            console.log("Resultado final: " + finalResult);
        }
      }, 100); 
}
