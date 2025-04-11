
const iframe = document.getElementById("iframe");
function LoadOctosplat()
{
iframe.src = "https://sagepoweron.github.io/octosplat/";
}

function LoadImages(images, containerId)
{
    const container = document.getElementById(containerId);
    images.map(src =>
    {
        const figure = document.createElement('figure');

        const img = document.createElement('img');
        img.src = src;

        figure.appendChild(img);
        container.appendChild(figure);
    });

    /*for (let index = 0; index < images.length; index++)
    {
        var img = document.createElement("img");
        img.src = images[index];
        container.appendChild(img);
    }*/
}

//window.onclick = () => alert('Welcome!');

//$("#iframe").contents().find("canvas").css('cursor', 'default');


//let message;
//message = 'Welcome!';
//alert(message); // shows the variable content

//let number = prompt('Pick a number.', 18);
//alert(number);

//let result = multiply(3, 4);
//alert(result);

function showMessage()
{
    alert(message);
}

function multiply(number1, number2)
{
    return number1 * number2;
}