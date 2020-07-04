let form = document.forms.form;
let count = 0;
let source = [];

source.push('<div class="form-inp"><input type="email" name="one" value="email"></div>');
source.push('<div class="form-inp"><input type="text" name="two" value="text"></div>');
source.push('<div class="form-inp"><input type="text" name="three" value="text"></div>');
source.push('<div class="form-inp"><input type="submit" value="Отправить форму" id="submit"></div>');

function CreateForm(params) {
    if (count < 1) {
        count++;
        for (let i = 0; i < source.length; i++) {
            let sourceNow = source[i];
            form.innerHTML += sourceNow;
            
        }
    }
    form.onsubmit = function (event) {
        alert(form.one.value + '\r\n' + form.two.value + '\r\n' + form.three.value);
    }
}