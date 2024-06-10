export const setEditor = (el) => {
    
    const setPointCurrent = el.querySelector('.setPoint') // number
    const editBtn = el.querySelector('.setPoint-edit') // Edit button

    const editGroup = el.querySelector('.setPoint-edit-group') // group input 2 btns    
    const editInput = el.querySelector('.setPoint-editor-input') // input
    const editConfirm = el.querySelector('.setPoint-confirm') // confirm
    const editCancel = el.querySelector('.setPoint-cancel') // cancel
    console.log(setPointCurrent.textContent)
    const setInitialValue = () => {
        editInput.value = setPointCurrent.textContent
    }

    const hideSetPointEditor = () => {
        console.log('close')
         editGroup.style.display = 'none'
    }

    const toggleSetPointEditor = () => {
        setInitialValue()
        if (editGroup.style.display === 'none') {
                editGroup.style.display = null    
        } else {
            hideSetPointEditor()
        }
    }
    
    const updateSetPoint = () => {
        if (editInput.value) {
            if (editInput.value >= 60 && editInput.value <= 100) {
                setPointCurrent.textContent = editInput.value
            }     
        }
        hideSetPointEditor()
    }

    const cancelAction = () => {
        hideSetPointEditor()
    }

    editBtn.addEventListener('click', toggleSetPointEditor)
    editConfirm.addEventListener('click', updateSetPoint)
    editCancel.addEventListener('click', cancelAction)
}

// what is the range for setPoints