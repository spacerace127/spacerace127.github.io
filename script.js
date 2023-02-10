function inputVal1(){
    code = document.getElementById("code1").value;
    if (code == "perseverance"){

        document.getElementById("message1").textContent = "..- ... . / - .... . / .--. .- ... ... .-- --- .-. -.. / - --- / ..-. .. -. -.. / .- -. --- - .... . .-. / .--. .- --. . / --- -. / - .... .. ... / .-- . -... ... .. - . .-.-.-";
    }
    else{
        document.body.classList.add('red')
        window.setTimeout(function() {
            document.body.classList.remove('red')
        }, 300)

    }
  }


  function inputVal2(){
    code = document.getElementById("code2").value;
    if (code == "opportunity"){

        //document.getElementById("message2").style.display = "inline";

        window.location.href = 'war.html';

    }
    else{
        document.body.classList.add('red')
        window.setTimeout(function() {
            document.body.classList.remove('red')
        }, 300)

    }
  }
  
  
  function inputVal3(){
    code = document.getElementById("code3").value;
    if (code == "deimos"){

        document.getElementById("code_block1").style.display = "none";
        document.getElementById("code_block2").style.display = "inline";

    }
    else{
        document.body.classList.add('red')
        window.setTimeout(function() {
            document.body.classList.remove('red')
        }, 300)

    }
  }