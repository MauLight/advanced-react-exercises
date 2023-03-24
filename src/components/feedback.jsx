import React, { useState } from 'react';

export const FeedBackForm = () => {

    const [value, setValue] = useState(10);
    const [comment, setComment] = useState("");

    const handleChange = (e) => {
        console.log(e.target.value);
        setValue(e.target.value);
    };

    const handleChange2 = (e) => {
        console.log(e.target.value);
        setComment(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value <= 5 && comment.length <= 50) {
            alert("Comment should be larger than 50 characters.");
        }
        else {
            alert("Thanks for your feedback!");
            setComment("");
            setValue(10);
        }
        console.log("The form was executed!")
    }

    return (
        <div className="Feed border p-3 mx-auto my-3">
            <form onSubmit={handleSubmit}>
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