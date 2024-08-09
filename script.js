const turnOn = document.getElementById('turnOn')
const turnOff = document.getElementById('turnOff')
const lamp = document.getElementById('lamp')

    function isLampBroken () {
        return lamp.src.indexOf ('lampadaQuebrada') > -1
    }

    function lampOn() {
        if (!isLampBroken ()) {
            lamp.src = './img/lampadaAcessa.jpg'

        }   
    }
    
    function lampOff() {
        if (!isLampBroken ()) {

            lamp.src = './img/lampada2.jpg'
        }
    }

    turnOn.addEventListener('click', lampOn)
    turnOff.addEventListener('click', lampOff)
    lamp.addEventListener('mouseover', lampOn)
    lamp.addEventListener('mouseleave', lampOff)
    
    lamp.addEventListener('dblclick', function() {
        
        lamp.src = './img/lampadaQuebrada2.jpg'
    })


    