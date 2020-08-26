import React from 'react';

export default function DoneButton(props) {
    return <button className="done green-button" onClick={props.onClick} disabled={props.disabled}>Готово</button>
}
