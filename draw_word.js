// alert(" Is this working?")          // Test to see if linked to html. Uncomment to test

let canvas = document.querySelector('#canvas')
let context = canvas.getContext('2d')                       // Drawing context. What actually does the drawing on canvas

let input = document.querySelector('#image-text')
input.disable = true

let image = new Image()
image.src = 'secondTopic6.jpg'


image.addEventListener('load', function() {
    context.drawImage(image, 0, 0)
    input.disabled = false
})

input.addEventListener('input', function() {
    let text = this.value                                   // this.   is reference to "This thing that created the event"
   
    context.font = '40px Courgette, cursive'
    context.drawImage(image, 0, 0)
    context.fillText(text, 30, 100)
    

})