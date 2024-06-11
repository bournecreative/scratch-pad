export const counter = (el) => {
    let currentCount = parseInt(el.querySelector('.current').textContent)
    const addBtn = el.querySelector('.increment')
    const deletebtn = el.querySelector('.decrement')

    function updateCount(newCount) {
        el.querySelector('.current').textContent = newCount
    }

    function increment(count) {
         updateCount(currentCount+=1)
    }

    function decrement(count){
       updateCount(currentCount-=1)
    }

    addBtn.addEventListener('click', increment)
    deletebtn.addEventListener('click', decrement)
    
}