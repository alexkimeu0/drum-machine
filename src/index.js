import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';




//const keys = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];

const sounds = [
    {
        key: 'Q',
        sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
    {
        key: 'W',
        sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    },
    {
        key: 'E',
        sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    },
    {
        key: 'A',
        sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    },
    {
        key: 'S',
        sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    },
    {
        key: 'D',
        sound: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    },
    {
        key: 'Z',
        sound: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
    {
        key: 'X',
        sound: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
    {
        key: 'C',
        sound: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    }
]

const App = () => (
    <div id="drum-machine">
        <div id="display">
            <h1>Wanna come & play??</h1>
            {sounds.map((sound, index) => (
                <Box key={index} text={sound.key} audio={sound.sound} />
            ))}
            <h2></h2>
            <footer class="footer">
                &copy;Alex&nbsp;<i class="fas fa-heart">            </i>
            </footer>
        </div>

    </div>
);

class Box extends React.Component{
    constructor(props){
        super(props);
        this.audio = React.createRef();
    }

    componentDidMount() {
        this.audio.current.addEventListener('ended', (e) => {
            const parent = e.target.parentNode;
            parent.classList.remove('active');
        });
    }
    playSound = () => {
        this.audio.current.play();

        const id = this.audio.current.id;

        var string = "";
        if(id === 'Q'){
            string = "What the heck!!";
        }else if(id === 'W'){
            string = "Check this out!";
        }else if(id === 'E'){
            string = "I have a crush on you*_*";
        }else if(id === 'A'){
            string = "Welcome to Happiness!";
        }else if(id === 'S'){
            string = "Enjoy your stay!";
        }else if(id === 'D'){
            string = "Come live with me.";
        }else if(id === 'Z'){
            string = "Take cover!";
        }else if(id === 'X'){
            string = "Do you copy?";
        }else if(id === 'C'){
            string = "Highway to Hell!";
        }

        const parent = this.audio.current.parentNode;
        parent.classList.add('active');

        const display = parent.parentNode;
        display.querySelector('h2').innerText=string;
    }

    render(){
        const {text, audio} = this.props;

        return(
            <div className="drum-pad" onClick={this.playSound} id={`drum-${text}`}>
                {text}
                <audio ref={this.audio} src={audio} className="clip" id={text} />
            </div>
        );
    }
}

document.addEventListener('keydown', (e) =>{

    const id = e.key.toUpperCase();
    const audio = document.getElementById(id);

    var string = "";

    if(id === 'Q'){
        string = "What the heck!!";
    }else if(id === 'W'){
        string = "Check this out!";
    }else if(id === 'E'){
        string = "I have a crush on you*_*";
    }else if(id === 'A'){
        string = "Welcome to Happiness!";
    }else if(id === 'S'){
        string = "Enjoy your stay!";
    }else if(id === 'D'){
        string = "Come live with me.";
    }else if(id === 'Z'){
        string = "Take cover!";
    }else if(id === 'X'){
        string = "Do you copy?";
    }else if(id === 'C'){
        string = "Highway to Hell!";
    }

    if(audio){
        const parent = audio.parentNode;
        parent.classList.add('active');

        const display = parent.parentNode;
        display.querySelector('h2').innerText=string;

        audio.play();
    }

});



ReactDOM.render(<App />, document.getElementById('root'));