import React, {useState} from 'react'
import './style.css'

function Meme() {
    
    const [meme, setMeme] = React.useState(
        {
            topText: "",
            bottomText: "",
            randomImage: ""
        }
    )

    const [memeImage, setMemeImage] = React.useState([])
    // console.log(memeImage)

    React.useEffect(() => {
        async function getMeme() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setMemeImage(data.data.memes)
        }
        getMeme()
    }, [])

    function getMemeImage() {
        const random = Math.floor(Math.random() * memeImage.length)
        const url = memeImage[random].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }
    
    function handleCheck(event){
        const {name, value} = event.target
        setMeme(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    return (
        <main>
            <div className='meme-form'>
                <input 
                    type="text" 
                    className='form-input' 
                    placeholder='Top Text' 
                    name='topText'
                    value={meme.topText}
                    onChange={handleCheck}
                    />
                <input 
                    type="text" 
                    className='form-input' 
                    placeholder='Bottom Text' 
                    name='bottomText'
                    value={meme.bottomText}
                    onChange={handleCheck}
                    />
                <button 
                    className='form-btn'
                    onClick={getMemeImage}
                >
                    Get a New Meme Image 🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className='meme-image' align='center' />
                <h2 className='meme-text top'>{meme.topText}</h2>
                <h2 className='meme-text bottom'>{meme.bottomText}</h2>
            </div>
        </main>
    )
}

export default Meme