import React, { useState } from 'react';

export const FeedBackForm = () => {

    const [value, setValue] = useState("");
    const [comment, setComment] = useState("");

    const handleChange = (e) => {
        console.log(e.target.value);
        setValue(e.target.value);
    };

    const handleChange2 = (e) => {
        console.log(e.target.value);
        setComment(e.target.value);
    };

    return (
        <div className="Feed border p-3 mx-auto my-3">
            <form>
                <fieldset>
                    <h2>Feedback Form</h2>
                    <div className="field">
                        <label htmlFor="score">Score: {value}</label>
                        <input className="range" id="score" type="range" min="0" max="10" value={value} onChange={handleChange} />
                        <label htmlFor='area'>Comment: </label>
                        <textarea id='area' className='area' value={comment} onChange={handleChange2}></textarea>
                    </div>
                    <button className="btn border rounded-0 subBtn float-end" type="submit">Submit</button>
                </fieldset>
            </form>
        </div>
    )
}