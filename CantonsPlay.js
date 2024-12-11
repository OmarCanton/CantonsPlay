var audioContainer = document.getElementById("audioContainer");
var audio = document.querySelector("audio");
var previous = document.getElementById("previous");
var playPause = document.getElementById("playPause");
var next = document.getElementById("next");
var filename = document.getElementById("filename");
var duration = document.getElementById("duration");
var currentTimeDuration = document.getElementById("currentTimeDuration");
var progressBar = document.getElementById("progressBar");
var seekBar = document.getElementById("seekBar");
var reset = document.getElementById("reset");
var backward15 = document.getElementById("backward15");
var forward15 = document.getElementById("forward15");
var volumeContainer = document.getElementById("volumeContainer");
var volumeMute = document.getElementById("volumeMute");
var path = document.querySelector("#volumeMute path");
var volumeSlider = document.getElementById("volumeSlider");
var library = document.getElementById("library");
var menu = document.getElementById("menu");
var closeLibrary = document.getElementById("closeLibrary");
var addToLibrary = document.getElementById("addToLibrary");
var addMusic = document.getElementById("addMusic");
var loop = document.getElementById("loop");
var playlist = document.querySelector("#menu #playlist");
var clearList = document.getElementById("clearList");
const textInside = document.getElementById("textInside");
var threeDotsMenu = document.getElementById("threeDotsMenu");
var controlsMenu = document.getElementById("controlsMenu");
var shuffle = document.getElementById("shuffle");
var forward = document.getElementById("forward");
var slow = document.getElementById("slow");
var stabilizeSpeed = document.getElementById("stabilizeSpeed");
var playAllbtn = document.getElementById("playAllbtn");
var playAllContainer = document.getElementById("playAllContainer");
var shuffleClearAll = document.querySelector(".shuffleClearAll");
var playernNameIcon = document.getElementById("playernNameIcon");
var closeAbout = document.getElementById("closeAbout");
var about = document.getElementById("about");
window.addEventListener("load", () => {
    audioContainer.style.scale = 1;
});
function loadDuration () {
    let newDuration = Math.floor(audio.duration);
    let dHours = Math.floor(newDuration / 3600);
    let hoursRem = newDuration % 3600;
    let dMinutes = Math.floor(hoursRem / 60);
    let minutesRem = hoursRem % 60;
    let dSeconds = Math.floor(minutesRem);
    if(dHours < 1){
        duration.innerHTML = `${dMinutes}:${dSeconds}`;
        currentTimeDuration.style.right = "45px";
    } else {
        duration.innerHTML = `${dHours}:${dMinutes}:${dSeconds}`;
        currentTimeDuration.style.right = "61px";
    }
}
function playMusic () {
    if (audio.paused) {
        audio.play();
        playPause.innerHTML = `<path d="M200 160C186.8 160 176 170.8 176 184v144C176 341.3 186.8 352 200 352S224 341.3 224 328v-144C224 170.8 213.3 160 200 160zM312 160C298.8 160 288 170.8 288 184v144c0 13.25 10.75 24 24 24s24-10.75 24-24v-144C336 170.8 325.3 160 312 160zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z"/>`;  
    } else {
        audio.pause();
        playPause.innerHTML = `<path d="M188.3 147.1C195.8 142.8 205.1 142.1 212.5 147.5L356.5 235.5C363.6 239.9 368 247.6 368 256C368 264.4 363.6 272.1 356.5 276.5L212.5 364.5C205.1 369 195.8 369.2 188.3 364.9C180.7 360.7 176 352.7 176 344V167.1C176 159.3 180.7 151.3 188.3 147.1V147.1zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"/>`;
        audioContainer.classList.remove("boxShadowAnimateJS");
    }
}
playPause.addEventListener("click", () => {
    playMusic();
    loadDuration();
    audio.volume = volumeSlider.value;
});
audio.addEventListener("ended", () => {
    playPause.innerHTML = `<path d="M188.3 147.1C195.8 142.8 205.1 142.1 212.5 147.5L356.5 235.5C363.6 239.9 368 247.6 368 256C368 264.4 363.6 272.1 356.5 276.5L212.5 364.5C205.1 369 195.8 369.2 188.3 364.9C180.7 360.7 176 352.7 176 344V167.1C176 159.3 180.7 151.3 188.3 147.1V147.1zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"/>`;
    audioContainer.classList.remove("boxShadowAnimateJS");
});
audio.addEventListener("timeupdate", () => {
    seekBar.style.backgroundColor = "lightgrey";
    seekBar.style.width = (audio.currentTime / audio.duration) * 100 + "%";
    let NewCurrentTime = Math.floor(audio.currentTime);
    let currentHours = Math.floor(NewCurrentTime / 3600);
    let currentHoursRem = NewCurrentTime % 3600;
    let currentMinutes = Math.floor(currentHoursRem / 60);
    let currentMinutesRem = currentHoursRem % 60;
    let currentSeconds = Math.floor(currentMinutesRem);
    if(currentHours < 1){
        currentTimeDuration.innerHTML = `${currentMinutes}:${currentSeconds.toString().padStart(2, 0)} /`;
    } else {
        currentTimeDuration.innerHTML = `${currentHours}:${currentMinutes}:${currentSeconds}`;
    }
});
progressBar.addEventListener("click", (event) => {
    let clickPosition = event.clientX - progressBar.getBoundingClientRect().left;
    let seekBarProg= (clickPosition / progressBar.offsetWidth) * audio.duration;
    audio.currentTime = seekBarProg; 
})
reset.addEventListener("click", () => {
    playPause.innerHTML = `<path d="M188.3 147.1C195.8 142.8 205.1 142.1 212.5 147.5L356.5 235.5C363.6 239.9 368 247.6 368 256C368 264.4 363.6 272.1 356.5 276.5L212.5 364.5C205.1 369 195.8 369.2 188.3 364.9C180.7 360.7 176 352.7 176 344V167.1C176 159.3 180.7 151.3 188.3 147.1V147.1zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"/>`;
    audio.pause();
    audio.currentTime = 0;
    audioContainer.classList.remove("boxShadowAnimateJS");
});
backward15.addEventListener("click", () => {
    audio.currentTime -= 15;
})
forward15.addEventListener("click", () => {
    audio.currentTime += 15;
})
volumeMute.addEventListener("mousemove", () => {
    volumeSlider.classList.add("sliderShow");
});
volumeContainer.addEventListener("mouseleave", () => {
    volumeSlider.classList.remove("sliderShow");
});
volumeSlider.addEventListener("input", () => {
    audio.volume = volumeSlider.value;
});
volumeMute.addEventListener("click", () => {
    if (audio.volume != 0 && volumeMute.getAttribute("viewBox") === "0 0 640 512") {
        volumeMute.setAttribute("viewBox", "0 0 576 512");
        path.setAttribute("d", "M301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM425 167l55 55 55-55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-55 55 55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-55-55-55 55c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l55-55-55-55c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z");
        audio.volume = 0;
        volumeSlider.value = 0;
    } else {
        volumeMute.setAttribute("viewBox", "0 0 640 512")
        path.setAttribute("d", "M533.6 32.5C598.5 85.3 640 165.8 640 256s-41.5 170.8-106.4 223.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C557.5 398.2 592 331.2 592 256s-34.5-142.2-88.7-186.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM473.1 107c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C475.3 341.3 496 301.1 496 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3z");
        audio.volume = 0.5;
        volumeSlider.value = 0.5;
    }
});
audio.addEventListener("playing", () => {
    audioContainer.classList.add("boxShadowAnimateJS");
    loadDuration();
});
function librarySlide () {
    menu.style.opacity = 1;
    if(window.matchMedia("(max-width: 375px")){
        menu.style.width = "100%";
    } else {
        menu.style.width = "30vw";
    }
    menu.style.right = 0;
    menu.style.pointerEvents = "all";
    addMusic.classList.remove("showAddMusic");
    addToLibrary.style.transform = "rotateZ(0)";
    addToLibrary.style.fill = "white";
}
library.addEventListener("click", () => {
    librarySlide();
});

closeLibrary.addEventListener("click", () => {
    menu.style.opacity = 0;
    menu.style.width = "10vw";
    menu.style.right = "-10vw";
    menu.style.pointerEvents = "none";
});
addToLibrary.addEventListener("click", () => {
    if(addToLibrary.style.transform != "rotateZ(45deg)"){
        addMusic.classList.add("showAddMusic");
        addToLibrary.style.transform = "rotateZ(45deg)";
        addToLibrary.style.fill = "orange";
    } else {
        addMusic.classList.remove("showAddMusic");
        addToLibrary.style.transform = "rotateZ(0)";
        addToLibrary.style.fill = "white";
    }
});
loop.addEventListener("click", () => {
    if(loop.style.fill === "orange"){
        audio.loop = false;
        loop.style.fill = "white";
    } else {
        audio.loop = true;
        loop.style.fill = "orange";
    }
});
addMusic.addEventListener("click", () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.multiple = true;
    fileInput.click();
    fileInput.addEventListener("input", (event) => {
        const deleteMark = `<svg style="width: 1.2rem; z-index: 100; fill: red; height: 1.2rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg>`;
        const selectedFiles = event.target.files;
        const playlistArray = [];
        const playlistNameArray = [];
        const element1Array = [];
        for (let i = 0; i < selectedFiles.length; i++){
            const SourceElement = document.createElement("source");
            const element1 = document.createElement("div");
            const removeSelected = document.createElement("div");
            const selectedFileName = selectedFiles[i].name;
            playlistArray.push(SourceElement);
            playlistNameArray.push(selectedFileName);
            element1.innerHTML = selectedFileName;
            SourceElement.setAttribute("src", URL.createObjectURL(selectedFiles[i]));
            removeSelected.innerHTML = deleteMark;
            element1Array.push(element1);
            playlist.appendChild(element1);
            playlist.appendChild(removeSelected);
            element1.setAttribute("style", "background-color: transparent; backdrop-filter: blur(10px); transition: all 0.3s; border-bottom: 1px solid grey; display: flex; align-items: center; justify-content: space-between; width: 100%; padding: 15px;");
            element1.onmouseover = () => {
                element1.style.backgroundColor = "rgb(124, 76, 120)";
            };
            element1.onmouseleave = () => {
                element1.style.backgroundColor = "transparent";
            };
            const allDelMarks = removeSelected.querySelectorAll("svg");
            allDelMarks.forEach((delMarks) => {
                delMarks.addEventListener("click", () => {
                    if(playlist.childElementCount === 2){
                        element1.remove()
                        removeSelected.remove();
                        clearList.remove();
                        playAllContainer.remove();
                        playlist.appendChild(textInside);
                    } else {
                        element1.remove();
                        removeSelected.remove();
                    }
                });
            });
        }
        shuffleClearAll.appendChild(playAllContainer);
        shuffleClearAll.appendChild(clearList);
        element1Array.forEach((music, src) => {
            music.addEventListener("click", () => {
                filename.innerHTML = element1Array[src].innerText;
                audio.src = playlistArray[src].src;
                playMusic();
                audio.volume = volumeSlider.value;
                next.addEventListener("click", () => {
                    if(src >= 0){
                        src++;
                        filename.innerHTML = element1Array[src].innerText;
                        audio.src = playlistArray[src].src;
                        playMusic();
                        audio.volume = volumeSlider.value;
                    } 
                })
                previous.addEventListener("click", () => {
                    if(src > 0){
                        src--;
                        filename.innerHTML = element1Array[src].innerText;
                        audio.src = playlistArray[src].src;
                        playMusic();
                        audio.volume = volumeSlider.value;
                    }
                });
            });
        });
        playAllbtn.addEventListener("click", () => {
            let n = 0;
            if(playAllbtn.style.fill != "orange"){
                playAllbtn.style.fill = "orange";
                filename.innerHTML = element1Array[n].innerText;
                audio.src = playlistArray[n].src;
                playMusic();
                audio.volume = volumeSlider.value;
                audio.addEventListener("ended", () => {
                    n++;
                    filename.innerHTML = element1Array[n].innerText;
                    audio.src = playlistArray[n].src;
                    playMusic();
                    audio.volume = volumeSlider.value;
                });
            } else {
                playAllbtn.style.fill = "white";
            }
            next.addEventListener("click", () => {
                n++;
                filename.innerHTML = element1Array[n].innerText;
                audio.src = playlistArray[n].src;
                playMusic();
                audio.volume = volumeSlider.value;
                audio.addEventListener("ended", () => {
                    n++;
                    filename.innerHTML = element1Array[n].innerText;
                    audio.src = playlistArray[n].src;
                    playMusic();
                    audio.volume = volumeSlider.value;
                });
            });
            previous.addEventListener("click", () => {
                n--;
                filename.innerHTML = element1Array[n].innerText;
                audio.src = playlistArray[n].src;
                playMusic();
                audio.volume = volumeSlider.value;
                audio.addEventListener("ended", () => {
                    n++;
                    filename.innerHTML = element1Array[n].innerText;
                    audio.src = playlistArray[n].src;
                    playMusic();
                    audio.volume = volumeSlider.value;
                });
            });
        });
        shuffle.addEventListener("click", () => {
            let m = Math.floor(Math.random() * playlistArray.length);
            if(shuffle.style.fill != "orange"){
                shuffle.style.fill = "orange";
                filename.innerHTML = element1Array[m].innerText;
                audio.src = playlistArray[m].src;
                playMusic();
                audio.volume = volumeSlider.value;
                audio.addEventListener("ended", () => {
                    m++;
                    filename.innerHTML = element1Array[m].innerText;
                    audio.src = playlistArray[m].src;
                    playMusic();
                    audio.volume = volumeSlider.value;
                });
            } else {
                shuffle.style.fill = "white";
            }
            next.addEventListener("click", () => {
                let m = Math.floor(Math.random() * playlistArray.length);
                filename.innerHTML = element1Array[m].innerText;
                audio.src = playlistArray[m].src;
                playMusic();
                audio.volume = volumeSlider.value;
                audio.addEventListener("ended", () => {
                    m++;
                    filename.innerHTML = element1Array[m].innerText;
                    audio.src = playlistArray[m].src;
                    playMusic();
                    audio.volume = volumeSlider.value;
                });
            });
            previous.addEventListener("click", () => {
                let m = Math.floor(Math.random() * playlistArray.length);
                filename.innerHTML = element1Array[m].innerText;
                audio.src = playlistArray[m].src;
                playMusic();
                audio.volume = volumeSlider.value;
                audio.addEventListener("ended", () => {
                    m++;
                    filename.innerHTML = element1Array[m].innerText;
                    audio.src = playlistArray[m].src;
                    playMusic();
                    audio.volume = volumeSlider.value;
                });
            });
        });
        librarySlide();
        clearList.addEventListener("click", () => {
            while(playlist.firstChild){
                playlist.removeChild(playlist.firstChild);
            }
            setTimeout(() => {
                playAllContainer.style.display = "none";
                clearList.style.display = "none";
                playlist.appendChild(textInside);
            }, 200);
        });
        if(playlist.childElementCount === 0){
            playAllContainer.style.display = "none";
            clearList.style.display = "none";
            playlist.appendChild(textInside);
        } else {
            playAllContainer.style.display = "flex";
            textInside.remove();
            clearList.style.display = "flex";
        }
    });
    addMusic.classList.remove("showAddMusic");
    addToLibrary.style.transform = "rotateZ(0)";
    addToLibrary.style.fill = "white";
});
threeDotsMenu.addEventListener("click", () => {
    if(threeDotsMenu.style.fill != "orange"){
        threeDotsMenu.style.fill = "orange";
    } else {
        threeDotsMenu.style.fill = "white";
    }
    controlsMenu.classList.toggle("showControlsMenu");
    loop.classList.toggle("showOtherControls");
    reset.classList.toggle("showOtherControls");
    forward15.classList.toggle("showOtherControls");
    backward15.classList.toggle("showOtherControls");
    volumeMute.classList.toggle("showOtherControls");
});
forward.addEventListener("click", () => {
    audio.playbackRate += 0.1;
});
slow.addEventListener("click", () => {
    audio.playbackRate -= 0.1;
});
stabilizeSpeed.addEventListener("click", () => {
    audio.playbackRate = audio.defaultPlaybackRate;
    stabilizeSpeed.style.fill = "green";
    setTimeout(() => {
        stabilizeSpeed.style.fill = "";
    }, 1000);
});
playernNameIcon.addEventListener("click", () => {
    about.classList.add("aboutDisplay");
    about.classList.remove("aboutClose");
    audioContainer.classList.add("blurAudioPlayer");
});
closeAbout.addEventListener("click", () => {
    about.classList.add("aboutClose");
    audioContainer.classList.remove("blurAudioPlayer");
})
//END!
//27TH DECEMBER, 2023.