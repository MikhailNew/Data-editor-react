import React from 'react';

const Input = (props) => {
    let cls = [
        "col-7"
    ]
    let formatData = 'Format for input data: [{"name":"Name", "year":"Year"}]'

    if (props.readOnly) {
        cls.push("sr-only")
    }

    return (
        <>
          <textarea 
            onChange={props.onChange} 
            aria-describedby="btns" 
            type="text" 
            className={cls.join(' ')}
            value={props.value}
            placeholder={formatData}
          >
        </textarea>
        </>
    )
}

export default Input