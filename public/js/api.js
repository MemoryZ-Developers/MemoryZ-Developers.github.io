fetch("https://dkal.dev/api/v1/quote.php")
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        document.getElementById("quote").innerHTML = data.quote;
    })
    .catch(error => {
        console.error('Error:', error);
    });