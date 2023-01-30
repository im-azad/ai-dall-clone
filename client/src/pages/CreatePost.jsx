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
    const generateImage = (e) => {};
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
            <form className="mt-16 max-w-3xl m-auto" onSubmit={handelSubmit}>
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
                <div className="relative bg-gray-50 border border-gray-300 text-gray-900  p-3 rounded-lg block w-full focus:border-[#4649ff] focus:ring-[#4649ff] focus:focus-visible:outline-none">
                    {form.photo ? (
                        <img
                            src={form.photo}
                            alt={form.prompt}
                            className="w-full h-full object-contain"
                        />
                    ) : (
                        <img
                            src={preview}
                            alt="preview"
                            className="w-1/2 object-contain opacity-40 m-auto"
                        />
                    )}
                    {generatingImg && (
                        <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
                            <Loader />
                        </div>
                    )}
                </div>
                <div className="mt-5 flex gap-5">
                    <button
                        type="button"
                        onClick={generateImage}
                        className="w-full font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md"
                    >
                        {generatingImg ? 'Generating...' : 'Generate'}
                    </button>
                </div>
            </form>
        </section>
    );
};

export default CreatePost;
