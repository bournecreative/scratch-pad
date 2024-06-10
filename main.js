
import "./style.css"
import { setEditor } from './components/editor'
import { promiseCallBack } from "./components/promiseCallBack"

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

promiseCallBack("Yub Yub")
.then((data) => console.log(data))
.catch((data) => console.log(data))

const alternate = async () => {
  try {
    const response = await promiseCallBack("More Yub Yub")
    console.log(response)
  }
  catch (err) {
    console.log(err)
  }
}
alternate()
