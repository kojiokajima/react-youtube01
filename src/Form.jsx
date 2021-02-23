import React, {useState} from 'react'

export const Form = ({onAddLang}) => {
    const [text, setText] = useState('')

    const submitForm = (event) => {
        event.preventDefault()
        onAddLang(text)
    }

    return (
        <div>
            <h4>Add new languages</h4>
            <form onSubmit={submitForm}>
                <div>
                    <input 
                        type='text'
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>
                <div>
                    <button>Add</button>
                </div>
            </form>
        </div>
    )
}