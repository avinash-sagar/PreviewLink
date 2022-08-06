
import React, { useState } from 'react'
import { LinkPreview } from './LinkPreview'
import { Button, TextField, Typography } from '@mui/material'

export const InputUrl = () => {
    const [text, setText] = useState('')
    const [val, setVal] = useState()

    const style = {
        input: {
            width: '40%',
            marginRight:'20px'
        }
        ,button:{
            width:'200px',
            height:'55px'
        }
       
    }

    const handleClick = (e) => {
        e.preventDefault()
        setVal(text)
    }
    return (
        <div>
            <h1 style={style.heading} >Link Preview</h1>
            <form >
                <TextField style={style.input} required onChange={(e) => setText(e.target.value)} type="text" id="outlined-basic" value={text} label="URL" variant="outlined" />
                <Button onClick={handleClick} type='submit'  variant="contained" size='large' style={style.button} >Get</Button>

            </form>
            {
                val && <LinkPreview url={val} />
            }



        </div>
    )
}
