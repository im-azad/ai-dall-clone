import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { preview } from '../assets';
import { FormField, Loader } from '../component';
const CreatePost = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({ name: '', prompt: '', photo: '' });
    const [generatingImg, setGeneratingImg] = useState(false);
    const [loading, setLoading] = useState(false);
    const handelSubmit = (e) => {};
    const handelChange = (e) => {};
    const handelSurpriseMe = (e) => {};
    return (
        <section>
            <div>
                <h1 className="font-extrabold text-[#222328] text-[32px]">
                    Create
                </h1>
                <p className="mt-2 text-[#666e75] text-[16px] max-w-[500px]">
                    Create imaginative and visually stunning images through
                    DALL-E AI and share them with the community
                </p>
            </div>
            <form className="mt-16 max-w-3xl" onSubmit={handelSubmit}>
                <FormField
                    labelName="Your name"
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={form.name}
                    handelChange={handelChange}
                />
                <FormField
                    labelName="Prompt"
                    type="text"
                    name="prompt"
                    placeholder="A plush  toy robot sitting against a yellow wall"
                    value={form.prompt}
                    handelChange={handelChange}
                    isSurpriseMe
                    handelSurpriseMe={handelSurpriseMe}
                />
            </form>
        </section>
    );
};

export default CreatePost;
