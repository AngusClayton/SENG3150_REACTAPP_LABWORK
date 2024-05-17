import React, { useState } from "react";
import "./App.css";



const MyForm: React.FC = () =>
    {
        const [name,setName] = useState("");
        const [catagories,setCategories] = useState(['CarPool','StudyGroup','Parenting','Gym']);
        const addCat = (event: React.FormEvent<HTMLFormElement>) =>
        {
            event.preventDefault();
            setCategories(catagories=>[...catagories,name]);
            alert(name);
            setName('');
        }

        const handleRemove = (unwantedCategory: string) =>
            {
                const newCatagories = catagories.filter((category)=> category !== unwantedCategory);
                setCategories(newCatagories);
            }

        return (
            <>
            <form onSubmit={addCat}>
                <div> Add Catagories:</div>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} name="catagory" />
                <input type='submit'/>
            </form>
            
            <h1 className="catagories"> Catagories</h1>
            <ul className="catagories">
            {catagories.map((catagory,index) => (
                <li key={index}>{catagory} <button onClick={() => handleRemove(catagory)}>Remove</button></li>
            ))}
            </ul>
</>     

    );
    };
export default MyForm;
