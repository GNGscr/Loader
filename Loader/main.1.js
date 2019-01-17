
// const load = document.querySelector('.loader');
// const squares = document.querySelectorAll('.square');

// const picBox = document.querySelector('.box_image');
// const big_image = document.querySelector('.big-image');

// let colo = [...squares].map(item => item.style.backgroundColor);
// let interval ;


// function init(){
//     interval = setInterval(col, 50);
//     big_image.src = "https://mustseeplaces.eu/wp-content/uploads/2015/07/neuschwanstein-castle-fussen-bavaria-germany.jpg";
// }

// function col(){
//     let haim = colo.shift();
//     colo.push(haim);
//     for(let i = 0; i < squares.length; i++){
//         squares[i].style.backgroundColor = colo[i];
//     }
// }

// function onLoad(){
//     //hider loader
//     load.style.opacity = 0;
//     //stop loader timer
//     clearInterval(interval);
//     //show image
//     big_image.style.opacity = 1;
// }

// window.addEventListener('DOMContentLoaded', init);
// window.addEventListener('load', onLoad );



const { log } = console;
const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);

let gallery = $('.gallery');

// console.log(gallery)
// console.log(loader);
// console.log(thumb);
// console.log(preloader);

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

// console.log(coloras)

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

   /* 
    <div class="loader">
        <img class="thumb"/>
        <div class="preloader"></div>
    </div> 
    */
   for(let url of photos){

       let loader = document.createElement('div');
       loader.className = 'loader';
       gallery.appendChild(loader);

       let preloader = document.createElement('div');
       preloader.className = 'preloader';
       loader.appendChild(preloader);
    //    for(let color of preloader_colors){
    //        loader.appendChild(coloras);
    //    }
 
    let thumb = new Image();
    thumb.className = 'thumb';
    loader.appendChild(thumb);
    thumb.src = url;
    thumb.addEventListener('load', on_image_loaded);
    //    console.log(loader)
    }

    let squer = $$('.square');
    let newSquare = [...squer];
    preloader.map(item => item.create_child(preloader, 'div', 'square'));
    

}
function on_image_loaded(event){
    //show image
    
    //hide preloader
}


function create_child(container, tag, className){
    let element = document.createElement(tag);
    element.class_name = className;
    container.appendChild(element);
    return element;
}
   
    /*
    // loop over the photos urls
    // create the following structure for every url
    // add it to the gallery container
    // each photo url is loaded to the <img> tag
    // each 'preloader' should contain the preloader animation we did in the previous stages 
    
    <div class="loader">
    <img class="thumb"/>
    <div class="preloader"></div>
    </div> 
    */


function col(){
    let haim = coloras.shift();
    coloras.push(haim);
    console.log(coloras)        
    }

let interval ;

function init(){
   // interval = setInterval(col, 20);
    build_gallery();
    // big_image.src = "https://mustseeplaces.eu/wp-content/uploads/2015/07/neuschwanstein-castle-fussen-bavaria-germany.jpg";
}


function onLoad(){
    // //hider loader
    // load.style.opacity = 0;
    // //stop loader timer
    // clearInterval(interval);
    // //show image
    // big_image.style.opacity = 1;
}

window.addEventListener('DOMContentLoaded', init);
window.addEventListener('load', onLoad );




// function build_gallery(){
//     for(let photo of photos){
//         gallery.innerHTML += `
//         <div class="loader">
//         <img class="thumb" src="${photo}"/>
//         <div class="preloader"></div>
//         </div> 
//         `
//     }


//     const preloader = $$('.preloader');
//     for(let i = 0; i < preloader.length; i++){        
        
//         for(let j = 0; j < preloader_colors.length; j++){
//             let div = document.createElement('div');
//             div.className = "square";
//             div.style.backgroundColor = preloader_colors[j];
//             preloader[i].appendChild(div);
//         }
//     }
//     interval = setInterval(update, 50);
// }

// function build_gallery(){
//     for(let photo of photos){
//         gallery.innerHTML +=
//         `
//         <div class="loader">
//             <img class="thumb" src="${photo}"/>
//             <div class="preloader"></div>
//         </div>
//         `
//     }
    
//     const preloader = $$('.preloader');
//     for(let i = 0; i < preloader.length; i++){

//         for(let j = 0; j < preloader_colors.length; j++){
//             let div = document.createElement('div');
//             div.className = "square";
//             div.style.backgroundColor = preloader_colors[j];
//             preloader[i].appendChild(div);
//         }
//     }
//     interval = setInterval(updater, 50);
// }