
import "./style.css"
import {setEditor} from './components/editor'

document.querySelector('#app').innerHTML = `
  <div class='setPoint-group'>
    <div class='setPoint'>80</div><button class="setPoint-edit">Edit</button>
    <div class='setPoint-edit-group' style="display: none">
      <input type='number' min="60" max="100" maxlength="3" class='setPoint-editor-input'/>
      <button class='setPoint-confirm'>confirm</button>
      <button class='setPoint-cancel'>cancel</button>
    </div>
  </div>
  <div class='setPoint-group'>
    <div class='setPoint'>70</div><button class="setPoint-edit">Edit</button>
    <div class='setPoint-edit-group' style="display: none">
      <input type='number' min="60" max="100" maxlength="3" class='setPoint-editor-input'/>
      <button class='setPoint-confirm'>confirm</button>
      <button class='setPoint-cancel'>cancel</button>
    </div>
  </div>
   <div class='setPoint-group'>
    <div class='setPoint'>75</div><button class="setPoint-edit">Edit</button>
    <div class='setPoint-edit-group' style="display: none">
      <input type='number' min="60" max="100" maxlength="3" class='setPoint-editor-input'/>
      <button class='setPoint-confirm'>confirm</button>
      <button class='setPoint-cancel'>cancel</button>
    </div>
  </div>
`
document.querySelectorAll('.setPoint-group').forEach((group) => {
  setEditor(group)
})

// setupCounter(document.querySelector('#counter'))
