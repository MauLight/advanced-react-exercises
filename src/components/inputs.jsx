import React, { useRef, useState } from "react";

export const FormField = () => {
    const [value, setValue] = useState("");
    const fileInput = useRef(null);

    const handleChange = (e) => {
        setValue(e.target.value);
        console.log(value);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Form and ${value} submitted!`);
        setValue("");

        const files = fileInput.current.files;
        console.log(files);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label className="mx-3" htmlFor="text">Title</label>
                <input id="text" value={value} onChange={handleChange} type="text" />
                <label className="mx-3" htmlFor="file">File</label>
                <input id="file" ref={fileInput} type="file" />
                <button disabled={!value} className="btn subBtn border rounded-0" >Submit</button>
            </form>
        </div>
    )

};