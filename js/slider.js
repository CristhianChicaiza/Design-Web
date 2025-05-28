(function(){
    const sliders = [...document.querySelectorAll('.category_body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value;
    
    buttonNext.addEventListener('click', () => {
        changePosition(1);
    });
    buttonBefore.addEventListener('click', () => {
        changePosition(-1);
    });

    const changePosition =(add)=>{
        console.log(add);
        const currentCategory = document.querySelector('.category_body--show').dataset.id;
        console.log(currentCategory);
        value = Number(currentCategory) + add;

        sliders[currentCategory-1].classList.remove('category_body--show');
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length : 1;
        }
        sliders[value-1].classList.add('category_body--show');
    }

})();