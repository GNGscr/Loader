const { log } = console;
const $ = (s,p = document) => p.querySelector(s);
const $$ = (s,p = document) => p.querySelectorAll(s);

let gallery = $('.gallery');

let interval;

const preloader_colors = [
    'rgb(231, 216, 75)',
    'rgb(214, 28, 89)',
    'rgb(54, 7, 69)',
    'rgb(27, 135, 152)',
    'rgb(239, 234, 197)',
    'rgb(54, 7, 69)',
    'rgb(239, 234, 197)',
    'rgb(231, 216, 75)',
    'rgb(214, 28, 89)'
]


// 'http://s1.1zoom.me/big0/576/330414-svetik.jpg',
// 'http://photoblog.flanisoft.at/images/fullsize_20081102204850_lancaster%20gate%20hdr.jpg'

const photos = [
    'https://places2explore.files.wordpress.com/2011/03/tower-bridge-hdr-01-texture1.jpg',
    'https://gregmccarthy.files.wordpress.com/2012/12/london2.jpg',
    'http://cdnfiles.hdrcreme.com/19505/original/London-Bridge-2.jpg?1426845783',
    'https://i1.wp.com/www.brinzan.com/wp-content/uploads/2013/02/london-2013-hdr-london-eye-2.jpg',
    'http://cdnfiles.hdrcreme.com/52827/original/city-hall-at-dawn-london-england.jpg',
    'http://cdnfiles.hdrcreme.com/16834/medium/london-phone-box-hdr-high-holborn-soler.jpg'
]


function build_gallery(){
    for(let photo of photos){
        gallery.innerHTML +=
        `
        <div class="loader">
            <img class="thumb" 
                 src="${photo}"
                 onload="on_img_loaded(event)"/>
            <div class="preloader">
                ${
                    preloader_colors.map(color=> `<div class="square" 
                                                       style="background-color:${color}">
                                                  </div>`).join('')
                }
            </div>
        </div>
        `        
    }
    
    interval = setInterval(updater, 50);
    
    
}
function updater(){
    const preloaders = $$('.preloader');

    for (const preloader of preloaders) {
        
        const squares = $$('.square',preloader);
        let squares_colors = [...squares].map(item => item.style.backgroundColor);
        let first_to_last = squares_colors.shift();
        squares_colors.push(first_to_last);
        for(let i = 0; i < squares.length; i++){
            squares[i].style.backgroundColor = squares_colors[i];
        }
    }
}

function on_img_loaded(event){
    const img = event.target;
    const preloader = img.nextElementSibling;
    
    //show image
    img.style.opacity = 1;
    //hide preloader
    preloader.style.opacity = 0;
    
    let counter = 0;
    const images = $$('.thumb');
    for (const image of images) {
        if(image.style.opacity == 1){
            counter++;
        }
    }
    console.log('counter: ',counter);
    if(counter == images.length){
        clearInterval(interval); 
        console.log('stop dialer!!');
    }
}



window.addEventListener('DOMContentLoaded', build_gallery);
    // window.addEventListener('load', stop );
    
    
    
    
    // const preloader = $$('.preloader');
    // for(let i = 0; i < preloader.length; i++){
        
        // for(let j = 0; j < preloader_colors.length; j++){
            //     let div = document.createElement('div');
            //     div.className = 'square';
            //     div.style.backgroundColor = preloader_colors[j];
            //     preloader[i].appendChild(div);
            // }
            // }




            
            // const loaders = $$('.loader');
            
            // loaders.forEach(function(loader){
                //     const img = $('.thumb',loader);
                //     const img = loader.querySelector('.thumb');
                //     const preloader = loader.querySelector('.preloader');
                //     img.style.opacity = 1;
                //     preloader.style.opacity = 0;
                // })



                // class image_loader{
                //     constructor(first_name, last_name){
                //         this.container = container;
                //         this.img_url = img_url;
                //         this._render();
                //         this.root_node;
                //     }


                // }

                // class preloader{
                //     constructor()
                // }