const genbtn = document.querySelector('.genbtn');
const backbtn = document.querySelector('.backbtn');
const input = document.querySelector('.input');
const warn = document.querySelector('.warn');
const main = document.querySelector('.main');
const data = document.querySelector('.data');
const qrImage = document.querySelector('.qrImage');
const loader = document.querySelector('.loader');



genbtn.addEventListener('click', () => {
    
    if(input.value === ''){
        // alert('please write something');
        warn.style.display = 'block';
        
        setTimeout(()=>{
            warn.style.display = 'none';
        },1200)
    }else{
        loader.style.display = 'flex';
        main.style.display = 'none';
    
        setTimeout(() => {
            loader.style.display = 'none';
            data.style.display = 'flex';
        }, 1800);
    
    
    
        const qrUrl = `https://quickchart.io/qr?text=${encodeURIComponent(input.value)}`;
    
        fetch(qrUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.blob();
            })
            .then(blob => {
                console.log(blob);
                const imgUrl = URL.createObjectURL(blob);
                qrImage.src = imgUrl;
                
            })
            .catch(error => {
                data.innerHTML = '<h2 style="font-size: 12px;">Sorry Try again</h2>';
            });
    
    }
});

backbtn.addEventListener('click',()=>{
    data.style.display = 'none';
    main.style.display = 'block';
})
