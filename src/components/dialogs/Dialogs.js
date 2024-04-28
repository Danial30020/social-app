import React from 'react'
import DialogsItem from './dialogItem/DialogsItem'
import Message from './messages/Message'


let dialogNames = [{name:'Игорь', id:1},{name:'Маша', id:2},{name:'Петя', id:3},{name:'Ваня', id:4}]

let messageItems = [{message:'Привет',id:1},{message:'Го на Марс',id:2},{message:'Где мой чип?',id:3}]


function Dialogs(props) {
    return (
        <div>
            <div className="dialogs">
                <div className="dialog">
                    {/* <DialogsItem name='Игорь' id={1}/>
                    <DialogsItem name='Маша' id={2}/>
                    <DialogsItem name='Петя'id={3}/>
                    <DialogsItem name='Ваня'id={4}/> */}
{dialogNames.map((e)=><DialogsItem name = {e.name} id = {e.id}/> ) }

                </div>
            </div>
            <div className='messages'>
{/* <Message message={'Привет'} />
<Message message={'Го на Марс'} />
<Message message={'Где мой чип?'}
/> */}
{messageItems.map((e)=><Message message={e.message} id={e.id} />)}

<div className='code'>
<input type='text' name='message' placeholder='Enter your message' />
<br />
<button> Send </button>
</div>
</div>


        </div>
    )
}

export default Dialogs
