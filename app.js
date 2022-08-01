console.log("this is the screener")

const data = [{
        name: 'unit number 1',
        lang: 'Python',
        info: 'The unit one is the first among its class it is also reffered as the emobodiment of hope , Piloted by ikari shinji the son of commander shinji',
        img: 'img.jpg'
    },
    {
        name: 'Unit 2',
        lang: 'SQL',
        info: 'The unit two is the perfect upgradation  piloted by Asuka langley a german pilot who is considered the best',
        img: 'im2.jpg'

    },
    {
        name: 'Light Yagami',
        lang: 'Angular',
        info: 'Armed with the power of Ryuk s Death Note, Light Yagami is cold, calculating and self-righteous to the extreme, believing that he alone is able to rid the world of corruption and evil. With precisely-calculated moves, Light strategically manipulates friends and foes alike, no matter who he hurts – or kills – along the way. Above all else, Lights supreme confidence fuels his ongoing obsession with defeating L, his intellectual equal and rival',
        img: 'img3.jpg'
    },

    {
        name: 'Itachi',
        lang: 'java',
        info: 'Itachi is a former Konoha ninja and elder brother of Sasuke, but now he works for Akatsuki. Before leaving Konoha, Itachi was thought of as a genius of his generation and was one of the youngest members of ANBU, but went missing after commiting an atrocious crime. He is proficient in all forms of ninja arts having mastered all of the Uchiha clan techniques. He also possesses the Sharingan and his ability to wield its power far exceeds that of Kakashi.',
        img: 'img4.webp'

    },
    {
        name: 'Alucard',
        lang: 'React',
        info: 'Alucard is a vampire that works for the Hellsings, a noble family that serves the British Crown. He is very powerful, often seems egotistical and arrogant, frequently speaks out and exhibits a violent disposition. However, he is frightfully loyal to Integra Hellsing and obeys nearly every command for various reasons, including his passion for battle.',
        img: 'img5.jpg'
    }
]

function cvIterator(profiles) {
    let nextIndex = 0;
    return {
        next: function() {
            return nextIndex < profiles.length ? { value: profiles[nextIndex++], done: false } : { done: true }
        }
    };
}
const candidates = cvIterator(data);

nextCV();

const next = document.getElementById('next');
next.addEventListener('click', nextCV);

function nextCV() {
    const currentCandidate = candidates.next().value;
    let img = document.getElementById('img');
    if (currentCandidate != undefined) {
        img.innerHTML = `<img src=${currentCandidate.img} alt="" srcset="" id="eva">`;
        profile.innerHTML = `<h4 id="name">${currentCandidate.name}</h4>
        <p id="lang">${currentCandidate.lang}</p>
        <p id="info">
            ${currentCandidate.info}
        </p>`

    } else {
        alert('End ');
        window.location.reload();
    }




}