/*

XML
     - eXtensible Markup Language.
     - XML ma'lumotlarni saqlash va tashish uchun mo'ljallangan.
     - XML ko'pincha Internet orqali ma'lumotlarni tarqatish uchun ishlatiladi.
      
       const commentURI = 'https://jsonplaceholder.typicode.com/comments';

        const xhr = new XMLHttpRequest();
        xhr.onload = () => {
            if (xhr.status === 200) {
                const posts = JSON.parse(xhr.responseText);
                console.log(posts);
            } else {
                console.log('Server response:', xhr.status);
            }
        };
        xhr.onerror = () => {
            console.log('An error occurred, not able to process the request.');
        };
        xhr.open('GET', commentURI, true);
        xhr.send();



      Post request by XML
         form.addEventListener('submit', (e) => {
            e.preventDefault()
            let { username } = e.target
            const apiUrl = 'http://localhost:3030/register';

            const data = JSON.stringify({
                title: 'foo',
                body: 'bar',
                userId: 1
            });
            const xhr = new XMLHttpRequest();
            xhr.onload = () => {
                if (xhr.status === 201) {
                    const post = JSON.parse(xhr.responseText);
                    console.log(post);
                } else {
                    console.log('Server response:', xhr.status);
                }
            };
            xhr.onerror = () => {
                console.log('An error occurred, not able to process the request.');
            };
            xhr.open('POST', apiUrl, true);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send(data)
        })












*/
