// piku
let firstTimearea = false;

if (!firstTimearea) {
    const btnarea = document.querySelector('#area-btn');
    const divArea = document.querySelector('#area');
    const area = divArea.querySelector('.description .circle-skill-container .row');
    let elemntos = [];

    let startColor = '#f4d03f';
    let endColor = '#f4d03f';

    let areasInteres = ['Machine Learning', 'Ciencia de Datos', 'Desarrollo Web'];
    btnarea.addEventListener('click', (event) => {
            let nodos = area.querySelectorAll('div');
            if(nodos.length === 0) {
                areasInteres.forEach((data,idx) => {
                    crearArea(data,idx+1);
                }); 
                elemntos.forEach((data) => {
                    let elemen = document.querySelector(`#${data}`);
                    let circulo = new ProgressBar.Circle(elemen, {
                        color: startColor,
                        trailColor: '#fff6da',
                        trailWidth: 7,
                        duration: 1000,
                        easing: 'easeInOut',
                        strokeWidth: 8,
                        step: function(state, circulo) {
                            circulo.path.setAttribute('stroke', state.color);
                        }
                    });
    
                    setTimeout(function() {
                        circulo.animate(1.0, {
                            from: {
                                color: startColor
                            },
                            to: {
                                color: endColor
                            }
                        });
                    }, 1200);
               });
            }
    });

    const crearArea = (text, idx) => {
        let divhtml =   `<div class="col-xs-4 center-align">
                            <div class="circle-bar" id="linea-container${idx}">
                                <div class="progressbar-text"><h5>${text}</h5></div>
                            </div>
                        </div>`;
        const div = document.createElement('div');
        div.innerHTML = divhtml;
        
        area.append(div);
        elemntos.push(`linea-container${idx}`);
        return div;
    };
    // Fin piku
}